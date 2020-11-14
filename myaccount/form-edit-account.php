<div class="row">
    <div class="col-sm-12">

            <div class="page-title-wrapper">
                <h2><?php esc_html_e( 'Edit profile', 'woocommerce' ); ?></h2>
            </div>
            <?php $current_user = wp_get_current_user();
            do_action( 'woocommerce_before_edit_account_form' ); ?>
            <form class="form form-edit-account" method="post" id="form-validate" enctype="multipart/form-data" data-hasrequired="* Campi obbligatori" autocomplete="off" <?php do_action( 'woocommerce_edit_account_form_tag' ); ?> >
                <?php do_action( 'woocommerce_edit_account_form_start' ); ?>
                <div class="box box-information bg-color-grey-light">
                        <div class="box-information-title">
                            <span class="color-gray"><?php esc_html_e( 'Personal information', 'woocommerce' ); ?></span>
                        </div>
                        <div class="delete-account">
                        <?php echo do_shortcode( '[plugin_delete_me]' ); ?>
                        </div>
                        <div class="box-information-content">
                            <div class="box-content box-content-inline">
                                <span class="box-title color-gray">
                                    <span><?php esc_html_e( 'My profile', 'woocommerce' ); ?></span>
                                </span>
                                <p>
                                    <div class="select" id="select-type-wrapper" data-ctrl="Select">
                                        <div class="selectric-wrapper selectric-select"><div class="selectric-hide-select"></div>
                                            <div id="select-role">
                                                <select id="selectric-role" name="role">
                                                    <option value="member"><?php esc_html_e( 'Member', 'woocommerce' ); ?></option>
                                                    <option value="partner"><?php esc_html_e( 'Partner', 'woocommerce' ); ?></option>
                                                    <option value="investor"><?php esc_html_e( 'Investor', 'woocommerce' ); ?></option>
                                                </select>
                                            </div>
                                        </div>
                                        <span class="select__label">
                                         <label data-ctrl-dom="label" class="select__floating-label" for="select-type"></label>
                                         ▾
                                         </span>
                                    </div>
                                </p>
                            </div>
                            <div class="box-content box-content-inline">
                                <span class="box-title color-gray">
                                    <span><?php esc_html_e( 'First name', 'woocommerce' ); ?></span>
                                </span>
                                <p>
                                    <input type="text" id="account_first_name" name="account_first_name" value="<?php if ( ! empty( $_POST['user_firstname'] ) ) echo esc_html( $_POST['user_firstname'] ); else echo esc_html( $current_user->user_firstname ); ?>" title="<?php esc_html_e( 'First name', 'woocommerce' ); ?>" class="input-text required-entry" data-validate="{required:true}" required>
                                </p>
                            </div>
                            <div class="box-content box-content-inline">
                                <span class="box-title color-gray">
                                    <span><?php esc_html_e( 'Last name', 'woocommerce' ); ?></span>
                                </span>
                                <p>
                                    <input type="text" id="account_last_name" name="account_last_name" value="<?php if ( ! empty( $_POST['user_lastname'] ) ) echo esc_html( $_POST['user_lastname'] ); else echo esc_html( $current_user->user_lastname ); ?>" title="<?php esc_html_e( 'Last name', 'woocommerce' ); ?>" class="input-text required-entry" data-validate="{required:true}" required>
                                </p>
                            </div>
                            <div class="box-content">
                                <span class="box-title color-gray">
                                    <span><?php esc_html_e( 'Email', 'woocommerce' ); ?></span>
                                </span>
                                <p>
                                    <input type="email" name="account_email" id="account_email" autocomplete="email" data-input="change-email" value="<?php if ( ! empty( $_POST['user_email'] ) ) echo esc_html( $_POST['user_email'] ); else echo esc_html( $current_user->user_email ); ?>" title="<?php esc_html_e( 'Email', 'woocommerce' ); ?>" class="input-text" aria-required="true" data-validate="{required:true}" required>
                                </p>
                            </div>
                            <div class="box-content">
                                <span class="box-title color-gray">
                                    <span><?php esc_html_e( 'Profile image', 'woocommerce' ); ?></span>
                                </span>
                                <p>
                                    <div class="project-intro__logo">     
                                        <img src="<?php 
                                        if ($current_user->profile_image == '/wp-content/themes/EnvironMind-wp/static/img/mindmate-avatar.jpg') {
                                            echo $current_user->profile_image;
                                        } else {
                                            $user_id = get_current_user_id();
                                            $attachment_id = get_user_meta( $user_id, 'profile_image', true );
                                            if ( $attachment_id ) {
                                                $original_image_url = wp_get_attachment_url( $attachment_id );
                                                echo wp_get_attachment_url( $attachment_id, 'full');
                                            }
                                        }
                                        ?>"> 
                                        <idt-fs-upload-file type="image" class="fs__image-upload__button" on-uploaded="onUploadedLogo" on-error="onError" label="">
                                            <label type="button" class="button upload-logo upload-file__btn" accept="image/*" for="profile_image">
                                                <input type="file" accept="image/*" class="input-file-hidden ng-pristine ng-untouched ng-valid ng-not-empty" id="profile_image" name="uploader" ng-model="files"> 
                                                <span>
                                                    <div class="fs__image-upload__button__spec"> Edit image </div>
                                                </span>
                                                <span class="upload-file__progress"></span>
                                            </label>
                                        </idt-fs-upload-file>
                                    </div>
                                </p>
                            </div>
                        </div>
                    </div>
                    <input type="hidden" class="woocommerce-Input woocommerce-Input--text input-text" name="account_display_name" id="account_display_name" value="<?php echo esc_attr( $user->display_name ); ?>" />
                    <br>
                    <div class="box box-information bg-color-grey-light">
                        <div class="box-information-title">
                            <span class="color-gray"><?php esc_html_e( 'Newsletter', 'woocommerce' ); ?></span>
                        </div>
                        <div class="box-information-content">
                            <div class="box-content">
                                <p>
                                    <input type="radio" id="subscribe" name="newsletter" value="1"
                                    <?php 
                                    $user     = new WP_User( get_current_user_id() );
                                    $wp_roles = new WP_Roles;
                                    $names    = $wp_roles->get_names();
                                    $out      = array ();

                                    foreach ( $user->roles as $role )
                                    {
                                        if ( isset ( $names[ $role ] ) )
                                            $out[ $role ] = $names[ $role ];
                                    }
                                    if (isset($out['newsletter'])) {
                                        echo 'checked';
                                    }
                                    ?> >
                                    <label for="subscribe"><?php esc_html_e( 'Subscribe', 'woocommerce' ); ?></label><br>
                                    <input type="radio" id="unsubscribe" name="newsletter" value="0"
                                    <?php 
                                    if (!isset($out['newsletter'])) {
                                        echo 'checked';
                                    }
                                    ?> >
                                    <label for="unsubscribe"><?php esc_html_e( 'Unsubscribe', 'woocommerce' ); ?></label><br>
                                </p>
                            </div>
                        </div>
                    </div>
                    <br>
                    <div class="box box-information bg-color-grey-light">
                        <div class="box-information-title">
                            <span class="color-gray"><?php esc_html_e( 'Password change', 'woocommerce' ); ?></span>
                        </div>
                        <div class="box-information-content">
                            <fieldset>
                                <div class="box-content">
                                    <span class="box-title color-gray">
                                        <span><?php esc_html_e( 'Current password (leave blank to leave unchanged)', 'woocommerce' ); ?></span>
                                    </span>
                                    <p>
                                        <input type="password" class="woocommerce-Input woocommerce-Input--password input-text" name="password_current" id="password_current" autocomplete="off" />
                                    </p>
                                </div>

                                <div class="box-content">
                                    <span class="box-title color-gray">
                                        <span><?php esc_html_e( 'New password (leave blank to leave unchanged)', 'woocommerce' ); ?></span>
                                    </span>
                                    <p>
                                        <input type="password" class="woocommerce-Input woocommerce-Input--password input-text" name="password_1" id="password_1" autocomplete="off" />
                                    </p>
                                </div>

                                <div class="box-content">
                                    <span class="box-title color-gray">
                                        <span><?php esc_html_e( 'Confirm new password', 'woocommerce' ); ?></span>
                                    </span>
                                    <p>
                                        <input type="password" class="woocommerce-Input woocommerce-Input--password input-text" name="password_2" id="password_2" autocomplete="off" />
                                    </p>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                    <?php do_action( 'woocommerce_edit_account_form' ); ?>

                    <div class="box-actions">
                        <div class="actions-toolbar">
                            <div class="primary">
                                <?php wp_nonce_field( 'save_account_details', 'save-account-details-nonce' ); ?>
                                <button type="submit" class="action save primary woocommerce-Button button" title="<?php esc_attr_e( 'Save changes', 'woocommerce' ); ?>" name="save_account_details" value="<?php esc_attr_e( 'Save changes', 'woocommerce' ); ?>">
                                    <span><?php esc_html_e( 'Save changes', 'woocommerce' ); ?></span>
                                </button>
                                <input type="hidden" name="action" value="save_account_details" />
                            </div>
                        </div>
                    </div>
                    <?php do_action( 'woocommerce_edit_account_form_end' ); ?>
            </form>
            <?php do_action( 'woocommerce_after_edit_account_form' ); ?>
    </div>
</div>