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
            --main-color-hue: 339;
            --main-color-saturation: 100%;
            --main-color-lightness: 53%;
            --title-font-family: Alata, serif;
            --text-font-family: Roboto, sans-serif;
            }
            .Ideas {
                color: #41b9e6;
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
                                                                        <li role="menuitem"> <input type="checkbox" id="Biology"> <label class="dropdown-pane__checkbox" for="Biology"> Biology </label> </li>
                                                                        <!---->
                                                                        <li role="menuitem"> <input type="checkbox" id="Chemistry"> <label class="dropdown-pane__checkbox" for="Chemistry"> Chemistry </label> </li>
                                                                        <!---->
                                                                        <li role="menuitem"> <input type="checkbox" id="Drawing"> <label class="dropdown-pane__checkbox" for="Drawing"> Drawing </label> </li>
                                                                        <!---->
                                                                        <li role="menuitem"> <input type="checkbox" id="English"> <label class="dropdown-pane__checkbox" for="English"> English </label> </li>
                                                                        <!---->
                                                                        <li role="menuitem"> <input type="checkbox" id="History"> <label class="dropdown-pane__checkbox" for="History"> History </label> </li>
                                                                        <!---->
                                                                        <li role="menuitem"> <input type="checkbox" id="Latin"> <label class="dropdown-pane__checkbox" for="Latin"> Latin </label> </li>
                                                                        <!---->
                                                                        <li role="menuitem"> <input type="checkbox" id="Mathematics"> <label class="dropdown-pane__checkbox" for="Mathematics"> Mathematics </label> </li>
                                                                        <!---->
                                                                        <li role="menuitem"> <input type="checkbox" id="Physics"> <label class="dropdown-pane__checkbox" for="Physics"> Physics </label> </li>
                                                                        <!---->
                                                                        <li role="menuitem"> <input type="checkbox" id="Science"> <label class="dropdown-pane__checkbox" for="Science"> Science </label> </li>
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
        <script src="/wp-content/themes/EnvironMind-wp/static/js/ideas.js"></script>
    </body>
</html>