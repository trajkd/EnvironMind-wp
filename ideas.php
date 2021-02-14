<?php /* Template Name: Ideas */ ?>
<!DOCTYPE html>
<html lang="en" ng-controller="Main as main" style="--vh:6.21px;">
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
        <title>Ideas - <?php bloginfo( 'name' ) ?></title>
        <link href="/wp-content/themes/EnvironMind-wp/static/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
        <link href="/wp-content/themes/EnvironMind-wp/static/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
        <link href='https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" href="/wp-content/themes/EnvironMind-wp/static/fonts/font-awesome.min.css">
        <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/style.css">
        <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/static.css">
        <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/dipaolo.css">
        <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/dipaolo2.css">
        <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/header.css">
        <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/lago.css">
        <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/lago-style.css">
        <script src="/wp-content/themes/EnvironMind-wp/static/js/main.js"></script>
        <script src="https://kit.fontawesome.com/4c0b3ae1d6.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="/wp-content/themes/EnvironMind-wp/static/css/app.css">
        <link rel="stylesheet" href="/wp-content/themes/EnvironMind-wp/static/css/css2.css">
        <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/idt-chat.css">
        <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/idt-history.css">
        <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/idt-user-list.css">
        <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/boffi.css">
        <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/clean-blog.css">
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
        <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/ck.css">
        <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/ot.css">
        <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/vue.css">
        <script type="text/javascript">
            var projectIDemail = "<?php if (!is_user_logged_in()){echo 'unauthorized';} else {echo esc_html( $current_user->user_email );}; ?>";
            var nonce = "<?php echo wp_create_nonce('wp_rest'); ?>";
        </script>
    </head>
    <body id="app" class="">
        <div id="sidebar-section-peripherial">
            <?php get_sidebar(); ?>
            <idt-page>
                <div class="page__content">
                    <div class="idt-page-top idt-page-top--small">
                        <div class="idt-page-top__blur"></div>
                        <div class="idt-page-top__header idt-page-top__header--small">
                            <div class="row align-middle">
                                <!-- <div class="column idt-page-top__search__container"> <input type="text" placeholder="Search projects..." class="idt-page-top__search ng-pristine ng-untouched ng-valid ng-empty"> </div> -->
                                <div class="column idt-page-top__title__container">
                                    <h1 class="idt-page-top__title" idt-test="page-title-project">Ideas</h1>
                                </div>
                                <div class="column idt-page-top__actions">
                                    <div class="projects__timer__container">
                                        <!----><button type="button" class="button add-idea"> Add Idea </button><!----> <!---->
                                        <!----> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="idt-page-section projects__page-section" id="idt-page-section">
                        <div class="row idt-page-section__content">
                            <div class="column small-12 medium-6 idt-page-section__left">
                                <h2 class="idt-page-section__title">
                                    <span class="number-of-projects"></span> project<span class="plural">s</span>
                                </h2>
                            </div>
                            <div class="column small-12 medium-6 idt-page-section__right">
                                <div class="row align-right">
                                    <div class="column">
                                        <!---->
                                        <div class="idt-page-section__tags">
                                            <span class="idt-page-section__tags__label"> Filter by: </span> 
                                            <div class="idt-page-section__tag-list projects__tag-list__container">
                                                <div class="projects__tag-list">
                                                    <!----> 
                                                </div>
                                                <div class="button-dropdown projects__button-dropdown">
                                                    <dropdown-toggle close-on-click="true" pane-align="right">
                                                        <span class="" style="">
                                                            <toggle> <button class="button input-dropdown__button dropdown">Add filters</button> </toggle>
                                                        </span>
                                                        <div class="dropdown-pane dropdown-pane-right" aria-hidden="$ctrl.active" style="top: 41.4688px; left: 138.422px; transform: translateX(-100%);">
                                                            <pane>
                                                                <!---->
                                                                <div class="text-left">
                                                                    <div class="dropdown-pane__header"> Tracks </div>
                                                                    <ul class="dropdown menu vertical multiple" role="menu">
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
                                                                </div>
                                                                <!----> 
                                                            </pane>
                                                        </div>
                                                    </dropdown-toggle>
                                                </div>
                                            </div>
                                        </div>
                                        <!----> 
                                    </div>
                                    <!----> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <!---->
                    <div class="projects__list__container" style=""> </div>
                    <!----> <!----> <!----> <!----> 
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
        <script src="/wp-content/themes/EnvironMind-wp/static/js/ideas.js"></script>
    </body>
</html>