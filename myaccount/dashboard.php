<div class="row">
    <div class="col-sm-12">
        <div class="block block-dashboard-info">
            <h2 class="pf_title-page"><?php esc_html_e( 'Profile', 'woocommerce' ); ?></h2>
            <?php $current_user = wp_get_current_user(); ?>
            <div class="box box-information bg-color-grey-light">
                <div class="box-information-title">
                    <span class="color-gray">
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
                    if (isset($out['member'])) {
                        esc_html_e( 'Member', 'woocommerce' );
                    } else if (isset($out['partner'])) {
                        esc_html_e( 'Partner', 'woocommerce' );
                    } else if (isset($out['investor'])) {
                        esc_html_e( 'Investor', 'woocommerce' );
                    }
                    ?>
                    </span>
                </div>
                <div class="box-information-content">
                    <div class="box-avatar-content">
                        <img src="<?php 
                        if ($current_user->profile_image == '/wp-content/themes/MindMates-wp/static/img/mindmate-avatar.jpg') {
                            echo $current_user->profile_image;
                        } else {
                            $user_id = get_current_user_id();
                            $attachment_id = get_user_meta( $user_id, 'profile_image', true );
                            if ( $attachment_id ) {
                                echo wp_get_attachment_url( $attachment_id );
                            }
                        }
                        ?>">
                    </div>
                    <div class="box-details-content">
                        <div class="box-content box-content-inline">
                            <span class="box-title color-gray">
                                <span><?php esc_html_e( 'First name', 'woocommerce' ); ?></span>
                            </span>
                            <p><?php echo esc_html( $current_user->user_firstname ); ?></p>
                        </div>
                        <div class="box-content box-content-inline">
                            <span class="box-title color-gray">
                                <span><?php esc_html_e( 'Last name', 'woocommerce' ); ?></span>
                            </span>
                            <p><?php echo esc_html( $current_user->user_lastname ); ?></p>
                        </div>
                        <div class="box-content">
                            <span class="box-title color-gray">
                                <span><?php esc_html_e( 'Email', 'woocommerce' ); ?></span>
                            </span>
                            <p><?php echo esc_html( $current_user->user_email ); ?></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="box-actions">
            <a class="cta cta--white cta--md" href="edit-account/">
                <span class="cta__text" data-ctrl-dom="text"><?php esc_html_e( 'Edit profile', 'woocommerce' ); ?></span>
            </a>
        </div>
    </div>
</div>