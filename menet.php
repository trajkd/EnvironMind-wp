<?php /* Template Name: Inside ME net */ ?>
<!DOCTYPE html>
<html lang="en">
<?php while ( have_posts() ) : the_post(); ?>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale-1.0">
  	<link href="/wp-content/themes/EnvironMind-wp/static/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="/wp-content/themes/EnvironMind-wp/static/fonts/font-awesome.min.css">
    <link href='https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/boffi.css">
    <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/style.css">
  	<link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/static.css">
    <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/dipaolo.css">
    <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/dipaolo2.css">
  	<link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/header.css">
  	<link href="/wp-content/themes/EnvironMind-wp/static/css/clean-blog.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/lago.css">
    <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/lago-style.css">
	<script src='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.js'></script>
	<link href='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' rel='stylesheet' />
    <script src="/wp-content/themes/EnvironMind-wp/static/js/main.js"></script>
    <script src="https://kit.fontawesome.com/4c0b3ae1d6.js" crossorigin="anonymous"></script>
    <title>Inside <?php bloginfo( 'name' ) ?></title>
</head>
<body>
  <div id="sidebar-section-peripherial">
    <?php get_sidebar(); ?>
      <div class="mdc-layout-grid projects-grid">
        <div class="mdc-layout-grid__inner">
          <?php

            $cats = get_categories();

            foreach($cats as $cat) {
          ?>
          <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-2">
            <div class="mdc-card">
              <div class="display">
                <a href="<?php echo get_category_link( $cat->term_id ) ?>">
                  <div class="mdc-card__primary-action">
                    <div class="mdc-card__media my-card__media" style="background-image: url('<?php if(category_description( $cat )) echo category_description( $cat ); else echo '/wp-content/uploads/2020/08/grey.png' ?>'); background-size: cover;">
                      <div class="summary">
                        <b><?php echo $cat->name; ?></b>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <?php
            }
          ?>
        </div>
      </div>
      <div class="padded">
        <?php get_footer(); ?>
      </div>
    </div>
<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
<script src="/wp-content/themes/EnvironMind-wp/static/js/jquery.js"></script>
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" crossorigin="anonymous"></script>
<script src="/wp-content/themes/EnvironMind-wp/static/js/jquery.createTOC.js"></script>
<script src="/wp-content/themes/EnvironMind-wp/static/js/sidebar.js"></script>
<script src="/wp-content/themes/EnvironMind-wp/static/js/clean-blog.js"></script>
<script>
mapboxgl.accessToken = 'pk.eyJ1IjoiY2lhb2RlamFuIiwiYSI6ImNrZTN2dW9jOTBuN2cyc2xlYWI2MjRwcXYifQ.HlNsmr-JWqllSCMOYMkt2A';
var map = new mapboxgl.Map({
container: 'map',
center: [-122.420679, 37.772537],
style: 'mapbox://styles/mapbox/light-v10'
});
</script>

</body>
<?php endwhile; ?>
</html>