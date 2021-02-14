<?php 
/**
 * Template Name: View mode
 * Template Post Type: page, viewmode
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
        <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/ck.css">
        <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/ot.css">
        <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/vue.css">
        <link href="/wp-content/themes/EnvironMind-wp/static/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet" href="/wp-content/themes/EnvironMind-wp/static/css/app.css">
        <link rel="stylesheet" href="/wp-content/themes/EnvironMind-wp/static/css/css2.css">
        <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/idt-chat.css">
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
        <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/header.css">
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
		    	<div class="page__content">
		        	<div class="project"> 
		        		<div class="project-tools open deadline">
                            <div class="project-tools__content">
                                <div class="project-tools__title"> View mode </div>
                                <div class="project-tools__wrap">
                                    <div class="project-tools__actions">
                                    	<button class="button full"> Edit </button>
                                    </div>
                                    <!----> 
                                </div>
                                <!----> 
                            </div>
                            <button class="project-tools__toggle open"> </button> 
                        </div>
		            	<form name="form" novalidate="" class="ng-pristine ng-valid">
		                	<div class="project-banner" style="background-image: url();">
			                    <div class="project-intro">
			                        <div class="row">
			                            <div class="column small-12 medium-2 text-center">
			                                <div class="project-intro__logo"> <img src=""> </div>
			                            </div>
			                            <div class="column small-12 medium-7 project-banner__col-content">
			                                <div class="project-intro__title"></div>
			                                <div class="project-intro__pitch"></div>
			                                <div class="project-categories">
											    <div class="project-category">
											        <div class="project-category__title"> Tracks </div>
											        <div class="project-category__options">
											        </div>
											    </div>
											</div>
			                            </div>
			                            <div class="column small-12 medium-3 text-center"></div>
			                        </div>
			                    </div>
			                </div>
			                <div class="project-content">
			                    <div class="row">
			                        <div class="column small-12">
			                            <h2 class="project-section__title title--line"> <span class="project-section__title-icon icon--content">
			                            	<div class="idt-icon">
                                                <i class="far fa-lightbulb" style="color: white;position: relative;top: 6px;"></i>
                                            </div>
			                            </span> <br> <span>About the Idea</span> </h2>
			                        </div>
			                    </div>
			                    <div class="row align-center">
			                        <div class="column small-12 large-8">
			                            <div class="project-post post--issue">
			                                <h3 class="project-post__title title--issue"> <span class="project-post__title-vertical title-vertical--issue">the</span> Issue </h3>
			                                <div class="project-post__content"></div>
			                            </div>
			                        </div>
			                    </div>
			                    <div class="row align-center">
			                        <div class="column small-12 large-8">
			                            <div class="project-post post--solution">
			                                <div class="row align-middle">
			                                    <div class="column small-12 medium-5">
			                                        <h3 class="project-post__title title--solution" style="line-height:100%"> Our Magic Solution </h3>
			                                    </div>
			                                    <div class="column small-12 medium-7">
				                                    <div class="project-post__content align-left"></div>
			                                    </div>
			                                </div>
			                            </div>
			                        </div>
			                    </div>
			                    <div class="container">
			                        <div class="row align-center">
			                            <div class="column small-12 medium-10">
			                                <div class="project-post post--hiw">
			                                    <h3 class="project-post__title title--hiw">How it works</h3>
			                                    <ul class="project-hiw__list list--3">
			                                        <li class="project-hiw__list-item project-hiw__list-item1">
			                                            <div class="project-hiw">
			                                                <div class="project-hiw__wrap-image">
			                                                    <img class="project-hiw__image" src=""> 
			                                                    <div class="project-hiw__number">1</div>
			                                                </div>
			                                                <div class="project-hiw__title"></div>
			                                                <p class="project-hiw__content"></p>
			                                            </div>
			                                        </li>
			                                        <li class="project-hiw__list-item project-hiw__list-item2">
			                                            <div class="project-hiw">
			                                                <div class="project-hiw__wrap-image">
			                                                    <img class="project-hiw__image" src=""> 
			                                                    <div class="project-hiw__number">2</div>
			                                                </div>
			                                                <div class="project-hiw__title"></div>
			                                                <p class="project-hiw__content"></p>
			                                            </div>
			                                        </li>
			                                        <li class="project-hiw__list-item project-hiw__list-item3">
			                                            <div class="project-hiw">
			                                                <div class="project-hiw__wrap-image">
			                                                    <img class="project-hiw__image" src=""> 
			                                                    <div class="project-hiw__number">3</div>
			                                                </div>
			                                                <div class="project-hiw__title"></div>
			                                                <p class="project-hiw__content"></p>
			                                            </div>
			                                        </li>
			                                    </ul>
			                                </div>
			                            </div>
			                        </div>
			                    </div>
			                    <div class="project-presentation">
			                        <div class="row">
			                            <div class="column small-12">
			                                <h2 class="project-section__title title--slideshare"> <span class="project-section__title-icon icon--slideshare">
			                                	<div class="idt-icon">
                                                    <i class="far fa-comment" style="color: white;position: relative;top: 2px;"></i>
                                                </div>
			                                </span> <br> <span>Presentation</span> </h2>
			                                <div class="embed-responsive embed-responsive-autosize project-presentation__slideshare"></div>
			                                <style>
											  .embed-responsive {
											    position: relative;
											    padding-bottom: 56.25%; /* 16:9 Ratio */
											    height: 0;
											    overflow: hidden;
											  }
											  .embed-responsive iframe {
											    border: 0;
											    position: absolute;
											    top: 0;
											    left: 0;
											    width: 100% !important;
											    height: 100% !important;
											  }
											</style>
			                            </div>
			                        </div>
			                    </div>
			                    <div class="project-team">
			                        <div class="row">
			                            <div class="column small-12">
			                                <h2 class="project-section__title title--team title--line">
			                                	<span class="project-section__title-icon icon--team">
			                                		<div class="idt-icon">
	                                                    <i class="fas fa-users" style="color: white;position: relative;top: 5px;"></i>
	                                                </div>
			                                	</span>
			                                	<br>
			                                	<span>Our team</span>
			                                </h2>
			                                <ul class="project-team__list"></ul>
			                            </div>
			                            <div class="column small-12">
			                                <hr>
			                                <ul class="project-hires public" id="hiring">
			                                </ul>
			                            </div>
			                        </div>
			                    </div>
			                </div>
			            </form>
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
		<script src="/wp-content/themes/EnvironMind-wp/static/js/viewideas.js"></script>
	</body>
</html>