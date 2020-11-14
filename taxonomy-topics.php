<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale-1.0">
	<link href="/wp-content/themes/EnvironMind-wp/static/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
	<link rel="stylesheet" href="/wp-content/themes/EnvironMind-wp/static/fonts/font-awesome.min.css">
	<link href="/wp-content/themes/EnvironMind-wp/static/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link href='https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/boffi.css">
	<link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/style.css">
  	<link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/static.css">
	<link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/dipaolo.css">
	<link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/dipaolo2.css">
 	<link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/header.css">
	<link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/lago.css">
	<link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/lago-style.css">
	<link href="/wp-content/themes/EnvironMind-wp/static/css/material-components-web.css" rel="stylesheet">
 	<link href="/wp-content/themes/EnvironMind-wp/static/css/clean-blog.css" rel="stylesheet">
 	<script src="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js"></script>
	<script src="/wp-content/themes/EnvironMind-wp/static/js/main.js"></script>
 	<script src="https://kit.fontawesome.com/4c0b3ae1d6.js" crossorigin="anonymous"></script>
	<title>Wiki - <?php bloginfo( 'name' ) ?></title>
</head>
<body>
	<div id="sidebar-section-peripherial">
    <?php get_sidebar(); ?>
		<div class="mdc-layout-grid">
		  <div class="mdc-layout-grid__inner">
				<?php 
				if (have_posts())
			    while (have_posts()) : the_post(); ?>
		    <div class="mdc-layout-grid__cell">
		      <div class="mdc-card">
		    	<div class="display">
		    	  <a href="<?php the_permalink() ?>">
					<div class="mdc-card__primary-action">
					  <div class="mdc-card__media mdc-card__media--16-9 my-card__media" style="background-image: url('<?php if(get_the_post_thumbnail_url()) echo get_the_post_thumbnail_url(); else echo '/wp-content/themes/EnvironMind-wp/static/img/ikea-vari.svg' ?>');"></div>
					</div>
				  </a>
				  <div class="summary">
					<b><?php the_title(); ?></b>
					<br>
					<?php the_content(); ?>
				  </div>
				</div>
			    <div class="mdc-card__actions">
			      <div class="mdc-card__action-buttons">
			        <a href="<?php the_permalink() ?>">
			      	  <button class="mdc-button mdc-card__action mdc-card__action--button gotoarticle">
				        <div class="mdc-button__ripple"></div>
				        <span class="mdc-button__label">Go to article</span>
				      </button>
			        </a>
			        <button class="mdc-button mdc-card__action mdc-card__action--button expand">
			          <div class="mdc-button__ripple"></div>
			          <span class="mdc-button__label">Expand</span>
			        </button>
			      </div>
			      <div class="mdc-card__action-icons">
			        <button class="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon heart" title="Add to favorites"><i class="fas fa-heart stroke-transparent"></i></button>
			        <button class="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon" title="Share"><i class="fas fa-share-alt"></i></button>
			      </div>
			    </div>
			  </div>
		    </div>
		    <?php endwhile;
	      wp_reset_postdata();
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
<script src="/wp-content/themes/EnvironMind-wp/static/js/clean-blog.js"></script>
<script src="/wp-content/themes/EnvironMind-wp/static/js/sidebar.js"></script>
</body>
</html>