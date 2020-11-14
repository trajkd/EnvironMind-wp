<?php /* Template Name: Member Login */ 
if ( is_user_logged_in() ){ header( "Location: /member/account" ); die; } 
?>
<html>
<head>
  <title><?php esc_html_e( 'Login', 'woocommerce' ); ?> - <?php bloginfo( 'name' ) ?></title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/header.css">
  <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/style.min.css">
  <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/theme-frau.css">
  <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/clean-blog.css">
  <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/tabs.scss">
  <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/selectric.scss">
  <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/typo.scss">
  <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/spacer.scss">
  <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/flex.scss">
  <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/base.scss">
  <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/boffi.css">
  <link href="/wp-content/themes/EnvironMind-wp/static/css/material-components-web-custom-font.css" rel="stylesheet">
  <script src="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js"></script>
  <link rel="stylesheet" href="/wp-content/themes/EnvironMind-wp/static/fonts/font-awesome.min.css">
  <link href="https://fonts.googleapis.com/css?family=Raleway:400,500,500i,700,800i" rel="stylesheet">
  <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
  <script src="/wp-content/themes/EnvironMind-wp/static/bootstrap/js/bootstrap.min.js"></script>
  <script src="/wp-content/themes/EnvironMind-wp/static/js/togglelang.js"></script>
  <script src="/wp-content/themes/EnvironMind-wp/static/js/main.js"></script>
  <script src="https://kit.fontawesome.com/4c0b3ae1d6.js" crossorigin="anonymous"></script>
</head>
<body>
  <div id="sidebar-section-peripherial" class="member">
    <?php get_sidebar(); ?>
    <div class="login-container"><main id="main-content" class="flex-1">
     <section class="container-fluid v-spacer-15 lg-b-spacer-3">
        <div class="row">
           <div class="col-lg-10 offset-lg-1">
                 <!-- content -->
                 <div class="tabs__content" id="search-results">
                      <div class="tabs__tabpanel  v-spacer-025 lg-v-spacer-1 " role="tabpanel" id="login-customer-content" aria-labelledby="login-customer" data-ctrl-dom="tabpanel">
                         <div class="row t-spacer-1">
                             <div class="col-lg-6">
                                 <h2 class="font-size-xl lg-font-size-xxl"><?php esc_html_e( 'Log in', 'woocommerce_you' ); ?></h2>
                                 <div class="t-spacer-05">
                                     <?php 
                                          $post = get_post();
                                          echo apply_filters('the_content', $post->post_content);
                                      ?>
                                 </div>
                             </div>
                             <div class="col-lg-6 txt-center t-spacer-15 lg-t-spacer-0">
                                 <h2 class="font-size-xl lg-font-size-xxl"><?php esc_html_e( 'Don\'t have an account yet?', 'woocommerce' ); ?></h2>
                                 <div class="t-spacer-05">
                                     <a data-ctrl="Cta" href="/customer/signup" class="cta
                                   " data-ctrl-id="Cta-86057">
                                      <button class="mdc-button mdc-card__action mdc-card__action--button">
                                        <div class="mdc-button__ripple"></div>
                                        <span class="mdc-button__label"><?php esc_html_e( 'Sign up', 'woocommerce_you' ); ?></span>
                                      </button>
                                    </a>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
              </div>
           </div>
        </section>
    </div>
    <?php get_footer(); ?>
  </div>
<script src="/wp-content/themes/EnvironMind-wp/static/js/jquery.js"></script>
<script id="MathJax-script" src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
<script src="/wp-content/themes/EnvironMind-wp/static/js/clean-blog.js"></script>
<script src="/wp-content/themes/EnvironMind-wp/static/js/sidebar.js"></script>
<script src="/wp-content/themes/EnvironMind-wp/static/js/tabs.js"></script>
</body>
</html>