var imageBGfiles, logofiles, pdffiles;
var stepfilesDict = {};
stepfilesDict["step1"] = "";
stepfilesDict["step2"] = "";
stepfilesDict["step3"] = "";
stepfilesDict["step4"] = "";
stepfilesDict["step5"] = "";
stepfilesDict["step6"] = "";
stepfilesDict["step7"] = "";
stepfilesDict["step8"] = "";
stepfilesDict["step9"] = "";

$(document).ready(function() {
	$('.project-team__actions__input input').keyup(function() {
		var txt = $(this).val();
		if (txt != '') {
			$.ajax({
				url: "/wp-content/themes/MindMates-wp/fetch.php",
				method: "POST",
				data: {search: txt},
				dataType: "text",
				success: function(data) {
					$('#result').html(data);

					$(".project-team__action-add").click( function() {
						var teammate_id = $(this).parent().parent().children().first().attr("id");
						$.ajax({
							type : "GET",
							dataType : "json",
							url : "/wp-json/wp/v2/users/"+teammate_id+"?context=edit",
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
					});
				}
			});
		} else {
			$('#result').html('');
		}
	});
});

$(".image-bg").click( function() {
	$(".video-bg").addClass("hollow");
	$(this).removeClass("hollow");
	$(this).parent().next().html(`
		<div class="project-tabs-content__note"> <span class="note-text">Upload an image</span> </div>
        <div class="project-tabs-content__input-container">
            <idt-fs-upload-file type="image" class="upload" on-uploaded="onUploadedIllustration" on-error="onUploadedIllustrationError" label="Add illustration">
                <label type="button" class="button upload-file__btn" accept="image/*" for="inputFile149617" ng-disabled="disable">
                    <input type="file" accept="image/*" class="input-file-hidden input-file-hidden-bg-image ng-pristine ng-untouched ng-valid ng-not-empty" id="inputFile149617" name="uploader"><span class="upload-file__progress">Add illustration</span>
                </label>
            </idt-fs-upload-file>
            <button type="button" class="project-tabs-content__btn-delete ng-hide">
                <div class="idt-icon">
                    <i class="fas fa-trash"></i>
                </div>
            </button>
        </div>
		`);

	$(".input-file-hidden-bg-image").change(function(e) {

		var uploadedStep = $(this)

		imageBGfiles = e.originalEvent.srcElement.files;

        var file = imageBGfiles[0];

        var reader = new FileReader();
        reader.onloadend = function() {
        	$("#player0").remove();
			$(".project-banner").attr("style", "background-image:url("+reader.result+")");
        }
        reader.readAsDataURL(file);
	});
});

$(".video-bg").click( function() {
	$(".image-bg").addClass("hollow");
	$(this).removeClass("hollow");
	$(this).parent().next().html(`
		<div class="project-tabs-content__note"> <span class="note-text">Insert YouTube video link, no sound will be played</span> </div>
        <div class="project-tabs-content__input-container">
        	<input id="youtubeID" type="text" class="project-tabs-content__video-input ng-pristine ng-untouched ng-valid ng-empty" name="video" placeholder="youtube.com/…">
    		<button type="button" class="project-tabs-content__btn-delete ng-hide">
    			<div class="idt-icon">
    			<svg class="ideacon idea-ht-bin" style="width: 1.2rem; height: 1.2rem;">
    			<use xlink:href="icons/ideacons-defs.svg#idea-ht-bin">
    			</use>
    			</svg>
    			</div>
    		</button>
        </div>
		`);
	$("#youtubeID").on("keyup change", function() {
		$(this).parent().parent().parent().parent().children().first().html(`<iframe id="player0" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="`+$(".project-banner").width()+`" height="`+$(".project-banner").height()+`" style="pointer-events: none;"></iframe>`);
		$("#player0").attr("src", "https://www.youtube.com/embed/"+$("#youtubeID").val().substring($("#youtubeID").val().lastIndexOf('=') + 1)+"?autoplay=1&loop=1&mute=1&controls=0&iv_load_policy=3&cc_load_policy=0modestbranding=1playsinline=1&rel=0&showinfo=0&playlist="+$("#youtubeID").val().substring($("#youtubeID").val().lastIndexOf('=') + 1)+"&enablejsapi=1&widgetid=5");
	});
});

$(window).resize(function() {
	$("#player0").css({"width":$(".project-banner").width(), "height":$(".project-banner").height()})
});

$(".input-file-hidden-bg-image").change(function(e) {

	var uploadedStep = $(this)

	imageBGfiles = e.originalEvent.srcElement.files;

    var file = imageBGfiles[0];

    var reader = new FileReader();
    reader.onloadend = function() {
    	$("#player0").remove();
		$(".project-banner").attr("style", "background-image:url("+reader.result+")");
    }
    reader.readAsDataURL(file);
});

$(".upload-logo").change(function(e) {

	var uploadedStep = $(this)

	logofiles = e.originalEvent.srcElement.files;

    var file = logofiles[0];

    var reader = new FileReader();
    reader.onloadend = function() {
    	$(".project-intro__logo img").attr("src", reader.result);
    }
    reader.readAsDataURL(file);
});

$(".input-dropdown__input__container").click( function() {
	$(".dropdown-pane-right").toggleClass("is-open");
});

$(".dropdown-pane__checkbox").click( function() {
	if ($(this).parent().find("input").attr("checked")) {
        $(this).parent().find("input").removeAttr("checked");
    } else {
        $(this).parent().find("input").attr("checked", "checked");
    }
	$(this).parent().find("input").toggleClass("checked");
});

$(".presentation-url").click( function() {
	$(".pdf-file").addClass("hollow");
	$(this).removeClass("hollow");
	$(this).parent().next().html(`
		<div class="project-tabs-content__note">
            <span class="note-text">Slideshare or Googleslide public URL</span>
        </div>
        <div class="project-tabs-content__input-container">
            <input type="text" placeholder="Insert URL" class="ng-pristine ng-untouched ng-valid ng-empty"> 
            <button class="trash-button" type="button">
                <div class="idt-icon">
                    <i class="fas fa-trash"></i>
                </div>
            </button>
        </div>
		`);
});

$(".pdf-file").click( function() {
	$(".presentation-url").addClass("hollow");
	$(this).removeClass("hollow");
	$(this).parent().next().html(`
		<div class="project-tabs-content__note"> <span class="note-text">PDF document</span> </div>
        <div class="project-tabs-content__input-container">
        	<idt-fs-upload-file type="pdf" class="upload" name="presentationPDF" label="Upload PDF document" on-uploaded="onUploadedPresentation" on-error="onError">
        		<label type="button" class="button upload-pdf upload-file__btn" accept="application/pdf, .pdf" for="inputFile48718" ng-disabled="disable">
        			<input type="file" accept="application/pdf, .pdf" class="input-file-hidden input-file-hidden-pdf ng-pristine ng-untouched ng-valid ng-not-empty" id="inputFile48718" name="uploader">
        			<span></span>
        			<span class="upload-file__progress">Upload PDF document</span>
        		</label>
        	</idt-fs-upload-file>
        	<button type="button" class="project-tabs-content__btn-delete ng-hide">
        		<div class="idt-icon">
        		<svg class="ideacon idea-ht-bin" style="width: 1.2rem; height: 1.2rem;">
        		<use xlink:href="icons/ideacons-defs.svg#idea-ht-bin">
        		</use></svg>
        		</div>
        	</button>
        </div>
		`);
	$(".upload-pdf").change(function(e) {

		var pdffiles = e.originalEvent.srcElement.files

        var file = e.originalEvent.srcElement.files[0];

		var pdffileName = file.name;

        var reader = new FileReader();
        reader.onloadend = function() {
			$(".upload-pdf").children().last().html(pdffileName);
        }
        reader.readAsDataURL(file);
	});
});

$(document).on("click touch", ".add-step", function(e) {
	e.preventDefault();
	var steps = parseInt($(".project-hiw__list").attr('class').substr(-1), 10);
	$(".project-hiw__list").append(`
	<li class="project-hiw__list-item">
        <div class="project-hiw">
            <div class="project-hiw__wrap-image project-hiw__wrap-image-no-content">
                <img class="project-hiw__image ng-hide"> 
                <div class="project-hiw__image-number">`+(steps+1)+`</div>
            </div>
            <!---->
            <div>
                <idt-fs-upload-file type="image" class="upload-default" on-uploaded="onUploadedSteps($index)" on-error="onError" label="Add an image">
                    <label type="button" class="button upload-file__btn" accept="image/*" for="inputFile`+(steps+1)+`">
                        <input type="file" accept="image/*" class="input-file-hidden ng-pristine ng-untouched ng-valid ng-not-empty" id="inputFile`+(steps+1)+`" name="uploader"> <span></span> <span class="upload-file__progress">Add an image</span>
                    </label>
                </idt-fs-upload-file>
                <span class="project-hiw__delete-icon"> 
                	<div class="idt-icon">
                		<i class="fas fa-trash"></i>
                	</div> 
                </span>
                <!----> 
                <div class="idt-max-length__wrapper"><input type="text" value="" idt-max-length="50" placeholder="Step title" class="project-step-title project-step-title`+(steps+1)+` ng-pristine ng-untouched ng-valid ng-empty editable"><span class="idt-max-length__counter"></span></div>
                <!----> 
                <div class="idt-max-length__wrapper"><textarea class="project-step-description project-step-description`+(steps+1)+` project__textarea ng-pristine ng-untouched ng-valid ng-empty editable" idt-max-length="200" rows="1" placeholder="Step description"></textarea><span class="idt-max-length__counter"></span>
                </div>
            </div>
            <!----> <!----> <!----> 
        </div>
    </li>
    `);
    $(".project-hiw__list").removeClass("list--"+steps);
    $(".project-hiw__list").addClass("list--"+(steps+1)).trigger('classChange');

    if($(".project-step-title").val().length > 50){
        val = $(".project-step-title").val().substr(0,50);
        $(".project-step-title").val(val);
    };
    $(".project-step-title").next().html("" + (50-$(".project-step-title").val().length));

    if($(".project-step-description").val().length > 200){
        val = $(".project-step-description").val().substr(0,200);
        $(".project-step-description").val(val);
    };
    $(".project-step-description").next().html("" + (200-$(".project-step-description").val().length));

    $(".input-file-hidden").change(function(e) {

		var uploadedStep = $(this);
		var stepNumber = uploadedStep.parent().parent().parent().parent().find(".project-hiw__image-number").html();

		var stepfiles = e.originalEvent.srcElement.files;

		stepfilesDict["step" + stepNumber] = stepfiles;

	    var file = stepfiles[0];

	    var reader = new FileReader();
	    reader.onloadend = function() {
			uploadedStep.parent().parent().parent().parent().find(".project-hiw__image").attr("src", reader.result);
			uploadedStep.parent().parent().parent().parent().find(".project-hiw__wrap-image").children().last().remove();
			uploadedStep.parent().parent().parent().parent().find(".project-hiw__wrap-image").append(`<div class="project-hiw__number" style=""> `+stepNumber+` </div>`)
			uploadedStep.parent().parent().parent().parent().find(".project-hiw__image").removeClass("ng-hide");
			uploadedStep.parent().parent().parent().parent().find(".project-hiw__image-number").addClass("ng-hide");
	    }
	    reader.readAsDataURL(file);
	});
});

$(document).on("click touch", ".project-tabs-content .trash-button", function(e) {
	e.preventDefault();
	$(".upload-slides").val("");
});

$(document).on("click touch", ".project-screenshot__add", function(e) {
	e.preventDefault();
	var last_image_upload = $(this).parent().parent().children().last().prev().find("input")
	if($(this).parent().parent().children().length === 1) {
		$(`<div class="column small-12 medium-6 large-3 project-screenshot">
			<div class="fs__image-upload" style="background-image: url(&quot;null&quot;);">
				<div class="fs__image-upload__label">
					<div class="fs__image-upload__label__content">
						<idt-fs-upload-file class="fs__image-upload__button ng-pristine ng-untouched ng-valid ng-empty" type="image" on-error="onError" label="Upload file" on-uploaded="onUploadedScreenshot($index)">
							<label type="button" class="button upload-image upload-file__btn" accept="image/*" for="inputImage1" ng-disabled="disable">
								<input type="file" accept="image/*" class="input-file-hidden ng-pristine ng-untouched ng-valid ng-not-empty" id="inputImage1" name="uploader">
								<span></span>
								<span class="upload-file__progress">Upload file</span>
							</label>
						</idt-fs-upload-file>
						<div class="fs__image-upload__button__spec"> Recommended resolution: 1920x1124px </div>
					</div>
				</div>
			</div>
			<button type="button" class="project-screenshot__delete">
				<div class="idt-icon">
					<i class="fas fa-trash"></i>
				</div>
			</button>
		</div>`).insertBefore($(this).parent());
	} else {
		$(`<div class="column small-12 medium-6 large-3 project-screenshot">
			<div class="fs__image-upload" style="background-image: url(&quot;null&quot;);">
				<div class="fs__image-upload__label">
					<div class="fs__image-upload__label__content">
						<idt-fs-upload-file class="fs__image-upload__button ng-pristine ng-untouched ng-valid ng-empty" type="image" on-error="onError" label="Upload file" on-uploaded="onUploadedScreenshot($index)">
							<label type="button" class="button upload-image upload-file__btn" accept="image/*" for="inputImage`+(parseInt(last_image_upload.attr('id').substr(-1), 10)+1)+`" ng-disabled="disable">
								<input type="file" accept="image/*" class="input-file-hidden ng-pristine ng-untouched ng-valid ng-not-empty" id="inputImage`+(parseInt(last_image_upload.attr('id').substr(-1), 10)+1)+`" name="uploader">
								<span></span>
								<span class="upload-file__progress">Upload file</span>
							</label>
						</idt-fs-upload-file>
						<div class="fs__image-upload__button__spec"> Recommended resolution: 1920x1124px </div>
					</div>
				</div>
			</div>
			<button type="button" class="project-screenshot__delete">
				<div class="idt-icon">
					<i class="fas fa-trash"></i>
				</div>
			</button>
		</div>`).insertBefore($(this).parent());
	}
	$(document).on("click touch", ".project-screenshot__delete", function(e) {
		e.preventDefault();
		$(this).parent().remove();
	});

	$(".upload-image").change(function(e) {

		var uploadedImage = $(this)

	    for (var i = 0; i < e.originalEvent.srcElement.files.length; i++) {

	        var file = e.originalEvent.srcElement.files[i];

	        var reader = new FileReader();
	        reader.onloadend = function() {
				uploadedImage.parent().parent().parent().parent().attr("style", "background-image:url("+reader.result+")");
	        	uploadedImage.parent().parent().parent().addClass("is-set");
	        }
	        reader.readAsDataURL(file);
	    }
	});
});

$(".project-tools__toggle").click( function() {
	$(".project-tools__toggle").toggleClass("open");
	$(".project-tools").toggleClass("open");
});

$(".project-hires__item").click( function() {
	$(this).toggleClass("enabled");
	$(this).find(".project-hires__item__check").toggleClass("checked");
});

$(window).on('load', function() {
	if($(".project-title").val().length > 60){
        val = $(".project-title").val().substr(0,60);
        $(".project-title").val(val);
    };
    $(".project-title").next().html("" + (60-$(".project-title").val().length));
});

$(".project-title").on("keyup change", function() {
	if($(this).val().length > 60){
        val = $(this).val().substr(0,60);
        $(this).val(val);
    };
	$(this).next().html("" + (60-$(this).val().length));
});

$(window).on('load', function() {
	if($(".project-tweet").val().length > 140){
        val = $(".project-tweet").val().substr(0,140);
        $(".project-tweet").val(val);
    };
    $(".project-tweet").next().html("" + (140-$(".project-tweet").val().length));
});

$(".project-tweet").on("keyup change", function() {
	if($(this).val().length > 140){
        val = $(this).val().substr(0,140);
        $(this).val(val);
    };
	$(this).next().html("" + (140-$(this).val().length));
});

$(window).on('load', function() {
	if($(".project-tweet").val().length > 140){
        val = $(".project-tweet").val().substr(0,140);
        $(".project-tweet").val(val);
    };
    $(".project-tweet").next().html("" + (140-$(".project-tweet").val().length));
});

$(".project-tweet").on("keyup change", function() {
	if($(this).val().length > 140){
        val = $(this).val().substr(0,140);
        $(this).val(val);
    };
	$(this).next().html("" + (140-$(this).val().length));
});

$(window).on('load', function() {
	if($(".the-issue").val().length > 600){
        val = $(".the-issue").val().substr(0,600);
        $(".the-issue").val(val);
    };
    $(".the-issue").next().html("" + (600-$(".the-issue").val().length));
});

$(".the-issue").on("keyup change", function() {
	if($(this).val().length > 600){
        val = $(this).val().substr(0,600);
        $(this).val(val);
    };
	$(this).next().html("" + (600-$(this).val().length));
});

$(window).on('load', function() {
	if($(".the-solution").val().length > 600){
        val = $(".the-solution").val().substr(0,600);
        $(".the-solution").val(val);
    };
    $(".the-solution").next().html("" + (600-$(".the-solution").val().length));
});

$(".the-solution").on("keyup change", function() {
	if($(this).val().length > 600){
        val = $(this).val().substr(0,600);
        $(this).val(val);
    };
	$(this).next().html("" + (600-$(this).val().length));
});

var myCredentials = new AWS.CognitoIdentityCredentials({IdentityPoolId:'eu-central-1:5114c8ad-eae2-4438-a517-6cfb69c4686d'});
var myConfig = new AWS.Config({credentials: myCredentials, region: 'eu-central-1'});

AWS.config.update({credentials: myCredentials, region: 'eu-central-1'});

var dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

var s3 = new AWS.S3({apiVersion: "2006-03-01",params: { Bucket: "environmind" }});

// var queryParams = {
// 	ExpressionAttributeValues: {
// 		':id': {S: projectID}
// 	},
// 	KeyConditionExpression: 'ProjectID = :id',
// 	ProjectionExpression: 'ProjectID, Title, Description, Website, ImageBG, YoutubeBG, Logo, Tracks, Issue, Solution, ProjectStepImage1, ProjectStepTitle1, ProjectStepDescription1, ProjectStepImage2, ProjectStepTitle2, ProjectStepDescription2, ProjectStepImage3, ProjectStepTitle3, ProjectStepDescription3, ProjectStepImage4, ProjectStepTitle4, ProjectStepDescription4, PDF, Slides, Teammates, Hiring, PersonalNotes',
// 	TableName: 'Projects'
// };

// dynamodb.query(queryParams, function(err, data) {
// 	if (err) {
// 		console.log("Error", err);
// 	} else {
		db.ref('/projects/' + projectID).once('value').then(function(snapshot) {
  		if (snapshot.val()) {
		// if (data.Items.length > 0) {

			$(".project-title").val(snapshot.val().Title);
			$(".project-tweet").val(snapshot.val().Description);
			if (snapshot.val().YoutubeBG !== "") {
				$(".image-bg").addClass("hollow");
				$(".video-bg").removeClass("hollow");
				$(".video-bg").parent().next().html(`
					<div class="project-tabs-content__note"> <span class="note-text">Insert YouTube video link, no sound will be played</span> </div>
			        <div class="project-tabs-content__input-container">
			        	<input id="youtubeID" type="text" class="project-tabs-content__video-input ng-pristine ng-untouched ng-valid ng-empty" name="video" placeholder="youtube.com/…">
			    		<button type="button" class="project-tabs-content__btn-delete ng-hide">
			    			<div class="idt-icon">
			    			<svg class="ideacon idea-ht-bin" style="width: 1.2rem; height: 1.2rem;">
			    			<use xlink:href="icons/ideacons-defs.svg#idea-ht-bin">
			    			</use>
			    			</svg>
			    			</div>
			    		</button>
			        </div>
					`);
				$(".project-banner").attr("style", "background-image: url('https://img.youtube.com/vi/"+(snapshot.val().YoutubeBG).split('v=')[1]+"/maxresdefault.jpg'); background-size: cover; background-position: center center; position: relative; overflow: hidden;");
				$(".project-banner").append(`<div style="position: absolute; left: 0px; top: 0px;">
											<iframe id="player0" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="`+$(".project-banner").width()+`" height="`+$(".project-banner").height()+`" style="pointer-events: none;"></iframe>
										</div>`);
				$("#youtubeID").val(snapshot.val().YoutubeBG);
				$(".video-bg").parent().parent().parent().parent().children().first().html(`<iframe id="player0" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="`+$(".project-banner").width()+`" height="`+$(".project-banner").height()+`" style="pointer-events: none;"></iframe>`);
				$("#player0").attr("src", "https://www.youtube.com/embed/"+$("#youtubeID").val().substring($("#youtubeID").val().lastIndexOf('=') + 1)+"?autoplay=1&mute=1&controls=0&iv_load_policy=3&cc_load_policy=0modestbranding=1playsinline=1&rel=0&showinfo=0&playlist=o&enablejsapi=1&widgetid=5");
				$("#youtubeID").on("keyup change", function() {
					$(".video-bg").parent().parent().parent().parent().children().first().html(`<iframe id="player0" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="`+$(".project-banner").width()+`" height="`+$(".project-banner").height()+`" style="pointer-events: none;"></iframe>`);
					$("#player0").attr("src", "https://www.youtube.com/embed/"+$("#youtubeID").val().substring($("#youtubeID").val().lastIndexOf('=') + 1)+"?autoplay=1&mute=1&controls=0&iv_load_policy=3&cc_load_policy=0modestbranding=1playsinline=1&rel=0&showinfo=0&playlist=o&enablejsapi=1&widgetid=5");
				});
			} else if (snapshot.val().ImageBG !== "") {
				$(".project-banner").attr("style", "background-image: url('"+snapshot.val().ImageBG+"');");
			} else {
				$(".project-banner").attr("style", "background-image: url('/wp-content/themes/MindEmpathy-wp/static/img/ikea-man.svg');");
			}
			$(".app-url").val(snapshot.val().Website);
			var tracks = (snapshot.val().Tracks).split(',');
			for (var i = 0; i < tracks.length; i++) {
				$("#"+tracks[i]).attr("checked", "checked");
				$("#"+tracks[i]).addClass("checked");
			}
			if (snapshot.val().Logo === "") {
				$(".project-intro__logo img").attr("src", "/wp-content/themes/MindEmpathy-wp/static/img/idealogo.svg");
			} else {
				$(".project-intro__logo img").attr("src", snapshot.val().Logo);
			}
			$(".the-issue").val(snapshot.val().Issue);
			$(".the-solution").val(snapshot.val().Solution);
			function loadSteps(callback) {
				if (typeof(snapshot.val().ProjectStepTitle1) === "undefined" || snapshot.val().ProjectStepTitle1 === "") {
					$(".project-hiw__list").html(`<li class="project-hiw__list-item project-hiw__list-item1">
								                    <div class="project-hiw">
								                        <div class="project-hiw__wrap-image project-hiw__wrap-image-no-content">
								                            <img class="project-hiw__image ng-hide"> 
								                            <div class="project-hiw__image-number">1</div>
								                        </div>
								                        <!---->
								                        <div>
								                            <idt-fs-upload-file type="image" class="upload-default"on-error="onError" label="Add an image">
								                                <label type="button" class="button upload-file__btn" accept="image/*" for="inputFile1">
								                                    <input type="file" accept="image/*" class="input-file-hidden ng-pristine ng-untouched ng-valid ng-not-empty" id="inputFile1" name="uploader"> <span></span> <span class="upload-file__progress">Add an image</span>
								                                </label>
								                            </idt-fs-upload-file>
								                            <span class="project-hiw__delete-icon"> 
								                            	<div class="idt-icon">
								                            		<i class="fas fa-trash"></i>
								                            	</div> 
								                            </span>
								                            <!----> 
								                            <div class="idt-max-length__wrapper"><input type="text" value="" idt-max-length="50" placeholder="Step title" class="project-step-title project-step-title1 ng-pristine ng-untouched ng-valid ng-empty editable"><span class="idt-max-length__counter"></span></div>
								                            <!----> 
								                            <div class="idt-max-length__wrapper"><textarea class="project-step-description project-step-description1 project__textarea ng-pristine ng-untouched ng-valid ng-empty editable" idt-max-length="200" rows="1" placeholder="Step description"></textarea><span class="idt-max-length__counter"></span>
								                            </div>
								                        </div>
								                        <!----> <!----> <!----> 
								                    </div>
								                </li>
								                <!---->
								                <li class="project-hiw__list-item project-hiw__list-item2">
								                    <div class="project-hiw">
								                        <div class="project-hiw__wrap-image project-hiw__wrap-image-no-content">
								                            <img class="project-hiw__image ng-hide"> 
								                            <div class="project-hiw__image-number">2</div>
								                        </div>
								                        <!---->
								                        <div>
								                            <idt-fs-upload-file type="image" class="upload-default" on-uploaded="onUploadedSteps($index)" on-error="onError" label="Add an image">
								                                <label type="button" class="button upload-file__btn" accept="image/*" for="inputFile2">
								                                    <input type="file" accept="image/*" class="input-file-hidden ng-pristine ng-untouched ng-valid ng-not-empty" id="inputFile2" name="uploader"> <span></span> <span class="upload-file__progress">Add an image</span>
								                                </label>
								                            </idt-fs-upload-file>
								                            <span class="project-hiw__delete-icon"> 
								                            	<div class="idt-icon">
								                            		<i class="fas fa-trash"></i>
								                            	</div> 
								                            </span>
								                            <!----> 
								                            <div class="idt-max-length__wrapper"><input type="text" value="" idt-max-length="50" placeholder="Step title" class="project-step-title project-step-title2 ng-pristine ng-untouched ng-valid ng-empty editable"><span class="idt-max-length__counter"></span></div>
								                            <!----> 
								                            <div class="idt-max-length__wrapper"><textarea class="project-step-description project-step-description2 project__textarea ng-pristine ng-untouched ng-valid ng-empty editable" idt-max-length="200" rows="1" placeholder="Step description"></textarea><span class="idt-max-length__counter"></span>
								                            </div>
								                        </div>
								                        <!----> <!----> <!----> 
								                    </div>
								                </li>
								                <!---->
								                <li class="project-hiw__list-item project-hiw__list-item3">
								                    <div class="project-hiw">
								                        <div class="project-hiw__wrap-image project-hiw__wrap-image-no-content">
								                            <img class="project-hiw__image ng-hide"> 
								                            <div class="project-hiw__image-number">3</div>
								                        </div>
								                        <!---->
								                        <div>
								                            <idt-fs-upload-file type="image" class="upload-default" on-uploaded="onUploadedSteps($index)" on-error="onError" label="Add an image">
								                                <label type="button" class="button upload-file__btn" accept="image/*" for="inputFile3">
								                                    <input type="file" accept="image/*" class="input-file-hidden ng-pristine ng-untouched ng-valid ng-not-empty" id="inputFile3" name="uploader"> <span></span> <span class="upload-file__progress">Add an image</span>
								                                </label>
								                            </idt-fs-upload-file>
								                            <span class="project-hiw__delete-icon"> 
								                            	<div class="idt-icon">
								                            		<i class="fas fa-trash"></i>
								                            	</div> 
								                            </span>
								                            <!----> 
								                            <div class="idt-max-length__wrapper"><input type="text" value="" idt-max-length="50" placeholder="Step title" class="project-step-title project-step-title3 ng-pristine ng-untouched ng-valid ng-empty editable"><span class="idt-max-length__counter"></span></div>
								                            <!----> 
								                            <div class="idt-max-length__wrapper"><textarea class="project-step-description project-step-description3 project__textarea ng-pristine ng-untouched ng-valid ng-empty editable" idt-max-length="200" rows="1" placeholder="Step description"></textarea><span class="idt-max-length__counter"></span>
								                            </div>
								                        </div>
								                        <!----> <!----> <!----> 
								                    </div>
								                </li>`);
				} else {
					$(".project-hiw__list").before(`<li class="project-hiw__list-item project-hiw__list-item1">
									                    <div class="project-hiw">
									                        <div class="project-hiw__wrap-image project-hiw__wrap-image-no-content">
									                            <img class="project-hiw__image ng-hide"> 
									                            <div class="project-hiw__image-number">1</div>
									                        </div>
									                        <!---->
									                        <div>
									                            <idt-fs-upload-file type="image" class="upload-default"on-error="onError" label="Add an image">
									                                <label type="button" class="button upload-file__btn" accept="image/*" for="inputFile1">
									                                    <input type="file" accept="image/*" class="input-file-hidden ng-pristine ng-untouched ng-valid ng-not-empty" id="inputFile1" name="uploader"> <span></span> <span class="upload-file__progress">Add an image</span>
									                                </label>
									                            </idt-fs-upload-file>
									                            <span class="project-hiw__delete-icon"> 
									                            	<div class="idt-icon">
									                            		<i class="fas fa-trash"></i>
									                            	</div> 
									                            </span>
									                            <!----> 
									                            <div class="idt-max-length__wrapper"><input type="text" value="" idt-max-length="50" placeholder="Step title" class="project-step-title project-step-title1 ng-pristine ng-untouched ng-valid ng-empty editable"><span class="idt-max-length__counter"></span></div>
									                            <!----> 
									                            <div class="idt-max-length__wrapper"><textarea class="project-step-description project-step-description1 project__textarea ng-pristine ng-untouched ng-valid ng-empty editable" idt-max-length="200" rows="1" placeholder="Step description"></textarea><span class="idt-max-length__counter"></span>
									                            </div>
									                        </div>
									                        <!----> <!----> <!----> 
									                    </div>
									                </li>`);
					$(".project-hiw__list").removeClass("list--3");
	    			$(".project-hiw__list").addClass("list--1").trigger('classChange');
					$(".project-hiw__list-item1 .project-hiw__image").attr("src", snapshot.val().ProjectStepImage1);
					$(".project-step-title1").val(snapshot.val().ProjectStepTitle1);
					$(".project-step-description1").val(snapshot.val().ProjectStepDescription1);
					$(".project-hiw__list-item1 .project-hiw__wrap-image").append(`<div class="project-hiw__number" style="">1</div>`)
					$(".project-hiw__list-item1 .project-hiw__image").removeClass("ng-hide");
					$(".project-hiw__list-item1 .project-hiw__image-number").addClass("ng-hide");
				}
				if (typeof(snapshot.val().ProjectStepTitle2) !== "undefined" && snapshot.val().ProjectStepTitle2 !== "") {
					var steps = 1;
					$(".project-hiw__list").append(`
					<li class="project-hiw__list-item project-hiw__list-item`+(steps+1)+`">
				        <div class="project-hiw">
				            <div class="project-hiw__wrap-image project-hiw__wrap-image-no-content">
				                <img class="project-hiw__image ng-hide"> 
				                <div class="project-hiw__image-number">`+(steps+1)+`</div>
				            </div>
				            <!---->
				            <div>
				                <idt-fs-upload-file type="image" class="upload-default" on-uploaded="onUploadedSteps($index)" on-error="onError" label="Add an image">
				                    <label type="button" class="button upload-file__btn" accept="image/*" for="inputFile`+(steps+1)+`">
				                        <input type="file" accept="image/*" class="input-file-hidden ng-pristine ng-untouched ng-valid ng-not-empty" id="inputFile`+(steps+1)+`" name="uploader"> <span></span> <span class="upload-file__progress">Add an image</span>
				                    </label>
				                </idt-fs-upload-file>
				                <span class="project-hiw__delete-icon"> 
				                	<div class="idt-icon">
				                		<i class="fas fa-trash"></i>
				                	</div> 
				                </span>
				                <!----> 
				                <div class="idt-max-length__wrapper"><input type="text" value="" idt-max-length="50" placeholder="Step title" class="project-step-title project-step-title`+(steps+1)+` ng-pristine ng-untouched ng-valid ng-empty editable"><span class="idt-max-length__counter"></span></div>
				                <!----> 
				                <div class="idt-max-length__wrapper"><textarea class="project-step-description project-step-description`+(steps+1)+` project__textarea ng-pristine ng-untouched ng-valid ng-empty editable" idt-max-length="200" rows="1" placeholder="Step description"></textarea><span class="idt-max-length__counter"></span>
				                </div>
				            </div>
				            <!----> <!----> <!----> 
				        </div>
				    </li>
				    `);
				    $(".project-hiw__list").removeClass("list--"+steps);
	   				$(".project-hiw__list").addClass("list--"+(steps+1)).trigger('classChange');
	   				$(".project-hiw__list-item2 .project-hiw__image").attr("src", snapshot.val().ProjectStepImage2);
					$(".project-step-title2").val(snapshot.val().ProjectStepTitle2);
					$(".project-step-description2").val(snapshot.val().ProjectStepDescription2);
					$(".project-hiw__list-item2 .project-hiw__wrap-image").append(`<div class="project-hiw__number" style="">`+(steps+1)+`</div>`)
					$(".project-hiw__list-item2 .project-hiw__image").removeClass("ng-hide");
					$(".project-hiw__list-item2 .project-hiw__image-number").addClass("ng-hide");
				}
				if (typeof(snapshot.val().ProjectStepTitle3) !== "undefined" && snapshot.val().ProjectStepTitle3 !== "") {
					var steps = 2;
					$(".project-hiw__list").append(`
					<li class="project-hiw__list-item project-hiw__list-item`+(steps+1)+`">
				        <div class="project-hiw">
				            <div class="project-hiw__wrap-image project-hiw__wrap-image-no-content">
				                <img class="project-hiw__image ng-hide"> 
				                <div class="project-hiw__image-number">`+(steps+1)+`</div>
				            </div>
				            <!---->
				            <div>
				                <idt-fs-upload-file type="image" class="upload-default" on-uploaded="onUploadedSteps($index)" on-error="onError" label="Add an image">
				                    <label type="button" class="button upload-file__btn" accept="image/*" for="inputFile`+(steps+1)+`">
				                        <input type="file" accept="image/*" class="input-file-hidden ng-pristine ng-untouched ng-valid ng-not-empty" id="inputFile`+(steps+1)+`" name="uploader"> <span></span> <span class="upload-file__progress">Add an image</span>
				                    </label>
				                </idt-fs-upload-file>
				                <span class="project-hiw__delete-icon"> 
				                	<div class="idt-icon">
				                		<i class="fas fa-trash"></i>
				                	</div> 
				                </span>
				                <!----> 
				                <div class="idt-max-length__wrapper"><input type="text" value="" idt-max-length="50" placeholder="Step title" class="project-step-title project-step-title`+(steps+1)+` ng-pristine ng-untouched ng-valid ng-empty editable"><span class="idt-max-length__counter"></span></div>
				                <!----> 
				                <div class="idt-max-length__wrapper"><textarea class="project-step-description project-step-description`+(steps+1)+` project__textarea ng-pristine ng-untouched ng-valid ng-empty editable" idt-max-length="200" rows="1" placeholder="Step description"></textarea><span class="idt-max-length__counter"></span>
				                </div>
				            </div>
				            <!----> <!----> <!----> 
				        </div>
				    </li>
				    `);
				    $(".project-hiw__list").removeClass("list--"+steps);
	   				$(".project-hiw__list").addClass("list--"+(steps+1)).trigger('classChange');
	   				$(".project-hiw__list-item3 .project-hiw__image").attr("src", snapshot.val().ProjectStepImage3);
					$(".project-step-title3").val(snapshot.val().ProjectStepTitle3);
					$(".project-step-description3").val(snapshot.val().ProjectStepDescription3);
					$(".project-hiw__list-item3 .project-hiw__wrap-image").append(`<div class="project-hiw__number" style="">`+(steps+1)+`</div>`)
					$(".project-hiw__list-item3 .project-hiw__image").removeClass("ng-hide");
					$(".project-hiw__list-item3 .project-hiw__image-number").addClass("ng-hide");
				}
				if (typeof(snapshot.val().ProjectStepTitle4) !== "undefined" && snapshot.val().ProjectStepTitle4 !== "") {
					var steps = 3;
					$(".project-hiw__list").append(`
					<li class="project-hiw__list-item project-hiw__list-item`+(steps+1)+`">
				        <div class="project-hiw">
				            <div class="project-hiw__wrap-image project-hiw__wrap-image-no-content">
				                <img class="project-hiw__image ng-hide"> 
				                <div class="project-hiw__image-number">`+(steps+1)+`</div>
				            </div>
				            <!---->
				            <div>
				                <idt-fs-upload-file type="image" class="upload-default" on-uploaded="onUploadedSteps($index)" on-error="onError" label="Add an image">
				                    <label type="button" class="button upload-file__btn" accept="image/*" for="inputFile`+(steps+1)+`">
				                        <input type="file" accept="image/*" class="input-file-hidden ng-pristine ng-untouched ng-valid ng-not-empty" id="inputFile`+(steps+1)+`" name="uploader"> <span></span> <span class="upload-file__progress">Add an image</span>
				                    </label>
				                </idt-fs-upload-file>
				                <span class="project-hiw__delete-icon"> 
				                	<div class="idt-icon">
				                		<i class="fas fa-trash"></i>
				                	</div> 
				                </span>
				                <!----> 
				                <div class="idt-max-length__wrapper"><input type="text" value="" idt-max-length="50" placeholder="Step title" class="project-step-title project-step-title`+(steps+1)+` ng-pristine ng-untouched ng-valid ng-empty editable"><span class="idt-max-length__counter"></span></div>
				                <!----> 
				                <div class="idt-max-length__wrapper"><textarea class="project-step-description project-step-description`+(steps+1)+` project__textarea ng-pristine ng-untouched ng-valid ng-empty editable" idt-max-length="200" rows="1" placeholder="Step description"></textarea><span class="idt-max-length__counter"></span>
				                </div>
				            </div>
				            <!----> <!----> <!----> 
				        </div>
				    </li>
				    `);
				    $(".project-hiw__list").removeClass("list--"+steps);
	   				$(".project-hiw__list").addClass("list--"+(steps+1)).trigger('classChange');
	   				$(".project-hiw__list-item4 .project-hiw__image").attr("src", snapshot.val().ProjectStepImage4);
					$(".project-step-title4").val(snapshot.val().ProjectStepTitle4);
					$(".project-step-description4").val(snapshot.val().ProjectStepDescription4);
					$(".project-hiw__list-item4 .project-hiw__wrap-image").append(`<div class="project-hiw__number" style="">`+(steps+1)+`</div>`)
					$(".project-hiw__list-item4 .project-hiw__image").removeClass("ng-hide");
					$(".project-hiw__list-item4 .project-hiw__image-number").addClass("ng-hide");
				}
				if (typeof(snapshot.val().ProjectStepTitle5) !== "undefined" && snapshot.val().ProjectStepTitle5 !== "") {
					var steps = 4;
					$(".project-hiw__list").append(`
					<li class="project-hiw__list-item project-hiw__list-item`+(steps+1)+`">
				        <div class="project-hiw">
				            <div class="project-hiw__wrap-image project-hiw__wrap-image-no-content">
				                <img class="project-hiw__image ng-hide"> 
				                <div class="project-hiw__image-number">`+(steps+1)+`</div>
				            </div>
				            <!---->
				            <div>
				                <idt-fs-upload-file type="image" class="upload-default" on-uploaded="onUploadedSteps($index)" on-error="onError" label="Add an image">
				                    <label type="button" class="button upload-file__btn" accept="image/*" for="inputFile`+(steps+1)+`">
				                        <input type="file" accept="image/*" class="input-file-hidden ng-pristine ng-untouched ng-valid ng-not-empty" id="inputFile`+(steps+1)+`" name="uploader"> <span></span> <span class="upload-file__progress">Add an image</span>
				                    </label>
				                </idt-fs-upload-file>
				                <span class="project-hiw__delete-icon"> 
				                	<div class="idt-icon">
				                		<i class="fas fa-trash"></i>
				                	</div> 
				                </span>
				                <!----> 
				                <div class="idt-max-length__wrapper"><input type="text" value="" idt-max-length="50" placeholder="Step title" class="project-step-title project-step-title`+(steps+1)+` ng-pristine ng-untouched ng-valid ng-empty editable"><span class="idt-max-length__counter"></span></div>
				                <!----> 
				                <div class="idt-max-length__wrapper"><textarea class="project-step-description project-step-description`+(steps+1)+` project__textarea ng-pristine ng-untouched ng-valid ng-empty editable" idt-max-length="200" rows="1" placeholder="Step description"></textarea><span class="idt-max-length__counter"></span>
				                </div>
				            </div>
				            <!----> <!----> <!----> 
				        </div>
				    </li>
				    `);
				    $(".project-hiw__list").removeClass("list--"+steps);
	   				$(".project-hiw__list").addClass("list--"+(steps+1)).trigger('classChange');
	   				$(".project-hiw__list-item5 .project-hiw__image").attr("src", snapshot.val().ProjectStepImage5);
					$(".project-step-title5").val(snapshot.val().ProjectStepTitle5);
					$(".project-step-description5").val(snapshot.val().ProjectStepDescription5);
				}
				if (typeof(snapshot.val().ProjectStepTitle6) !== "undefined" && snapshot.val().ProjectStepTitle6 !== "") {
					var steps = 5;
					$(".project-hiw__list").append(`
					<li class="project-hiw__list-item project-hiw__list-item`+(steps+1)+`">
				        <div class="project-hiw">
				            <div class="project-hiw__wrap-image project-hiw__wrap-image-no-content">
				                <img class="project-hiw__image ng-hide"> 
				                <div class="project-hiw__image-number">`+(steps+1)+`</div>
				            </div>
				            <!---->
				            <div>
				                <idt-fs-upload-file type="image" class="upload-default" on-uploaded="onUploadedSteps($index)" on-error="onError" label="Add an image">
				                    <label type="button" class="button upload-file__btn" accept="image/*" for="inputFile`+(steps+1)+`">
				                        <input type="file" accept="image/*" class="input-file-hidden ng-pristine ng-untouched ng-valid ng-not-empty" id="inputFile`+(steps+1)+`" name="uploader"> <span></span> <span class="upload-file__progress">Add an image</span>
				                    </label>
				                </idt-fs-upload-file>
				                <span class="project-hiw__delete-icon"> 
				                	<div class="idt-icon">
				                		<i class="fas fa-trash"></i>
				                	</div> 
				                </span>
				                <!----> 
				                <div class="idt-max-length__wrapper"><input type="text" value="" idt-max-length="50" placeholder="Step title" class="project-step-title project-step-title`+(steps+1)+` ng-pristine ng-untouched ng-valid ng-empty editable"><span class="idt-max-length__counter"></span></div>
				                <!----> 
				                <div class="idt-max-length__wrapper"><textarea class="project-step-description project-step-description`+(steps+1)+` project__textarea ng-pristine ng-untouched ng-valid ng-empty editable" idt-max-length="200" rows="1" placeholder="Step description"></textarea><span class="idt-max-length__counter"></span>
				                </div>
				            </div>
				            <!----> <!----> <!----> 
				        </div>
				    </li>
				    `);
				    $(".project-hiw__list").removeClass("list--"+steps);
	   				$(".project-hiw__list").addClass("list--"+(steps+1)).trigger('classChange');
	   				$(".project-hiw__list-item6 .project-hiw__image").attr("src", snapshot.val().ProjectStepImage6);
					$(".project-step-title6").val(snapshot.val().ProjectStepTitle6);
					$(".project-step-description6").val(snapshot.val().ProjectStepDescription6);
				}
				if (typeof(snapshot.val().ProjectStepTitle7) !== "undefined" && snapshot.val().ProjectStepTitle7 !== "") {
					var steps = 6;
					$(".project-hiw__list").append(`
					<li class="project-hiw__list-item project-hiw__list-item`+(steps+1)+`">
				        <div class="project-hiw">
				            <div class="project-hiw__wrap-image project-hiw__wrap-image-no-content">
				                <img class="project-hiw__image ng-hide"> 
				                <div class="project-hiw__image-number">`+(steps+1)+`</div>
				            </div>
				            <!---->
				            <div>
				                <idt-fs-upload-file type="image" class="upload-default" on-uploaded="onUploadedSteps($index)" on-error="onError" label="Add an image">
				                    <label type="button" class="button upload-file__btn" accept="image/*" for="inputFile`+(steps+1)+`">
				                        <input type="file" accept="image/*" class="input-file-hidden ng-pristine ng-untouched ng-valid ng-not-empty" id="inputFile`+(steps+1)+`" name="uploader"> <span></span> <span class="upload-file__progress">Add an image</span>
				                    </label>
				                </idt-fs-upload-file>
				                <span class="project-hiw__delete-icon"> 
				                	<div class="idt-icon">
				                		<i class="fas fa-trash"></i>
				                	</div> 
				                </span>
				                <!----> 
				                <div class="idt-max-length__wrapper"><input type="text" value="" idt-max-length="50" placeholder="Step title" class="project-step-title project-step-title`+(steps+1)+` ng-pristine ng-untouched ng-valid ng-empty editable"><span class="idt-max-length__counter"></span></div>
				                <!----> 
				                <div class="idt-max-length__wrapper"><textarea class="project-step-description project-step-description`+(steps+1)+` project__textarea ng-pristine ng-untouched ng-valid ng-empty editable" idt-max-length="200" rows="1" placeholder="Step description"></textarea><span class="idt-max-length__counter"></span>
				                </div>
				            </div>
				            <!----> <!----> <!----> 
				        </div>
				    </li>
				    `);
				    $(".project-hiw__list").removeClass("list--"+steps);
	   				$(".project-hiw__list").addClass("list--"+(steps+1)).trigger('classChange');
	   				$(".project-hiw__list-item7 .project-hiw__image").attr("src", snapshot.val().ProjectStepImage7);
					$(".project-step-title7").val(snapshot.val().ProjectStepTitle7);
					$(".project-step-description7").val(snapshot.val().ProjectStepDescription7);
				}
				if (typeof(snapshot.val().ProjectStepTitle8) !== "undefined" && snapshot.val().ProjectStepTitle8 !== "") {
					var steps = 7;
					$(".project-hiw__list").append(`
					<li class="project-hiw__list-item project-hiw__list-item`+(steps+1)+`">
				        <div class="project-hiw">
				            <div class="project-hiw__wrap-image project-hiw__wrap-image-no-content">
				                <img class="project-hiw__image ng-hide"> 
				                <div class="project-hiw__image-number">`+(steps+1)+`</div>
				            </div>
				            <!---->
				            <div>
				                <idt-fs-upload-file type="image" class="upload-default" on-uploaded="onUploadedSteps($index)" on-error="onError" label="Add an image">
				                    <label type="button" class="button upload-file__btn" accept="image/*" for="inputFile`+(steps+1)+`">
				                        <input type="file" accept="image/*" class="input-file-hidden ng-pristine ng-untouched ng-valid ng-not-empty" id="inputFile`+(steps+1)+`" name="uploader"> <span></span> <span class="upload-file__progress">Add an image</span>
				                    </label>
				                </idt-fs-upload-file>
				                <span class="project-hiw__delete-icon"> 
				                	<div class="idt-icon">
				                		<i class="fas fa-trash"></i>
				                	</div> 
				                </span>
				                <!----> 
				                <div class="idt-max-length__wrapper"><input type="text" value="" idt-max-length="50" placeholder="Step title" class="project-step-title project-step-title`+(steps+1)+` ng-pristine ng-untouched ng-valid ng-empty editable"><span class="idt-max-length__counter"></span></div>
				                <!----> 
				                <div class="idt-max-length__wrapper"><textarea class="project-step-description project-step-description`+(steps+1)+` project__textarea ng-pristine ng-untouched ng-valid ng-empty editable" idt-max-length="200" rows="1" placeholder="Step description"></textarea><span class="idt-max-length__counter"></span>
				                </div>
				            </div>
				            <!----> <!----> <!----> 
				        </div>
				    </li>
				    `);
				    $(".project-hiw__list").removeClass("list--"+steps);
	   				$(".project-hiw__list").addClass("list--"+(steps+1)).trigger('classChange');
	   				$(".project-hiw__list-item8 .project-hiw__image").attr("src", snapshot.val().ProjectStepImage8);
					$(".project-step-title8").val(snapshot.val().ProjectStepTitle8);
					$(".project-step-description8").val(snapshot.val().ProjectStepDescription8);
				}
				if (typeof(snapshot.val().ProjectStepTitle9) !== "undefined" && snapshot.val().ProjectStepTitle9 !== "") {
					var steps = 8;
					$(".project-hiw__list").append(`
					<li class="project-hiw__list-item project-hiw__list-item`+(steps+1)+`">
				        <div class="project-hiw">
				            <div class="project-hiw__wrap-image project-hiw__wrap-image-no-content">
				                <img class="project-hiw__image ng-hide"> 
				                <div class="project-hiw__image-number">`+(steps+1)+`</div>
				            </div>
				            <!---->
				            <div>
				                <idt-fs-upload-file type="image" class="upload-default" on-uploaded="onUploadedSteps($index)" on-error="onError" label="Add an image">
				                    <label type="button" class="button upload-file__btn" accept="image/*" for="inputFile`+(steps+1)+`">
				                        <input type="file" accept="image/*" class="input-file-hidden ng-pristine ng-untouched ng-valid ng-not-empty" id="inputFile`+(steps+1)+`" name="uploader"> <span></span> <span class="upload-file__progress">Add an image</span>
				                    </label>
				                </idt-fs-upload-file>
				                <span class="project-hiw__delete-icon"> 
				                	<div class="idt-icon">
				                		<i class="fas fa-trash"></i>
				                	</div> 
				                </span>
				                <!----> 
				                <div class="idt-max-length__wrapper"><input type="text" value="" idt-max-length="50" placeholder="Step title" class="project-step-title project-step-title`+(steps+1)+` ng-pristine ng-untouched ng-valid ng-empty editable"><span class="idt-max-length__counter"></span></div>
				                <!----> 
				                <div class="idt-max-length__wrapper"><textarea class="project-step-description project-step-description`+(steps+1)+` project__textarea ng-pristine ng-untouched ng-valid ng-empty editable" idt-max-length="200" rows="1" placeholder="Step description"></textarea><span class="idt-max-length__counter"></span>
				                </div>
				            </div>
				            <!----> <!----> <!----> 
				        </div>
				    </li>
				    `);
				    $(".project-hiw__list").removeClass("list--"+steps);
	   				$(".project-hiw__list").addClass("list--"+(steps+1)).trigger('classChange');
	   				$(".project-hiw__list-item9 .project-hiw__image").attr("src", snapshot.val().ProjectStepImage9);
					$(".project-step-title9").val(snapshot.val().ProjectStepTitle9);
					$(".project-step-description9").val(snapshot.val().ProjectStepDescription9);
				}

				callback();
			}

			function loadCounterAndAttachEvents() {
				if($(".project-step-title").val().length > 50){
			        val = $(".project-step-title").val().substr(0,50);
			        $(".project-step-title").val(val);
			    };
			    $(".project-step-title").next().html("" + (50-$(".project-step-title").val().length));

			    $(".project-step-title").on("keyup change", function() {
					if($(this).val().length > 50){
				        val = $(this).val().substr(0,50);
				        $(this).val(val);
				    };
					$(this).next().html("" + (50-$(this).val().length));
				});

			    if($(".project-step-description").val().length > 200){
			        val = $(".project-step-description").val().substr(0,200);
			        $(".project-step-description").val(val);
			    };
			    $(".project-step-description").next().html("" + (200-$(".project-step-description").val().length));

			    $(".project-step-description").on("keyup change", function() {
					if($(this).val().length > 200){
				        val = $(this).val().substr(0,200);
				        $(this).val(val);
				    };
					$(this).next().html("" + (200-$(this).val().length));
				});


				$(document).on("click touch", ".delete-step", function(e) {
					e.preventDefault();
					var steps = parseInt($(".project-hiw__list").attr('class').substr(-1), 10);
					$(".project-hiw__list").children().last().remove();
				    $(".project-hiw__list").removeClass("list--"+steps);
				    $(".project-hiw__list").addClass("list--"+(steps-1)).trigger('classChange');
				});

				if (parseInt($(".project-hiw__list").attr('class').substr(-1), 10) === 9) {
					$('.add-step').attr("disabled", "disabled");
				} else {
					$('.add-step').removeAttr("disabled");
				}
				if (parseInt($(".project-hiw__list").attr('class').substr(-1), 10) === 3) {
					$('.delete-step').attr("disabled", "disabled");
				} else {
					$('.delete-step').removeAttr("disabled");
				}

				$('.project-hiw__list').on('classChange', function() {
					if (parseInt($(".project-hiw__list").attr('class').substr(-1), 10) === 9) {
						$('.add-step').attr("disabled", "disabled");
					} else {
						$('.add-step').removeAttr("disabled");
					}
					if (parseInt($(".project-hiw__list").attr('class').substr(-1), 10) === 3) {
						$('.delete-step').attr("disabled", "disabled");
					} else {
						$('.delete-step').removeAttr("disabled");
					}
				});

				$(".input-file-hidden").change(function(e) {

					var uploadedStep = $(this);
					var stepNumber = uploadedStep.parent().parent().parent().parent().find(".project-hiw__image-number").html();

					var stepfiles = e.originalEvent.srcElement.files;

					stepfilesDict["step" + stepNumber] = stepfiles;

				    var file = stepfiles[0];

				    var reader = new FileReader();
				    reader.onloadend = function() {
						uploadedStep.parent().parent().parent().parent().find(".project-hiw__image").attr("src", reader.result);
						uploadedStep.parent().parent().parent().parent().find(".project-hiw__wrap-image").children().last().remove();
						uploadedStep.parent().parent().parent().parent().find(".project-hiw__wrap-image").append(`<div class="project-hiw__number" style=""> `+stepNumber+` </div>`)
						uploadedStep.parent().parent().parent().parent().find(".project-hiw__image").removeClass("ng-hide");
						uploadedStep.parent().parent().parent().parent().find(".project-hiw__image-number").addClass("ng-hide");
				    }
				    reader.readAsDataURL(file);
				});

				$(document).on("click touch", ".project-hiw__delete-icon .fa-trash", function(e) {
					e.preventDefault();
					$(this).parent().parent().parent().parent().find(".project-hiw__image").addClass("ng-hide");
				    $(this).parent().parent().parent().parent().find(".project-hiw__image-number").removeClass("ng-hide");
				    $(this).parent().parent().parent().parent().find(".project-hiw__wrap-image").children().last().remove();
				    $(this).parent().parent().parent().parent().find(".project-hiw__wrap-image").append(`<div class="project-hiw__image-number"> `+$(this).parent().parent().prev().find(".input-file-hidden").attr("id").substr(-1)+` </div>`)
				});
			}

			loadSteps(loadCounterAndAttachEvents);

			if (snapshot.val().PDF !== "") {
				$(".presentation-url").addClass("hollow");
				$(".pdf-file").removeClass("hollow");
				$(".pdf-file").parent().next().html(`
					<div class="project-tabs-content__note"> <span class="note-text">PDF document</span> </div>
			        <div class="project-tabs-content__input-container">
			        	<idt-fs-upload-file type="pdf" class="upload" name="presentationPDF" label="Upload PDF document" on-uploaded="onUploadedPresentation" on-error="onError">
			        		<label type="button" class="button upload-pdf upload-file__btn" accept="application/pdf, .pdf" for="inputFile48718" ng-disabled="disable">
			        			<input type="file" accept="application/pdf, .pdf" class="input-file-hidden input-file-hidden-pdf ng-pristine ng-untouched ng-valid ng-not-empty" id="inputFile48718" name="uploader">
			        			<span></span>
			        			<span class="upload-file__progress">Upload PDF document</span>
			        		</label>
			        	</idt-fs-upload-file>
			        	<button type="button" class="project-tabs-content__btn-delete ng-hide">
			        		<div class="idt-icon">
			        		<svg class="ideacon idea-ht-bin" style="width: 1.2rem; height: 1.2rem;">
			        		<use xlink:href="icons/ideacons-defs.svg#idea-ht-bin">
			        		</use></svg>
			        		</div>
			        	</button>
			        </div>
					`);
				$(".upload-pdf").children().last().html(decodeURIComponent(snapshot.val().PDF.replace("https://environmind.s3.eu-central-1.amazonaws.com/", "")));
			} else if (snapshot.val().Slides !== "") {
				$(".upload-slides").val(snapshot.val().Slides);
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
						if (response.roles.includes("student")) {
							var teammate_role = "Student";
						} else if (response.roles.includes("teacher")) {
							var teammate_role = "Teacher";
						} else if (response.roles.includes("parent")) {
							var teammate_role = "Parent";
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
				$("."+hiring[j].toLowerCase().replace(" ", "-").replace("/", "")).addClass("enabled");
				$("."+hiring[j].toLowerCase().replace(" ", "-").replace("/", "")).find(".project-hires__item__check").addClass("checked");
			}

			$(".personal-notes__textarea").val(snapshot.val().PersonalNotes);
		} else {
			$(".project-hiw__list").html(`<li class="project-hiw__list-item project-hiw__list-item1">
						                    <div class="project-hiw">
						                        <div class="project-hiw__wrap-image project-hiw__wrap-image-no-content">
						                            <img class="project-hiw__image ng-hide"> 
						                            <div class="project-hiw__image-number">1</div>
						                        </div>
						                        <!---->
						                        <div>
						                            <idt-fs-upload-file type="image" class="upload-default"on-error="onError" label="Add an image">
						                                <label type="button" class="button upload-file__btn" accept="image/*" for="inputFile1">
						                                    <input type="file" accept="image/*" class="input-file-hidden ng-pristine ng-untouched ng-valid ng-not-empty" id="inputFile1" name="uploader"> <span></span> <span class="upload-file__progress">Add an image</span>
						                                </label>
						                            </idt-fs-upload-file>
						                            <span class="project-hiw__delete-icon"> 
						                            	<div class="idt-icon">
						                            		<i class="fas fa-trash"></i>
						                            	</div> 
						                            </span>
						                            <!----> 
						                            <div class="idt-max-length__wrapper"><input type="text" value="" idt-max-length="50" placeholder="Step title" class="project-step-title project-step-title1 ng-pristine ng-untouched ng-valid ng-empty editable"><span class="idt-max-length__counter"></span></div>
						                            <!----> 
						                            <div class="idt-max-length__wrapper"><textarea class="project-step-description project-step-description1 project__textarea ng-pristine ng-untouched ng-valid ng-empty editable" idt-max-length="200" rows="1" placeholder="Step description"></textarea><span class="idt-max-length__counter"></span>
						                            </div>
						                        </div>
						                        <!----> <!----> <!----> 
						                    </div>
						                </li>
						                <!---->
						                <li class="project-hiw__list-item project-hiw__list-item2">
						                    <div class="project-hiw">
						                        <div class="project-hiw__wrap-image project-hiw__wrap-image-no-content">
						                            <img class="project-hiw__image ng-hide"> 
						                            <div class="project-hiw__image-number">2</div>
						                        </div>
						                        <!---->
						                        <div>
						                            <idt-fs-upload-file type="image" class="upload-default" on-uploaded="onUploadedSteps($index)" on-error="onError" label="Add an image">
						                                <label type="button" class="button upload-file__btn" accept="image/*" for="inputFile2">
						                                    <input type="file" accept="image/*" class="input-file-hidden ng-pristine ng-untouched ng-valid ng-not-empty" id="inputFile2" name="uploader"> <span></span> <span class="upload-file__progress">Add an image</span>
						                                </label>
						                            </idt-fs-upload-file>
						                            <span class="project-hiw__delete-icon"> 
						                            	<div class="idt-icon">
						                            		<i class="fas fa-trash"></i>
						                            	</div> 
						                            </span>
						                            <!----> 
						                            <div class="idt-max-length__wrapper"><input type="text" value="" idt-max-length="50" placeholder="Step title" class="project-step-title project-step-title2 ng-pristine ng-untouched ng-valid ng-empty editable"><span class="idt-max-length__counter"></span></div>
						                            <!----> 
						                            <div class="idt-max-length__wrapper"><textarea class="project-step-description project-step-description2 project__textarea ng-pristine ng-untouched ng-valid ng-empty editable" idt-max-length="200" rows="1" placeholder="Step description"></textarea><span class="idt-max-length__counter"></span>
						                            </div>
						                        </div>
						                        <!----> <!----> <!----> 
						                    </div>
						                </li>
						                <!---->
						                <li class="project-hiw__list-item project-hiw__list-item3">
						                    <div class="project-hiw">
						                        <div class="project-hiw__wrap-image project-hiw__wrap-image-no-content">
						                            <img class="project-hiw__image ng-hide"> 
						                            <div class="project-hiw__image-number">3</div>
						                        </div>
						                        <!---->
						                        <div>
						                            <idt-fs-upload-file type="image" class="upload-default" on-uploaded="onUploadedSteps($index)" on-error="onError" label="Add an image">
						                                <label type="button" class="button upload-file__btn" accept="image/*" for="inputFile3">
						                                    <input type="file" accept="image/*" class="input-file-hidden ng-pristine ng-untouched ng-valid ng-not-empty" id="inputFile3" name="uploader"> <span></span> <span class="upload-file__progress">Add an image</span>
						                                </label>
						                            </idt-fs-upload-file>
						                            <span class="project-hiw__delete-icon"> 
						                            	<div class="idt-icon">
						                            		<i class="fas fa-trash"></i>
						                            	</div> 
						                            </span>
						                            <!----> 
						                            <div class="idt-max-length__wrapper"><input type="text" value="" idt-max-length="50" placeholder="Step title" class="project-step-title project-step-title3 ng-pristine ng-untouched ng-valid ng-empty editable"><span class="idt-max-length__counter"></span></div>
						                            <!----> 
						                            <div class="idt-max-length__wrapper"><textarea class="project-step-description project-step-description3 project__textarea ng-pristine ng-untouched ng-valid ng-empty editable" idt-max-length="200" rows="1" placeholder="Step description"></textarea><span class="idt-max-length__counter"></span>
						                            </div>
						                        </div>
						                        <!----> <!----> <!----> 
						                    </div>
						                </li>`);
			if($(".project-step-title").val().length > 50){
		        val = $(".project-step-title").val().substr(0,50);
		        $(".project-step-title").val(val);
		    };
		    $(".project-step-title").next().html("" + (50-$(".project-step-title").val().length));

		    $(".project-step-title").on("keyup change", function() {
				if($(this).val().length > 50){
			        val = $(this).val().substr(0,50);
			        $(this).val(val);
			    };
				$(this).next().html("" + (50-$(this).val().length));
			});

		    if($(".project-step-description").val().length > 200){
		        val = $(".project-step-description").val().substr(0,200);
		        $(".project-step-description").val(val);
		    };
		    $(".project-step-description").next().html("" + (200-$(".project-step-description").val().length));

		    $(".project-step-description").on("keyup change", function() {
				if($(this).val().length > 200){
			        val = $(this).val().substr(0,200);
			        $(this).val(val);
			    };
				$(this).next().html("" + (200-$(this).val().length));
			});


			$(document).on("click touch", ".delete-step", function(e) {
				e.preventDefault();
				var steps = parseInt($(".project-hiw__list").attr('class').substr(-1), 10);
				$(".project-hiw__list").children().last().remove();
			    $(".project-hiw__list").removeClass("list--"+steps);
			    $(".project-hiw__list").addClass("list--"+(steps-1)).trigger('classChange');
			});

			if (parseInt($(".project-hiw__list").attr('class').substr(-1), 10) === 9) {
				$('.add-step').attr("disabled", "disabled");
			} else {
				$('.add-step').removeAttr("disabled");
			}
			if (parseInt($(".project-hiw__list").attr('class').substr(-1), 10) === 3) {
				$('.delete-step').attr("disabled", "disabled");
			} else {
				$('.delete-step').removeAttr("disabled");
			}
			$('.project-hiw__list').on('classChange', function() {
				if (parseInt($(".project-hiw__list").attr('class').substr(-1), 10) === 9) {
					$('.add-step').attr("disabled", "disabled");
				} else {
					$('.add-step').removeAttr("disabled");
				}
				if (parseInt($(".project-hiw__list").attr('class').substr(-1), 10) === 3) {
					$('.delete-step').attr("disabled", "disabled");
				} else {
					$('.delete-step').removeAttr("disabled");
				}
			});

			$(".input-file-hidden").change(function(e) {

				var uploadedStep = $(this);
				var stepNumber = uploadedStep.parent().parent().parent().parent().find(".project-hiw__image-number").html();

				var stepfiles = e.originalEvent.srcElement.files;

				stepfilesDict["step" + stepNumber] = stepfiles;

			    var file = stepfiles[0];

			    var reader = new FileReader();
			    reader.onloadend = function() {
					uploadedStep.parent().parent().parent().parent().find(".project-hiw__image").attr("src", reader.result);
					uploadedStep.parent().parent().parent().parent().find(".project-hiw__wrap-image").children().last().remove();
					uploadedStep.parent().parent().parent().parent().find(".project-hiw__wrap-image").append(`<div class="project-hiw__number" style=""> `+stepNumber+` </div>`)
					uploadedStep.parent().parent().parent().parent().find(".project-hiw__image").removeClass("ng-hide");
					uploadedStep.parent().parent().parent().parent().find(".project-hiw__image-number").addClass("ng-hide");
			    }
			    reader.readAsDataURL(file);
			});

			$(document).on("click touch", ".project-hiw__delete-icon .fa-trash", function(e) {
				e.preventDefault();
				$(this).parent().parent().parent().parent().find(".project-hiw__image").addClass("ng-hide");
			    $(this).parent().parent().parent().parent().find(".project-hiw__image-number").removeClass("ng-hide");
			    $(this).parent().parent().parent().parent().find(".project-hiw__wrap-image").children().last().remove();
			    $(this).parent().parent().parent().parent().find(".project-hiw__wrap-image").append(`<div class="project-hiw__image-number"> `+$(this).parent().parent().prev().find(".input-file-hidden").attr("id").substr(-1)+` </div>`)
			});
		}
	// }
});

function insertData() {

	// var queryParams = {
	// 	ExpressionAttributeValues: {
	// 		':id': {S: projectID}
	// 	},
	// 	KeyConditionExpression: 'ProjectID = :id',
	// 	ProjectionExpression: 'ProjectID, Author, ImageBG, YoutubeBG, Logo, PDF, ProjectStepImage1, ProjectStepImage2, ProjectStepImage3, ProjectStepImage4, ProjectStepImage5, ProjectStepImage6, ProjectStepImage7, ProjectStepImage8, ProjectStepImage9',
	// 	TableName: 'Projects'
	// };

	// dynamodb.query(queryParams, function(err, data) {
	// 	if (err) {
	// 		console.log("Error", err);
	// 	} else {

	db.ref('/projects/' + projectID).once('value').then(function(snapshot) {

		// var currentDate = new Date();

		var checkedTracks = $(".checked");
		var checkedCSV = "";
		for (var i = 0; i < checkedTracks.length; i++) {
			if (checkedTracks[i].getAttribute("id")) {
				checkedCSV += checkedTracks[i].getAttribute("id") + ",";
			}
			checkedCSV.replace(",null", "");
		}
		checkedCSV = checkedCSV.slice(0, -1);

		var hiringCSV = "";
		var hiringList = $(".project-hires__item.enabled");
		for (var i = 0; i < hiringList.length; i++) {
			hiringCSV += $(hiringList[i]).children().first().html() + ",";
		}
		hiringCSV = hiringCSV.slice(0, -1);

		var teammatesCSV = "";
		var teammatesList = $(".idt-user-information__id");
		for (var i = 0; i < teammatesList.length; i++) {
			teammatesCSV += $(teammatesList[i]).attr("id") + ",";
		}
		teammatesCSV = teammatesCSV.slice(0, -1);
		if ($(".project-step-title4").length === 0) {
			var projectsteptitle4 = "";
		} else {
			var projectsteptitle4 = $(".project-step-title4").val();
		}
		if ($(".project-step-title5").length === 0) {
			var projectsteptitle5 = "";
		} else {
			var projectsteptitle5 = $(".project-step-title5").val();
		}
		if ($(".project-step-title6").length === 0) {
			var projectsteptitle6 = "";
		} else {
			var projectsteptitle6 = $(".project-step-title6").val();
		}
		if ($(".project-step-title7").length === 0) {
			var projectsteptitle7 = "";
		} else {
			var projectsteptitle7 = $(".project-step-title7").val();
		}
		if ($(".project-step-title8").length === 0) {
			var projectsteptitle8 = "";
		} else {
			var projectsteptitle8 = $(".project-step-title8").val();
		}
		if ($(".project-step-title9").length === 0) {
			var projectsteptitle9 = "";
		} else {
			var projectsteptitle9 = $(".project-step-title9").val();
		}
		if ($(".project-step-description4").length === 0) {
			var projectstepdescription4 = "";
		} else {
			var projectstepdescription4 = $(".project-step-description4").val();
		}
		if ($(".project-step-description5").length === 0) {
			var projectstepdescription5 = "";
		} else {
			var projectstepdescription5 = $(".project-step-description5").val();
		}
		if ($(".project-step-description6").length === 0) {
			var projectstepdescription6 = "";
		} else {
			var projectstepdescription6 = $(".project-step-description6").val();
		}
		if ($(".project-step-description7").length === 0) {
			var projectstepdescription7 = "";
		} else {
			var projectstepdescription7 = $(".project-step-description7").val();
		}
		if ($(".project-step-description8").length === 0) {
			var projectstepdescription8 = "";
		} else {
			var projectstepdescription8 = $(".project-step-description8").val();
		}
		if ($(".project-step-description9").length === 0) {
			var projectstepdescription9 = "";
		} else {
			var projectstepdescription9 = $(".project-step-description9").val();
		}
		if (typeof imageBGfiles !== 'undefined' && imageBGfiles.length) {
			var imageBGfile = imageBGfiles[0];
			var imageBGfileNameURL = "https://environmind.s3.eu-central-1.amazonaws.com/" + encodeURIComponent(imageBGfile.name + "-from-" + projectIDemail).replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A');
			var youtubeBGURL = "";
		} else {
			if (snapshot.val() !== null && typeof snapshot.val().ImageBG !== 'undefined' && snapshot.val().ImageBG !== "") {
				var imageBGfileNameURL = snapshot.val().ImageBG.S;
			} else {
				var imageBGfileNameURL = "";
			}
		}
		if ($("#youtubeID").length) {
			var youtubeBGURL = $("#youtubeID").val();
			var imageBGfileNameURL = "";
		} else {
			if (snapshot.val() !== null && typeof snapshot.val().YoutubeBG !== 'undefined' && snapshot.val().YoutubeBG !== "") {
				var youtubeBGURL = snapshot.val().YoutubeBG.S;
			} else {
				var youtubeBGURL = "";
			}
		}
		if (typeof logofiles !== 'undefined' && logofiles.length) {
			var logofile = logofiles[0];
			var logofileNameURL = "https://environmind.s3.eu-central-1.amazonaws.com/" + encodeURIComponent(logofile.name + "-from-" + projectIDemail).replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A');
		} else {
			if (snapshot.val() !== null && typeof snapshot.val().Logo !== 'undefined' && snapshot.val().Logo !== "") {
				var logofileNameURL = snapshot.val().Logo;
			} else {
				var logofileNameURL = "";
			}
		}
		if (typeof pdffiles !== 'undefined' && pdffiles.length) {
			var pdffile = pdffiles[0];
			var pdffileNameURL = "https://environmind.s3.eu-central-1.amazonaws.com/" + encodeURIComponent(pdffile.name + "-from-" + projectIDemail).replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A');
		} else {
			if (snapshot.val() !== null && typeof snapshot.val().PDF !== 'undefined' && snapshot.val().PDF !== "") {
				var pdffileNameURL = snapshot.val().PDF;
			} else {
				var pdffileNameURL = "";
			}
		}
		if (stepfilesDict["step1"] !== "") {
			var step1file = stepfilesDict["step1"][0];
			var step1fileNameURL = "https://environmind.s3.eu-central-1.amazonaws.com/" + encodeURIComponent(step1file.name + "-from-" + projectIDemail).replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A');
		} else {
			if (snapshot.val() !== null && typeof snapshot.val().ProjectStepImage1 !== 'undefined' && snapshot.val().ProjectStepImage1 !== "") {
				var step1fileNameURL = snapshot.val().ProjectStepImage1;
			} else {
				var step1fileNameURL = "";
			}
		}
		if (stepfilesDict["step2"] !== "") {
			var step2file = stepfilesDict["step2"][0];
			var step2fileNameURL = "https://environmind.s3.eu-central-1.amazonaws.com/" + encodeURIComponent(step2file.name + "-from-" + projectIDemail).replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A');
		} else {
			if (snapshot.val() !== null && typeof snapshot.val().ProjectStepImage2 !== 'undefined' && snapshot.val().ProjectStepImage2 !== "") {
				var step2fileNameURL = snapshot.val().ProjectStepImage2;
			} else {
				var step2fileNameURL = "";
			}
		}
		if (stepfilesDict["step3"] !== "") {
			var step3file = stepfilesDict["step3"][0];
			var step3fileNameURL = "https://environmind.s3.eu-central-1.amazonaws.com/" + encodeURIComponent(step3file.name + "-from-" + projectIDemail).replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A');
		} else {
			if (snapshot.val() !== null && typeof snapshot.val().ProjectStepImage3 !== 'undefined' && snapshot.val().ProjectStepImage3 !== "") {
				var step3fileNameURL = snapshot.val().ProjectStepImage3;
			} else {
				var step3fileNameURL = "";
			}
		}
		if (stepfilesDict["step4"] !== "") {
			var step4file = stepfilesDict["step4"][0];
			var step4fileNameURL = "https://environmind.s3.eu-central-1.amazonaws.com/" + encodeURIComponent(step4file.name + "-from-" + projectIDemail).replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A');
		} else {
			if (snapshot.val() !== null && typeof snapshot.val().ProjectStepImage4 !== 'undefined' && snapshot.val().ProjectStepImage4 !== "") {
				var step4fileNameURL = snapshot.val().ProjectStepImage4;
			} else {
				var step4fileNameURL = "";
			}
		}
		if (stepfilesDict["step5"] !== "") {
			var step5file = stepfilesDict["step5"][0];
			var step5fileNameURL = "https://environmind.s3.eu-central-1.amazonaws.com/" + encodeURIComponent(step5file.name + "-from-" + projectIDemail).replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A');
		} else {
			if (snapshot.val() !== null && typeof snapshot.val().ProjectStepImage5 !== 'undefined' && snapshot.val().ProjectStepImage5 !== "") {
				var step5fileNameURL = snapshot.val().ProjectStepImage5;
			} else {
				var step5fileNameURL = "";
			}
		}
		if (stepfilesDict["step6"] !== "") {
			var step6file = stepfilesDict["step6"][0];
			var step6fileNameURL = "https://environmind.s3.eu-central-1.amazonaws.com/" + encodeURIComponent(step6file.name + "-from-" + projectIDemail).replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A');
		} else {
			if (snapshot.val() !== null && typeof snapshot.val().ProjectStepImage6 !== 'undefined' && snapshot.val().ProjectStepImage6 !== "") {
				var step6fileNameURL = snapshot.val().ProjectStepImage6;
			} else {
				var step6fileNameURL = "";
			}
		}
		if (stepfilesDict["step7"] !== "") {
			var step7file = stepfilesDict["step7"][0];
			var step7fileNameURL = "https://environmind.s3.eu-central-1.amazonaws.com/" + encodeURIComponent(step7file.name + "-from-" + projectIDemail).replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A');
		} else {
			if (snapshot.val() !== null && typeof snapshot.val().ProjectStepImage7 !== 'undefined' && snapshot.val().ProjectStepImage7 !== "") {
				var step7fileNameURL = snapshot.val().ProjectStepImage7;
			} else {
				var step7fileNameURL = "";
			}
		}
		if (stepfilesDict["step8"] !== "") {
			var step8file = stepfilesDict["step8"][0];
			var step8fileNameURL = "https://environmind.s3.eu-central-1.amazonaws.com/" + encodeURIComponent(step8file.name + "-from-" + projectIDemail).replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A');
		} else {
			if (snapshot.val() !== null && typeof snapshot.val().ProjectStepImage8 !== 'undefined' && snapshot.val().ProjectStepImage8 !== "") {
				var step8fileNameURL = snapshot.val().ProjectStepImage8;
			} else {
				var step8fileNameURL = "";
			}
		}
		if (stepfilesDict["step9"] !== "") {
			var step9file = stepfilesDict["step9"][0];
			var step9fileNameURL = "https://environmind.s3.eu-central-1.amazonaws.com/" + encodeURIComponent(step9file.name + "-from-" + projectIDemail).replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A');
		} else {
			if (snapshot.val() !== null && typeof snapshot.val().ProjectStepImage9 !== 'undefined' && snapshot.val().ProjectStepImage9 !== "") {
				var step9fileNameURL = snapshot.val().ProjectStepImage9;
			} else {
				var step9fileNameURL = "";
			}
		}

		db.ref('projects/' + projectID).update({
		    'ProjectID': projectID,
			'Author': projectIDemail,
			'Title': $(".project-title").val() || "",
			'CreatedAt': firebase.database.ServerValue.TIMESTAMP,
			'Website': $(".app-url").val() || "",
			'Description': $(".project-tweet").val() || "",
			'ImageBG': imageBGfileNameURL,
			'YoutubeBG': youtubeBGURL,
			'Logo': logofileNameURL,
			'Tracks': checkedCSV,
			'Issue': $(".the-issue").val() || "",
			'Solution': $(".the-solution").val() || "",
			'ProjectStepImage1': step1fileNameURL,
			'ProjectStepImage2': step2fileNameURL,
			'ProjectStepImage3': step3fileNameURL,
			'ProjectStepImage4': step4fileNameURL,
			'ProjectStepImage5': step5fileNameURL,
			'ProjectStepImage6': step6fileNameURL,
			'ProjectStepImage7': step7fileNameURL,
			'ProjectStepImage8': step8fileNameURL,
			'ProjectStepImage9': step9fileNameURL,
			'ProjectStepTitle1': $(".project-step-title1").val() || "",
			'ProjectStepTitle2': $(".project-step-title2").val() || "",
			'ProjectStepTitle3': $(".project-step-title3").val() || "",
			'ProjectStepTitle4': projectsteptitle4,
			'ProjectStepTitle5': projectsteptitle5,
			'ProjectStepTitle6': projectsteptitle6,
			'ProjectStepTitle7': projectsteptitle7,
			'ProjectStepTitle8': projectsteptitle8,
			'ProjectStepTitle9': projectsteptitle9,
			'ProjectStepDescription1': $(".project-step-description1").val() || "",
			'ProjectStepDescription2': $(".project-step-description2").val() || "",
			'ProjectStepDescription3': $(".project-step-description3").val() || "",
			'ProjectStepDescription4': projectstepdescription4,
			'ProjectStepDescription5': projectstepdescription5,
			'ProjectStepDescription6': projectstepdescription6,
			'ProjectStepDescription7': projectstepdescription7,
			'ProjectStepDescription8': projectstepdescription8,
			'ProjectStepDescription9': projectstepdescription9,
			'PDF': pdffileNameURL,
			'Slides': $(".upload-slides").val() || "",
			'Teammates': teammatesCSV,
			'Hiring': hiringCSV,
			'PersonalNotes': $(".personal-notes__textarea").val() || ""
		})
		.then(function() {
		    console.log("Document successfully written!");
		    $("button.save").html("Save");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});

	});
		    // if (data.Items.length === 0) {
				// var itemParams = {
				// 	TableName: 'Projects',
				// 	Item: {
				// 		'ProjectID': {S: projectID},
				// 		'Author': {S: projectIDemail},
				// 		'Title': {S: $(".project-title").val()},
				// 		'CreatedAt': {S: "" + currentDate.getUTCFullYear() + (currentDate.getUTCMonth()+1) + currentDate.getUTCDate() + currentDate.getUTCHours() + currentDate.getUTCMinutes() + currentDate.getUTCSeconds()},
				// 		'Website': {S: $(".app-url").val()},
				// 		'Description': {S: $(".project-tweet").val()},
				// 		'ImageBG': {S: imageBGfileNameURL},
				// 		'YoutubeBG': {S: youtubeBGURL},
				// 		'Logo': {S: logofileNameURL},
				// 		'Tracks': {S: checkedCSV},
				// 		'Issue': {S: $(".the-issue").val()},
				// 		'Solution': {S: $(".the-solution").val()},
				// 		'ProjectStepImage1': {S: step1fileNameURL},
				// 		'ProjectStepImage2': {S: step2fileNameURL},
				// 		'ProjectStepImage3': {S: step3fileNameURL},
				// 		'ProjectStepImage4': {S: step4fileNameURL},
				// 		'ProjectStepImage5': {S: step5fileNameURL},
				// 		'ProjectStepImage6': {S: step6fileNameURL},
				// 		'ProjectStepImage7': {S: step7fileNameURL},
				// 		'ProjectStepImage8': {S: step8fileNameURL},
				// 		'ProjectStepImage9': {S: step9fileNameURL},
				// 		'ProjectStepTitle1': {S: $(".project-step-title1").val()},
				// 		'ProjectStepTitle2': {S: $(".project-step-title2").val()},
				// 		'ProjectStepTitle3': {S: $(".project-step-title3").val()},
				// 		'ProjectStepTitle4': {S: projectsteptitle4},
				// 		'ProjectStepTitle5': {S: projectsteptitle5},
				// 		'ProjectStepTitle6': {S: projectsteptitle6},
				// 		'ProjectStepTitle7': {S: projectsteptitle7},
				// 		'ProjectStepTitle8': {S: projectsteptitle8},
				// 		'ProjectStepTitle9': {S: projectsteptitle9},
				// 		'ProjectStepDescription1': {S: $(".project-step-description1").val()},
				// 		'ProjectStepDescription2': {S: $(".project-step-description2").val()},
				// 		'ProjectStepDescription3': {S: $(".project-step-description3").val()},
				// 		'ProjectStepDescription4': {S: projectstepdescription4},
				// 		'ProjectStepDescription5': {S: projectstepdescription5},
				// 		'ProjectStepDescription6': {S: projectstepdescription6},
				// 		'ProjectStepDescription7': {S: projectstepdescription7},
				// 		'ProjectStepDescription8': {S: projectstepdescription8},
				// 		'ProjectStepDescription9': {S: projectstepdescription9},
				// 		'PDF': {S: pdffileNameURL},
				// 		'Slides': {S: $(".upload-slides").val()},
				// 		'Teammates': {S: teammatesCSV},
				// 		'Hiring': {S: hiringCSV},
				// 		'PersonalNotes': {S: $(".personal-notes__textarea").val()}

				// 	}
				// };



				// dynamodb.putItem(itemParams, function(err, data) {
				// 	if (err) {
				// 		console.log("Error", err);
				// 	} else {
				// 		console.log("Success", data);
				// 		$("button.save").html("Save");
				// 	}
				// });
		  //   } else {
	   //  		var updateParams = {
				//     TableName: "Projects",
				//     Key:{
				//         "ProjectID": {S: snapshot.val().ProjectID.S}
				//     },
				//     UpdateExpression: `set Author = :author,
				//     						Title = :title, 
				//     						Website = :website, 
				//     						Description = :desc,
				//     						ImageBG = :imagebg,
				// 							YoutubeBG = :youtubebg,
				// 							Logo = :logo,
				//     						Tracks = :tracks, 
				//     						Issue = :issue, 
				//     						Solution = :solution,
				//     						ProjectStepImage1 = :projectstepimage1,
				//     						ProjectStepImage2 = :projectstepimage2,
				//     						ProjectStepImage3 = :projectstepimage3,
				//     						ProjectStepImage4 = :projectstepimage4,
				//     						ProjectStepImage5 = :projectstepimage5,
				//     						ProjectStepImage6 = :projectstepimage6,
				//     						ProjectStepImage7 = :projectstepimage7,
				//     						ProjectStepImage8 = :projectstepimage8,
				//     						ProjectStepImage9 = :projectstepimage9,
				//     						ProjectStepTitle1 = :projectsteptitle1,
				//     						ProjectStepTitle2 = :projectsteptitle2,
				//     						ProjectStepTitle3 = :projectsteptitle3,
				//     						ProjectStepTitle4 = :projectsteptitle4,
				//     						ProjectStepTitle5 = :projectsteptitle5,
				//     						ProjectStepTitle6 = :projectsteptitle6,
				//     						ProjectStepTitle7 = :projectsteptitle7,
				//     						ProjectStepTitle8 = :projectsteptitle8,
				//     						ProjectStepTitle9 = :projectsteptitle9,
				//     						ProjectStepDescription1 = :projectstepdescription1,
				//     						ProjectStepDescription2 = :projectstepdescription2,
				//     						ProjectStepDescription3 = :projectstepdescription3,
				//     						ProjectStepDescription4 = :projectstepdescription4,
				//     						ProjectStepDescription5 = :projectstepdescription5,
				//     						ProjectStepDescription6 = :projectstepdescription6,
				//     						ProjectStepDescription7 = :projectstepdescription7,
				//     						ProjectStepDescription8 = :projectstepdescription8,
				//     						ProjectStepDescription9 = :projectstepdescription9,
				//     						PDF = :pdf,
				//     						Slides = :slides,
				//     						Teammates = :teammates,
				//     						Hiring = :hiring,
				//     						PersonalNotes = :personalnotes`,
				//     ExpressionAttributeValues:{
				//     	":author": {S: projectIDemail},
				//     	":title": {S: $(".project-title").val()},
				//         ":website": {S: $(".app-url").val()},
				//         ":desc": {S: $(".project-tweet").val()},
				//         ":imagebg": {S: imageBGfileNameURL},
				// 		":youtubebg": {S: youtubeBGURL},
				// 		":logo": {S: logofileNameURL},
				//         ":tracks": {S: checkedCSV},
				//         ":issue": {S: $(".the-issue").val()},
				//         ":solution": {S: $(".the-solution").val()},
				//         ":projectstepimage1": {S: step1fileNameURL},
				// 		":projectstepimage2": {S: step2fileNameURL},
				// 		":projectstepimage3": {S: step3fileNameURL},
				// 		":projectstepimage4": {S: step4fileNameURL},
				// 		":projectstepimage5": {S: step5fileNameURL},
				// 		":projectstepimage6": {S: step6fileNameURL},
				// 		":projectstepimage7": {S: step7fileNameURL},
				// 		":projectstepimage8": {S: step8fileNameURL},
				// 		":projectstepimage9": {S: step9fileNameURL},
				//         ":projectsteptitle1": {S: $(".project-step-title1").val()},
				// 		":projectsteptitle2": {S: $(".project-step-title2").val()},
				// 		":projectsteptitle3": {S: $(".project-step-title3").val()},
				// 		":projectsteptitle4": {S: projectsteptitle4},
				// 		":projectsteptitle5": {S: projectsteptitle5},
				// 		":projectsteptitle6": {S: projectsteptitle6},
				// 		":projectsteptitle7": {S: projectsteptitle7},
				// 		":projectsteptitle8": {S: projectsteptitle8},
				// 		":projectsteptitle9": {S: projectsteptitle9},
				// 		":projectstepdescription1": {S: $(".project-step-description1").val()},
				// 		":projectstepdescription2": {S: $(".project-step-description2").val()},
				// 		":projectstepdescription3": {S: $(".project-step-description3").val()},
				// 		":projectstepdescription4": {S: projectstepdescription4},
				// 		":projectstepdescription5": {S: projectstepdescription5},
				// 		":projectstepdescription6": {S: projectstepdescription6},
				// 		":projectstepdescription7": {S: projectstepdescription7},
				// 		":projectstepdescription8": {S: projectstepdescription8},
				// 		":projectstepdescription9": {S: projectstepdescription9},
				// 		':pdf': {S: pdffileNameURL},
				//         ':slides': {S: $(".upload-slides").val()},
				//         ":teammates": {S: teammatesCSV},
				//         ":hiring": {S: hiringCSV},
				//         ":personalnotes": {S: $(".personal-notes__textarea").val()}
				//     },
				//     ReturnValues:"UPDATED_NEW"
				// };
				// dynamodb.updateItem(updateParams, function(err, data) {
				//     if (err) {
				//         console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
				//     } else {
				//         //console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
				//         console.log("UpdateItem succeeded");
				//         $("button.save").html("Save")
				//     }
				// });
		  //   }
	// 	}
	// });
}

$("button.save").click( function() {
	$("button.save").html("Saving...");
	if (typeof imageBGfiles !== 'undefined' && imageBGfiles.length) {
		var imageBGfile = imageBGfiles[0];
		var imageBGfileName = imageBGfile.name;
		var upload = new AWS.S3.ManagedUpload({
			params: {
				Bucket: "environmind",
				Key: imageBGfileName + "-from-" + projectIDemail,
				Body: imageBGfile,
				ACL: "public-read"
			}
		});
		var promise = upload.promise();
		promise.then(
			function(data) {
				console.log("Successfully uploaded background photo.");
			},
			function(err) {
				console.log("There was an error uploading your photo: ", err.message);
			}
		);
	}

	if (typeof logofiles !== 'undefined' && logofiles.length) {
		var logofile = logofiles[0];
		var logofileName = logofile.name;
		var upload = new AWS.S3.ManagedUpload({
			params: {
				Bucket: "environmind",
				Key: logofileName + "-from-" + projectIDemail,
				Body: logofile,
				ACL: "public-read"
			}
		});
		var promise = upload.promise();
		promise.then(
			function(data) {
				console.log("Successfully uploaded logo.");
			},
			function(err) {
				console.log("There was an error uploading the logo: ", err.message);
			}
		);
	}

	if (typeof pdffiles !== 'undefined' && pdffiles.length) {
		var pdffile = pdffiles[0];
		var pdffileName = pdffile.name;
		var upload = new AWS.S3.ManagedUpload({
			params: {
				Bucket: "environmind",
				Key: pdffileName + "-from-" + projectIDemail,
				Body: pdffile,
				ACL: "public-read"
			}
		});
		var promise = upload.promise();
		promise.then(
			function(data) {
				console.log("Successfully uploaded PDF.");
			},
			function(err) {
				console.log("There was an error uploading the PDF: ", err.message);
			}
		);
	}

	for (var i = 1; i < 10; i++) {
		if (stepfilesDict["step"+i] !== "") {
			var stepfile = stepfilesDict["step"+i][0];
			var stepfileName = stepfile.name;
			var upload = new AWS.S3.ManagedUpload({
				params: {
					Bucket: "environmind",
					Key: stepfileName + "-from-" + projectIDemail,
					Body: stepfile,
					ACL: "public-read"
				}
			});
			var promise = upload.promise();
			promise.then(
				function(data) {
					console.log("Successfully uploaded step.");
				},
				function(err) {
					console.log("There was an error uploading the step: ", err.message);
				}
			);
		}
	}

	// dynamodb.listTables({Limit: 10}, function(err, data) {
	// 	if (err) {
	// 		console.log("Error", err);
	// 	} else {
	// 		var projectsTableFound = false;
	// 		for (var i = 0; i < data.TableNames.length; i++) {
	// 			tableName = data.TableNames[i]
	// 			if (tableName === 'Projects') {
	// 				projectsTableFound = true;
	// 			}
	// 		}
	// 		if (projectsTableFound === false) {
	// 			var tableParams = {
	// 				AttributeDefinitions: [
	// 				{
	// 					AttributeName: 'ProjectID',
	// 					AttributeType: 'S'
	// 				}
	// 				],
	// 				KeySchema: [
	// 				{
	// 					AttributeName: 'ProjectID',
	// 					KeyType: 'HASH'
	// 				}
	// 				],
	// 				ProvisionedThroughput: {
	// 					ReadCapacityUnits: 1,
	// 					WriteCapacityUnits: 1
	// 				},
	// 				TableName: 'Projects',
	// 				StreamSpecification: {
	// 					StreamEnabled: false
	// 				}
	// 			};

	// 			dynamodb.createTable(tableParams, function(err, data) {
	// 				if (err) {
	// 					console.log("Error", err);
	// 				} else {
	// 					console.log("Table Created", data);

	// 					dynamodb.waitFor('tableExists', {TableName: 'Projects'}, (err, data) => {
	// 				        if (err) console.log(err, err.stack);
	// 				        else insertData();
	// 				    });
	// 				}
	// 			});
	// 		} else {
	// 			insertData();
	// 		}
	// 	}
	// });
	insertData();
});

$("button.view").click( function() {
	$.ajax({
		type : "GET",
		url : "/wp-json/wp/v2/viewmode",
		error: function(error) {
			console.log("Error while listing existing ideas in viewmode: ");
			console.log(error);
		},
		success: function(response) {
			existing_viewmodes = [];
			if (response.length > 0) {
				for (var i = 0; i < response.length; i++) {
					var url = response[i].link.replace(/\/$/, '');
					existing_viewmodes += url.substr(url.lastIndexOf('/') + 1);
				}
			}
			if (existing_viewmodes.includes(projectID)) {
				window.location.href = "/viewmode/"+projectID;
			} else {
				$.ajax({
					type : "POST",
					dataType : "json",
					url : "/wp-json/wp/v2/viewmode",
					data : {_wpnonce: nonce, title: projectID, status: "publish", content: projectIDemail, template: "viewmode.php"},
					error: function(error) {
						console.log("Error while creating idea: " + error);
					},
					success: function(response) {
						console.log("Idea created.");
						window.location.href = "/viewmode/"+projectID;
					}
				});
			}
		}
	});
});

$(".idt-switch").click( function() {
	if ($(".idt-switch__inner").attr("class").substr(-1) === "f") {
		$.ajax({
			type : "GET",
			url : "/wp-json/wp/v2/projects",
			error: function(error) {
				console.log("Error while listing existing ideas in projects: ");
				console.log(error);
			},
			success: function(response) {
				existing_projects = [];
				if (response.length > 0) {
					for (var i = 0; i < response.length; i++) {
						var url = response[i].link.replace(/\/$/, '');
						existing_projects += url.substr(url.lastIndexOf('/') + 1);
					}
				}
				if (existing_projects.includes(($(".project-title").val()).toLowerCase().replace(/ /g, '-'))) {
					alert("A project with this name already exists!");
				} else {
					$.ajax({
						type : "POST",
						dataType : "json",
						url : "/wp-json/wp/v2/projects",
						data : {_wpnonce: nonce, title: $(".project-title").val(), status: "publish", content: projectID+","+projectIDemail, template: "publishidea.php"},
						error: function(error) {
							console.log("Error while publishing project: " + error);
						},
						success: function(response) {
							console.log("Project published.");
							$(".idt-switch__inner").toggleClass("on");
							$(".idt-switch__inner").toggleClass("off");
							$(".idt-switch__btn").toggleClass("on");
							$(".idt-switch__btn").toggleClass("off");
						}
			        });
				}
			}
		});
	} else {
		$.ajax({
			type : "GET",
			url : "/wp-json/wp/v2/projects",
			error: function(error) {
				console.log("Error while listing existing ideas in projects: ");
				console.log(error);
			},
			success: function(response) {
				existing_projects = {};
				if (response.length > 0) {
					for (var i = 0; i < response.length; i++) {
						var url = response[i].link.replace(/\/$/, '');
						existing_projects[url.substr(url.lastIndexOf('/') + 1)] = response[i].id;
					}
				}
				$.ajax({
					type : "DELETE",
					dataType : "json",
					url : "/wp-json/wp/v2/projects/"+existing_projects[$(".project-title").val().toLowerCase().replace(/ /g, '-')],
					beforeSend: function ( xhr ) {
				        xhr.setRequestHeader( 'X-WP-Nonce', nonce );
				    },
					error: function(error) {
						console.log("Error while deleting project: " + error);
					},
					success: function(response) {
						console.log("Project deleted.");
						$(".idt-switch__inner").toggleClass("on");
						$(".idt-switch__inner").toggleClass("off");
						$(".idt-switch__btn").toggleClass("on");
						$(".idt-switch__btn").toggleClass("off");
					}
		        });
			}
		});
	}
});