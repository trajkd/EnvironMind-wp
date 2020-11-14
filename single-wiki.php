<!DOCTYPE html>
<html lang="en">
<?php while ( have_posts() ) : the_post(); ?>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale-1.0">
    <link href="/wp-content/themes/EnvironMind-wp/static/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
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
    <title><?php the_title(); ?> - <?php bloginfo( 'name' ) ?> Wiki</title>
</head>
<body>
  <div id="sidebar-section-peripherial">
    <?php get_sidebar(); ?>
  <div class="rowContainer ContentPage" id="container_15714">
    <div class="staticContent_Wrapper wrapper_without_nav">
      <div class="static_content histoire">

                          <h2><?php the_title(); ?></h2>
                          <hr>
                          <?php the_content(); ?>

        </div>
      </div>
    </div>
    <?php get_footer(); ?>
  </div>
<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
<script src="/wp-content/themes/EnvironMind-wp/static/js/jquery.js"></script>
<script src="/wp-content/themes/EnvironMind-wp/static/js/clean-blog.js"></script>
<script src="/wp-content/themes/EnvironMind-wp/static/js/sidebar.js"></script>
</body>
<?php endwhile; ?>
</html>