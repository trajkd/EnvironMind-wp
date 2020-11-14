var myCredentials = new AWS.CognitoIdentityCredentials({IdentityPoolId:'eu-central-1:dbfaca2d-0214-4100-9f00-e82d3b15c7ba'});
var myConfig = new AWS.Config({credentials: myCredentials, region: 'eu-central-1'});

AWS.config.update({credentials: myCredentials, region: 'eu-central-1'});

var dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

var queryParams = {
	ExpressionAttributeValues: {
		':id': {S: memberID}
	},
	KeyConditionExpression: 'MemberID = :id',
	ProjectionExpression: 'MemberID, FavoriteList',
	TableName: 'Favorites'
};

dynamodb.query(queryParams, function(err, data) {
	if (err) {
		console.log("Error", err);
	} else {
		if (data.Items.length > 0) {
			var favorite_list = [];
			favorite_list.push(...data.Items[0].FavoriteList.SS);
			for (var i = 0; i < favorite_list.length; i++) {
				$('span[id='+favorite_list[i]+']').parent().addClass("hearted");
			}
		}
	}
});

function addFavorite(post_id, heartElement) {

	if (memberID === "") {
		window.location.href = "/member/login"
	} else {
		var queryParams = {
			ExpressionAttributeValues: {
				':id': {S: memberID}
			},
			KeyConditionExpression: 'MemberID = :id',
			ProjectionExpression: 'MemberID, FavoriteList',
			TableName: 'Favorites'
		};

		dynamodb.query(queryParams, function(err, data) {
			if (err) {
				console.log("Error", err);
			} else {
				if (data.Items.length === 0) {
					var itemParams = {
						TableName: 'Favorites',
						Item: {
							'MemberID': {S: memberID},
							'FavoriteList': {SS: [post_id]}
						}
					};

					dynamodb.putItem(itemParams, function(err, data) {
						if (err) {
							console.log("Error", err);
						} else {
							console.log("Success", data);
							$(heartElement).toggleClass('hearted');
						}
					});
			    } else {
			    	var favorite_list = [];
			    	favorite_list.push(...data.Items[0].FavoriteList.SS);
			    	favorite_list.push(post_id);
			    	console.log(favorite_list);
		    		var updateParams = {
					    TableName: "Favorites",
					    Key:{
					        "MemberID": {S: data.Items[0].MemberID.S}
					    },
					    UpdateExpression: `set FavoriteList = :f`,
					    ExpressionAttributeValues:{
					    	":f": {SS: favorite_list}
					    },
					    ReturnValues:"UPDATED_NEW"
					};
					dynamodb.updateItem(updateParams, function(err, data) {
					    if (err) {
					        console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
					    } else {
					        console.log("UpdateItem succeeded");
					        $(heartElement).toggleClass('hearted');
					    }
					});
			    }
			}
		});
	}
}

function removeFavorite(post_id) {

	if (memberID === "") {
		window.location.href = "/member/login"
	} else {
		var queryParams = {
			ExpressionAttributeValues: {
				':id': {S: memberID}
			},
			KeyConditionExpression: 'MemberID = :id',
			ProjectionExpression: 'MemberID, FavoriteList',
			TableName: 'Favorites'
		};

		dynamodb.query(queryParams, function(err, data) {
			if (err) {
				console.log("Error", err);
			} else {
		    	var favorite_list = data.Items[0].FavoriteList.SS;
		    	var index = favorite_list.indexOf(post_id);
				favorite_list.splice(index, 1);
	    		var updateParams = {
				    TableName: "Favorites",
				    Key:{
				        "MemberID": {S: data.Items[0].MemberID.S}
				    },
				    UpdateExpression: `set FavoriteList = :f`,
				    ExpressionAttributeValues:{
				    	":f": {SS: favorite_list}
				    },
				    ReturnValues:"UPDATED_NEW"
				};
				dynamodb.updateItem(updateParams, function(err, data) {
				    if (err) {
				        console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
				    } else {
				        console.log("UpdateItem succeeded");
				        $(heartElement).toggleClass('hearted');
				    }
				});
			}
		});
	}
}

$(".heart").click( function() {
	heartElement = $(this);
	dynamodb.listTables({Limit: 10}, function(err, data) {
		if (err) {
			console.log("Error", err);
		} else {
			var projectsTableFound = false;
			for (var i = 0; i < data.TableNames.length; i++) {
				tableName = data.TableNames[i]
				if (tableName === 'Favorites') {
					projectsTableFound = true;
				}
			}
			if (projectsTableFound === false) {
				var tableParams = {
					AttributeDefinitions: [
					{
						AttributeName: 'MemberID',
						AttributeType: 'S'
					}
					],
					KeySchema: [
					{
						AttributeName: 'MemberID',
						KeyType: 'HASH'
					}
					],
					ProvisionedThroughput: {
						ReadCapacityUnits: 1,
						WriteCapacityUnits: 1
					},
					TableName: 'Favorites',
					StreamSpecification: {
						StreamEnabled: false
					}
				};

				dynamodb.createTable(tableParams, function(err, data) {
					if (err) {
						console.log("Error", err);
					} else {
						console.log("Table Created", data);

						dynamodb.waitFor('tableExists', {TableName: 'Favorites'}, (err, data) => {
					        if (err) console.log(err, err.stack);
					        else {
					        	if (heartElement.hasClass("hearted")) {
					        		removeFavorite(heartElement.children().first().attr("id"), heartElement);
					        	} else {
					        		addFavorite(heartElement.children().first().attr("id"), heartElement);
					        	}
					        }
					    });
					}
				});
			} else {
				if (heartElement.hasClass("hearted")) {
	        		removeFavorite(heartElement.children().first().attr("id"), heartElement);
	        	} else {
	        		addFavorite(heartElement.children().first().attr("id"), heartElement);
	        	}
			}
		}
	});
});