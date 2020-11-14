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
			if (favorite_list.length === 0) {
				var no_items = `<div class="mdc-layout-grid__cell">
						      <div class="mdc-card">
						    	<div class="display">
						    	  <a href="<?php the_permalink() ?>">
									<div class="mdc-card__primary-action">
									  <div class="mdc-card__media mdc-card__media--square my-card__media" style="background-image: url('/wp-content/themes/MindMates-wp/static/img/ikea.svg');"></div>
									</div>
								  </a>
								  <div class="summary">
									<b>My watchlist</b>
									<br>
									Content will appear here as you heart articles in the wiki.
								  </div>
								</div>
							    <div class="mdc-card__actions">
							      <div class="mdc-card__action-buttons">
							        <a href="/wiki">
							      	  <button class="mdc-button mdc-card__action mdc-card__action--button gotoarticle">
								        <div class="mdc-button__ripple"></div>
								        <span class="mdc-button__label">Go to wiki</span>
								      </button>
							        </a>
							        <button class="mdc-button mdc-card__action mdc-card__action--button expand">
							          <div class="mdc-button__ripple"></div>
							          <span class="mdc-button__label">Expand</span> 
							        </button>
							      </div>
							    </div>
							  </div>
						    </div>`;
				$(".mdc-layout-grid__inner").append(no_items);
			} else {
				for (var i = 0; i < favorite_list.length; i++) {
					$.ajax({
						type : "GET",
						dataType : "json",
						url : "/wp-json/wp/v2/wiki/"+favorite_list[i],
						error: function(error) {
							console.log("Error while retreiving post: " + error);
						},
						success: function(response) {
							console.log("Post found");
							var item = `<div class="mdc-layout-grid__cell">
									      <div class="mdc-card">
									    	<div class="display">
									    	  <a href="<?php the_permalink() ?>">
												<div class="mdc-card__primary-action">
												  <div class="mdc-card__media mdc-card__media--square my-card__media" style="background-image: url('/wp-content/themes/MindMates-wp/static/img/ikea-vari.svg');"></div>
												</div>
											  </a>
											  <div class="summary">
												<b>`+response.title.rendered+`</b>
												<br>
												`+response.content.rendered+`
											  </div>
											</div>
										    <div class="mdc-card__actions">
										      <div class="mdc-card__action-buttons">
										        <a href="/wiki/`+response.slug+`">
										      	  <button class="mdc-button mdc-card__action mdc-card__action--button gotoarticle">
											        <div class="mdc-button__ripple"></div>
											        <span class="mdc-button__label">Go to article</span>
											      </button>
										        </a>
										        <button class="mdc-button mdc-card__action mdc-card__action--button expand">
										          <div class="mdc-button__ripple"></div>
										          <span class="mdc-button__label">Expand</span> 
										        </button>
										      </div>
										      <div class="mdc-card__action-icons">
										        <button class="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon heart" title="Add to favorites"><span id="`+response.id+`"></span><i class="fas fa-heart stroke-transparent"></i></button>
										        <button class="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon" title="Share"><i class="fas fa-share-alt"></i></button>
										      </div>
										    </div>
										  </div>
									    </div>`;
							$(".mdc-layout-grid__inner").append(item);
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

							$('.mdc-card > .mdc-card__actions > .mdc-card__action-buttons > .expand').click( function() {
							  $(this).parent().parent().parent().find('.display').find('.summary').toggleClass('expanded');
							  if ($(this).find('.mdc-button__label').text() === 'Collapse') {
							    $(this).find('.mdc-button__label').text('Expand');
							  } else {
							    $(this).find('.mdc-button__label').text('Collapse');
							  }
							});

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
						}
					});
				}
			}
		} else {
			var no_items = `<div class="mdc-layout-grid__cell">
						      <div class="mdc-card">
						    	<div class="display">
						    	  <a href="<?php the_permalink() ?>">
									<div class="mdc-card__primary-action">
									  <div class="mdc-card__media mdc-card__media--square my-card__media" style="background-image: url('/wp-content/themes/MindMates-wp/static/img/ikea.svg');"></div>
									</div>
								  </a>
								  <div class="summary">
									<b>My watchlist</b>
									<br>
									Content will appear here as you heart articles in the wiki.
								  </div>
								</div>
							    <div class="mdc-card__actions">
							      <div class="mdc-card__action-buttons">
							        <a href="/wiki">
							      	  <button class="mdc-button mdc-card__action mdc-card__action--button gotoarticle">
								        <div class="mdc-button__ripple"></div>
								        <span class="mdc-button__label">Go to wiki</span>
								      </button>
							        </a>
							        <button class="mdc-button mdc-card__action mdc-card__action--button expand">
							          <div class="mdc-button__ripple"></div>
							          <span class="mdc-button__label">Expand</span> 
							        </button>
							      </div>
							    </div>
							  </div>
						    </div>`;
			$(".mdc-layout-grid__inner").append(no_items);
		}
	}
});