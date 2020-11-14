<?php /* Template Name: Member Account */ 
if ( !is_user_logged_in() ){ header( "Location: /member/login" ); die; } ?>
<html>
<head>
  <title><?php 
    if($_SERVER['REQUEST_URI'] == '/member/account/') {
        esc_html_e( 'Profile', 'woocommerce' );
    }
    else if($_SERVER['REQUEST_URI'] == '/member/account/edit-account/') {
        esc_html_e( 'Edit profile', 'woocommerce' );
    }
    else if($_SERVER['REQUEST_URI'] == '/member/account/edit-address/') {
        if(empty(get_user_meta( get_current_user_id(), 'billing_address_1', true ))) {
            esc_html_e( 'New address', 'woocommerce' );
        } else {
            esc_html_e( 'Modify address', 'woocommerce' );
        }
    } ?> - <?php bloginfo( 'name' ) ?></title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/header.css">
  <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/style.min.css">
  <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/styles-m.min.css">
  <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/styles-l.min.css">
  <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/sections.min.css">
  <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/animated-menu-item.scss">
  <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/style-open.css">
  <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/theme-frau.css">
  <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/clean-blog.css">
  <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/tabs.scss">
  <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/select.scss">
  <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/selectric.scss">
  <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/typo.scss">
  <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/spacer.scss">
  <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/flex.scss">
  <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/base.scss">
  <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/bg.scss">
  <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/select.css">
  <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/app.css">
  <link rel="stylesheet" type="text/css" href="/wp-content/themes/EnvironMind-wp/static/css/boffi.css">
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
        <main id="main-content"><div class="container-fluid">
            <div class="row-customer-logout navigation-menu">
                <a data-ctrl="Cta" class="right-position-logout cta cta--white cta--lg" title="Logout" href="?logout=true" data-ctrl-id="Cta-70115">
                    <span class="cta__text" data-ctrl-dom="text"><?php esc_html_e( 'Logout', 'woocommerce' ); ?></span>
                </a>
            </div>
            <div class="navigation-menu context-menu context-menu--white">
                <nav role="navigation">
                  <ul class="display-flex">
                    <li>
                    </li>
                    <li>
                      <a href="/member/account/" class="context-menu__item navigation-menu__item profile">
                        <span><?php esc_html_e( 'Profile', 'woocommerce' ); ?> </span>
                    </a>
                </li>
                <li>
                  <a href="/member/account/edit-address/" class="context-menu__item navigation-menu__item address">
                    <span><?php esc_html_e( 'Address', 'woocommerce' ); ?> </span>
                </a>
            </li>
            <!-- <li>
              <a href="#orderhistory" class="context-menu__item navigation-menu__item ">
                <span>I Miei ordini</span>
              </a>
            </li>
            <li>
              <a href="#ticket" class="context-menu__item navigation-menu__item ">
                <span>I miei Ticket</span>
              </a>
          </li> -->
      </ul>
    </nav>
    </div>
    <?php 
    $post = get_post();
    echo apply_filters('the_content', $post->post_content);
    ?>
    </div>
    </main>
    <?php get_footer(); ?>
</div>
<script src="/wp-content/themes/EnvironMind-wp/static/js/jquery.js"></script>
<script id="MathJax-script" src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
<script src="/wp-content/themes/EnvironMind-wp/static/js/clean-blog.js"></script>
<script src="/wp-content/themes/EnvironMind-wp/static/js/sidebar.js"></script>
<script src="/wp-content/themes/EnvironMind-wp/static/bootstrap/js/bootstrap.min.js"></script>
<script src="/wp-content/themes/EnvironMind-wp/static/js/crs.min.js"></script>
<script src="/wp-content/themes/EnvironMind-wp/static/js/jquery.selectric.js"></script>
<script type="text/javascript">
    $(".upload-logo").change(function(e) {

      var uploadedStep = $(this)

      logofiles = e.originalEvent.srcElement.files;

        var file = logofiles[0];

        var reader = new FileReader();
        reader.onloadend = function() {
          $(".project-intro__logo img").attr("src", reader.result);
        }
        reader.readAsDataURL(file);
    });
    var posted_billing_state = <?php if (isset( $_POST['billing_state'] ) ) echo json_encode(esc_html($_POST['billing_state'])); else echo '""' ?>;
    var posted_shipping_state = <?php if (isset( $_POST['shipping_state'] ) ) echo json_encode(esc_html($_POST['shipping_state'])); else echo '""' ?>;
</script>
<script src="/wp-content/themes/EnvironMind-wp/static/js/tabs.js"></script>
<script src="https://cdn.jsdelivr.net/npm/jquery-form@4.3.0/dist/jquery.form.min.js"></script>
<?php if (isset($_POST['billing_country'])) {
echo 
<<<EOD
<script type="text/javascript">
    $('#selectric-billing-country').val("
EOD;
echo esc_html( $_POST['billing_country'] );
echo 
<<<EOD
").selectric("refresh");
</script>
EOD;
} else if (!empty(get_user_meta( get_current_user_id(), 'billing_country', true ))) {
echo 
<<<EOD
<script type="text/javascript">
    $('#selectric-billing-country').val("
EOD;
echo esc_html( get_user_meta( get_current_user_id(), 'billing_country', true ));
echo 
<<<EOD
").selectric("refresh");
</script>
EOD;
}

if (isset($_POST['billing_state'])) {
echo 
<<<EOD
<script type="text/javascript">
  if (window.location.href.includes("/en/")) {
    var region_denomination = "State/Province";
  } else {
    var region_denomination = "Stato/Provincia";
  }
  if ($('#selectric-billing-country').val() === 'Italy') {
    if (window.location.href.includes("/en/")) {
      region_denomination = "Province";
    } else {
      region_denomination = "Provincia";
    }
    regions = 
    `
    <option value="Agrigento">Agrigento</option>
    <option value="Alessandria">Alessandria</option>
    <option value="Ancona">Ancona</option>
    <option value="Aosta">Aosta</option>
    <option value="Arezzo">Arezzo</option>
    <option value="Ascoli Piceno">Ascoli Piceno</option>
    <option value="Asti">Asti</option>
    <option value="Avellino">Avellino</option>
    <option value="Bari">Bari</option>
    <option value="Barletta-Andria-Trani">Barletta-Andria-Trani</option>
    <option value="Belluno">Belluno</option>
    <option value="Benevento">Benevento</option>
    <option value="Bergamo">Bergamo</option>
    <option value="Biella">Biella</option>
    <option value="Bologna">Bologna</option>
    <option value="Bolzano">Bolzano</option>
    <option value="Brescia">Brescia</option>
    <option value="Brindisi">Brindisi</option>
    <option value="Cagliari">Cagliari</option>
    <option value="Caltanissetta">Caltanissetta</option>
    <option value="Campobasso">Campobasso</option>
    <option value="Carbonia-Iglesias">Carbonia-Iglesias</option>
    <option value="Caserta">Caserta</option>
    <option value="Catania">Catania</option>
    <option value="Catanzaro">Catanzaro</option>
    <option value="Chieti">Chieti</option>
    <option value="Como">Como</option>
    <option value="Cosenza">Cosenza</option>
    <option value="Cremona">Cremona</option>
    <option value="Crotone">Crotone</option>
    <option value="Cuneo">Cuneo</option>
    <option value="Enna">Enna</option>
    <option value="Fermo">Fermo</option>
    <option value="Ferrara">Ferrara</option>
    <option value="Firenze">Firenze</option>
    <option value="Foggia">Foggia</option>
    <option value="Forlì-Cesena">Forlì-Cesena</option>
    <option value="Frosinone">Frosinone</option>
    <option value="Genova">Genova</option>
    <option value="Gorizia">Gorizia</option>
    <option value="Grosseto">Grosseto</option>
    <option value="Imperia">Imperia</option>
    <option value="Isernia">Isernia</option>
    <option value="La Spezia">La Spezia</option>
    <option value="L'Aquila">L'Aquila</option>
    <option value="Latina">Latina</option>
    <option value="Lecce">Lecce</option>
    <option value="Lecco">Lecco</option>
    <option value="Livorno">Livorno</option>
    <option value="Lodi">Lodi</option>
    <option value="Lucca">Lucca</option>
    <option value="Macerata">Macerata</option>
    <option value="Medio Campidano">Medio Campidano</option>
    <option value="Mantova">Mantova</option>
    <option value="Massa-Carrara">Massa-Carrara</option>
    <option value="624">Matera</option>
    <option value="Messina">Messina</option>
    <option value="Milano">Milano</option>
    <option value="Modena">Modena</option>
    <option value="Monza e Brianza">Monza e Brianza</option>
    <option value="Napoli">Napoli</option>
    <option value="Novara">Novara</option>
    <option value="Nuoro">Nuoro</option>
    <option value="Olbia-Tempio">Olbia-Tempio</option>
    <option value="Oristano">Oristano</option>
    <option value="Padova">Padova</option>
    <option value="Palermo">Palermo</option>
    <option value="Parma">Parma</option>
    <option value="Pavia">Pavia</option>
    <option value="Perugia">Perugia</option>
    <option value="Pesaro e Urbino">Pesaro e Urbino</option>
    <option value="Pescara">Pescara</option>
    <option value="Piacenza">Piacenza</option>
    <option value="Pisa">Pisa</option>
    <option value="Pistoia">Pistoia</option>
    <option value="Pordenone">Pordenone</option>
    <option value="Potenza">Potenza</option>
    <option value="Prato">Prato</option>
    <option value="Ragusa">Ragusa</option>
    <option value="Ravenna">Ravenna</option>
    <option value="Reggio Calabria">Reggio Calabria</option>
    <option value="Reggio Emilia">Reggio Emilia</option>
    <option value="Rieti">Rieti</option>
    <option value="Rimini">Rimini</option>
    <option value="Roma">Roma</option>
    <option value="Rovigo">Rovigo</option>
    <option value="Salerno">Salerno</option>
    <option value="Medio Campidano">Medio Campidano</option>
    <option value="Sassari">Sassari</option>
    <option value="Savona">Savona</option>
    <option value="Siena">Siena</option>
    <option value="Siracusa">Siracusa</option>
    <option value="Sondrio">Sondrio</option>
    <option value="Taranto">Taranto</option>
    <option value="Teramo">Teramo</option>
    <option value="Terni">Terni</option>
    <option value="Torino">Torino</option>
    <option value="Ogliastra">Ogliastra</option>
    <option value="Trapani">Trapani</option>
    <option value="Trento">Trento</option>
    <option value="Treviso">Treviso</option>
    <option value="Trieste">Trieste</option>
    <option value="Udine">Udine</option>
    <option value="Varese">Varese</option>
    <option value="Venezia">Venezia</option>
    <option value="Verbano-Cusio-Ossola">Verbano-Cusio-Ossola</option>
    <option value="Vercelli">Vercelli</option>
    <option value="Verona">Verona</option>
    <option value="Vibo Valentia">Vibo Valentia</option>
    <option value="Vicenza">Vicenza</option>
    <option value="Viterbo">Viterbo</option>
    <option value="Sud Sardegna">Sud Sardegna</option>
    `;
    $('#selectric-billing-region').removeAttr("disabled");
  }
  else if ($('#selectric-billing-country').val() === 'Switzerland') {
    if (window.location.href.includes("/de/")) {
      region_denomination = "Kanton";
      regions = 
      `
      <option value="Aargau">Aargau</option>
      <option value="Appenzell Ausserrhoden">Appenzell Ausserrhoden</option>
      <option value="Appenzell Innerrhoden">Appenzell Innerrhoden</option>
      <option value="Basel-Landschaft">Basel-Landschaft</option>
      <option value="Basel-Stadt">Basel-Stadt</option>
      <option value="Bern">Bern</option>
      <option value="Freiburg">Freiburg</option>
      <option value="Genève">Genf</option>
      <option value="Glarus">Glarus</option>
      <option value="Grigioni">Graubünden</option>
      <option value="Jura">Jura</option>
      <option value="Luzern">Luzern</option>
      <option value="Neuchâtel">Neuenburg</option>
      <option value="Nidwalden">Nidwalden</option>
      <option value="Obwalden">Obwalden</option>
      <option value="Sankt Gallen">Sankt Gallen</option>
      <option value="Schaffhausen">Schaffhausen</option>
      <option value="Schwyz">Schwyz</option>
      <option value="Solothurn">Solothurn</option>
      <option value="Thurgau">Thurgau</option>
      <option value="Ticino">Tessin</option>
      <option value="Uri">Uri</option>
      <option value="Vaud">Waadt</option>
      <option value="Valais">Wallis</option>
      <option value="Zug">Zug</option>
      <option value="Zürich">Zürich</option>
      `;
    }
    else if (window.location.href.includes("/en/")) {
      region_denomination = "Canton";
      regions = 
      `
      <option value="Aargau">Aargau</option>
      <option value="Appenzell Ausserrhoden">Appenzell Ausserrhoden</option>
      <option value="Appenzell Innerrhoden">Appenzell Innerrhoden</option>
      <option value="Basel-Landschaft">Basel-Landschaft</option>
      <option value="Basel-Stadt">Basel-Stadt</option>
      <option value="Bern">Bern</option>
      <option value="Freiburg">Fribourg</option>
      <option value="Genève">Geneva</option>
      <option value="Glarus">Glarus</option>
      <option value="Grigioni">Grisons</option>
      <option value="Jura">Jura</option>
      <option value="Luzern">Luzern</option>
      <option value="Neuchâtel">Neuchâtel</option>
      <option value="Nidwalden">Nidwalden</option>
      <option value="Obwalden">Obwalden</option>
      <option value="Schaffhausen">Schaffhausen</option>
      <option value="Schwyz">Schwyz</option>
      <option value="Solothurn">Solothurn</option>
      <option value="Sankt Gallen">St. Gallen</option>
      <option value="Thurgau">Thurgau</option>
      <option value="Ticino">Ticino</option>
      <option value="Uri">Uri</option>
      <option value="Valais">Valais</option>
      <option value="Vaud">Vaud</option>
      <option value="Zug">Zug</option>
      <option value="Zürich">Zürich</option>
      `;
    }
    else {
      region_denomination = "Cantone";
      regions = 
      `
      <option value="Aargau">Argovia</option>
      <option value="Appenzell Ausserrhoden">Appenzello Esterno</option>
      <option value="Appenzell Innerrhoden">Appenzell Interno</option>
      <option value="Basel-Landschaft">Basilea Campagna</option>
      <option value="Basel-Stadt">Basilea Città</option>
      <option value="Bern">Berna</option>
      <option value="Freiburg">Friburgo</option>
      <option value="Genève">Ginevra</option>
      <option value="Jura">Giura</option>
      <option value="Glarus">Glarona</option>
      <option value="Grigioni">Grigioni</option>
      <option value="Luzern">Lucerna</option>
      <option value="Neuchâtel">Neuchâtel</option>
      <option value="Nidwalden">Nidvaldo</option>
      <option value="Obwalden">Obvaldo</option>
      <option value="Sankt Gallen">San Gallo</option>
      <option value="Schaffhausen">Sciaffusa</option>
      <option value="Solothurn">Soletta</option>
      <option value="Schwyz">Svitto</option>
      <option value="Ticino">Ticino</option>
      <option value="Thurgau">Turgovia</option>
      <option value="Uri">Uri</option>
      <option value="Valais">Vallese</option>
      <option value="Vaud">Vaud</option>
      <option value="Zug">Zugo</option>
      <option value="Zürich">Zurigo</option>
      `;
    }
    $('#selectric-billing-region').removeAttr("disabled");
  }
  else if ($('#selectric-billing-country').val() === 'United States') {
    if (window.location.href.includes("/en/")) {
      region_denomination = "State";
    } else {
      region_denomination = "Stato";
    }
    regions = `
    <option value="Alabama">Alabama</option>
    <option value="Alaska">Alaska</option>
    <option value="Arizona">Arizona</option>
    <option value="Arkansas">Arkansas</option>
    <option value="California">California</option>
    <option value="Colorado">Colorado</option>
    <option value="Connecticut">Connecticut</option>
    <option value="District Of Columbia">District Of Columbia</option>
    <option value="Delaware">Delaware</option>
    <option value="Florida">Florida</option>
    <option value="Georgia">Georgia</option>
    <option value="Hawaii">Hawaii</option>
    <option value="Idaho">Idaho</option>
    <option value="Illinois">Illinois</option>
    <option value="Indiana">Indiana</option>
    <option value="Iowa">Iowa</option>
    <option value="Kansas">Kansas</option>
    <option value="Kentucky">Kentucky</option>
    <option value="Louisiana">Louisiana</option>
    <option value="Maine">Maine</option>
    <option value="Maryland">Maryland</option>
    <option value="Massachusetts">Massachusetts</option>
    <option value="Michigan">Michigan</option>
    <option value="Minnesota">Minnesota</option>
    <option value="Mississippi">Mississippi</option>
    <option value="Missouri">Missouri</option>
    <option value="Montana">Montana</option>
    <option value="Nebraska">Nebraska</option>
    <option value="Nevada">Nevada</option>
    <option value="New Hampshire">New Hampshire</option>
    <option value="New Jersey">New Jersey</option>
    <option value="New Mexico">New Mexico</option>
    <option value="New York">New York</option>
    <option value="North Carolina">North Carolina</option>
    <option value="North Dakota">North Dakota</option>
    <option value="Ohio">Ohio</option>
    <option value="Oklahoma">Oklahoma</option>
    <option value="Oregon">Oregon</option>
    <option value="Pennsylvania">Pennsylvania</option>
    <option value="Rhode Island">Rhode Island</option>
    <option value="South Carolina">South Carolina</option>
    <option value="South Dakota">South Dakota</option>
    <option value="Tennessee">Tennessee</option>
    <option value="Texas">Texas</option>
    <option value="Utah">Utah</option>
    <option value="Vermont">Vermont</option>
    <option value="Virgin Islands">Virgin Islands</option>
    <option value="Virginia">Virginia</option>
    <option value="Washington">Washington</option>
    <option value="West Virginia">West Virginia</option>
    <option value="Wisconsin">Wisconsin</option>
    <option value="WWyomingY">Wyoming</option>
    `;
    $('#selectric-billing-region').removeAttr("disabled");
  } 
  else {
    regions = ``;
    $('.billing-region .control').html('<input type="text" name="billing_state" value="'+posted_billing_state+'" title="'+region_denomination+'" class="input-text required-entry" id="billing_state" aria-required="true" required>');
    if (posted_billing_state != '') {
      $('.region-box').html('<div class="form-group input-text   " data-ctrl="InputText"><input type="text" class="form-control input-text__input" data-ctrl-dom="input" name="billing_state" id="reg_billing_state" value="'+posted_billing_state+'" required=""><label for="reg_billing_state" class="input-text__label"><span>'+region_denomination+'</span></label></div>');
    } else {
      $('.region-box').html('<div class="form-group input-text   " data-ctrl="InputText"><input type="text" class="form-control input-text__input is--empty" data-ctrl-dom="input" name="billing_state" id="reg_billing_state" value="'+posted_billing_state+'" required=""><label for="reg_billing_state" class="input-text__label"><span>'+region_denomination+'</span></label></div>');
    }
    $(".input-text__input").change(function() {
      if(!$(this).val()) {
        $(this).addClass("is--empty");
      } else {
          $(this).removeClass("is--empty");
      }
    });
  }
  $('#region-label').text(region_denomination);
  $('label[for="billing_state"] span').text(region_denomination);
  $('#selectric-billing-region').empty().append(regions).selectric("refresh");
  $('#selectric-billing-region option[value="
EOD;
echo esc_html( $_POST['billing_state'] );
echo 
<<<EOD
"]').attr("selected", "selected");
  $('#selectric-billing-region').selectric("refresh");
</script>
EOD;
} else if (!empty(get_user_meta( get_current_user_id(), 'billing_state', true ))) {
echo 
<<<EOD
<script type="text/javascript">
  if (window.location.href.includes("/en/")) {
    var region_denomination = "State/Province";
  } else {
    var region_denomination = "Stato/Provincia";
  }
  if ($('#selectric-billing-country').val() === 'Italy') {
    if (window.location.href.includes("/en/")) {
      region_denomination = "Province";
    } else {
      region_denomination = "Provincia";
    }
    regions = 
    `
    <option value="Agrigento">Agrigento</option>
    <option value="Alessandria">Alessandria</option>
    <option value="Ancona">Ancona</option>
    <option value="Aosta">Aosta</option>
    <option value="Arezzo">Arezzo</option>
    <option value="Ascoli Piceno">Ascoli Piceno</option>
    <option value="Asti">Asti</option>
    <option value="Avellino">Avellino</option>
    <option value="Bari">Bari</option>
    <option value="Barletta-Andria-Trani">Barletta-Andria-Trani</option>
    <option value="Belluno">Belluno</option>
    <option value="Benevento">Benevento</option>
    <option value="Bergamo">Bergamo</option>
    <option value="Biella">Biella</option>
    <option value="Bologna">Bologna</option>
    <option value="Bolzano">Bolzano</option>
    <option value="Brescia">Brescia</option>
    <option value="Brindisi">Brindisi</option>
    <option value="Cagliari">Cagliari</option>
    <option value="Caltanissetta">Caltanissetta</option>
    <option value="Campobasso">Campobasso</option>
    <option value="Carbonia-Iglesias">Carbonia-Iglesias</option>
    <option value="Caserta">Caserta</option>
    <option value="Catania">Catania</option>
    <option value="Catanzaro">Catanzaro</option>
    <option value="Chieti">Chieti</option>
    <option value="Como">Como</option>
    <option value="Cosenza">Cosenza</option>
    <option value="Cremona">Cremona</option>
    <option value="Crotone">Crotone</option>
    <option value="Cuneo">Cuneo</option>
    <option value="Enna">Enna</option>
    <option value="Fermo">Fermo</option>
    <option value="Ferrara">Ferrara</option>
    <option value="Firenze">Firenze</option>
    <option value="Foggia">Foggia</option>
    <option value="Forlì-Cesena">Forlì-Cesena</option>
    <option value="Frosinone">Frosinone</option>
    <option value="Genova">Genova</option>
    <option value="Gorizia">Gorizia</option>
    <option value="Grosseto">Grosseto</option>
    <option value="Imperia">Imperia</option>
    <option value="Isernia">Isernia</option>
    <option value="La Spezia">La Spezia</option>
    <option value="L'Aquila">L'Aquila</option>
    <option value="Latina">Latina</option>
    <option value="Lecce">Lecce</option>
    <option value="Lecco">Lecco</option>
    <option value="Livorno">Livorno</option>
    <option value="Lodi">Lodi</option>
    <option value="Lucca">Lucca</option>
    <option value="Macerata">Macerata</option>
    <option value="Medio Campidano">Medio Campidano</option>
    <option value="Mantova">Mantova</option>
    <option value="Massa-Carrara">Massa-Carrara</option>
    <option value="624">Matera</option>
    <option value="Messina">Messina</option>
    <option value="Milano">Milano</option>
    <option value="Modena">Modena</option>
    <option value="Monza e Brianza">Monza e Brianza</option>
    <option value="Napoli">Napoli</option>
    <option value="Novara">Novara</option>
    <option value="Nuoro">Nuoro</option>
    <option value="Olbia-Tempio">Olbia-Tempio</option>
    <option value="Oristano">Oristano</option>
    <option value="Padova">Padova</option>
    <option value="Palermo">Palermo</option>
    <option value="Parma">Parma</option>
    <option value="Pavia">Pavia</option>
    <option value="Perugia">Perugia</option>
    <option value="Pesaro e Urbino">Pesaro e Urbino</option>
    <option value="Pescara">Pescara</option>
    <option value="Piacenza">Piacenza</option>
    <option value="Pisa">Pisa</option>
    <option value="Pistoia">Pistoia</option>
    <option value="Pordenone">Pordenone</option>
    <option value="Potenza">Potenza</option>
    <option value="Prato">Prato</option>
    <option value="Ragusa">Ragusa</option>
    <option value="Ravenna">Ravenna</option>
    <option value="Reggio Calabria">Reggio Calabria</option>
    <option value="Reggio Emilia">Reggio Emilia</option>
    <option value="Rieti">Rieti</option>
    <option value="Rimini">Rimini</option>
    <option value="Roma">Roma</option>
    <option value="Rovigo">Rovigo</option>
    <option value="Salerno">Salerno</option>
    <option value="Medio Campidano">Medio Campidano</option>
    <option value="Sassari">Sassari</option>
    <option value="Savona">Savona</option>
    <option value="Siena">Siena</option>
    <option value="Siracusa">Siracusa</option>
    <option value="Sondrio">Sondrio</option>
    <option value="Taranto">Taranto</option>
    <option value="Teramo">Teramo</option>
    <option value="Terni">Terni</option>
    <option value="Torino">Torino</option>
    <option value="Ogliastra">Ogliastra</option>
    <option value="Trapani">Trapani</option>
    <option value="Trento">Trento</option>
    <option value="Treviso">Treviso</option>
    <option value="Trieste">Trieste</option>
    <option value="Udine">Udine</option>
    <option value="Varese">Varese</option>
    <option value="Venezia">Venezia</option>
    <option value="Verbano-Cusio-Ossola">Verbano-Cusio-Ossola</option>
    <option value="Vercelli">Vercelli</option>
    <option value="Verona">Verona</option>
    <option value="Vibo Valentia">Vibo Valentia</option>
    <option value="Vicenza">Vicenza</option>
    <option value="Viterbo">Viterbo</option>
    <option value="Sud Sardegna">Sud Sardegna</option>
    `;
    $('#selectric-billing-region').removeAttr("disabled");
  }
  else if ($('#selectric-billing-country').val() === 'Switzerland') {
    if (window.location.href.includes("/de/")) {
      region_denomination = "Kanton";
      regions = 
      `
      <option value="Aargau">Aargau</option>
      <option value="Appenzell Ausserrhoden">Appenzell Ausserrhoden</option>
      <option value="Appenzell Innerrhoden">Appenzell Innerrhoden</option>
      <option value="Basel-Landschaft">Basel-Landschaft</option>
      <option value="Basel-Stadt">Basel-Stadt</option>
      <option value="Bern">Bern</option>
      <option value="Freiburg">Freiburg</option>
      <option value="Genève">Genf</option>
      <option value="Glarus">Glarus</option>
      <option value="Grigioni">Graubünden</option>
      <option value="Jura">Jura</option>
      <option value="Luzern">Luzern</option>
      <option value="Neuchâtel">Neuenburg</option>
      <option value="Nidwalden">Nidwalden</option>
      <option value="Obwalden">Obwalden</option>
      <option value="Sankt Gallen">Sankt Gallen</option>
      <option value="Schaffhausen">Schaffhausen</option>
      <option value="Schwyz">Schwyz</option>
      <option value="Solothurn">Solothurn</option>
      <option value="Thurgau">Thurgau</option>
      <option value="Ticino">Tessin</option>
      <option value="Uri">Uri</option>
      <option value="Vaud">Waadt</option>
      <option value="Valais">Wallis</option>
      <option value="Zug">Zug</option>
      <option value="Zürich">Zürich</option>
      `;
    }
    else if (window.location.href.includes("/en/")) {
      region_denomination = "Canton";
      regions = 
      `
      <option value="Aargau">Aargau</option>
      <option value="Appenzell Ausserrhoden">Appenzell Ausserrhoden</option>
      <option value="Appenzell Innerrhoden">Appenzell Innerrhoden</option>
      <option value="Basel-Landschaft">Basel-Landschaft</option>
      <option value="Basel-Stadt">Basel-Stadt</option>
      <option value="Bern">Bern</option>
      <option value="Freiburg">Fribourg</option>
      <option value="Genève">Geneva</option>
      <option value="Glarus">Glarus</option>
      <option value="Grigioni">Grisons</option>
      <option value="Jura">Jura</option>
      <option value="Luzern">Luzern</option>
      <option value="Neuchâtel">Neuchâtel</option>
      <option value="Nidwalden">Nidwalden</option>
      <option value="Obwalden">Obwalden</option>
      <option value="Schaffhausen">Schaffhausen</option>
      <option value="Schwyz">Schwyz</option>
      <option value="Solothurn">Solothurn</option>
      <option value="Sankt Gallen">St. Gallen</option>
      <option value="Thurgau">Thurgau</option>
      <option value="Ticino">Ticino</option>
      <option value="Uri">Uri</option>
      <option value="Valais">Valais</option>
      <option value="Vaud">Vaud</option>
      <option value="Zug">Zug</option>
      <option value="Zürich">Zürich</option>
      `;
    }
    else {
      region_denomination = "Cantone";
      regions = 
      `
      <option value="Aargau">Argovia</option>
      <option value="Appenzell Ausserrhoden">Appenzello Esterno</option>
      <option value="Appenzell Innerrhoden">Appenzell Interno</option>
      <option value="Basel-Landschaft">Basilea Campagna</option>
      <option value="Basel-Stadt">Basilea Città</option>
      <option value="Bern">Berna</option>
      <option value="Freiburg">Friburgo</option>
      <option value="Genève">Ginevra</option>
      <option value="Jura">Giura</option>
      <option value="Glarus">Glarona</option>
      <option value="Grigioni">Grigioni</option>
      <option value="Luzern">Lucerna</option>
      <option value="Neuchâtel">Neuchâtel</option>
      <option value="Nidwalden">Nidvaldo</option>
      <option value="Obwalden">Obvaldo</option>
      <option value="Sankt Gallen">San Gallo</option>
      <option value="Schaffhausen">Sciaffusa</option>
      <option value="Solothurn">Soletta</option>
      <option value="Schwyz">Svitto</option>
      <option value="Ticino">Ticino</option>
      <option value="Thurgau">Turgovia</option>
      <option value="Uri">Uri</option>
      <option value="Valais">Vallese</option>
      <option value="Vaud">Vaud</option>
      <option value="Zug">Zugo</option>
      <option value="Zürich">Zurigo</option>
      `;
    }
    $('#selectric-billing-region').removeAttr("disabled");
  }
  else if ($('#selectric-billing-country').val() === 'United States') {
    if (window.location.href.includes("/en/")) {
      region_denomination = "State";
    } else {
      region_denomination = "Stato";
    }
    regions = `
    <option value="Alabama">Alabama</option>
    <option value="Alaska">Alaska</option>
    <option value="Arizona">Arizona</option>
    <option value="Arkansas">Arkansas</option>
    <option value="California">California</option>
    <option value="Colorado">Colorado</option>
    <option value="Connecticut">Connecticut</option>
    <option value="District Of Columbia">District Of Columbia</option>
    <option value="Delaware">Delaware</option>
    <option value="Florida">Florida</option>
    <option value="Georgia">Georgia</option>
    <option value="Hawaii">Hawaii</option>
    <option value="Idaho">Idaho</option>
    <option value="Illinois">Illinois</option>
    <option value="Indiana">Indiana</option>
    <option value="Iowa">Iowa</option>
    <option value="Kansas">Kansas</option>
    <option value="Kentucky">Kentucky</option>
    <option value="Louisiana">Louisiana</option>
    <option value="Maine">Maine</option>
    <option value="Maryland">Maryland</option>
    <option value="Massachusetts">Massachusetts</option>
    <option value="Michigan">Michigan</option>
    <option value="Minnesota">Minnesota</option>
    <option value="Mississippi">Mississippi</option>
    <option value="Missouri">Missouri</option>
    <option value="Montana">Montana</option>
    <option value="Nebraska">Nebraska</option>
    <option value="Nevada">Nevada</option>
    <option value="New Hampshire">New Hampshire</option>
    <option value="New Jersey">New Jersey</option>
    <option value="New Mexico">New Mexico</option>
    <option value="New York">New York</option>
    <option value="North Carolina">North Carolina</option>
    <option value="North Dakota">North Dakota</option>
    <option value="Ohio">Ohio</option>
    <option value="Oklahoma">Oklahoma</option>
    <option value="Oregon">Oregon</option>
    <option value="Pennsylvania">Pennsylvania</option>
    <option value="Rhode Island">Rhode Island</option>
    <option value="South Carolina">South Carolina</option>
    <option value="South Dakota">South Dakota</option>
    <option value="Tennessee">Tennessee</option>
    <option value="Texas">Texas</option>
    <option value="Utah">Utah</option>
    <option value="Vermont">Vermont</option>
    <option value="Virgin Islands">Virgin Islands</option>
    <option value="Virginia">Virginia</option>
    <option value="Washington">Washington</option>
    <option value="West Virginia">West Virginia</option>
    <option value="Wisconsin">Wisconsin</option>
    <option value="WWyomingY">Wyoming</option>
    `;
    $('#selectric-billing-region').removeAttr("disabled");
  } 
  else {
    regions = ``;
    $('.billing-region .control').html('<input type="text" name="billing_state" value="
EOD;
echo esc_html( get_user_meta( get_current_user_id(), 'billing_state', true ));
echo
<<<EOD
" title="'+region_denomination+'" class="input-text required-entry" id="billing_state" aria-required="true" required>');
    if (posted_billing_state != '') {
      $('.region-box').html('<div class="form-group input-text   " data-ctrl="InputText"><input type="text" class="form-control input-text__input" data-ctrl-dom="input" name="billing_state" id="reg_billing_state" value="'+posted_billing_state+'" required=""><label for="reg_billing_state" class="input-text__label"><span>'+region_denomination+'</span></label></div>');
    } else {
      $('.region-box').html('<div class="form-group input-text   " data-ctrl="InputText"><input type="text" class="form-control input-text__input is--empty" data-ctrl-dom="input" name="billing_state" id="reg_billing_state" value="'+posted_billing_state+'" required=""><label for="reg_billing_state" class="input-text__label"><span>'+region_denomination+'</span></label></div>');
    }
    $(".input-text__input").change(function() {
      if(!$(this).val()) {
        $(this).addClass("is--empty");
      } else {
          $(this).removeClass("is--empty");
      }
    });
  }
  $('#region-label').text(region_denomination);
  $('label[for="selectric-billing-region"] span').text(region_denomination);
  $('#selectric-billing-region').empty().append(regions).selectric("refresh");
  $('#selectric-billing-region option[value="
EOD;
echo esc_html( get_user_meta( get_current_user_id(), 'billing_state', true ));
echo 
<<<EOD
"]').attr("selected", "selected");
  $('#selectric-billing-region').selectric("refresh");
</script>
EOD;
} 
?>

<?php if (isset($_POST['shipping_country'])) {
echo 
<<<EOD
<script type="text/javascript">
    $('#selectric-shipping-country').val("
EOD;
echo esc_html( $_POST['shipping_country'] );
echo 
<<<EOD
").selectric("refresh");
</script>
EOD;
} else if (!empty(get_user_meta( get_current_user_id(), 'shipping_country', true ))) {
echo 
<<<EOD
<script type="text/javascript">
    $('#selectric-shipping-country').val("
EOD;
echo esc_html( get_user_meta( get_current_user_id(), 'shipping_country', true ));
echo 
<<<EOD
").selectric("refresh");
</script>
EOD;
}

if (isset($_POST['shipping_state'])) {
echo 
<<<EOD
<script type="text/javascript">
  if (window.location.href.includes("/en/")) {
    var region_denomination = "State/Province";
  } else {
    var region_denomination = "Stato/Provincia";
  }
  if ($('#selectric-shipping-country').val() === 'Italy') {
    if (window.location.href.includes("/en/")) {
      region_denomination = "Province";
    } else {
      region_denomination = "Provincia";
    }
    regions = 
    `
    <option value="Agrigento">Agrigento</option>
    <option value="Alessandria">Alessandria</option>
    <option value="Ancona">Ancona</option>
    <option value="Aosta">Aosta</option>
    <option value="Arezzo">Arezzo</option>
    <option value="Ascoli Piceno">Ascoli Piceno</option>
    <option value="Asti">Asti</option>
    <option value="Avellino">Avellino</option>
    <option value="Bari">Bari</option>
    <option value="Barletta-Andria-Trani">Barletta-Andria-Trani</option>
    <option value="Belluno">Belluno</option>
    <option value="Benevento">Benevento</option>
    <option value="Bergamo">Bergamo</option>
    <option value="Biella">Biella</option>
    <option value="Bologna">Bologna</option>
    <option value="Bolzano">Bolzano</option>
    <option value="Brescia">Brescia</option>
    <option value="Brindisi">Brindisi</option>
    <option value="Cagliari">Cagliari</option>
    <option value="Caltanissetta">Caltanissetta</option>
    <option value="Campobasso">Campobasso</option>
    <option value="Carbonia-Iglesias">Carbonia-Iglesias</option>
    <option value="Caserta">Caserta</option>
    <option value="Catania">Catania</option>
    <option value="Catanzaro">Catanzaro</option>
    <option value="Chieti">Chieti</option>
    <option value="Como">Como</option>
    <option value="Cosenza">Cosenza</option>
    <option value="Cremona">Cremona</option>
    <option value="Crotone">Crotone</option>
    <option value="Cuneo">Cuneo</option>
    <option value="Enna">Enna</option>
    <option value="Fermo">Fermo</option>
    <option value="Ferrara">Ferrara</option>
    <option value="Firenze">Firenze</option>
    <option value="Foggia">Foggia</option>
    <option value="Forlì-Cesena">Forlì-Cesena</option>
    <option value="Frosinone">Frosinone</option>
    <option value="Genova">Genova</option>
    <option value="Gorizia">Gorizia</option>
    <option value="Grosseto">Grosseto</option>
    <option value="Imperia">Imperia</option>
    <option value="Isernia">Isernia</option>
    <option value="La Spezia">La Spezia</option>
    <option value="L'Aquila">L'Aquila</option>
    <option value="Latina">Latina</option>
    <option value="Lecce">Lecce</option>
    <option value="Lecco">Lecco</option>
    <option value="Livorno">Livorno</option>
    <option value="Lodi">Lodi</option>
    <option value="Lucca">Lucca</option>
    <option value="Macerata">Macerata</option>
    <option value="Medio Campidano">Medio Campidano</option>
    <option value="Mantova">Mantova</option>
    <option value="Massa-Carrara">Massa-Carrara</option>
    <option value="624">Matera</option>
    <option value="Messina">Messina</option>
    <option value="Milano">Milano</option>
    <option value="Modena">Modena</option>
    <option value="Monza e Brianza">Monza e Brianza</option>
    <option value="Napoli">Napoli</option>
    <option value="Novara">Novara</option>
    <option value="Nuoro">Nuoro</option>
    <option value="Olbia-Tempio">Olbia-Tempio</option>
    <option value="Oristano">Oristano</option>
    <option value="Padova">Padova</option>
    <option value="Palermo">Palermo</option>
    <option value="Parma">Parma</option>
    <option value="Pavia">Pavia</option>
    <option value="Perugia">Perugia</option>
    <option value="Pesaro e Urbino">Pesaro e Urbino</option>
    <option value="Pescara">Pescara</option>
    <option value="Piacenza">Piacenza</option>
    <option value="Pisa">Pisa</option>
    <option value="Pistoia">Pistoia</option>
    <option value="Pordenone">Pordenone</option>
    <option value="Potenza">Potenza</option>
    <option value="Prato">Prato</option>
    <option value="Ragusa">Ragusa</option>
    <option value="Ravenna">Ravenna</option>
    <option value="Reggio Calabria">Reggio Calabria</option>
    <option value="Reggio Emilia">Reggio Emilia</option>
    <option value="Rieti">Rieti</option>
    <option value="Rimini">Rimini</option>
    <option value="Roma">Roma</option>
    <option value="Rovigo">Rovigo</option>
    <option value="Salerno">Salerno</option>
    <option value="Medio Campidano">Medio Campidano</option>
    <option value="Sassari">Sassari</option>
    <option value="Savona">Savona</option>
    <option value="Siena">Siena</option>
    <option value="Siracusa">Siracusa</option>
    <option value="Sondrio">Sondrio</option>
    <option value="Taranto">Taranto</option>
    <option value="Teramo">Teramo</option>
    <option value="Terni">Terni</option>
    <option value="Torino">Torino</option>
    <option value="Ogliastra">Ogliastra</option>
    <option value="Trapani">Trapani</option>
    <option value="Trento">Trento</option>
    <option value="Treviso">Treviso</option>
    <option value="Trieste">Trieste</option>
    <option value="Udine">Udine</option>
    <option value="Varese">Varese</option>
    <option value="Venezia">Venezia</option>
    <option value="Verbano-Cusio-Ossola">Verbano-Cusio-Ossola</option>
    <option value="Vercelli">Vercelli</option>
    <option value="Verona">Verona</option>
    <option value="Vibo Valentia">Vibo Valentia</option>
    <option value="Vicenza">Vicenza</option>
    <option value="Viterbo">Viterbo</option>
    <option value="Sud Sardegna">Sud Sardegna</option>
    `;
    $('#selectric-shipping-region').removeAttr("disabled");
  }
  else if ($('#selectric-shipping-country').val() === 'Switzerland') {
    if (window.location.href.includes("/de/")) {
      region_denomination = "Kanton";
      regions = 
      `
      <option value="Aargau">Aargau</option>
      <option value="Appenzell Ausserrhoden">Appenzell Ausserrhoden</option>
      <option value="Appenzell Innerrhoden">Appenzell Innerrhoden</option>
      <option value="Basel-Landschaft">Basel-Landschaft</option>
      <option value="Basel-Stadt">Basel-Stadt</option>
      <option value="Bern">Bern</option>
      <option value="Freiburg">Freiburg</option>
      <option value="Genève">Genf</option>
      <option value="Glarus">Glarus</option>
      <option value="Grigioni">Graubünden</option>
      <option value="Jura">Jura</option>
      <option value="Luzern">Luzern</option>
      <option value="Neuchâtel">Neuenburg</option>
      <option value="Nidwalden">Nidwalden</option>
      <option value="Obwalden">Obwalden</option>
      <option value="Sankt Gallen">Sankt Gallen</option>
      <option value="Schaffhausen">Schaffhausen</option>
      <option value="Schwyz">Schwyz</option>
      <option value="Solothurn">Solothurn</option>
      <option value="Thurgau">Thurgau</option>
      <option value="Ticino">Tessin</option>
      <option value="Uri">Uri</option>
      <option value="Vaud">Waadt</option>
      <option value="Valais">Wallis</option>
      <option value="Zug">Zug</option>
      <option value="Zürich">Zürich</option>
      `;
    }
    else if (window.location.href.includes("/en/")) {
      region_denomination = "Canton";
      regions = 
      `
      <option value="Aargau">Aargau</option>
      <option value="Appenzell Ausserrhoden">Appenzell Ausserrhoden</option>
      <option value="Appenzell Innerrhoden">Appenzell Innerrhoden</option>
      <option value="Basel-Landschaft">Basel-Landschaft</option>
      <option value="Basel-Stadt">Basel-Stadt</option>
      <option value="Bern">Bern</option>
      <option value="Freiburg">Fribourg</option>
      <option value="Genève">Geneva</option>
      <option value="Glarus">Glarus</option>
      <option value="Grigioni">Grisons</option>
      <option value="Jura">Jura</option>
      <option value="Luzern">Luzern</option>
      <option value="Neuchâtel">Neuchâtel</option>
      <option value="Nidwalden">Nidwalden</option>
      <option value="Obwalden">Obwalden</option>
      <option value="Schaffhausen">Schaffhausen</option>
      <option value="Schwyz">Schwyz</option>
      <option value="Solothurn">Solothurn</option>
      <option value="Sankt Gallen">St. Gallen</option>
      <option value="Thurgau">Thurgau</option>
      <option value="Ticino">Ticino</option>
      <option value="Uri">Uri</option>
      <option value="Valais">Valais</option>
      <option value="Vaud">Vaud</option>
      <option value="Zug">Zug</option>
      <option value="Zürich">Zürich</option>
      `;
    }
    else {
      region_denomination = "Cantone";
      regions = 
      `
      <option value="Aargau">Argovia</option>
      <option value="Appenzell Ausserrhoden">Appenzello Esterno</option>
      <option value="Appenzell Innerrhoden">Appenzell Interno</option>
      <option value="Basel-Landschaft">Basilea Campagna</option>
      <option value="Basel-Stadt">Basilea Città</option>
      <option value="Bern">Berna</option>
      <option value="Freiburg">Friburgo</option>
      <option value="Genève">Ginevra</option>
      <option value="Jura">Giura</option>
      <option value="Glarus">Glarona</option>
      <option value="Grigioni">Grigioni</option>
      <option value="Luzern">Lucerna</option>
      <option value="Neuchâtel">Neuchâtel</option>
      <option value="Nidwalden">Nidvaldo</option>
      <option value="Obwalden">Obvaldo</option>
      <option value="Sankt Gallen">San Gallo</option>
      <option value="Schaffhausen">Sciaffusa</option>
      <option value="Solothurn">Soletta</option>
      <option value="Schwyz">Svitto</option>
      <option value="Ticino">Ticino</option>
      <option value="Thurgau">Turgovia</option>
      <option value="Uri">Uri</option>
      <option value="Valais">Vallese</option>
      <option value="Vaud">Vaud</option>
      <option value="Zug">Zugo</option>
      <option value="Zürich">Zurigo</option>
      `;
    }
    $('#selectric-shipping-region').removeAttr("disabled");
  }
  else if ($('#selectric-shipping-country').val() === 'United States') {
    if (window.location.href.includes("/en/")) {
      region_denomination = "State";
    } else {
      region_denomination = "Stato";
    }
    regions = `
    <option value="Alabama">Alabama</option>
    <option value="Alaska">Alaska</option>
    <option value="Arizona">Arizona</option>
    <option value="Arkansas">Arkansas</option>
    <option value="California">California</option>
    <option value="Colorado">Colorado</option>
    <option value="Connecticut">Connecticut</option>
    <option value="District Of Columbia">District Of Columbia</option>
    <option value="Delaware">Delaware</option>
    <option value="Florida">Florida</option>
    <option value="Georgia">Georgia</option>
    <option value="Hawaii">Hawaii</option>
    <option value="Idaho">Idaho</option>
    <option value="Illinois">Illinois</option>
    <option value="Indiana">Indiana</option>
    <option value="Iowa">Iowa</option>
    <option value="Kansas">Kansas</option>
    <option value="Kentucky">Kentucky</option>
    <option value="Louisiana">Louisiana</option>
    <option value="Maine">Maine</option>
    <option value="Maryland">Maryland</option>
    <option value="Massachusetts">Massachusetts</option>
    <option value="Michigan">Michigan</option>
    <option value="Minnesota">Minnesota</option>
    <option value="Mississippi">Mississippi</option>
    <option value="Missouri">Missouri</option>
    <option value="Montana">Montana</option>
    <option value="Nebraska">Nebraska</option>
    <option value="Nevada">Nevada</option>
    <option value="New Hampshire">New Hampshire</option>
    <option value="New Jersey">New Jersey</option>
    <option value="New Mexico">New Mexico</option>
    <option value="New York">New York</option>
    <option value="North Carolina">North Carolina</option>
    <option value="North Dakota">North Dakota</option>
    <option value="Ohio">Ohio</option>
    <option value="Oklahoma">Oklahoma</option>
    <option value="Oregon">Oregon</option>
    <option value="Pennsylvania">Pennsylvania</option>
    <option value="Rhode Island">Rhode Island</option>
    <option value="South Carolina">South Carolina</option>
    <option value="South Dakota">South Dakota</option>
    <option value="Tennessee">Tennessee</option>
    <option value="Texas">Texas</option>
    <option value="Utah">Utah</option>
    <option value="Vermont">Vermont</option>
    <option value="Virgin Islands">Virgin Islands</option>
    <option value="Virginia">Virginia</option>
    <option value="Washington">Washington</option>
    <option value="West Virginia">West Virginia</option>
    <option value="Wisconsin">Wisconsin</option>
    <option value="WWyomingY">Wyoming</option>
    `;
    $('#selectric-shipping-region').removeAttr("disabled");
  } 
  else {
    regions = ``;
    $('.shipping-region .control').html('<input type="text" name="shipping_state" value="'+posted_shipping_state+'" title="'+region_denomination+'" class="input-text required-entry" id="shipping_state" aria-required="true" required>');
    $(".input-text__input").change(function() {
      if(!$(this).val()) {
        $(this).addClass("is--empty");
      } else {
          $(this).removeClass("is--empty");
      }
    });
  }
  $('label[for="selectric-shipping-region"] span').text(region_denomination);
  $('#selectric-shipping-region').empty().append(regions).selectric("refresh");
  $('#selectric-shipping-region option[value="
EOD;
echo esc_html( $_POST['shipping_state'] );
echo 
<<<EOD
"]').attr("selected", "selected");
  $('#selectric-shipping-region').selectric("refresh");
</script>
EOD;
} else if (!empty(get_user_meta( get_current_user_id(), 'shipping_state', true ))) {
echo 
<<<EOD
<script type="text/javascript">
  if (window.location.href.includes("/en/")) {
    var region_denomination = "State/Province";
  } else {
    var region_denomination = "Stato/Provincia";
  }
  if ($('#selectric-shipping-country').val() === 'Italy') {
    if (window.location.href.includes("/en/")) {
      region_denomination = "Province";
    } else {
      region_denomination = "Provincia";
    }
    regions = 
    `
    <option value="Agrigento">Agrigento</option>
    <option value="Alessandria">Alessandria</option>
    <option value="Ancona">Ancona</option>
    <option value="Aosta">Aosta</option>
    <option value="Arezzo">Arezzo</option>
    <option value="Ascoli Piceno">Ascoli Piceno</option>
    <option value="Asti">Asti</option>
    <option value="Avellino">Avellino</option>
    <option value="Bari">Bari</option>
    <option value="Barletta-Andria-Trani">Barletta-Andria-Trani</option>
    <option value="Belluno">Belluno</option>
    <option value="Benevento">Benevento</option>
    <option value="Bergamo">Bergamo</option>
    <option value="Biella">Biella</option>
    <option value="Bologna">Bologna</option>
    <option value="Bolzano">Bolzano</option>
    <option value="Brescia">Brescia</option>
    <option value="Brindisi">Brindisi</option>
    <option value="Cagliari">Cagliari</option>
    <option value="Caltanissetta">Caltanissetta</option>
    <option value="Campobasso">Campobasso</option>
    <option value="Carbonia-Iglesias">Carbonia-Iglesias</option>
    <option value="Caserta">Caserta</option>
    <option value="Catania">Catania</option>
    <option value="Catanzaro">Catanzaro</option>
    <option value="Chieti">Chieti</option>
    <option value="Como">Como</option>
    <option value="Cosenza">Cosenza</option>
    <option value="Cremona">Cremona</option>
    <option value="Crotone">Crotone</option>
    <option value="Cuneo">Cuneo</option>
    <option value="Enna">Enna</option>
    <option value="Fermo">Fermo</option>
    <option value="Ferrara">Ferrara</option>
    <option value="Firenze">Firenze</option>
    <option value="Foggia">Foggia</option>
    <option value="Forlì-Cesena">Forlì-Cesena</option>
    <option value="Frosinone">Frosinone</option>
    <option value="Genova">Genova</option>
    <option value="Gorizia">Gorizia</option>
    <option value="Grosseto">Grosseto</option>
    <option value="Imperia">Imperia</option>
    <option value="Isernia">Isernia</option>
    <option value="La Spezia">La Spezia</option>
    <option value="L'Aquila">L'Aquila</option>
    <option value="Latina">Latina</option>
    <option value="Lecce">Lecce</option>
    <option value="Lecco">Lecco</option>
    <option value="Livorno">Livorno</option>
    <option value="Lodi">Lodi</option>
    <option value="Lucca">Lucca</option>
    <option value="Macerata">Macerata</option>
    <option value="Medio Campidano">Medio Campidano</option>
    <option value="Mantova">Mantova</option>
    <option value="Massa-Carrara">Massa-Carrara</option>
    <option value="624">Matera</option>
    <option value="Messina">Messina</option>
    <option value="Milano">Milano</option>
    <option value="Modena">Modena</option>
    <option value="Monza e Brianza">Monza e Brianza</option>
    <option value="Napoli">Napoli</option>
    <option value="Novara">Novara</option>
    <option value="Nuoro">Nuoro</option>
    <option value="Olbia-Tempio">Olbia-Tempio</option>
    <option value="Oristano">Oristano</option>
    <option value="Padova">Padova</option>
    <option value="Palermo">Palermo</option>
    <option value="Parma">Parma</option>
    <option value="Pavia">Pavia</option>
    <option value="Perugia">Perugia</option>
    <option value="Pesaro e Urbino">Pesaro e Urbino</option>
    <option value="Pescara">Pescara</option>
    <option value="Piacenza">Piacenza</option>
    <option value="Pisa">Pisa</option>
    <option value="Pistoia">Pistoia</option>
    <option value="Pordenone">Pordenone</option>
    <option value="Potenza">Potenza</option>
    <option value="Prato">Prato</option>
    <option value="Ragusa">Ragusa</option>
    <option value="Ravenna">Ravenna</option>
    <option value="Reggio Calabria">Reggio Calabria</option>
    <option value="Reggio Emilia">Reggio Emilia</option>
    <option value="Rieti">Rieti</option>
    <option value="Rimini">Rimini</option>
    <option value="Roma">Roma</option>
    <option value="Rovigo">Rovigo</option>
    <option value="Salerno">Salerno</option>
    <option value="Medio Campidano">Medio Campidano</option>
    <option value="Sassari">Sassari</option>
    <option value="Savona">Savona</option>
    <option value="Siena">Siena</option>
    <option value="Siracusa">Siracusa</option>
    <option value="Sondrio">Sondrio</option>
    <option value="Taranto">Taranto</option>
    <option value="Teramo">Teramo</option>
    <option value="Terni">Terni</option>
    <option value="Torino">Torino</option>
    <option value="Ogliastra">Ogliastra</option>
    <option value="Trapani">Trapani</option>
    <option value="Trento">Trento</option>
    <option value="Treviso">Treviso</option>
    <option value="Trieste">Trieste</option>
    <option value="Udine">Udine</option>
    <option value="Varese">Varese</option>
    <option value="Venezia">Venezia</option>
    <option value="Verbano-Cusio-Ossola">Verbano-Cusio-Ossola</option>
    <option value="Vercelli">Vercelli</option>
    <option value="Verona">Verona</option>
    <option value="Vibo Valentia">Vibo Valentia</option>
    <option value="Vicenza">Vicenza</option>
    <option value="Viterbo">Viterbo</option>
    <option value="Sud Sardegna">Sud Sardegna</option>
    `;
    $('#selectric-shipping-region').removeAttr("disabled");
  }
  else if ($('#selectric-billing-country').val() === 'Switzerland') {
    if (window.location.href.includes("/de/")) {
      region_denomination = "Kanton";
      regions = 
      `
      <option value="Aargau">Aargau</option>
      <option value="Appenzell Ausserrhoden">Appenzell Ausserrhoden</option>
      <option value="Appenzell Innerrhoden">Appenzell Innerrhoden</option>
      <option value="Basel-Landschaft">Basel-Landschaft</option>
      <option value="Basel-Stadt">Basel-Stadt</option>
      <option value="Bern">Bern</option>
      <option value="Freiburg">Freiburg</option>
      <option value="Genève">Genf</option>
      <option value="Glarus">Glarus</option>
      <option value="Grigioni">Graubünden</option>
      <option value="Jura">Jura</option>
      <option value="Luzern">Luzern</option>
      <option value="Neuchâtel">Neuenburg</option>
      <option value="Nidwalden">Nidwalden</option>
      <option value="Obwalden">Obwalden</option>
      <option value="Sankt Gallen">Sankt Gallen</option>
      <option value="Schaffhausen">Schaffhausen</option>
      <option value="Schwyz">Schwyz</option>
      <option value="Solothurn">Solothurn</option>
      <option value="Thurgau">Thurgau</option>
      <option value="Ticino">Tessin</option>
      <option value="Uri">Uri</option>
      <option value="Vaud">Waadt</option>
      <option value="Valais">Wallis</option>
      <option value="Zug">Zug</option>
      <option value="Zürich">Zürich</option>
      `;
    }
    else if (window.location.href.includes("/en/")) {
      region_denomination = "Canton";
      regions = 
      `
      <option value="Aargau">Aargau</option>
      <option value="Appenzell Ausserrhoden">Appenzell Ausserrhoden</option>
      <option value="Appenzell Innerrhoden">Appenzell Innerrhoden</option>
      <option value="Basel-Landschaft">Basel-Landschaft</option>
      <option value="Basel-Stadt">Basel-Stadt</option>
      <option value="Bern">Bern</option>
      <option value="Freiburg">Fribourg</option>
      <option value="Genève">Geneva</option>
      <option value="Glarus">Glarus</option>
      <option value="Grigioni">Grisons</option>
      <option value="Jura">Jura</option>
      <option value="Luzern">Luzern</option>
      <option value="Neuchâtel">Neuchâtel</option>
      <option value="Nidwalden">Nidwalden</option>
      <option value="Obwalden">Obwalden</option>
      <option value="Schaffhausen">Schaffhausen</option>
      <option value="Schwyz">Schwyz</option>
      <option value="Solothurn">Solothurn</option>
      <option value="Sankt Gallen">St. Gallen</option>
      <option value="Thurgau">Thurgau</option>
      <option value="Ticino">Ticino</option>
      <option value="Uri">Uri</option>
      <option value="Valais">Valais</option>
      <option value="Vaud">Vaud</option>
      <option value="Zug">Zug</option>
      <option value="Zürich">Zürich</option>
      `;
    }
    else {
      region_denomination = "Cantone";
      regions = 
      `
      <option value="Aargau">Argovia</option>
      <option value="Appenzell Ausserrhoden">Appenzello Esterno</option>
      <option value="Appenzell Innerrhoden">Appenzell Interno</option>
      <option value="Basel-Landschaft">Basilea Campagna</option>
      <option value="Basel-Stadt">Basilea Città</option>
      <option value="Bern">Berna</option>
      <option value="Freiburg">Friburgo</option>
      <option value="Genève">Ginevra</option>
      <option value="Jura">Giura</option>
      <option value="Glarus">Glarona</option>
      <option value="Grigioni">Grigioni</option>
      <option value="Luzern">Lucerna</option>
      <option value="Neuchâtel">Neuchâtel</option>
      <option value="Nidwalden">Nidvaldo</option>
      <option value="Obwalden">Obvaldo</option>
      <option value="Sankt Gallen">San Gallo</option>
      <option value="Schaffhausen">Sciaffusa</option>
      <option value="Solothurn">Soletta</option>
      <option value="Schwyz">Svitto</option>
      <option value="Ticino">Ticino</option>
      <option value="Thurgau">Turgovia</option>
      <option value="Uri">Uri</option>
      <option value="Valais">Vallese</option>
      <option value="Vaud">Vaud</option>
      <option value="Zug">Zugo</option>
      <option value="Zürich">Zurigo</option>
      `;
    }
    $('#selectric-shipping-region').removeAttr("disabled");
  }
  else if ($('#selectric-shipping-country').val() === 'United States') {
    if (window.location.href.includes("/en/")) {
      region_denomination = "State";
    } else {
      region_denomination = "Stato";
    }
    regions = `
    <option value="Alabama">Alabama</option>
    <option value="Alaska">Alaska</option>
    <option value="Arizona">Arizona</option>
    <option value="Arkansas">Arkansas</option>
    <option value="California">California</option>
    <option value="Colorado">Colorado</option>
    <option value="Connecticut">Connecticut</option>
    <option value="District Of Columbia">District Of Columbia</option>
    <option value="Delaware">Delaware</option>
    <option value="Florida">Florida</option>
    <option value="Georgia">Georgia</option>
    <option value="Hawaii">Hawaii</option>
    <option value="Idaho">Idaho</option>
    <option value="Illinois">Illinois</option>
    <option value="Indiana">Indiana</option>
    <option value="Iowa">Iowa</option>
    <option value="Kansas">Kansas</option>
    <option value="Kentucky">Kentucky</option>
    <option value="Louisiana">Louisiana</option>
    <option value="Maine">Maine</option>
    <option value="Maryland">Maryland</option>
    <option value="Massachusetts">Massachusetts</option>
    <option value="Michigan">Michigan</option>
    <option value="Minnesota">Minnesota</option>
    <option value="Mississippi">Mississippi</option>
    <option value="Missouri">Missouri</option>
    <option value="Montana">Montana</option>
    <option value="Nebraska">Nebraska</option>
    <option value="Nevada">Nevada</option>
    <option value="New Hampshire">New Hampshire</option>
    <option value="New Jersey">New Jersey</option>
    <option value="New Mexico">New Mexico</option>
    <option value="New York">New York</option>
    <option value="North Carolina">North Carolina</option>
    <option value="North Dakota">North Dakota</option>
    <option value="Ohio">Ohio</option>
    <option value="Oklahoma">Oklahoma</option>
    <option value="Oregon">Oregon</option>
    <option value="Pennsylvania">Pennsylvania</option>
    <option value="Rhode Island">Rhode Island</option>
    <option value="South Carolina">South Carolina</option>
    <option value="South Dakota">South Dakota</option>
    <option value="Tennessee">Tennessee</option>
    <option value="Texas">Texas</option>
    <option value="Utah">Utah</option>
    <option value="Vermont">Vermont</option>
    <option value="Virgin Islands">Virgin Islands</option>
    <option value="Virginia">Virginia</option>
    <option value="Washington">Washington</option>
    <option value="West Virginia">West Virginia</option>
    <option value="Wisconsin">Wisconsin</option>
    <option value="WWyomingY">Wyoming</option>
    `;
    $('#selectric-shipping-region').removeAttr("disabled");
  } 
  else {
    regions = ``;
    $('.shipping-region .control').html('<input type="text" name="shipping_state" value="
EOD;
echo esc_html( get_user_meta( get_current_user_id(), 'shipping_state', true ));
echo
<<<EOD
" title="'+region_denomination+'" class="input-text required-entry" id="shipping_state" aria-required="true" required>');
    $(".input-text__input").change(function() {
      if(!$(this).val()) {
        $(this).addClass("is--empty");
      } else {
          $(this).removeClass("is--empty");
      }
    });
  }
  $('label[for="selectric-shipping-region"] span').text(region_denomination);
  $('#selectric-shipping-region').empty().append(regions).selectric("refresh");
  $('#selectric-shipping-region option[value="
EOD;
echo esc_html( get_user_meta( get_current_user_id(), 'shipping_state', true ));
echo 
<<<EOD
"]').attr("selected", "selected");
  $('#selectric-shipping-region').selectric("refresh");
</script>
EOD;
} 
?>
</body>
</html>