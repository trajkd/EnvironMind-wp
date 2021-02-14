<?php
/**
 * Template Name: Edit idea
 * Template Post Type: page, editidea
 **/
if ( !is_user_logged_in() ){ header( "Location: /member/login" ); die; } ?>
<!DOCTYPE html>
<html lang="en" style="--vh:6.21px;">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <style class="vjs-styles-defaults">
            .video-js {
            width: 300px;
            height: 150px;
            }
            .vjs-fluid {
            padding-top: 56.25%
            }
        </style>
        <style type="text/css">@charset "UTF-8"</style>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta content="yes" name="apple-mobile-web-app-capable">
        <meta content="minimum-scale=1.0, width=device-width, maximum-scale=1, user-scalable=no" name="viewport">
        <meta name="robots" content="index, follow">
        <title>Add idea - <?php bloginfo( 'name' ) ?></title>
        <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/header.css">
        <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/ck.css">
        <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/ot.css">
        <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/vue.css">
        <link href="/wp-content/themes/EnvironMind-wp/static/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet" href="/wp-content/themes/EnvironMind-wp/static/css/app.css">
        <link rel="stylesheet" href="/wp-content/themes/EnvironMind-wp/static/css/css2.css">
        <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/idt-room.css">
        <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/idt-chat.css">
        <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/idt-room-message.css">
        <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/idt-history.css">
        <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/idt-user-list.css">
        <style>
            :root {
            --main-color-hue: 360;
            --main-color-saturation: 60%;
            --main-color-lightness: 50%;
            --title-font-family: Alata, serif;
            --text-font-family: Roboto, sans-serif;
            }
            .Ideas {
            	color: #ff0007;
            }
        </style>
        <meta name="title" content="<?php bloginfo( 'name' ) ?>">
        <style id="vue-line-clamp">.vue-line-clamp{
            display: block;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            overflow: hidden;
            word-break: break-all;
            text-overflow: ellipsis;
            }
        </style>
        <link href="/wp-content/themes/EnvironMind-wp/static/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
        <link href='https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" href="/wp-content/themes/EnvironMind-wp/static/fonts/font-awesome.min.css">
        <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/boffi.css">
        <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/style.css">
        <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/static.css">
        <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/dipaolo.css">
        <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/dipaolo2.css">
        <link href="/wp-content/themes/EnvironMind-wp/static/css/clean-blog.css" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/lago.css">
        <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/lago-style.css">
        <script src="/wp-content/themes/EnvironMind-wp/static/js/main.js"></script>
        <script src="https://kit.fontawesome.com/4c0b3ae1d6.js" crossorigin="anonymous"></script>
        <script type="text/javascript">
        	var url = window.location.href.replace(/\/$/, '');
        	var projectID = url.substr(url.lastIndexOf('/') + 1);
        	var projectIDemail = "<?php echo esc_html( $current_user->user_email ); ?>";
        	var nonce = "<?php echo wp_create_nonce('wp_rest'); ?>";
        </script>
    </head>
    <body id="app" class="">
    	<div id="sidebar-section-peripherial">
    		<?php get_sidebar(); ?>
	        <idt-page>
	            <div class="idt-page">
	                <div class="page__content" style="">
	                    <div class="project">
	                        <!---->
	                        <div class="project-tools open deadline">
	                            <div class="project-tools__content">
	                                <div class="project-tools__title"> Edit mode </div>
	                                <div class="project-tools__wrap">
	                                    <!---->
	                                    <div>
	                                        <!---->
	                                        <idt-switch model="project.published" ontoggle="togglePublish()" label-on="Published" label-off="Draft">
	                                            <div class="idt-switch" style="width: 134px; cursor: default;">
	                                                <div class="idt-switch__inner off"> <span class="idt-switch__label idt-switch__label--on">Published</span> <span class="idt-switch__label idt-switch__label--off">Draft</span> </div>
	                                                <div class="idt-switch__btn off"> </div>
	                                            </div>
	                                        </idt-switch>
	                                        <!----> 
	                                    </div>
	                                    <!----> 
	                                    <div class="project-tools__actions">
	                                    	<button class="button view"> View mode </button>
	                                    	<button class="button save"> Save </button>
	                                    </div>
	                                    <!----> 
	                                </div>
	                                <!----> 
	                            </div>
	                            <button class="project-tools__toggle open"> </button> 
	                        </div>
	                        <!----> <!----> 
	                        <form name="form" novalidate="">
	                            <div class="project-banner" style="background-image: url('/wp-content/themes/EnvironMind-wp/static/img/ikea-man.svg');">
	                            	<div style="position: absolute; left: 0px; top: 0px;">
	                            	</div>
	                                <!---->
	                                <div class="project-tabs banner-form">
	                                    <div class="button-group expanded project-tabs-buttons">
	                                        <button type="button" class="button image-bg">
	                                            <div class="idt-icon">
	                                                <i class="far fa-image"></i>
	                                            </div>
	                                            Image background 
	                                        </button>
	                                        <button type="button" class="button video-bg hollow">
	                                            <div class="idt-icon">
	                                                <i class="fas fa-video"></i>
	                                            </div>
	                                            Video background 
	                                        </button>
	                                    </div>
	                                    <!---->
	                                    <div class="project-tabs-content">
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
	                                    </div>
	                                    <!---->
	                                </div>
	                                <!----> 
	                                <div class="project-intro edit-mode">
	                                    <!---->
	                                    <div class="row">
	                                        <div class="column small-12 medium-2 text-center">
	                                            <div class="project-intro__logo">
	                                                <img src="/wp-content/themes/EnvironMind-wp/static/img/idealogo.svg"> 
	                                                <idt-fs-upload-file type="image" class="fs__image-upload__button" on-uploaded="onUploadedLogo" on-error="onError" label="">
	                                                    <label type="button" class="button upload-logo upload-file__btn" accept="image/*" for="inputFile601191">
	                                                        <input type="file" accept="image/*" class="input-file-hidden ng-pristine ng-untouched ng-valid ng-not-empty" id="inputFile601191" name="uploader" ng-model="files"> 
	                                                        <span>
	                                                            <div class="fs__image-upload__button__spec"> Edit logo </div>
	                                                        </span>
	                                                        <span class="upload-file__progress"></span>
	                                                    </label>
	                                                </idt-fs-upload-file>
	                                            </div>
	                                            <!----> 
	                                        </div>
	                                        <div class="column small-12 medium-10">
	                                            <div class="row">
	                                                <div class="column small-12 medium-8 project-banner__col-content">
	                                                    <div class="idt-max-length__wrapper"><input type="text" placeholder="Project title" class="project-title" value=""><span class="idt-max-length__counter"></span></div>
	                                                    <!----> 
	                                                    <div class="idt-max-length__wrapper"><textarea rows="1" idt-max-length="140" placeholder="Describe your idea in 140 characters" class="project-tweet ng-pristine ng-untouched ng-valid ng-empty editable" style="overflow: hidden; overflow-wrap: break-word; resize: horizontal; height: 50px;"></textarea>
	                                                        <span class="idt-max-length__counter"></span>
	                                                    </div> <!----> 
	                                                </div>
	                                                <div class="column small-12 medium-4 text-center">
	                                                    <div class="project-intro__app-url">
	                                                        <input type="text" placeholder="URL" class="ng-pristine ng-untouched ng-valid ng-empty app-url"> <!---->
	                                                    </div>
	                                                </div>
	                                            </div>
	                                            <div class="row project-categories edit-mode" name="categories">
	                                                <!---->
	                                                <div class="column small-12 medium-4">
	                                                    <div class="input-dropdown">
	                                                        <dropdown-toggle close-on-click="true" pane-align="right">
	                                                            <span>
	                                                                <toggle>
	                                                                    <div class="input-dropdown__input__container"> <input type="text" class="input-dropdown__input" name="label" placeholder="Tracks" disabled="disabled" required="" value=""> </div>
	                                                                </toggle>
	                                                            </span>
	                                                            <div class="dropdown-pane dropdown-pane-right" aria-hidden="$ctrl.active" style="left: 303.312px; transform: translateX(-100%);">
	                                                                <pane>
	                                                                    <div class="dropdown-pane__header counter"> Tracks </div>
	                                                                    <ul class="dropdown menu vertical" role="menu">
	                                                                    	<!---->
	                                                                        <li role="menuitem"> <input type="checkbox" id="Agriculture"> <label class="dropdown-pane__checkbox" for="Agriculture"> Agriculture </label> </li>
	                                                                        <!---->
	                                                                        <li role="menuitem"> <input type="checkbox" id="Architecture"> <label class="dropdown-pane__checkbox" for="Architecture"> Architecture </label> </li>
	                                                                    	<!---->
	                                                                        <li role="menuitem"> <input type="checkbox" id="Blockchain"> <label class="dropdown-pane__checkbox" for="Blockchain"> Blockchain </label> </li>
	                                                                        <!---->
	                                                                        <li role="menuitem"> <input type="checkbox" id="Brand"> <label class="dropdown-pane__checkbox" for="Brand"> Brand </label> </li>
	                                                                        <!---->
	                                                                        <li role="menuitem"> <input type="checkbox" id="Children"> <label class="dropdown-pane__checkbox" for="Children"> Children </label> </li>
	                                                                        <!---->
	                                                                        <li role="menuitem"> <input type="checkbox" id="Culture"> <label class="dropdown-pane__checkbox" for="Culture"> Culture </label> </li>
	                                                                        <!---->
	                                                                        <li role="menuitem"> <input type="checkbox" id="Digital"> <label class="dropdown-pane__checkbox" for="Digital"> Digital </label> </li>
	                                                                        <!---->
	                                                                        <li role="menuitem"> <input type="checkbox" id="Education"> <label class="dropdown-pane__checkbox" for="Education"> Education </label> </li>
	                                                                        <!---->
	                                                                        <li role="menuitem"> <input type="checkbox" id="Energy"> <label class="dropdown-pane__checkbox" for="Energy"> Energy </label> </li>
	                                                                        <!---->
	                                                                        <li role="menuitem"> <input type="checkbox" id="Entertainment"> <label class="dropdown-pane__checkbox" for="Entertainment"> Entertainment </label> </li>
	                                                                        <!---->
	                                                                        <li role="menuitem"> <input type="checkbox" id="Ethics"> <label class="dropdown-pane__checkbox" for="Ethics"> Ethics </label> </li>
	                                                                        <!---->
	                                                                        <li role="menuitem"> <input type="checkbox" id="Fashion"> <label class="dropdown-pane__checkbox" for="Fashion"> Fashion </label> </li>
	                                                                        <!---->
	                                                                        <li role="menuitem"> <input type="checkbox" id="Film"> <label class="dropdown-pane__checkbox" for="Film"> Film </label> </li>
	                                                                        <!---->
	                                                                        <li role="menuitem"> <input type="checkbox" id="Finance"> <label class="dropdown-pane__checkbox" for="Finance"> Finance </label> </li>
	                                                                        <!---->
	                                                                        <li role="menuitem"> <input type="checkbox" id="Food&Beverage"> <label class="dropdown-pane__checkbox" for="Food&Beverage"> Food&Beverage </label> </li>
	                                                                        <!---->
	                                                                        <li role="menuitem"> <input type="checkbox" id="Government"> <label class="dropdown-pane__checkbox" for="Government"> Government </label> </li>
	                                                                        <!---->
	                                                                        <li role="menuitem"> <input type="checkbox" id="Health"> <label class="dropdown-pane__checkbox" for="Health"> Health </label> </li>
	                                                                        <!---->
	                                                                        <li role="menuitem"> <input type="checkbox" id="Home"> <label class="dropdown-pane__checkbox" for="Home"> Home </label> </li>
	                                                                        <!---->
	                                                                        <li role="menuitem"> <input type="checkbox" id="Manufacturing"> <label class="dropdown-pane__checkbox" for="Manufacturing"> Manufacturing </label> </li>
	                                                                        <!---->
	                                                                        <li role="menuitem"> <input type="checkbox" id="Miscellaneous"> <label class="dropdown-pane__checkbox" for="Miscellaneous"> Miscellaneous </label> </li>
	                                                                        <!---->
	                                                                        <li role="menuitem"> <input type="checkbox" id="Mobility"> <label class="dropdown-pane__checkbox" for="Mobility"> Mobility </label> </li>
	                                                                        <!---->
	                                                                        <li role="menuitem"> <input type="checkbox" id="Music"> <label class="dropdown-pane__checkbox" for="Music"> Music </label> </li>
	                                                                        <!---->
	                                                                        <li role="menuitem"> <input type="checkbox" id="Retail"> <label class="dropdown-pane__checkbox" for="Retail"> Retail </label> </li>
	                                                                        <!---->
	                                                                        <li role="menuitem"> <input type="checkbox" id="Science"> <label class="dropdown-pane__checkbox" for="Science"> Science </label> </li>
	                                                                        <!---->
	                                                                        <li role="menuitem"> <input type="checkbox" id="Services"> <label class="dropdown-pane__checkbox" for="Services"> Services </label> </li>
	                                                                        <!---->
	                                                                        <li role="menuitem"> <input type="checkbox" id="Sport"> <label class="dropdown-pane__checkbox" for="Sport"> Sport </label> </li>
	                                                                        <!---->
	                                                                        <li role="menuitem"> <input type="checkbox" id="Technology"> <label class="dropdown-pane__checkbox" for="Technology"> Technology </label> </li>
	                                                                        <!----> 
	                                                                    </ul>
	                                                                </pane>
	                                                            </div>
	                                                        </dropdown-toggle>
	                                                        <!----> 
	                                                    </div>
	                                                </div>
	                                                <!----> 
	                                            </div>
	                                        </div>
	                                    </div>
	                                    <!----> <!----> 
	                                </div>
	                                <!----> 
	                            </div>
	                            <div class="project-content">
	                                <!---->
	                                <div class="row">
	                                    <div class="column small-12">
	                                        <h2 class="project-section__title title--line"> <span class="project-section__title-icon icon--content">
	                                        	<div class="idt-icon">
                                                    <i class="far fa-lightbulb" style="color: white;position: relative;top: 6px;"></i>
                                                </div>
	                                        </span>
	                                        <br> <span>About the Idea</span> </h2>
	                                    </div>
	                                </div>
	                                <!----> <!---->
	                                <div class="row align-center">
	                                    <div class="column small-12 large-8">
	                                        <div class="project-post">
	                                            <h3 class="project-post__title title--issue"> <span class="project-post__title-vertical title-vertical--issue">the</span> Issue </h3>
	                                            <!---->
	                                            <div class="project__textarea__container">
	                                                <div class="idt-max-length__wrapper"><textarea class="the-issue project__textarea ng-pristine ng-untouched ng-valid ng-empty editable" rows="1" placeholder="Explain what motivated your project idea in 600 characters max"></textarea><span class="idt-max-length__counter"></span>
	                                                </div>
	                                                <!----> 
	                                            </div>
	                                            <!----> <!----> 
	                                        </div>
	                                    </div>
	                                </div>
	                                <!----> <!---->
	                                <div class="row align-center">
	                                    <div class="column small-12 large-8">
	                                        <div class="project-post post--solution">
	                                            <div class="row align-middle">
	                                                <div class="column small-12 medium-5">
	                                                    <h3 class="project-post__title title--solution" style="line-height:100%"> Our Magic Solution </h3>
	                                                </div>
	                                                <div class="column small-12 medium-7">
	                                                    <!---->
	                                                    <div class="project__textarea__container">
	                                                        <div class="idt-max-length__wrapper"><textarea class="the-solution project__textarea ng-pristine ng-untouched ng-valid ng-empty editable" rows="1" placeholder="Explain what makes your idea unique and how are you going to execute it"></textarea><span class="idt-max-length__counter"></span>
	                                                        </div>
	                                                        <!----> 
	                                                    </div>
	                                                    <!----> <!----> 
	                                                </div>
	                                            </div>
	                                        </div>
	                                    </div>
	                                </div>
	                                <!----> 
	                                <div class="container">
	                                    <div class="row align-center">
	                                        <div class="column small-12 medium-10">
	                                            <div class="project-post post--hiw">
	                                                <h3 class="project-post__title title--hiw">How it works</h3>
	                                                <!---->
	                                                <div class="note"> <span class="note-text"> This section will only display if the steps are completed. You can also add up to 2 extra steps. </span> </div>
	                                                <!----> 
	                                                <ul class="project-hiw__list list--3"></ul>
	                                                <!---->
	                                                <div class="text-center edit-steps"> 
	                                                	<button class="button delete-step alert" disabled="disabled"> Delete last step (min: 3) </button> 
	                                                	<button class="button add-step"> Add a step (max: 9) </button> 
	                                                </div>
	                                                <!----> 
	                                            </div>
	                                        </div>
	                                    </div>
	                                </div>
	                                <!----> <!---->
	                                <div class="project-presentation">
	                                    <div class="row">
	                                        <div class="column small-12">
	                                            <h2 class="project-section__title title--slideshare"> <span class="project-section__title-icon icon--slideshare">
	                                            	<div class="idt-icon">
	                                                    <i class="far fa-comment" style="color: white;position: relative;top: 2px;"></i>
	                                                </div>
	                                            </span>
	                                            <br> <span>Presentation</span> </h2>
	                                            <div class="note inverted"> <span class="note-text"> Add a presentation of your idea. You can see how it looks in view mode. </span> </div>
	                                            <div class="project-tabs">
	                                                <div class="button-group expanded project-tabs-buttons">
	                                                    <button type="button" class="button presentation-url">
	                                                        <div class="idt-icon">
	                                                            <i class="far fa-images"></i>
	                                                        </div>
	                                                        Presentation URL 
	                                                    </button>
	                                                    <button type="button" class="button pdf-file hollow">
	                                                        <div class="idt-icon">
	                                                            <i class="far fa-file-pdf"></i>
	                                                        </div>
	                                                        PDF file 
	                                                    </button>
	                                                </div>
	                                                <!---->
	                                                <div class="project-tabs-content">
	                                                    <div class="project-tabs-content__note">
	                                                        <span class="note-text">Enter a Google Slides public URL</span>
	                                                    </div>
	                                                    <div class="project-tabs-content__input-container">
	                                                        <input type="text" placeholder="Insert URL" class="upload-slides ng-pristine ng-untouched ng-valid ng-empty"> 
	                                                        <button class="trash-button" type="button">
	                                                            <div class="idt-icon">
	                                                                <i class="fas fa-trash"></i>
	                                                            </div>
	                                                        </button>
	                                                    </div>
	                                                    <!----> <!----> <!----> <label></label> 
	                                                </div>
	                                                <!----> <!----> 
	                                            </div>
	                                        </div>
	                                    </div>
	                                </div>
	                                <!----> <!---->
	                                <!-- <div class="project-screenshots">
	                                    <div class="row">
	                                        <div class="column small-12">
	                                            <h2 class="project-section__title title--screenshots"> <span class="project-section__title-icon icon--screenshots">
	                                            	<div class="idt-icon">
	                                                    <i class="fas fa-camera" style="color: white;position: relative;top: 2px;"></i>
	                                                </div>
	                                            </span>
	                                            <br> <span>Pictures</span> </h2>
	                                            <div class="note"> <span class="note-text"> Upload images of your idea. You can see how it looks in view mode. </span> </div>
	                                        </div>
	                                    </div>
	                                    <div class="row align-center align-middle" name="screenshots">
	                                        <div class="column shrink"> <button class="project-screenshot__add"> + </button> </div>
	                                    </div>
	                                    <div class="row">
	                                    </div>
	                                </div> -->
	                                <!----> <!---->
	                                <div class="project-team">
	                                    <div class="row">
	                                        <div class="column small-12">
	                                            <h2 class="project-section__title title--team title--line"> <span class="project-section__title-icon icon--team">
	                                            	<div class="idt-icon">
	                                                    <i class="fas fa-users" style="color: white;position: relative;top: 5px;"></i>
	                                                </div>
	                                            </span>
	                                            <br> <span>Our team</span> </h2>
	                                            <p class="text-center ng-hide"> No teammates yet </p>
	                                            <!----> <!---->
	                                            <ul class="project-team__list">
												    <!----><!---->
												    <li class="project-team__list-item">
												        <div class="project-member">
												            <idt-user-avatar class="author__avatar" user="participant" size="90">
												                <div class="idt-user-avatar avatar--participant" style="width: 90px; height: 90px; background-image: url(<?php 
											                        if ($current_user->profile_image == '/wp-content/themes/EnvironMind-wp/static/img/mindmate-avatar.jpg') {
											                            echo $current_user->profile_image;
											                        } else {
											                            $user_id = get_current_user_id();
											                            $attachment_id = get_user_meta( $user_id, 'profile_image', true );
											                            if ( $attachment_id ) {
											                                echo wp_get_attachment_url( $attachment_id );
											                            }
											                        }
											                        ?>)">
												                </div>
												            </idt-user-avatar>
												            <idt-user-information class="author__information" size="23"is-stacked="true" user="participant">
												                <div class="idt-user-information">
												                	<span class="idt-user-information__id" id="<?php echo esc_html( $current_user->id ); ?>"></span>
												                    <span class="idt-user-information__username username--is-stacked" style="font-size: 23px;"> <?php echo esc_html( $current_user->display_name ); ?> </span> 
												                    <span class="idt-user-information__classification">
												                        <span class="idt-user-information__classification__tag" style="font-size: 17.25px;"> 
													                        <?php 
														                    $user     = new WP_User( get_current_user_id() );
														                    $wp_roles = new WP_Roles;
														                    $names    = $wp_roles->get_names();
														                    $out      = array ();

														                    foreach ( $user->roles as $role )
														                    {
														                        if ( isset ( $names[ $role ] ) )
														                            $out[ $role ] = $names[ $role ];
														                    }
														                    if (isset($out['member'])) {
														                        esc_html_e( 'Member', 'woocommerce' );
														                    } else if (isset($out['partner'])) {
														                        esc_html_e( 'Partner', 'woocommerce' );
														                    } else if (isset($out['investor'])) {
														                        esc_html_e( 'Investor', 'woocommerce' );
														                    }
														                    ?>
												                    	</span>
												                    </span>
												                </div>
												            </idt-user-information>
												            <div class="project-member__name">  </div>
												            <span class="ng-hide"></span> <!----> <!----> 
												        </div>
												    </li>
												    <!----><!----> 
												</ul>
	                                            <div class="row align-center">
	                                                <div class="column small-12 large-8">
	                                                    <div class="project-team__actions">
	                                                        <div class="project-team__actions__input"> <input placeholder="Search members" type="text"> </div>
	                                                        <div id="result"></div>
	                                                    </div>
	                                                </div>
	                                            </div>
	                                            <!----> 
	                                        </div>
	                                        <!---->
	                                        <div class="column small-12">
	                                            <hr>
	                                            <!---->
	                                            <h3 class="project-section__title title--team"> <span>Seeking</span> </h3>
	                                            <!----> <!---->
	                                            <div class="note expanded"> <span class="note-text"> To complete your team, select the profile(s) you want to recruit. Once you have published your ideas, members in the network with the corresponding profiles will be able to contact you via chat to discuss joining your team. </span> </div>
	                                            <!----> <!---->
	                                            <ul class="project-hires">
	                                                <!---->
	                                                <li class="project-hires__item developer">
	                                                    <!----> <span class="project-hires__item__tag">Developer</span> 
	                                                    <div class="project-hires__item__check">
	                                                    	<!---->
													        <div class="idt-icon">
													            <i class="fas fa-check"></i>
													        </div>
	                                                        <!----> 
	                                                    </div>
	                                                    <div class="project-hires__item__info">We need you!</div>
	                                                </li>
	                                                <!---->
	                                                <li class="project-hires__item blockchain-expert"style="">
													    <span class="project-hires__item__tag">Blockchain expert</span> 
													    <div class="project-hires__item__check" style="">
													        <!---->
													        <div class="idt-icon">
													            <i class="fas fa-check"></i>
													        </div>
													        <!----> 
													    </div>
													    <div class="project-hires__item__info">We need you!</div>
													</li>
	                                                <!---->
	                                                <li class="project-hires__item data-analyst">
	                                                    <!----> <span class="project-hires__item__tag">Data analyst</span> 
	                                                    <div class="project-hires__item__check">
	                                                    	<!---->
													        <div class="idt-icon">
													            <i class="fas fa-check"></i>
													        </div>
	                                                        <!----> 
	                                                    </div>
	                                                    <div class="project-hires__item__info">We need you!</div>
	                                                </li>
	                                                <!---->
	                                                <li class="project-hires__item uxui-designer">
	                                                    <!----> <span class="project-hires__item__tag">UX/UI Designer</span> 
	                                                    <div class="project-hires__item__check">
	                                                    	<!---->
													        <div class="idt-icon">
													            <i class="fas fa-check"></i>
													        </div>
	                                                        <!----> 
	                                                    </div>
	                                                    <div class="project-hires__item__info">We need you!</div>
	                                                </li>
	                                                <!---->
	                                                <li class="project-hires__item project-manager">
	                                                    <!----> <span class="project-hires__item__tag">Project manager</span> 
	                                                    <div class="project-hires__item__check">
	                                                    	<!---->
													        <div class="idt-icon">
													            <i class="fas fa-check"></i>
													        </div>
	                                                        <!----> 
	                                                    </div>
	                                                    <div class="project-hires__item__info">We need you!</div>
	                                                </li>
	                                                <!---->
	                                                <li class="project-hires__item engineer">
	                                                    <!----> <span class="project-hires__item__tag">Engineer</span> 
	                                                    <div class="project-hires__item__check">
	                                                    	<!---->
													        <div class="idt-icon">
													            <i class="fas fa-check"></i>
													        </div>
	                                                        <!----> 
	                                                    </div>
	                                                    <div class="project-hires__item__info">We need you!</div>
	                                                </li>
	                                                <!----> 
	                                            </ul>
	                                            <!----> <!----> 
	                                        </div>
	                                        <!----> 
	                                    </div>
	                                </div>
	                                <!----> <!----> <!---->
	                                <div class="personal-notes">
	                                    <div class="row">
	                                        <div class="column small-12">
	                                            <h2 class="project-section__title title--screenshots title--line">
	                                                <span class="project-section__title-icon icon--notes">
	                                                    <div class="idt-icon">
	                                                        <i class="far fa-sticky-note" style="color: white;position: relative;top: -3px;"></i>
	                                                    </div>
	                                                </span>
	                                                <br> <span>Personal Notes</span> 
	                                            </h2>
	                                            <!---->
	                                            <div class="note"> <span class="note-text"> This section is only visible by you </span> </div>
	                                            <!----> 
	                                        </div>
	                                        <div class="column small-12">
	                                            <textarea class="personal-notes__textarea ng-pristine ng-untouched ng-valid ng-empty" placeholder="Type your notes here" msd-elastic="" name="personalNotes" style="overflow: hidden; overflow-wrap: break-word; resize: none; height: 73px;"></textarea>
	                                            <!----> 
	                                        </div>
	                                    </div>
	                                </div>
	                                <!----> 
	                            </div>
	                        </form>
	                    </div>
	                </div>
	                <!---->
	                <div class="idt-messenger">
				    <div id="idt-chat" class="idt-chat"></div>
				    <div class="idt-messenger-sidebar">
				        <!----> 
				        <div class="idt-messenger-toggle">
				            <!----> 
				            <div class="idt-messenger-toggle__icon-chat">
				                <div class="idt-icon">
				                    <i class="far fa-comment-dots"></i>
				                    <!---->
				                </div>
				            </div>
				            <div class="idt-messenger-toggle__label">
				                <div class="idt-messenger-toggle__label__text">
				                    Chat Rooms
				                </div>
				            </div>
				            <div class="idt-messenger-toggle__icon-state">
				                <div class="idt-icon">
				                    <i class="fas fa-chevron-left"></i>
				                    <!---->
				                </div>
				            </div>
				        </div>
				        <div class="idt-user-profile-container">
				            <div class="idt-user-profile">
				                <div class="idt-user-profile__header">
				                    <div class="idt-user-profile__header__left">
				                        <div class="idt-user-profile__title">
				                            <div class="idt-icon">
				                                <i class="far fa-id-badge"></i>
				                                <!---->
				                            </div>
				                            Profile
				                        </div>
				                    </div>
				                    <div class="idt-user-profile__header__right">
				                        <button class="idt-messenger-close">
				                            <div class="idt-icon">
				                                <i class="fas fa-times"></i>
				                                <!---->
				                            </div>
				                        </button>
				                    </div>
				                </div>
				                <div class="idt-user-profile__content">
				                    <div class="idt-user-profile__avatar">
				                        <div class="idt-user-avatar" style="width: 168px; height: 168px;"><span class="idt-user-avatar__initial" style="font-size: 126px; line-height: 168px;">
				                            ?
				                            </span>
				                        </div>
				                    </div>
				                    <div class="idt-user-profile__username">
				                    </div>
				                    <div class="idt-user-profile__user-tag">
				                        <!----> <!---->
				                    </div>
				                    <!----> <!----> <!----> <!----> 
				                    <div class="idt-user-profile__desc">
				                    </div>
				                    <div class="idt-user-profile__separator"></div>
				                    <!----> 
				                    <div class="idt-user-profile__infos">
				                        <div class="idt-user-profile__infos__label">
				                        	Role:
				                        </div>
				                        <div class="idt-user-profile__infos__content">
				                        </div>
				                    </div>
				                    <div class="idt-user-profile__button">
				                        <button ype="button" class="button expanded">
				                            Start chatting 
				                            <div class="idt-icon">
				                            	<i class="far fa-comment-dots"></i>
				                                <!---->
				                            </div>
				                        </button>
				                    </div>
				                </div>
				            </div>
				        </div>
				        <div class="idt-user-list-container">
				            <div class="idt-user-list">
				                <div class="idt-user-list__header">
				                    <div class="idt-user-list__header__left">
				                        <div class="idt-user-list__title">
				                            <div class="idt-icon">
				                                <i class="far fa-user"></i>
				                                <!---->
				                            </div>
				                            User list
				                        </div>
				                    </div>
				                    <div class="idt-user-list__header__right">
				                        <button class="idt-messenger-close">
				                            <div class="idt-icon">
				                                <i class="fas fa-times"></i>
				                                <!---->
				                            </div>
				                        </button>
				                    </div>
				                </div>
				                <div class="idt-user-list__toolbar">
				                    <div class="idt-user-list__toolbar__searchbar">
				                        <input type="text" placeholder="Search User"> 
				                        <div class="idt-icon">
				                            <i class="fas fa-search"></i>
				                            <!---->
				                        </div>
				                    </div>
				                    <div class="idt-user-list__toolbar__filter">
				                        <div class="idt-user-list__toolbar__filter__title">
				                            Filter
				                        </div>
				                        <div class="input-dropdown">
				                            <div class="idt-dropdown">
				                                <div class="idt-dropdown--toggle">
				                                    <div class="input-dropdown__input__container">
				                                        <div name="label" class="input-dropdown__input div">
				                                            <span >
				                                            Member, Partner or Investor
				                                            </span> 
				                                            <ul class="tag-list"> </ul>
				                                            <div class="idt-icon">
				                                                <i class="fas fa-chevron-down"></i>
				                                                <!---->
				                                            </div>
				                                        </div>
				                                    </div>
				                                </div>
				                                <div class="idt-dropdown--pane" style="top: 53px; left: 0px; position: absolute;">
				                                    <div class="dropdown-pane__header">
				                                        Role
				                                    </div>
				                                    <ul class="dropdown menu multiple vertical">
				                                        <li><input type="checkbox" id="Student" class=""> <label for="Student" class="dropdown-pane__checkbox">
				                                            Member
				                                            </label>
				                                        </li>
				                                        <li><input type="checkbox" id="Teacher" class=""> <label for="Teacher" class="dropdown-pane__checkbox">
				                                            Partner
				                                            </label>
				                                        </li>
				                                        <li><input type="checkbox" id="Parent" class=""> <label for="Parent" class="dropdown-pane__checkbox">
				                                            Investor
				                                            </label>
				                                        </li>
				                                    </ul>
				                                </div>
				                            </div>
				                        </div>
				                    </div>
				                </div>
				                <div class="idt-user-list__list">
				                </div>
				                <!----> <!---->
				            </div>
				        </div>
				        <div class="idt-history-container">
				            <div class="idt-history">
				                <div class="idt-history__header">
				                    <div class="idt-history__header__left">
				                        <div class="idt-history__header__left__title">
				                            <div class="idt-icon">
				                                <i class="far fa-comments"></i>
				                                <!---->
				                            </div>
				                            Chat Rooms
				                        </div>
				                    </div>
				                    <div class="idt-history__header__right">
				                        <button class="idt-history__header__right__close">
				                            <div class="idt-icon">
				                                <i class="fas fa-times"></i>
				                                <!---->
				                            </div>
				                        </button>
				                    </div>
				                </div>
				                <div class="idt-history__toolbar">
				                    <button class="idt-history__toolbar__open-btn">
				                        <div class="idt-history__toolbar__open-btn__arrow">
				                            <div class="idt-icon">
				                                <i class="fas fa-long-arrow-alt-left"></i>
				                                <!---->
				                            </div>
				                        </div>
				                        <div class="idt-history__toolbar__open-btn__text">
				                            Start chatting
				                        </div>
				                        <div class="idt-icon">
				                            <i class="fas fa-comment-medical"></i>
				                            <!---->
				                        </div>
				                    </button>
				                    <div class="idt-history__toolbar__searchbar"><input type="text" placeholder="Search chat rooms"></div>
				                </div>
				                <div class="idt-history__list"></div>
				            </div>
				        </div>
				    </div>
				</div>
	            </div>
	        </idt-page>
	        <?php get_footer(); ?>
        </div>
        <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
		<script id="MathJax-script" src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
		<script src="/wp-content/themes/EnvironMind-wp/static/js/jquery.js"></script>
		<script src="https://sdk.amazonaws.com/js/aws-sdk-2.766.0.min.js"></script>
		<script src="/wp-content/themes/EnvironMind-wp/static/js/clean-blog.js"></script>
		<script src="/wp-content/themes/EnvironMind-wp/static/js/sidebar.js"></script>
		<script src="https://www.gstatic.com/firebasejs/8.0.2/firebase.js"></script>
		<script src="https://www.gstatic.com/firebasejs/8.0.2/firebase-firestore.js"></script>
		<script>
		  var firebaseConfig = {
		    apiKey: "AIzaSyDI-WnW9vEi0dN8kuep2FKWEEIavl86LyI",
		    authDomain: "environmind-sfh2020.firebaseapp.com",
		    databaseURL: "https://environmind-sfh2020.firebaseio.com",
		    projectId: "environmind-sfh2020",
		    storageBucket: "environmind-sfh2020.appspot.com",
		    messagingSenderId: "1090676361953",
		    appId: "1:1090676361953:web:d5881ebcbd18cae846c5a0"
		  };
		  firebase.initializeApp(firebaseConfig);
		  var db = firebase.database();
		</script>
		<script src="/wp-content/themes/EnvironMind-wp/static/js/editidea.js"></script>
		<script src="/wp-content/themes/EnvironMind-wp/static/js/chat.js"></script>
    </body>
</html>