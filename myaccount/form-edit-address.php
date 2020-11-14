<?php
/**
 * Edit address form
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/myaccount/form-edit-address.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce/Templates
 * @version 3.6.0
 */
 ?>

<div class="pf_title-page"><?php 
if (!empty(get_user_meta( get_current_user_id(), 'shipping_address_1', true ))) {
    esc_html_e( 'Edit address', 'woocommerce' ); 
} else {
    esc_html_e( 'Add new address', 'woocommerce' ); 
}?></div>

<?php do_action( 'woocommerce_before_edit_account_address_form' );

		$current_user = wp_get_current_user();
		$load_address = 'billing'; ?>
        <form class="form-address-edit pf_add-address" action="/customer/account/edit-address/billing" method="post" id="form-validate" enctype="multipart/form-data">
		<?php do_action( "woocommerce_before_edit_address_form_{$load_address}" ); ?>
            <fieldset class="fieldset">
                <legend class="legend"><span><?php esc_html_e( 'Home address', 'woocommerce' ); ?></span></legend><br>
                <div class="field field-name-firstname required">
                    <label class="label" for="shipping_first_name"><span><?php esc_html_e( 'First name', 'woocommerce' ); ?></span></label>
                    <div class="control">
                        <input type="text" id="shipping_first_name" name="shipping_first_name" value="<?php 
                        if ( ! empty( $_POST['shipping_first_name'] ) ) {
                            echo esc_html( $_POST['shipping_first_name'] );
                        } else if (!empty(get_user_meta( get_current_user_id(), 'shipping_first_name', true ))) {
                            echo esc_html( get_user_meta( get_current_user_id(), 'shipping_first_name', true ) );
                        } else {
                            echo esc_html( $current_user->user_firstname );
                        } 
                        ?>" title="<?php esc_html_e( 'First name', 'woocommerce' ); ?>" class="input-text required-entry" data-validate="{required:true}" aria-required="true" required="">
                    </div>
                </div>
                <div class="field field-name-lastname required">
                    <label class="label" for="shipping_last_name"><span><?php esc_html_e( 'Last name', 'woocommerce' ); ?></span></label>
                    <div class="control">
                        <input type="text" id="shipping_last_name" name="shipping_last_name" value="<?php 
                        if ( ! empty( $_POST['shipping_last_name'] ) ) {
                            echo esc_html( $_POST['shipping_last_name'] );
                        } else if (!empty(get_user_meta( get_current_user_id(), 'shipping_last_name', true ))) {
                            echo esc_html( get_user_meta( get_current_user_id(), 'shipping_last_name', true ) );
                        } else {
                            echo esc_html( $current_user->user_lastname );
                        } 
                        ?>" title="<?php esc_html_e( 'Last name', 'woocommerce' ); ?>" class="input-text required-entry" data-validate="{required:true}" aria-required="true" required="">
                    </div>
                </div>
                <div class="field street required">
                    <label for="shipping_address_1" class="label"><span><?php esc_html_e( 'Street address and house number', 'woocommerce' ); ?></span></label>
                    <div class="control">
                        <input type="text" name="shipping_address_1" value="<?php if ( ! empty( $_POST['shipping_address_1'] ) ) echo esc_html( $_POST['shipping_address_1'] ); else if (!empty(get_user_meta( get_current_user_id(), 'shipping_address_1', true ))) echo esc_html( get_user_meta( get_current_user_id(), 'shipping_address_1', true ) ); ?>" title="<?php esc_html_e( 'Street address and house number', 'woocommerce' ); ?>" id="shipping_address_1" class="input-text required-entry" aria-required="true" required="">
                        <div class="nested"></div>
                    </div>
                </div>
                <div class="field shipping-country required">
                    <label class="label" for="selectric-shipping-country"><span><?php esc_html_e( 'Country', 'woocommerce' ); ?></span></label>
                    <div class="control">
                        <select id="selectric-shipping-country" name="shipping_country" class="required-entry" title="<?php esc_html_e( 'Country', 'woocommerce' ); ?>" data-validate="{'validate-select':true}" aria-required="true" required=""></select>
                    </div>
                </div>
                <div class="field shipping-region required">
                    <label class="label" for="selectric-shipping-region"><span><?php esc_html_e( 'State/Province', 'woocommerce' ); ?></span></label>
                    <div class="control">
                        <select id="selectric-shipping-region" name="shipping_state" title="<?php esc_html_e( 'State/Province', 'woocommerce' ); ?>" class="required-entry" required=""></select>
                    </div>
                </div>
                <div class="field zip required">
                    <label class="label" for="shipping_postcode"><span><?php esc_html_e( 'ZIP code', 'woocommerce' ); ?></span></label>
                    <div class="control">
                        <input type="text" name="shipping_postcode" value="<?php if ( ! empty( $_POST['shipping_postcode'] ) ) echo esc_html( $_POST['shipping_postcode'] ); else if (!empty(get_user_meta( get_current_user_id(), 'shipping_postcode', true ))) echo esc_html( get_user_meta( get_current_user_id(), 'shipping_postcode', true ) ); ?>" title="<?php esc_html_e( 'ZIP code', 'woocommerce' ); ?>" id="shipping_postcode" class="input-text validate-zip-international required-entry" aria-required="true" inputmode="numeric" pattern="^(?(^00000(|-0000))|(\d{5}(|-\d{4})))$" required="">
                    </div>
                </div>
                <div class="field city required">
                    <label class="label" for="shipping_city"><span><?php esc_html_e( 'City', 'woocommerce' ); ?></span></label>
                    <div class="control">
                        <input type="text" name="shipping_city" value="<?php if ( ! empty( $_POST['shipping_city'] ) ) echo esc_html( $_POST['shipping_city'] ); else if (!empty(get_user_meta( get_current_user_id(), 'shipping_city', true ))) echo esc_html( get_user_meta( get_current_user_id(), 'shipping_city', true ) ); ?>" title="<?php esc_html_e( 'City', 'woocommerce' ); ?>" class="input-text required-entry" id="shipping_city" aria-required="true" required="">
                    </div>
                </div>
                <button class="button action save primary pf_button-primary copy-address" name="copy_address" title="<?php esc_html_e( 'Copy shipping address to billing information', 'woocommerce' ); ?>"><span><?php esc_html_e( 'Copy shipping address to billing information', 'woocommerce' ); ?></span></button>
            </fieldset>
			<fieldset class="fieldset">
                <legend class="legend"><span><?php esc_html_e( 'Billing information', 'woocommerce' ); ?></span></legend><br>
                <div class="field field-name-firstname required">
                    <label class="label" for="billing_first_name"><span><?php esc_html_e( 'First name', 'woocommerce' ); ?></span></label>
                    <div class="control">
                        <input type="text" id="billing_first_name" name="billing_first_name" value="<?php 
                        if ( ! empty( $_POST['billing_first_name'] ) ) {
                            echo esc_html( $_POST['billing_first_name'] );
                        } else if (!empty(get_user_meta( get_current_user_id(), 'billing_first_name', true ))) {
                        	echo esc_html( get_user_meta( get_current_user_id(), 'billing_first_name', true ) );
                        } else {
                            echo esc_html( $current_user->user_firstname );
                        } 
                        ?>" title="<?php esc_html_e( 'First name', 'woocommerce' ); ?>" class="input-text required-entry" data-validate="{required:true}" aria-required="true" required="">
                    </div>
                </div>
                <div class="field field-name-lastname required">
                    <label class="label" for="billing_last_name"><span><?php esc_html_e( 'Last name', 'woocommerce' ); ?></span></label>
                    <div class="control">
                        <input type="text" id="billing_last_name" name="billing_last_name" value="<?php 
                        if ( ! empty( $_POST['billing_last_name'] ) ) {
                            echo esc_html( $_POST['billing_last_name'] );
                        } else if (!empty(get_user_meta( get_current_user_id(), 'billing_last_name', true ))) {
                        	echo esc_html( get_user_meta( get_current_user_id(), 'billing_last_name', true ) );
                        } else {
                            echo esc_html( $current_user->user_lastname );
                        } 
                        ?>" title="<?php esc_html_e( 'Last name', 'woocommerce' ); ?>" class="input-text required-entry" data-validate="{required:true}" aria-required="true" required="">
                    </div>
                </div>
                <div class="field street required">
                    <label for="billing_address_1" class="label"><span><?php esc_html_e( 'Street address and house number', 'woocommerce' ); ?></span></label>
                    <div class="control">
                        <input type="text" name="billing_address_1" value="<?php if ( ! empty( $_POST['billing_address_1'] ) ) echo esc_html( $_POST['billing_address_1'] ); else if (!empty(get_user_meta( get_current_user_id(), 'billing_address_1', true ))) echo get_user_meta( get_current_user_id(), 'billing_address_1', true ); ?>" title="<?php esc_html_e( 'Street address and house number', 'woocommerce' ); ?>" id="billing_address_1" class="input-text required-entry" aria-required="true" required="">
                        <div class="nested"></div>
                    </div>
                </div>
                <div class="field billing-country required">
                    <label class="label" for="selectric-billing-country"><span><?php esc_html_e( 'Country', 'woocommerce' ); ?></span></label>
                    <div class="control">
                        <select id="selectric-billing-country" name="billing_country" class="required-entry" title="<?php esc_html_e( 'Country', 'woocommerce' ); ?>" data-validate="{'validate-select':true}" aria-required="true" required=""></select>
                    </div>
                </div>
                <div class="field billing-region required">
                    <label class="label" for="selectric-billing-region"><span><?php esc_html_e( 'State/Province', 'woocommerce' ); ?></span></label>
                    <div class="control">
                        <select id="selectric-billing-region" name="billing_state" title="<?php esc_html_e( 'State/Province', 'woocommerce' ); ?>" class="required-entry" required=""></select>
                    </div>
                </div>
                <div class="field zip required">
                    <label class="label" for="billing_postcode"><span><?php esc_html_e( 'ZIP code', 'woocommerce' ); ?></span></label>
                    <div class="control">
                        <input type="text" name="billing_postcode" value="<?php if ( ! empty( $_POST['billing_postcode'] ) ) echo esc_html( $_POST['billing_postcode'] ); else if (!empty(get_user_meta( get_current_user_id(), 'billing_postcode', true ))) echo get_user_meta( get_current_user_id(), 'billing_postcode', true ); ?>" title="<?php esc_html_e( 'ZIP code', 'woocommerce' ); ?>" id="billing_postcode" class="input-text validate-zip-international required-entry" aria-required="true" inputmode="numeric" pattern="^(?(^00000(|-0000))|(\d{5}(|-\d{4})))$" required="">
                    </div>
                </div>
                <div class="field city required">
                    <label class="label" for="billing_city"><span><?php esc_html_e( 'City', 'woocommerce' ); ?></span></label>
                    <div class="control">
                        <input type="text" name="billing_city" value="<?php if ( ! empty( $_POST['billing_city'] ) ) echo esc_html( $_POST['billing_city'] ); else if (!empty(get_user_meta( get_current_user_id(), 'billing_city', true ))) echo get_user_meta( get_current_user_id(), 'billing_city', true ); ?>" title="<?php esc_html_e( 'City', 'woocommerce' ); ?>" class="input-text required-entry" id="billing_city" aria-required="true" required="">
                    </div>
                </div>
                <div class="field taxvat required">
                    <label class="label" for="vat_id"><span><?php esc_html_e( 'Social Security Number', 'woocommerce' ); ?></span></label>
                    <div class="control">
                        <input type="text" name="vat_id" value="<?php if ( ! empty( $_POST['vat_id'] ) ) echo esc_html( $_POST['vat_id'] ); else if (!empty(get_user_meta( get_current_user_id(), 'vat_id', true ))) echo get_user_meta( get_current_user_id(), 'vat_id', true ); ?>" title="<?php esc_html_e( 'Social Security Number', 'woocommerce' ); ?>" data-validate="{required:true}" class="input-text " id="vat_id" aria-required="true" required="">
                    </div>
                </div>
                <div class="field telephone required">
                    <label for="billing_phone" class="label"><span><?php esc_html_e( 'Telephone number', 'woocommerce' ); ?></span></label>
                    <div class="control">
                        <input type="tel" name="billing_phone" id="billing_phone" value="<?php if ( ! empty( $_POST['billing_phone'] ) ) echo esc_html( $_POST['billing_phone'] ); else if (!empty(get_user_meta( get_current_user_id(), 'billing_phone', true ))) echo get_user_meta( get_current_user_id(), 'billing_phone', true ); ?>" title="<?php esc_html_e( 'Telephone number', 'woocommerce' ); ?>" class="input-text required-entry" aria-required="true" pattern="[+]{1}[0-9]{11,14}" required="">
                    </div>
                </div>
            </fieldset>

            <input type="hidden" name="billing_email" id="billing_email" autocomplete="email" data-input="change-email" value="<?php if ( ! empty( $_POST['user_email'] ) ) echo esc_html( $_POST['user_email'] ); else echo esc_html( $current_user->user_email ); ?>" title="<?php esc_html_e( 'Email', 'woocommerce' ); ?>" class="input-text" aria-required="true" data-validate="{required:true}" required>

			<?php do_action( "woocommerce_after_edit_address_form_{$load_address}" ); ?>

            <div class="actions-toolbar">
                <div class="primary">
                    <button type="submit" class="button action save primary pf_button-primary" name="save_address" title="Salva indirizzo"><span><?php esc_html_e( 'Save address', 'woocommerce' ); ?></span></button>
					<?php wp_nonce_field( 'woocommerce-edit_address' ); ?>
					<input type="hidden" name="action" value="edit_address" />
                </div>
            </div>
        </form>

<?php do_action( 'woocommerce_after_edit_account_address_form' ); ?>