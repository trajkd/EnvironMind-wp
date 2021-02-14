<?php
function currentYear(){
    return date('Y');
}

register_meta( 'user', 'profile_image', [ 'show_in_rest' => true ] );

remove_filter( 'the_content', 'wpautop' );

remove_filter('term_description','wpautop'); 

add_theme_support( 'woocommerce' );

register_activation_hook ( __FILE__, 'on_activate' );
function on_activate() {
    global $wpdb;
    $create_table_query = "
            USE bitnami_wordpress;
 
			CREATE TABLE IF NOT EXISTS `message` (
			  `id` int(11) NOT NULL AUTO_INCREMENT,
			  `messages`  text NOT NULL,
			  `uid` varchar(11) NOT NULL,
			  `name` varchar(20) NOT NULL,
			  `time` varchar(20) NOT NULL,
			  PRIMARY KEY (`id`)
			);
    ";
    require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
    dbDelta( $create_table_query );
}

/**
 * @snippet       WooCommerce User Registration Shortcode
 */

add_shortcode( 'wc_reg_form', 'separate_registration_form' );

function separate_registration_form() {
   ob_start();
 
   // NOTE: THE FOLLOWING <FORM></FORM> IS COPIED FROM woocommerce\templates\myaccount\form-login.php
   // IF WOOCOMMERCE RELEASES AN UPDATE TO THAT TEMPLATE, YOU MUST CHANGE THIS ACCORDINGLY
 
   do_action( 'woocommerce_before_customer_login_form' );
 
   ?>
    <section class="container-fluid v-spacer-15 lg-b-spacer-3">
	    <div class="row">
	        <div class="col-lg-10 offset-lg-1">
	            <!-- content -->
	            <div class="tabs__tabpanel  v-spacer-025 lg-v-spacer-1 " role="tabpanel" id="login-customer-content" aria-labelledby="login-customer" data-ctrl-dom="tabpanel">
	                <div class="row t-spacer-1">
	                    <div class="col-lg-6">
	                        <h2 class="font-size-xl lg-font-size-xxl"><?php esc_html_e( 'Sign up', 'woocommerce_you' ); ?></h2>
	                        <div class="t-spacer-05">
	                        	<form method="post" class="woocommerce-form woocommerce-form-register register" <?php do_action( 'woocommerce_register_form_tag' ); ?> >

			<?php do_action( 'woocommerce_register_form_start' ); ?>

			<?php if ( 'no' === get_option( 'woocommerce_registration_generate_username' ) ) : ?>

				<p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
					<label for="reg_username"><?php esc_html_e( 'Username', 'woocommerce' ); ?>&nbsp;<span class="required">*</span></label>
					<input type="text" class="woocommerce-Input woocommerce-Input--text input-text" name="username" id="reg_username" autocomplete="username" value="<?php echo ( ! empty( $_POST['username'] ) ) ? esc_attr( wp_unslash( $_POST['username'] ) ) : ''; ?>" /><?php // @codingStandardsIgnoreLine ?>
				</p>

			<?php endif; ?>
	                            <form class="form create account form-create-account form-register-customer woocommerce-form woocommerce-form-register register" method="post" id="form-validate" enctype="multipart/form-data" autocomplete="off" <?php do_action( 'woocommerce_register_form_tag' ); ?> >
	                            <?php do_action( 'woocommerce_register_form_start' ); ?>
	                                <div class="v-spacer-05">
	                                    <div class="form-group input-text   " data-ctrl="InputText">
	                                        <input type="text" class="form-control input-text__input is--empty" aria-describedby="architect-register-name-error" data-ctrl-dom="input" name="billing_first_name" id="reg_billing_first_name" value="<?php if ( ! empty( $_POST['billing_first_name'] ) ) echo esc_html( $_POST['billing_first_name'] ); ?>" required="">
	                                        <label for="reg_billing_first_name" class="input-text__label">
	                                            <span><?php esc_html_e( 'First name', 'woocommerce' ); ?></span>
	                                        </label>
	                                        <div class="input-text__error">
	                                            <small id="architect-register-name-error">
	                                            	<?php esc_html_e( 'Please, insert your first name.', 'woocommerce' ); ?>
	                                            </small>
	                                        </div>
	                                    </div>
	                                </div>
	                                <div class="v-spacer-05">
	                                    <div class="form-group input-text   " data-ctrl="InputText">
	                                        <input type="text" class="form-control input-text__input is--empty" aria-describedby="architect-register-surname-error" data-ctrl-dom="input" name="billing_last_name" id="reg_billing_last_name" value="<?php if ( ! empty( $_POST['billing_last_name'] ) ) echo esc_html( $_POST['billing_last_name'] ); ?>" required="">
	                                        <label for="reg_billing_last_name" class="input-text__label">
	                                            <span><?php esc_html_e( 'Last name', 'woocommerce' ); ?></span>
	                                        </label>
	                                        <div class="input-text__error">
	                                            <small id="architect-register-surname-error">
	                                            <?php esc_html_e( 'Please, insert your last name.', 'woocommerce' ); ?>
	                                            </small>
	                                        </div>
	                                    </div>
	                                </div>

	                                <div class="v-spacer-05">
	                                    <div class="form-group input-text   " data-ctrl="InputText">
	                                        <input type="email" class="form-control input-text__input is--empty" id="reg_email" aria-describedby="architect-register-email-error" data-ctrl-dom="input" name="email" autocomplete="email" value="<?php echo ( ! empty( $_POST['email'] ) ) ? esc_attr( wp_unslash( $_POST['email'] ) ) : ''; ?>" required="" />
	                                        <label for="reg_email" class="input-text__label">
	                                            <span><?php esc_html_e( 'Email', 'woocommerce' ); ?></span>
	                                        </label>
	                                        <div class="input-text__error">
	                                            <small id="architect-register-email-error">
	                                            	<?php esc_html_e( 'Please, insert your email.', 'woocommerce' ); ?>
	                                            </small>
	                                        </div>
	                                    </div>
	                                </div>
	                                <div class="v-spacer-05 pwd-security" style="font-size:18px; ">
	                                    <small><?php esc_html_e( 'At least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character', 'woocommerce' ); ?> (!, @, #, $, %, ^, &amp;, *, _)</small>
	                                </div>
	                                <div class="v-spacer-05">
	                                    <div class="form-group input-text   " data-ctrl="InputText">
	                                        <input name="password" type="password" class="form-control input-text__input checkpassword is--empty" id="reg_password" aria-describedby="create-architect-password-error" autocomplete="new-password" required="">
	                                        <label for="reg_password" class="input-text__label">
	                                            <span><?php esc_html_e( 'Password', 'woocommerce' ); ?></span>
	                                        </label>
	                                        <div class="input-text__error">
	                                            <small id="login-architect-password-error">
	                                            	<?php esc_html_e( 'Please, insert a password.', 'woocommerce' ); ?>
	                                            </small>
	                                        </div>
	                                        <div class="input-text__cta input-text__hide-pwd" data-ctrl-dom="hidepwd">
	                                            <button data-ctrl="Cta" class="cta-password cta--no-animation primary" data-ctrl-id="Cta-91555">
	                                                <i class="far fa-eye"></i>
	                                            </button>
	                                        </div>
	                                    </div>
	                                </div>
	                                <div class="v-spacer-05">
	                                    <div class="form-group input-text   " data-ctrl="InputText">
	                                        <input name="password_confirmation" type="password" class="form-control input-text__input checkconfirmation is--empty" aria-describedby="login-architect-password-error" id="reg_password-confirmation" required="">
	                                        <label for="reg_password-confirmation" class="input-text__label">
	                                            <span><?php esc_html_e( 'Confirm password', 'woocommerce' ); ?></span>
	                                        </label>
	                                        <div class="input-text__error">
	                                            <small id="login-architect-password-error">
	                                            	<?php esc_html_e( 'Please, repeat the password.', 'woocommerce' ); ?>
	                                            </small>
	                                        </div>
	                                        <div class="input-text__cta input-text__hide-pwd" data-ctrl-dom="hidepwd">
	                                            <button data-ctrl="Cta" class="cta-confirm cta--no-animation primary" data-ctrl-id="Cta-04115">
	                                                <i class="far fa-eye"></i>
	                                            </button>
	                                        </div>
	                                    </div>
	                                </div>
	                                <div class="v-spacer-05">
	                                    <div class="select" id="select-country-wrapper" data-ctrl="Select">
	                                        <div class="selectric-wrapper selectric-select selectric-dinamic-form-nation is-empty"><div class="selectric-hide-select"></div>
		                                        <div id="select-country">
		                                            <select id="selectric-billing-country" name="billing_country"></select>
		                                        </div>
		                                    </div>
	                                        <span class="select__label">
	                                         <label data-ctrl-dom="label" class="select__floating-label" for="selectric-billing-country"><?php esc_html_e( 'Country', 'woocommerce' ); ?></label>
	                                         ▾
	                                        </span>
	                                        <div class="select__error">
	                                            <small id="architect-register-country-error">
	                                            	<?php esc_html_e( 'Please, specify your country.', 'woocommerce' ); ?>
	                                            </small>
	                                        </div>
	                                    </div>
	                                </div>
	                                <div class="v-spacer-05 region-box">
	                                    <div class="select" id="select-region-wrapper" data-ctrl="Select">
	                                        <div class="selectric-wrapper selectric-select is-empty"><div class="selectric-hide-select"></div>
		                                        <div id="select-region">
		                                            <select id="selectric-billing-region" name="billing_state"></select>
		                                        </div>
		                                    </div>
	                                        <span class="select__label">
	                                         <label data-ctrl-dom="label" class="select__floating-label" id="region-label" for="selectric-billing-region"></label>
	                                         ▾
	                                        </span>
	                                    </div>
	                                </div>
	                                <p>
										<label>
											<input type="checkbox" name="newsletter" value="1" checked/>
											<?php esc_html_e( 'Subscribe me to the newsletter', 'woocommerce' ); ?>
										</label>
									</p>

									<?php do_action( 'woocommerce_register_form' ); ?>

									<p class="woocommerce-form-row form-row">
										<?php wp_nonce_field( 'woocommerce-register', 'woocommerce-register-nonce' ); ?>
										<button type="submit" class="mdc-button mdc-card__action mdc-card__action--button cta woocommerce-Button woocommerce-button button woocommerce-form-register__submit primary" name="register" value="<?php esc_attr_e( 'Sign up', 'woocommerce_you' ); ?>">
											<div class="mdc-button__ripple"></div>
											<span class="mdc-button__label"><?php esc_html_e( 'Sign up', 'woocommerce_you' ); ?></span>
									    </button>
									</p>

									<?php do_action( 'woocommerce_register_form_end' ); ?>
	                            </form>
	                                   </div>
	                               </div>
	                               <div class="col-lg-6 txt-center t-spacer-15 lg-t-spacer-0">
	                                <h2 class="font-size-xl lg-font-size-xxl"><?php esc_html_e( 'Already have an account?', 'woocommerce' ); ?></h2>
	                                <div class="t-spacer-05">
	                                    <a data-ctrl="Cta" href="/customer/login" class="cta " data-ctrl-id="Cta-31471">
	                                        <button class="mdc-button mdc-card__action mdc-card__action--button">
												<div class="mdc-button__ripple"></div>
												<span class="mdc-button__label"><?php esc_html_e( 'Log in', 'woocommerce_you' ); ?></span>
										    </button>
	                                    </a>
	                                </div>
	                            </div>
	                        </div>
	                    </div>
	                </div>
	            </div>
	</section>
   <?php
   return ob_get_clean();
}

apply_filters( 'account_fields', array(
        'vat_id' => array(
            'type'        => 'text',
            'label'       => __( 'Tax Payer Identification Number (NPWP)', 'woocommerce' ),
            'placeholder' => __( 'XXX-XX-XXXX', 'woocommerce' ),
            'required'    => true,
        ),
        'profile_image' => array(
            'type'        => 'text',
            'label'       => __( 'Profile image', 'woocommerce' ),
            'placeholder' => __( '/wp-content/themes/EnvironMind-wp/static/img/mindmate-avatar.jpg', 'woocommerce' ),
            'required'    => true,
        )
    ) );

function woocom_save_extra_register_fields($customer_id) {

	$registered_user = get_user_by('ID',$customer_id);
    if($registered_user) {
        $user_role = $registered_user->roles;
        if((in_array('customer', (array) $user_role))){

            $first_name = $_POST['billing_first_name'];
            $last_name = $_POST['billing_last_name'];

            update_user_meta($customer_id, 'profile_image', '/wp-content/themes/EnvironMind-wp/static/img/mindmate-avatar.jpg');
            update_user_meta($customer_id, 'billing_first_name', $first_name);
            update_user_meta($customer_id, 'billing_last_name', $last_name);
            update_user_meta($customer_id, 'billing_country', $_POST['billing_country']);
            update_user_meta($customer_id, 'billing_state', $_POST['billing_state']);
            update_user_meta($customer_id, 'shipping_first_name', $first_name);
            update_user_meta($customer_id, 'shipping_last_name', $last_name);
            update_user_meta($customer_id, 'shipping_country', $_POST['billing_country']);
            update_user_meta($customer_id, 'shipping_state', $_POST['billing_state']);

            $update_data = array(
                'ID' => $customer_id,
                'first_name' => $first_name,
                'last_name' => $last_name,
                'display_name' => $first_name.' '.$last_name
            );
            $customer_id = wp_update_user($update_data);
            $registered_user->add_role($_POST['role']);

            if($_POST['newsletter'] === '1') {
            	$registered_user->add_role('newsletter');
            }
        }
    }
}

add_action('woocommerce_created_customer', 'woocom_save_extra_register_fields');

/**
 * @snippet       WooCommerce User Login Shortcode
 */
  
add_shortcode( 'wc_login_form', 'separate_login_form' );
  
function separate_login_form() {
   ob_start();
   woocommerce_login_form();
   return ob_get_clean();
}

// Validate password match on the registration page
function registration_errors_validation($reg_errors, $sanitized_user_login, $user_email) {
	global $woocommerce;
	extract( $_POST );
	if ( strcmp( $password, $password_confirmation ) !== 0 ) {
		return new WP_Error( 'registration-error', __( 'The password does not match.', 'woocommerce' ) );
	}
	return $reg_errors;
}
add_filter('woocommerce_registration_errors', 'registration_errors_validation', 10, 3);

function validateProfileUpdate( $array ) {
    return validateComplexEditedPassword( $array );
}

function validateRegistration( WP_Error $errors, $sanitized_user_login, $user_email ) {
    return validateComplexPassword( $errors );
}

function validatePasswordReset( $errors, $userData ) {
    return validateComplexPassword( $errors );
}

function validateComplexPassword( $errors ) {

    $password = ( isset( $_POST[ 'password' ] ) && trim( $_POST[ 'password' ] ) ) ? $_POST[ 'password' ] : null;

    if ( empty( $password ) || ( $errors->get_error_data( 'pass' ) ) )
        return $errors;

    $passwordValidation = validatePassword($password);

    if ( $passwordValidation !== true ) {
    	if ( $passwordValidation === 10 ) {
    		$errors->add( "pass", __( "The password is too short. Please, use 9 characters or more.", 'woocommerce' ) );
    	}
    	if ( $passwordValidation === 20 ) {
    		$errors->add( "pass", __( "The password does not contain a mix of uppercase and lowercase characters.", 'woocommerce' ) );
    	}
    	if ( $passwordValidation === 30 ) {
    		$errors->add( "pass", __( "The password does not contain a mix of letters and numbers.", 'woocommerce' ) );
    	}
    	if ( $passwordValidation === 40 ) {
    		$errors->add( "pass", __( "The password does not contain any special character.", 'woocommerce' ) );
    	}
        
    }

    return $errors;
}

function validateComplexEditedPassword( $errors ) {

    $password = ( isset( $_POST[ 'password_1' ] ) && trim( $_POST[ 'password_1' ] ) ) ? $_POST[ 'password_1' ] : null;

    if ( empty( $password ) || ( $errors->get_error_data( 'pass' ) ) )
        return $errors;

    $passwordValidation = validatePassword($password);

    if ( $passwordValidation !== true ) {
    	if ( $passwordValidation === 10 ) {
    		$errors->add( "pass", __( "The password is too short. Please, use 9 characters or more.", 'woocommerce' ) );
    	}
    	if ( $passwordValidation === 20 ) {
    		$errors->add( "pass", __( "The password does not contain a mix of uppercase and lowercase characters.", 'woocommerce' ) );
    	}
    	if ( $passwordValidation === 30 ) {
    		$errors->add( "pass", __( "The password does not contain a mix of letters and numbers.", 'woocommerce' ) );
    	}
    	if ( $passwordValidation === 40 ) {
    		$errors->add( "pass", __( "The password does not contain any special character.", 'woocommerce' ) );
    	}
        
    }

    return $errors;
}

function validatePassword($Password) {
    //#### Check it's greater than 6 Characters
    if (strlen($Password) < 9) {
        return 10;
    }

    //#### Test password has uppercase and lowercase letters
    if (preg_match("/^(?=.*[a-z])(?=.*[A-Z]).+$/", $Password) !== 1) {
        return 20;
    }

    //#### Test password has mix of letters and numbers
    if (preg_match("/^((?=.*[a-z])|(?=.*[A-Z]))(?=.*\d).+$/", $Password) !== 1) {
        return 30;
    }

    //#### Test password has some special character
    if (preg_match("/^(?=.*?[!@#$%^&*_]).+$/", $Password) !== 1) {
        return 40;
    }

    //#### Password looks good
    return true;
}

add_action('woocommerce_save_account_details_errors', 'validateProfileUpdate', 10, 1 );
add_filter('woocommerce_registration_errors', 'validateRegistration', 10, 3 );
add_action('validate_password_reset', 'validatePasswordReset', 10, 2 );

add_filter ( 'woocommerce_account_menu_items', 'remove_rename_account_links' );
function remove_rename_account_links( $menu_links ){
	unset( $menu_links['dashboard'] );
	unset( $menu_links['payment-methods'] );
	unset( $menu_links['orders'] );
	unset( $menu_links['downloads'] );
	unset( $menu_links['customer-logout'] );
	unset( $menu_links['edit-account'] );
	unset( $menu_links['edit-address'] );
 
	return $menu_links;
 
}

add_shortcode('edit_account', 'display_myaccount_edit_account');
function display_myaccount_edit_account()
{
    return WC_Shortcode_My_Account::edit_account();
}

function woocom_save_extra_address_fields($customer_id, $load_address) {
	$registered_user = get_user_by('ID',$customer_id);
    if($registered_user) {
        $user_role = $registered_user->roles;
        if((in_array('customer', (array) $user_role))){

            update_user_meta($customer_id, 'vat_id', $_POST['vat_id']);
            update_user_meta($customer_id, 'shipping_first_name', $_POST['shipping_first_name']);
            update_user_meta($customer_id, 'shipping_last_name', $_POST['shipping_last_name']);
            update_user_meta($customer_id, 'shipping_address_1', $_POST['shipping_address_1']);
            update_user_meta($customer_id, 'shipping_country', $_POST['shipping_country']);
            update_user_meta($customer_id, 'shipping_state', $_POST['shipping_state']);
            update_user_meta($customer_id, 'shipping_postcode', $_POST['shipping_postcode']);
            update_user_meta($customer_id, 'shipping_city', $_POST['shipping_city']);
        }
    }
}

add_action('woocommerce_customer_save_address', 'woocom_save_extra_address_fields', 10, 2 );

function woocom_save_extra_account_fields($customer_id) {

	$registered_user = get_user_by('ID',$customer_id);
    if($registered_user) {
        $user_role = $registered_user->roles;
        if((in_array('customer', (array) $user_role))){

        	$registered_user->remove_role('member');
            $registered_user->remove_role('partner');
            $registered_user->remove_role('investor');
            $registered_user->add_role($_POST['role']);

            $first_name = $_POST['account_first_name'];
            $last_name = $_POST['account_last_name'];

            if ( isset( $_FILES['uploader'] ) ) {
		        require_once( ABSPATH . 'wp-admin/includes/image.php' );
		        require_once( ABSPATH . 'wp-admin/includes/file.php' );
		        require_once( ABSPATH . 'wp-admin/includes/media.php' );

		        $attachment_id = media_handle_upload( 'uploader', 0 );

		        if ( is_wp_error( $attachment_id ) ) {
		            update_user_meta( $customer_id, 'profile_image', $_FILES['uploader'] . ": " . $attachment_id->get_error_message() );
		        } else {
		            update_user_meta( $customer_id, 'profile_image', $attachment_id );
		        }
		   }

            $update_data = array(
                'ID' => $customer_id,
                'first_name' => $first_name,
                'last_name' => $last_name,
                'display_name' => $first_name.' '.$last_name
            );
            $customer_id = wp_update_user($update_data);

            if($_POST['newsletter'] === '1') {
            	$registered_user->add_role('newsletter');
            } else if($_POST['newsletter'] === '0') {
            	$registered_user->remove_role('newsletter');
            }
        }
    }
}

add_action('woocommerce_save_account_details', 'woocom_save_extra_account_fields');

function custom_post_editidea() {
  $labels = array(
    'name'               => _x( 'Editidea', 'post type general name' ),
    'singular_name'      => _x( 'Editidea', 'post type singular name' ),
    'add_new'            => _x( 'Add New', 'book' ),
    'add_new_item'       => __( 'Add New Editidea' ),
    'edit_item'          => __( 'Edit Editidea' ),
    'new_item'           => __( 'New Editidea' ),
    'all_items'          => __( 'All Editidea' ),
    'view_item'          => __( 'View Editidea' ),
    'search_items'       => __( 'Search Editidea' ),
    'not_found'          => __( 'No Editidea found' ),
    'not_found_in_trash' => __( 'No Editidea found in the Trash' ),
    'menu_name'          => 'Editidea'
  );
  $args = array(
    'labels'        => $labels,
    'public'        => true,
    'show_in_rest'  => true,
    'menu_position' => 5,
    'supports'      => array( 'title', 'editor', 'thumbnail', 'excerpt' ),
    'has_archive'   => true,
  );
  register_post_type( 'editidea', $args ); 
}

add_action( 'init', 'custom_post_editidea' );

function custom_post_viewmode() {
  $labels = array(
    'name'               => _x( 'Viewmode', 'post type general name' ),
    'singular_name'      => _x( 'Viewmode', 'post type singular name' ),
    'add_new'            => _x( 'Add New', 'book' ),
    'add_new_item'       => __( 'Add New Viewmode' ),
    'edit_item'          => __( 'Edit Viewmode' ),
    'new_item'           => __( 'New Viewmode' ),
    'all_items'          => __( 'All Viewmode' ),
    'view_item'          => __( 'View Viewmode' ),
    'search_items'       => __( 'Search Viewmode' ),
    'not_found'          => __( 'No Viewmode found' ),
    'not_found_in_trash' => __( 'No Viewmode found in the Trash' ),
    'menu_name'          => 'Viewmode'
  );
  $args = array(
    'labels'        => $labels,
    'public'        => true,
    'show_in_rest'  => true,
    'menu_position' => 5,
    'supports'      => array( 'title', 'editor', 'thumbnail', 'excerpt' ),
    'has_archive'   => true,
  );
  register_post_type( 'viewmode', $args ); 
}
add_action( 'init', 'custom_post_viewmode' );
?>