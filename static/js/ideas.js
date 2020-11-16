function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

$("button.add-idea").click( function() {
	if (projectIDemail === "unauthorized") {
		window.location.href = "/member/login";
	} else {
		$.ajax({
			type : "GET",
			url : "/wp-json/wp/v2/editidea",
			error: function(error) {
				console.log("Error while listing existing ideas: ");
				console.log(error);
			},
			success: function(response) {
				if (response.length > 0) {
					existing_uuids = [];
					for (var i = 0; i < response.length; i++) {
						var url = response[i].link.replace(/\/$/, '');
						existing_uuids += url.substr(url.lastIndexOf('/') + 1);
					}
					var uuid = randomString(24, '0123456789abcdefghijklmnopqrstuvwxyz');
					while (existing_uuids.includes(uuid)) {
						var uuid = randomString(24, '0123456789abcdefghijklmnopqrstuvwxyz');
					}
					$.ajax({
						type : "POST",
						dataType : "json",
						url : "/wp-json/wp/v2/editidea",
						data : {_wpnonce: nonce, title: uuid, status: "publish", content: projectIDemail, template: "editidea.php"},
						beforeSend: function ( xhr ) {
					        xhr.setRequestHeader( 'X-WP-Nonce', nonce );
					    },
						error: function(error) {
							console.log("Error while creating idea: ");
							console.log(error);
						},
						success: function(response) {
							console.log("Idea created.");
							window.location.href = "/"+uuid;
						}
					});
				} else {
					var uuid = randomString(24, '0123456789abcdefghijklmnopqrstuvwxyz');
					$.ajax({
						type : "POST",
						dataType : "json",
						url : "/wp-json/wp/v2/editidea",
						data : {_wpnonce: nonce, title: uuid, status: "publish", content: projectIDemail, template: "editidea.php"},
						beforeSend: function ( xhr ) {
					        xhr.setRequestHeader( 'X-WP-Nonce', nonce );
					    },
						error: function(error) {
							console.log("Error while creating idea: ");
							console.log(error);
						},
						success: function(response) {
							console.log("Idea created.");
							window.location.href = "/"+uuid;
						}
					});
				}
			}
		});
	}
});

db.ref("projects").once("value", function(snapshot) {
	if (snapshot.numChildren() === 1) {
		$(".plural").css("display", "none");
	}
	$(".number-of-projects").html(snapshot.numChildren());
	snapshot.forEach(function(childSnapshot) {
		var childData = childSnapshot.val();

		var tracks = (childData.Tracks).split(',');
		var hiring = (childData.Hiring).split(',');
		if (childData.Logo === "") {
			var logo = "/wp-content/themes/EnvironMind-wp/static/img/idealogo.svg";
		} else {
			var logo = childData.Logo;
		}
		if (childData.YoutubeBG === "") {
			if (childData.ImageBG === "") {
				var imageBG = "/wp-content/themes/EnvironMind-wp/static/img/ikea-man.svg";
			} else {
				var imageBG = childData.ImageBG;
			}
		} else {
			var imageBG = "https://img.youtube.com/vi/"+(childData.YoutubeBG).split('v=')[1]+"/0.jpg";
		}
		var projectItem = `<div class="projects__list-item">
						        <a class="projects-card" href="/projects/`+(childData.Title).toLowerCase().replace(/ /g, '-')+`">
						            <div class="column small-12 medium-4 projects-card__content">
						                <div class="projects-card__content__logo" style="background-image: url('`+logo+`');"></div>
						                <h3 class="projects-card__content__title">`+childData.Title+`</h3>
						                <p class="projects-card__content__text">`+childData.Description+`</p>
						                <div class="projects-card__content__tag-list">`;
		for (var j = 0; j < tracks.length; j++) {
			projectItem += `<span class="projects-card__content__tag-list__tag">`+tracks[j]+`</span>`;
		}
		projectItem += `</div>
						<div class="projects-actions">
		                	<div class="projects-card__content__link"> View project<i class="fas fa-arrow-right"></i> </div>
		                	<div class="votes-display">
		                		<i class="fas fa-caret-up"></i>
		                		<div class="total-votes">0</div>
		                		<i class="fas fa-caret-down"></i>
		                	</div>
		                </div>
		            </div>
		            <div class="column small-12 medium-8 projects-card__wrap">
		                <div class="projects-card__wrap-image" style="background-image: url('`+imageBG+`');"> </div>
		                <div class="projects-card__hire-wrapper">`;
		for (var k = 0; k < hiring.length; k++) {
			projectItem += `<div class="projects-card__hire">
				                    <div class="projects-card__hire__my-profile many"> <span class="projects-card__hire__text1">We're seeking</span> <span class="projects-card__hire__text3">`+hiring[k]+`s</span> </div>
				                    <div class="projects-card__hire__icon"> <i class="fas fa-bullhorn"></i> </div>
				                </div>`;
		}
		projectItem += `</div>
					</div>
				</a>
			</div>`;
		$(".projects__list__container").append(projectItem);
	});
});

// var myCredentials = new AWS.CognitoIdentityCredentials({IdentityPoolId:'eu-central-1:dbfaca2d-0214-4100-9f00-e82d3b15c7ba'});
// var myConfig = new AWS.Config({credentials: myCredentials, region: 'eu-central-1'});

// AWS.config.update({credentials: myCredentials, region: 'eu-central-1'});

// var dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

// var scanParams = {
// 	ProjectionExpression: 'Title, Description, Logo, ImageBG, YoutubeBG, Tracks, Hiring',
// 	TableName: 'Projects'
// };

// dynamodb.scan(scanParams, function(err, data) {
// 	if (err) {
// 		console.log("Error", err);
// 	} else {
// 		if (data.Items.length === 1) {
// 			$(".plural").css("display", "none");
// 		}
// 		$(".number-of-projects").html(data.Items.length);
// 		for (var i = 0; i < data.Items.length; i++) {
// 			var tracks = (childData.Tracks.S).split(',');
// 			var hiring = (childData.Hiring.S).split(',');
// 			if (childData.Logo.S === "") {
// 				var logo = "/wp-content/themes/EnvironMind-wp/static/img/idealogo.svg";
// 			} else {
// 				var logo = childData.Logo.S;
// 			}
// 			if (childData.YoutubeBG.S === "") {
// 				if (childData.ImageBG.S === "") {
// 					var imageBG = "/wp-content/themes/EnvironMind-wp/static/img/ikea-man.svg";
// 				} else {
// 					var imageBG = childData.ImageBG.S;
// 				}
// 			} else {
// 				var imageBG = "https://img.youtube.com/vi/"+(childData.YoutubeBG.S).split('v=')[1]+"/0.jpg";
// 			}
// 			var projectItem = `<div class="projects__list-item">
// 							        <a class="projects-card" href="/projects/`+(childData.Title.S).toLowerCase().replace(/ /g, '-')+`">
// 							            <div class="column small-12 medium-4 projects-card__content">
// 							                <div class="projects-card__content__logo" style="background-image: url('`+logo+`');"></div>
// 							                <h3 class="projects-card__content__title">`+childData.Title.S+`</h3>
// 							                <p class="projects-card__content__text">`+childData.Description.S+`</p>
// 							                <div class="projects-card__content__tag-list">`;
// 			for (var j = 0; j < tracks.length; j++) {
// 				projectItem += `<span class="projects-card__content__tag-list__tag">`+tracks[j]+`</span>`;
// 			}
// 			projectItem += `</div>
// 							<div class="projects-actions">
// 			                	<div class="projects-card__content__link"> View project<i class="fas fa-arrow-right"></i> </div>
// 			                	<div class="votes-display">
// 			                		<i class="fas fa-caret-up"></i>
// 			                		<div class="total-votes">0</div>
// 			                		<i class="fas fa-caret-down"></i>
// 			                	</div>
// 			                </div>
// 			            </div>
// 			            <div class="column small-12 medium-8 projects-card__wrap">
// 			                <div class="projects-card__wrap-image" style="background-image: url('`+imageBG+`');"> </div>
// 			                <div class="projects-card__hire-wrapper">`;
// 			for (var k = 0; k < hiring.length; k++) {
// 				projectItem += `<div class="projects-card__hire">
// 					                    <div class="projects-card__hire__my-profile many"> <span class="projects-card__hire__text1">We're seeking</span> <span class="projects-card__hire__text3">`+hiring[k]+`s</span> </div>
// 					                    <div class="projects-card__hire__icon"> <i class="fas fa-bullhorn"></i> </div>
// 					                </div>`;
// 			}
// 			projectItem += `</div>
// 						</div>
// 					</a>
// 				</div>`;
// 			$(".projects__list__container").append(projectItem);
// 		}
// 	}
// });

$('.input-dropdown__button').click( function() {
	$('.dropdown-pane').toggleClass('is-open');
});

$(".dropdown-pane__checkbox").click( function() {
	if ($(this).parent().find("input").attr("checked")) {
        $(this).parent().find("input").removeAttr("checked");
    } else {
        $(this).parent().find("input").attr("checked", "checked");
    }
	$(this).parent().find("input").toggleClass("checked");
});