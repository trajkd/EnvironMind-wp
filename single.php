<!DOCTYPE html>
<html>
<?php while ( have_posts() ) : the_post(); ?>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title><?php the_title(); ?> - <?php bloginfo( 'name' ) ?></title>
    <link rel="stylesheet" href="/wp-content/themes/EnvironMind-wp/static/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic">
    <link rel="stylesheet" href="/wp-content/themes/EnvironMind-wp/static/fonts/font-awesome.min.css">
    <link rel="stylesheet" href="/wp-content/themes/EnvironMind-wp/static/css/permalink.css">
    <!-- Custom fonts for this template -->
    <link href="/wp-content/themes/EnvironMind-wp/static/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link href='https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/boffi.css">
    <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/header.css">
    <link href="/wp-content/themes/EnvironMind-wp/static/css/clean-blog.css" rel="stylesheet">
    <style>
        .comments-section {
          scale: .8;
        }
    </style>
<body>
    <div id="sidebar-section-peripherial">
        <?php get_sidebar(); ?>
        <header class="masthead" style="background-image:url('<?php if (get_the_post_thumbnail_url()) echo get_the_post_thumbnail_url(); else echo '/wp-content/themes/EnvironMind-wp/static/img/post-bg.jpg'; ?>');">
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-md-10 col-lg-8 mx-auto">
                        <div class="post-heading">
                            <h1><br><strong><?php the_title(); ?></strong></h1><span class="meta">Posted
                                by&nbsp;<em><span style="text-decoration: underline;"><?php the_author(); ?></span></em> on <?php the_date(); ?>
                                <br><br></span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <article>
            <div class="container">
                <div class="row">
                    <div class="col-md-10 col-lg-8 mx-auto">
                        <?php the_content(); ?>
                    </div>
                </div>
            </div>
            <div class="comments-section">
                <?php 
                if (comments_open()){
                    comments_template();
                } 
                ?>
            </div>
        </article>
        <?php get_footer(); ?>
    </div>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script id="MathJax-script" src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
    <script src="/wp-content/themes/EnvironMind-wp/static/vendor/jquery/jquery.min.js"></script>
    <script src="/wp-content/themes/EnvironMind-wp/static/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="/wp-content/themes/EnvironMind-wp/static/bootstrap/js/bootstrap.min.js"></script>
    <script src="/wp-content/themes/EnvironMind-wp/static/js/clean-blog.js"></script>
    <script src="/wp-content/themes/EnvironMind-wp/static/js/sidebar.js"></script>
</body>
<?php endwhile; ?>
</html>