<?php /* Template Name: Contact */ ?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>Contact - <?php bloginfo( 'name' ) ?></title>
    <link rel="stylesheet" href="/wp-content/themes/EnvironMind-wp/static/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic">
    <link rel="stylesheet" href="/wp-content/themes/EnvironMind-wp/static/fonts/font-awesome.min.css">
    <link href="/wp-content/themes/EnvironMind-wp/static/css/contact.css" rel="stylesheet">
    <script src="https://kit.fontawesome.com/4c0b3ae1d6.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/boffi.css">
    <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/header.css">
    <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/clean-blog.css">
</head>

<body>
    <div id="loader">
        <div class="spinner">
            <div class="rect1"></div>
            <div class="rect2"></div>
            <div class="rect3"></div>
            <div class="rect4"></div>
            <div class="rect5"></div>
        </div>
    </div>
    <div id="sidebar-section-peripherial">
        <?php get_sidebar(); ?>
        <header class="masthead link-masthead" style="background-image:url('/wp-content/themes/EnvironMind-wp/static/img/contact-bg.jpg');">
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-md-10 col-lg-8 mx-auto">
                        <div class="site-heading">
                            <h1>Contact Us</h1><span class="subheading">Have questions? We are here to help you.</span></div>
                    </div>
                </div>
            </div>
        </header>
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-lg-8 mx-auto">
                    <p>Want to get in touch? Fill out the form below to send me a message and we will get back to you as soon as possible!</p>
                    <form action="https://mindempathy.mooo.com/mail.php" method="post" id="contactForm" name="sentMessage" enctype="multipart/form-data">
                        <div class="control-group">
                            <div class="form-group floating-label-form-group controls"><label>Name</label><input class="form-control" type="text" id="name" name="name" placeholder="Name"><small class="form-text text-danger help-block"></small></div>
                        </div>
                        <div class="control-group">
                            <div class="form-group floating-label-form-group controls"><label>Email Address</label><input class="form-control" type="email" id="email" name="email" placeholder="Email Address"><small class="form-text text-danger help-block"></small></div>
                        </div>
                        <div class="control-group">
                            <div class="form-group floating-label-form-group controls"><label>Phone Number</label><input class="form-control" type="tel" id="phone" name="phone" placeholder="Phone Number"><small class="form-text text-danger help-block"></small></div>
                        </div>
                        <div class="control-group">
                            <div class="form-group floating-label-form-group controls mb-3"><label>Message</label><textarea class="form-control" id="message" name="message" data-validation-required-message="Please enter a message." placeholder="Message" rows="5"></textarea><small class="form-text text-danger help-block"></small></div>
                        </div>
                        <div class="control-group">
                            <div class="form-group floating-label-form-group controls"><label>Image/File</label><input type="file" class="form-control-file" id="file" name="file[]" placeholder="Upload" multiple></input><small class="form-text text-danger help-block"></small></div>
                        </div>
                        <div id="success"></div>
                        <div class="form-group"><button class="btn btn-primary btn-success" id="sendMessageButton" type="submit">Send</button></div>
                    </form>
                </div>
            </div>
        </div>

        <div class="modal fade" id="messageModal" tabindex="-1" role="dialog" aria-labelledby="messageModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="messageModalLabel">Info</h5>
                        <img class="paperplane" src="/wp-content/themes/EnvironMind-wp/static/img/paperplane.svg" alt="Paper Plane">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div id="messageModalContent" class="alert alert-success">

                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <hr>
        <?php get_footer(); ?>
    </div>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script id="MathJax-script" src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
    <script src="/wp-content/themes/EnvironMind-wp/static/vendor/jquery/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.2/dist/jquery.validate.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/jquery-form@4.3.0/dist/jquery.form.min.js"></script>
    <script src="/wp-content/themes/EnvironMind-wp/static/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="/wp-content/themes/EnvironMind-wp/static/bootstrap/js/bootstrap.min.js"></script>
    <script src="/wp-content/themes/EnvironMind-wp/static/js/clean-blog.js"></script>
    <script src="/wp-content/themes/EnvironMind-wp/static/js/form.js"></script>
    <script src="/wp-content/themes/EnvironMind-wp/static/js/sidebar.js"></script>
</body>

</html>