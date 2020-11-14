<?php /* Template Name: Member Registration Success */ 
if ( is_user_logged_in() ){ header( "Location: /member/account" ); die; } ?>
<html>
<head>
  <title><?php esc_html_e( 'Signup', 'woocommerce' ); ?> - <?php bloginfo( 'name' ) ?></title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/header.css">
  <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/style.min.css">
  <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/theme-frau.css">
  <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/tabs.scss">
  <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/select.scss">
  <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/selectric.scss">
  <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/typo.scss">
  <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/spacer.scss">
  <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/flex.scss">
  <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/base.scss">
  <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/boffi.css">
  <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/clean-blog.css">
  <link href="/wp-content/themes/EnvironMind-wp/static/css/material-components-web-custom-font.css" rel="stylesheet">
  <script src="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js"></script>
  <link rel="stylesheet" href="/wp-content/themes/EnvironMind-wp/static/fonts/font-awesome.min.css">
  <link href="https://fonts.googleapis.com/css?family=Raleway:400,500,500i,700,800i" rel="stylesheet">
  <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
  <script src="/wp-content/themes/EnvironMind-wp/static/js/togglelang.js"></script>
  <script src="/wp-content/themes/EnvironMind-wp/static/js/main.js"></script>
  <script src="https://kit.fontawesome.com/4c0b3ae1d6.js" crossorigin="anonymous"></script>
</head>
<body>
  <div id="sidebar-section-peripherial" class="member">
    <?php get_sidebar(); ?>
    <div class="message-wrapper">
    	<h3 class="registration-success-message">Your registration was successful. Complete the signup process by verifying your email with the link sent to you.</h3>
    </div>
    <?php get_footer(); ?>
  </div>
<script src="/wp-content/themes/EnvironMind-wp/static/bootstrap/js/bootstrap.min.js"></script>
<script id="MathJax-script" src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
<script src="/wp-content/themes/EnvironMind-wp/static/js/clean-blog.js"></script>
<script src="/wp-content/themes/EnvironMind-wp/static/js/sidebar.js"></script>
</body>
</html>