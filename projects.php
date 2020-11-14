<?php /* Template Name: Projects */ ?>
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
	<title>Projects - <?php bloginfo( 'name' ) ?></title>
</head>
<body>
	<div id="sidebar-section-peripherial">
    <?php get_sidebar(); ?>
		<div class="mdc-layout-grid projects-grid">
		  <div class="mdc-layout-grid__inner">
				<?php
				  $args = array(
				              'taxonomy' => 'topics',
				              'orderby' => 'name',
				              'order'   => 'ASC'
				           	);

				  $cats = get_categories($args);

				  foreach($cats as $cat) {
				?>
		    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-2">
		    	<div class="mdc-card">
		    	  <div class="display">
		    	  	<a href="<?php echo get_category_link( $cat->term_id ) ?>">
							  <div class="mdc-card__primary-action">
							    <div class="mdc-card__media my-card__media" style="background-image: url('<?php if(category_description( $cat )) echo category_description( $cat ); else echo '/wp-content/uploads/2020/08/grey.png' ?>');">
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
<script src="/wp-content/themes/EnvironMind-wp/static/js/clean-blog.js"></script>
<script src="/wp-content/themes/EnvironMind-wp/static/js/sidebar.js"></script>
</body>
</html>