<?php
/**
 * Login Form
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/myaccount/form-login.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce/Templates
 * @version 4.1.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

do_action( 'woocommerce_before_customer_login_form' ); ?>

<?php if ( 'yes' === get_option( 'woocommerce_enable_myaccount_registration' ) ) : ?>

<div class="u-columns col2-set" id="customer_login">

	<div class="u-column1 col-1">

<?php endif; ?>

		<form class="woocommerce-form woocommerce-form-login form form-login login" id="login-form" method="post">

			<?php do_action( 'woocommerce_login_form_start' ); ?>

			<div class="v-spacer-05">
               <div class="form-group input-text   " data-ctrl="InputText" data-ctrl-id="InputText-16243">
                   <input name="username"  id="username" autocomplete="username" value="<?php echo ( ! empty( $_POST['username'] ) ) ? esc_attr( wp_unslash( $_POST['username'] ) ) : ''; ?>" type="text" class="woocommerce-Input woocommerce-Input--text input-text form-control input-text__input is--empty" id="login-architect-name" aria-describedby="login-architect-name-error" data-ctrl-dom="input" required="">
                   <label for="username" class="input-text__label">
                       <span><?php esc_html_e( 'Username or email address', 'woocommerce' ); ?>*</span>
                   </label>
                   <div class="input-text__error">
                       	<small id="login-architect-name-error">
                       		<?php esc_html_e( 'Please, enter your username or email address.', 'woocommerce' ); ?>
                       	</small>
                   </div>
               </div>
           </div>
           <div class="v-spacer-05">
               <div class="form-group input-text   " data-ctrl="InputText" data-ctrl-id="InputText-97808">
                   <input name="password" id="password" autocomplete="current-password" type="password" class="woocommerce-Input woocommerce-Input--text input-text form-control input-text__input is--empty" aria-describedby="login-architect-password-error" data-ctrl-dom="input" required="">
                   <label for="password" class="input-text__label">
                       <span><?php esc_html_e( 'Password', 'woocommerce' ); ?>*</span>
                   </label>
                   <div class="input-text__error">
                       	<small id="login-architect-password-error">
                       		<?php esc_html_e( 'Please, enter your password.', 'woocommerce' ); ?>
                       	</small>
                   </div>
                   <div class="input-text__cta input-text__hide-pwd" data-ctrl-dom="hidepwd">
                        <button data-ctrl="Cta" class="cta-password cta--no-animation primary" data-ctrl-id="Cta-91555" onclick="eye()">
                            <i class="far fa-eye"></i>
                        </button>
                    </div>
               </div>
           </div>

			<?php do_action( 'woocommerce_login_form' ); ?>

			<p class="form-row">
				<label class="woocommerce-form__label woocommerce-form__label-for-checkbox woocommerce-form-login__rememberme">
					<input class="woocommerce-form__input woocommerce-form__input-checkbox" name="rememberme" type="checkbox" id="rememberme" value="forever" /> <span><?php esc_html_e( 'Remember me', 'woocommerce' ); ?></span>
				</label>
				<?php wp_nonce_field( 'woocommerce-login', 'woocommerce-login-nonce' ); ?>
				<div class="t-spacer-05 txt-right">
					<button type="submit" class="mdc-button mdc-card__action mdc-card__action--button cta woocommerce-button button woocommerce-form-login__submit primary" name="login" value="<?php esc_html_e( 'Log in', 'woocommerce_you' ); ?>">
						<div class="mdc-button__ripple"></div>
						<span class="mdc-button__label"><?php esc_html_e( 'Log in', 'woocommerce_you' ); ?></span>
				    </button>
               </div>
			</p>
			<p class="woocommerce-LostPassword lost_password">
			    <button class="mdc-button mdc-card__action mdc-card__action--button">
			    	<a href="<?php echo esc_url( wp_lostpassword_url() ); ?>">
						<div class="mdc-button__ripple"></div>
						<span class="mdc-button__label"><?php esc_html_e( 'Forgot password?', 'woocommerce' ); ?></span>
					</a>
			    </button>
			</p>

			<?php do_action( 'woocommerce_login_form_end' ); ?>

		</form>

<?php if ( 'yes' === get_option( 'woocommerce_enable_myaccount_registration' ) ) : ?>

	</div>

	<div class="u-column2 col-2">

		<h2><?php esc_html_e( 'Register', 'woocommerce' ); ?></h2>

		<form method="post" action="/customer/account" class="woocommerce-form woocommerce-form-register register" <?php do_action( 'woocommerce_register_form_tag' ); ?> >

			<?php do_action( 'woocommerce_register_form_start' ); ?>

			<?php if ( 'no' === get_option( 'woocommerce_registration_generate_username' ) ) : ?>

				<p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
					<label for="reg_username"><?php esc_html_e( 'Username', 'woocommerce' ); ?>&nbsp;<span class="required">*</span></label>
					<input type="text" class="woocommerce-Input woocommerce-Input--text input-text" name="username" id="reg_username" autocomplete="username" value="<?php echo ( ! empty( $_POST['username'] ) ) ? esc_attr( wp_unslash( $_POST['username'] ) ) : ''; ?>" /><?php // @codingStandardsIgnoreLine ?>
				</p>

			<?php endif; ?>

			<p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
				<label for="reg_email"><?php esc_html_e( 'Email address', 'woocommerce' ); ?>&nbsp;<span class="required">*</span></label>
				<input type="email" class="woocommerce-Input woocommerce-Input--text input-text" name="email" id="reg_email" autocomplete="email" value="<?php echo ( ! empty( $_POST['email'] ) ) ? esc_attr( wp_unslash( $_POST['email'] ) ) : ''; ?>" /><?php // @codingStandardsIgnoreLine ?>
			</p>

			<?php if ( 'no' === get_option( 'woocommerce_registration_generate_password' ) ) : ?>

				<p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
					<label for="reg_password"><?php esc_html_e( 'Password', 'woocommerce' ); ?>&nbsp;<span class="required">*</span></label>
					<input type="password" class="woocommerce-Input woocommerce-Input--text input-text" name="password" id="reg_password" autocomplete="new-password" />
				</p>

			<?php else : ?>

				<p><?php esc_html_e( 'A password will be sent to your email address.', 'woocommerce' ); ?></p>

			<?php endif; ?>

			<?php do_action( 'woocommerce_register_form' ); ?>

			<p class="woocommerce-form-row form-row">
				<?php wp_nonce_field( 'woocommerce-register', 'woocommerce-register-nonce' ); ?>
				<button type="submit" class="woocommerce-Button woocommerce-button button woocommerce-form-register__submit" name="register" value="<?php esc_attr_e( 'Register', 'woocommerce' ); ?>"><?php esc_html_e( 'Register', 'woocommerce' ); ?></button>
			</p>

			<?php do_action( 'woocommerce_register_form_end' ); ?>

		</form>

	</div>

</div>
<?php endif; ?>

<?php do_action( 'woocommerce_after_customer_login_form' ); ?>