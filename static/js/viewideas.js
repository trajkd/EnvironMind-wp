// var myCredentials = new AWS.CognitoIdentityCredentials({IdentityPoolId:'eu-central-1:dbfaca2d-0214-4100-9f00-e82d3b15c7ba'});
// var myConfig = new AWS.Config({credentials: myCredentials, region: 'eu-central-1'});

// AWS.config.update({credentials: myCredentials, region: 'eu-central-1'});

// var dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

// var queryParams = {
// 	ExpressionAttributeValues: {
// 		':id': {S: projectID}
// 	},
// 	KeyConditionExpression: 'ProjectID = :id',
// 	ProjectionExpression: 'ProjectID, Title, Description, Website, ImageBG, YoutubeBG, Logo, Tracks, Issue, Solution, ProjectStepImage1, ProjectStepTitle1, ProjectStepDescription1, ProjectStepImage2, ProjectStepTitle2, ProjectStepDescription2, ProjectStepImage3, ProjectStepTitle3, ProjectStepDescription3, ProjectStepImage4, ProjectStepTitle4, ProjectStepDescription4, ProjectStepImage5, ProjectStepTitle5, ProjectStepDescription5, ProjectStepImage6, ProjectStepTitle6, ProjectStepDescription6, ProjectStepImage7, ProjectStepTitle7, ProjectStepDescription7, ProjectStepImage8, ProjectStepTitle8, ProjectStepDescription8, ProjectStepImage9, ProjectStepTitle9, ProjectStepDescription9, PDF, Slides, Teammates, Hiring',
// 	TableName: 'Projects'
// };

// dynamodb.query(queryParams, function(err, data) {
// 	if (err) {
// 		console.log("Error", err);
// 	} else {
db.ref('/projects/' + projectID).once('value').then(function(snapshot) {
	$(".project-intro__title").html(snapshot.val().Title);
	$(".project-intro__pitch").html(snapshot.val().Description);
	if (snapshot.val().Website !== "") {
		$(".medium-3").html(`<a target="_blank" rel="noopener" class="button project-intro__link" href="https://`+(snapshot.val().Website).replace("https://", "").replace("http://","")+`"> Website </a>`);
	}
	if (snapshot.val().YoutubeBG === "") {
		if (snapshot.val().ImageBG === "") {
			$(".project-banner").attr("style", "background-image: url('/wp-content/themes/MindEmpathy-wp/static/img/ikea-man.svg');");
		} else {
			$(".project-banner").attr("style", "background-image: url('"+snapshot.val().ImageBG+"');");
		}
	} else {
		$(".project-banner").attr("style", "background-image: url('https://img.youtube.com/vi/"+snapshot.val().YoutubeBG+"/maxresdefault.jpg'); background-size: cover; background-position: center center; position: relative; overflow: hidden;");
		$(".project-banner").append(`<div style="position: absolute; left: 0px; top: 0px;">
										<iframe id="player0" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="`+$(".project-banner").width()+`" height="`+$(".project-banner").height()+`" style="pointer-events: none;"></iframe>
									</div>`);
		$("#player0").attr("src", "https://www.youtube.com/embed/"+(snapshot.val().YoutubeBG).substring((snapshot.val().YoutubeBG).lastIndexOf('=') + 1)+"?autoplay=1&loop=1&mute=1&controls=0&iv_load_policy=3&cc_load_policy=0modestbranding=1playsinline=1&rel=0&showinfo=0&playlist="+(snapshot.val().YoutubeBG).substring((snapshot.val().YoutubeBG).lastIndexOf('=') + 1)+"&enablejsapi=1&widgetid=5");
	}
	if (snapshot.val().Logo === "") {
		$(".project-intro__logo img").attr("src", "/wp-content/themes/MindEmpathy-wp/static/img/idealogo.svg");
	} else {
		$(".project-intro__logo img").attr("src", snapshot.val().Logo);
	}
	var tracks = (snapshot.val().Tracks).split(',');
	for (var i = 0; i < tracks.length; i++) {
		$(".project-category__options").append(`<span class="project-category__options__item">`+tracks[i]+`</span>`);
	}
	$(".post--issue .project-post__content").html(snapshot.val().Issue);
	$(".post--solution .project-post__content").html(snapshot.val().Solution);
	$(".project-hiw__list-item1 .project-hiw__image").attr("src", snapshot.val().ProjectStepImage1);
	$(".project-hiw__list-item1 .project-hiw__title").html(snapshot.val().ProjectStepTitle1);
	$(".project-hiw__list-item1 .project-hiw__content").html(snapshot.val().ProjectStepDescription1);
	$(".project-hiw__list-item2 .project-hiw__image").attr("src", snapshot.val().ProjectStepImage2);
	$(".project-hiw__list-item2 .project-hiw__title").html(snapshot.val().ProjectStepTitle2);
	$(".project-hiw__list-item2 .project-hiw__content").html(snapshot.val().ProjectStepDescription2);
	$(".project-hiw__list-item3 .project-hiw__image").attr("src", snapshot.val().ProjectStepImage3);
	$(".project-hiw__list-item3 .project-hiw__title").html(snapshot.val().ProjectStepTitle3);
	$(".project-hiw__list-item3 .project-hiw__content").html(snapshot.val().ProjectStepDescription3);
	if (typeof(snapshot.val().ProjectStepTitle4) !== "undefined" && snapshot.val().ProjectStepTitle4 !== "") {
		$(".project-hiw__list").append(`<li class="project-hiw__list-item project-hiw__list-item4">
                                            <div class="project-hiw">
                                                <div class="project-hiw__wrap-image">
                                                    <img class="project-hiw__image" src=""> 
                                                    <div class="project-hiw__number">4</div>
                                                </div>
                                                <div class="project-hiw__title"></div>
                                                <p class="project-hiw__content"></p>
                                            </div>
                                        </li>`);
		$(".project-hiw__list-item4 .project-hiw__image").attr("src", snapshot.val().ProjectStepImage4);
		$(".project-hiw__list-item4 .project-hiw__title").html(snapshot.val().ProjectStepTitle4);
		$(".project-hiw__list-item4 .project-hiw__content").html(snapshot.val().ProjectStepDescription4);
		$(".project-hiw__list").removeClass("list--3");
		$(".project-hiw__list").addClass("list--4");
	}
	if (typeof(snapshot.val().ProjectStepTitle5) !== "undefined" && snapshot.val().ProjectStepTitle5 !== "") {
		$(".project-hiw__list").append(`<li class="project-hiw__list-item project-hiw__list-item5">
                                            <div class="project-hiw">
                                                <div class="project-hiw__wrap-image">
                                                    <img class="project-hiw__image" src=""> 
                                                    <div class="project-hiw__number">5</div>
                                                </div>
                                                <div class="project-hiw__title"></div>
                                                <p class="project-hiw__content"></p>
                                            </div>
                                        </li>`);
		$(".project-hiw__list-item5 .project-hiw__image").attr("src", snapshot.val().ProjectStepImage5);
		$(".project-hiw__list-item5 .project-hiw__title").html(snapshot.val().ProjectStepTitle5);
		$(".project-hiw__list-item5 .project-hiw__content").html(snapshot.val().ProjectStepDescription5);
		$(".project-hiw__list").removeClass("list--4");
		$(".project-hiw__list").addClass("list--5");
	}
	if (typeof(snapshot.val().ProjectStepTitle6) !== "undefined" && snapshot.val().ProjectStepTitle6 !== "") {
		$(".project-hiw__list").append(`<li class="project-hiw__list-item project-hiw__list-item6">
                                            <div class="project-hiw">
                                                <div class="project-hiw__wrap-image">
                                                    <img class="project-hiw__image" src=""> 
                                                    <div class="project-hiw__number">6</div>
                                                </div>
                                                <div class="project-hiw__title"></div>
                                                <p class="project-hiw__content"></p>
                                            </div>
                                        </li>`);
		$(".project-hiw__list-item6 .project-hiw__image").attr("src", snapshot.val().ProjectStepImage6);
		$(".project-hiw__list-item6 .project-hiw__title").html(snapshot.val().ProjectStepTitle6);
		$(".project-hiw__list-item6 .project-hiw__content").html(snapshot.val().ProjectStepDescription6);
		$(".project-hiw__list").removeClass("list--5");
		$(".project-hiw__list").addClass("list--6");
	}
	if (typeof(snapshot.val().ProjectStepTitle7) !== "undefined" && snapshot.val().ProjectStepTitle7 !== "") {
		$(".project-hiw__list").append(`<li class="project-hiw__list-item project-hiw__list-item7">
                                            <div class="project-hiw">
                                                <div class="project-hiw__wrap-image">
                                                    <img class="project-hiw__image" src=""> 
                                                    <div class="project-hiw__number">7</div>
                                                </div>
                                                <div class="project-hiw__title"></div>
                                                <p class="project-hiw__content"></p>
                                            </div>
                                        </li>`);
		$(".project-hiw__list-item7 .project-hiw__image").attr("src", snapshot.val().ProjectStepImage7);
		$(".project-hiw__list-item7 .project-hiw__title").html(snapshot.val().ProjectStepTitle7);
		$(".project-hiw__list-item7 .project-hiw__content").html(snapshot.val().ProjectStepDescription7);
		$(".project-hiw__list").removeClass("list--6");
		$(".project-hiw__list").addClass("list--7");
	}
	if (typeof(snapshot.val().ProjectStepTitle8) !== "undefined" && snapshot.val().ProjectStepTitle8 !== "") {
		$(".project-hiw__list").append(`<li class="project-hiw__list-item project-hiw__list-item8">
                                            <div class="project-hiw">
                                                <div class="project-hiw__wrap-image">
                                                    <img class="project-hiw__image" src=""> 
                                                    <div class="project-hiw__number">8</div>
                                                </div>
                                                <div class="project-hiw__title"></div>
                                                <p class="project-hiw__content"></p>
                                            </div>
                                        </li>`);
		$(".project-hiw__list-item8 .project-hiw__image").attr("src", snapshot.val().ProjectStepImage8);
		$(".project-hiw__list-item8 .project-hiw__title").html(snapshot.val().ProjectStepTitle8);
		$(".project-hiw__list-item8 .project-hiw__content").html(snapshot.val().ProjectStepDescription8);
		$(".project-hiw__list").removeClass("list--7");
		$(".project-hiw__list").addClass("list--8");
	}
	if (typeof(snapshot.val().ProjectStepTitle9) !== "undefined" && snapshot.val().ProjectStepTitle9 !== "") {
		$(".project-hiw__list").append(`<li class="project-hiw__list-item project-hiw__list-item9">
                                            <div class="project-hiw">
                                                <div class="project-hiw__wrap-image">
                                                    <img class="project-hiw__image" src=""> 
                                                    <div class="project-hiw__number">9</div>
                                                </div>
                                                <div class="project-hiw__title"></div>
                                                <p class="project-hiw__content"></p>
                                            </div>
                                        </li>`);
		$(".project-hiw__list-item9 .project-hiw__image").attr("src", snapshot.val().ProjectStepImage9);
		$(".project-hiw__list-item9 .project-hiw__title").html(snapshot.val().ProjectStepTitle9);
		$(".project-hiw__list-item9 .project-hiw__content").html(snapshot.val().ProjectStepDescription9);
		$(".project-hiw__list").removeClass("list--8");
		$(".project-hiw__list").addClass("list--9");
	}
	if (snapshot.val().PDF === "") {
		if (snapshot.val().Slides === "") {
			$(".project-presentation__slideshare").html("Presentation not available.");
		} else {
			$(".project-presentation__slideshare").html(`<iframe src="" allowfullscreen="1"></iframe>`);
			$(".project-presentation__slideshare iframe").attr("src", (snapshot.val().Slides).substring(0,(snapshot.val().Slides).lastIndexOf('/'))+"/embed?start=false");
		}
	} else {
		$(".project-presentation__slideshare").html(`<object data="`+snapshot.val().PDF+`" type="application/pdf" width="100%" height="800px"> 
														<p>It appears you don't have a PDF plugin for this browser.
														<a href="`+snapshot.val().PDF+`">Click here to download the PDF file.</a></p>  
													</object>`);
	}

	var teammates_IDs = (snapshot.val().Teammates).split(',');
	for (var k = 0; k < teammates_IDs.length; k++) {
		$.ajax({
			type : "GET",
			dataType : "json",
			url : "/wp-json/wp/v2/users/"+teammates_IDs[k]+"?context=edit",
			beforeSend: function ( xhr ) {
				xhr.setRequestHeader( 'X-WP-Nonce', nonce );
			},
			error: function(error) {
				console.log("Error while retreiving user: ");
				console.log(error);
			},
			success: function(response) {
				if (response.roles.includes("member")) {
					var teammate_role = "Member";
				} else if (response.roles.includes("partner")) {
					var teammate_role = "Partner";
				} else if (response.roles.includes("investor")) {
					var teammate_role = "Investor";
				}
				var teammate_id = response.id;
				var teammate_name = response.name;
				$(".project-team__list").html("");
				if (response.meta.profile_image === '/wp-content/themes/MindMates-wp/static/img/mindmate-avatar.jpg' || (typeof response.meta.profile_image !== 'undefined' && response.meta.profile_image.length === 0) ) {
					$(".project-team__list").append(`<li class="project-team__list-item">
												        <div class="project-member">
												            <idt-user-avatar class="author__avatar" user="participant" size="90">
												                <div class="idt-user-avatar avatar--participant" style="width: 90px; height: 90px; background-image: url('/wp-content/themes/MindMates-wp/static/img/mindmate-avatar.jpg')">
												                </div>
												            </idt-user-avatar>
												            <idt-user-information class="author__information" size="23"is-stacked="true" user="participant">
												                <div class="idt-user-information">
												                	<span class="idt-user-information__id" id="`+teammate_id+`"></span>
												                    <span class="idt-user-information__username username--is-stacked" style="font-size: 23px;">`+teammate_name+`</span> 
												                    <span class="idt-user-information__classification">
												                        <span class="idt-user-information__classification__tag" style="font-size: 17.25px;">`+teammate_role+`</span>
												                    </span>
												                </div>
												            </idt-user-information>
												            <div class="project-member__name">  </div>
												            <span class="ng-hide"></span> <!----> <!----> 
												        </div>
												    </li>`);
				} else {
					$.ajax({
			            type : "GET",
			            dataType : "json",
			            url : "/wp-json/wp/v2/media/"+response.meta.profile_image,
			            error: function(error) {
			              console.log("Error while retreiving profile image: " + error);
			            },
			            success: function(response) {
			            	$(".project-team__list").append(`<li class="project-team__list-item">
														        <div class="project-member">
														            <idt-user-avatar class="author__avatar" user="participant" size="90">
														                <div class="idt-user-avatar avatar--participant" style="width: 90px; height: 90px; background-image: url(`+response.source_url+`)">
														                </div>
														            </idt-user-avatar>
														            <idt-user-information class="author__information" size="23"is-stacked="true" user="participant">
														                <div class="idt-user-information">
														                	<span class="idt-user-information__id" id="`+teammate_id+`"></span>
														                    <span class="idt-user-information__username username--is-stacked" style="font-size: 23px;">`+teammate_name+`</span> 
														                    <span class="idt-user-information__classification">
														                        <span class="idt-user-information__classification__tag" style="font-size: 17.25px;">`+teammate_role+`</span>
														                    </span>
														                </div>
														            </idt-user-information>
														            <div class="project-member__name">  </div>
														            <span class="ng-hide"></span> <!----> <!----> 
														        </div>
														    </li>`);
			            }
			        });
				}
			}
		});
	}
	
	var hiring = (snapshot.val().Hiring).split(',');
	for (var j = 0; j < hiring.length; j++) {
		$(".project-hires").append(`<li class="project-hires__item enabled">
                                        <span class="project-hires__item__tag">`+hiring[j]+`</span> 
                                        <div class="project-hires__item__info">We need you!</div>
                                        <div class="project-hires__item__apply">Apply now</div>
                                    </li>`);
	}
});

$("button.full").click( function() {
	window.location.href = "/editidea/"+projectID;
});