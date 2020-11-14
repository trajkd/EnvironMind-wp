function timer(ms) {
 return new Promise(res => setTimeout(res, ms));
}

$.ajax({
  type : "GET",
  dataType : "json",
  url : "/wp-json/wp/v2/users?context=edit",
  beforeSend: function ( xhr ) {
      xhr.setRequestHeader( 'X-WP-Nonce', nonce );
  },
  error: function(error) {
    console.log("Error while listing users: ");
    console.log(error);
  },
  success: function(response) {
    async function loadChat() {
      for (var i = 0; i < response.length; i++) {
        var member = response[i];
        if (member.meta.profile_image === '/wp-content/themes/MindMates-wp/static/img/mindmate-avatar.jpg' || (typeof member.meta.profile_image !== 'undefined' && member.meta.profile_image.length === 0) ) {
          var chat_row = `<div class="idt-user-card">
                            <div class="idt-user-card__clickable">
                                <div class="idt-user-card__avatar">
                                    <div class="idt-user-avatar" style="width: 42px; height: 42px; background-image: url('/wp-content/themes/MindMates-wp/static/img/mindmate-avatar.jpg');">
                                        <!---->
                                    </div>
                                </div>`;
          chat_row += `
                  <div class="idt-user-card__content">
                      <div class="idt-user-card__name">`+member.name+`</div>
                      <!---->`;
          if (member.roles.includes("member")) {
            chat_row += `<div class="idt-user-card__tag">
                            <span class="mentor"> Member </span>
                        </div>`;
          } else if (member.roles.includes("partner")) {
            chat_row += `<div class="idt-user-card__tag">
                            <span class="mentor"> Partner </span>
                        </div>`;
          } else if (member.roles.includes("investor")) {
            chat_row += `<div class="idt-user-card__tag">
                            <span class="mentor"> Investor </span>
                        </div>`;
          }
          chat_row += `</div>
                </div>
                <div class="idt-user-card__actions">
                    <button class="idt-user-card__actions__menu">
                        <div class="idt-icon">
                            <i class="far fa-user"></i>
                            <!---->
                        </div>
                    </button>
                    <button class="idt-user-card__actions__open-chat">
                        <div class="idt-icon">
                            <i class="far fa-comment-dots"></i>
                            <!---->
                        </div>
                    </button>
                </div>
            </div>`;
          $(".idt-user-list__list").append(chat_row);
        } else {
          $.ajax({
            type : "GET",
            dataType : "json",
            url : "/wp-json/wp/v2/media/"+member.meta.profile_image,
            error: function(error) {
              console.log("Error while retreiving profile image: " + error);
            },
            success: function(response) {
              var chat_row = `<div class="idt-user-card">
                                <div class="idt-user-card__clickable">
                                    <div class="idt-user-card__avatar">
                                        <div class="idt-user-avatar" style="width: 42px; height: 42px; background-image: url('`+response.source_url+`');">
                                            <!---->
                                        </div>
                                    </div>`;
              chat_row += `
                  <div class="idt-user-card__content">
                      <div class="idt-user-card__name">`+member.name+`</div>
                      <!---->`;
              if (member.roles.includes("student")) {
                chat_row += `<div class="idt-user-card__tag">
                                <span class="mentor"> Student </span>
                            </div>`;
              } else if (member.roles.includes("teacher")) {
                chat_row += `<div class="idt-user-card__tag">
                                <span class="mentor"> Teacher </span>
                            </div>`;
              } else if (member.roles.includes("parent")) {
                chat_row += `<div class="idt-user-card__tag">
                                <span class="mentor"> Parent </span>
                            </div>`;
              }
              chat_row += `</div>
                    </div>
                    <div class="idt-user-card__actions">
                        <button class="idt-user-card__actions__menu">
                            <div class="idt-icon">
                                <i class="far fa-user"></i>
                                <!---->
                            </div>
                        </button>
                        <button class="idt-user-card__actions__open-chat">
                            <div class="idt-icon">
                                <i class="far fa-comment-dots"></i>
                                <!---->
                            </div>
                        </button>
                    </div>
                </div>`;
              $(".idt-user-list__list").append(chat_row);
              $('.idt-user-card__actions__menu').on('classOpen', function() {
                $('.idt-user-profile__username').html($(this).parent().parent().children().first().children().last().children().first().html());
                $('.idt-user-profile__infos__content').html($(this).parent().parent().children().first().children().last().children().last().children().first().html());
                $('.idt-user-profile__avatar .idt-user-avatar').html("");
                $('.idt-user-profile__avatar .idt-user-avatar').css("background-image", $(this).parent().parent().children().first().children().first().children().first().css("background-image"))
              });

              $(".idt-user-card__actions__menu").click( function() {
                $(".idt-user-profile-container").addClass('open');
                $(this).trigger('classOpen');
              });

              $(".idt-user-card__actions__open-chat").on('classChat', function() {
                $('.user-name').html($(this).parent().parent().children().first().children().last().children().first().html());
                $('.user-tag').html($(this).parent().parent().children().first().children().last().children().last().children().first().html());
                $('.room-message__user .idt-user-avatar').css("background-image", $(this).parent().parent().children().first().children().first().children().first().css("background-image"))
              });

              $(".idt-user-card__actions__open-chat").click( function() {
                $(".idt-chat").html(`<div class="idt-chat__room">
                                      <div class="room">
                                          <div class="room__header">
                                              <div class="room__title has-actions">
                                                  <div class="idt-icon">
                                                      <i class="far fa-comment-dots"></i>
                                                      <!---->
                                                  </div>
                                                  <!----> <span><span class="user-name"></span> | <span class="user-tag user-tag--participant">`+`</span></span>
                                              </div>
                                              <!----> 
                                              <div class="room__actions">
                                                  <!----> 
                                                  <button class="room__actions__reduce">
                                                      <div class="idt-icon">
                                                          <i class="fas fa-chevron-down"></i>
                                                          <!---->
                                                      </div>
                                                  </button>
                                                  <button idt-test="idt-room/close">
                                                      <div class="idt-icon">
                                                          <i class="fas fa-times"></i>
                                                          <!---->
                                                      </div>
                                                  </button>
                                              </div>
                                          </div>
                                          <!----> <!----> <!----> 
                                          <div id="room__messages" class="room__messages">
                                              <div class="vue-room-message">
                                                  <div class="room-message__container ltr">
                                                      <div class="room-message__user is-participant">
                                                          <div class="idt-user-avatar room-message__user__avatar" style="width: 37px; height: 37px;"></div>
                                                      </div>
                                                      <!----> 
                                                      <div class="room-message">
                                                          <div class="room-message__header">
                                                              <div class="room-message__info">
                                                                  <div class="room-message__name">`+`</div>
                                                              </div>
                                                              <!---->
                                                          </div>
                                                          <div class="room-message__content">Hey`+`</div>
                                                          <!---->
                                                      </div>
                                                  </div>
                                              </div>
                                              <div class="vue-room-message">
                                                  <!----> 
                                                  <div class="room-message__container rtl">
                                                      <!----> <!----> 
                                                      <div class="room-message personal">
                                                          <div class="room-message__header">
                                                              <div class="room-message__info">
                                                                  <div class="room-message__name">
                                                                      You
                                                                  </div>
                                                              </div>
                                                              <!---->
                                                          </div>
                                                          <div class="room-message__content">Hello`+`</div>
                                                          <!---->
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <!----> 
                                          <div class="room__footer">
                                              <!----> 
                                              <form class="room__form">
                                                  <textarea id="room__input" rows="1" placeholder="Say something" class="room__input" style="resize: none; overflow: hidden; height: 80px;"></textarea>
                                                  <div>
                                                      <input type="file" id="file" idt-test="upload-file" accept="image/*, application/pdf, .pdf" style="display: none;"> 
                                                      <button for="file" type="button" class="upload-file upload-file__btn">
                                                          <span class="upload-file__progress"><i class="fas fa-paperclip"></i></span> <!---->
                                                      </button>
                                                  </div>
                                                  <button type="button" class="room__submit">
                                                      <div class="idt-icon">
                                                          <i class="far fa-paper-plane"></i>
                                                          <!---->
                                                      </div>
                                                  </button>
                                              </form>
                                          </div>
                                      </div>
                                  </div>`);
                $(this).trigger('classChat');
              });
            }
          });
        }

        $('.idt-user-card__actions__menu').on('classOpen', function() {
          $('.idt-user-profile__username').html($(this).parent().parent().children().first().children().last().children().first().html());
          $('.idt-user-profile__infos__content').html($(this).parent().parent().children().first().children().last().children().last().children().first().html());
          $('.idt-user-profile__avatar .idt-user-avatar').html("");
          $('.idt-user-profile__avatar .idt-user-avatar').css("background-image", $(this).parent().parent().children().first().children().first().children().first().css("background-image"))
        });

        $(".idt-user-card__actions__menu").click( function() {
          $(".idt-user-profile-container").addClass('open');
          $(this).trigger('classOpen');
        });

        $(".idt-user-card__actions__open-chat").on('classChat', function() {
          $('.user-name').html($(this).parent().parent().children().first().children().last().children().first().html());
          $('.user-tag').html($(this).parent().parent().children().first().children().last().children().last().children().first().html());
          $('.room-message__user .idt-user-avatar').css("background-image", $(this).parent().parent().children().first().children().first().children().first().css("background-image"))
        });

        $(".idt-user-card__actions__open-chat").click( function() {
          $(".idt-chat").html(`<div class="idt-chat__room">
                                <div class="room">
                                    <div class="room__header">
                                        <div class="room__title has-actions">
                                            <div class="idt-icon">
                                                <i class="far fa-comment-dots"></i>
                                                <!---->
                                            </div>
                                            <!----> <span><span class="user-name"></span> | <span class="user-tag user-tag--participant">`+`</span></span>
                                        </div>
                                        <!----> 
                                        <div class="room__actions">
                                            <!----> 
                                            <button class="room__actions__reduce">
                                                <div class="idt-icon">
                                                    <i class="fas fa-chevron-down"></i>
                                                    <!---->
                                                </div>
                                            </button>
                                            <button idt-test="idt-room/close">
                                                <div class="idt-icon">
                                                    <i class="fas fa-times"></i>
                                                    <!---->
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                    <!----> <!----> <!----> 
                                    <div id="room__messages" class="room__messages">
                                        <div class="vue-room-message">
                                            <div class="room-message__container ltr">
                                                <div class="room-message__user is-participant">
                                                    <div class="idt-user-avatar room-message__user__avatar" style="width: 37px; height: 37px;"></div>
                                                </div>
                                                <!----> 
                                                <div class="room-message">
                                                    <div class="room-message__header">
                                                        <div class="room-message__info">
                                                            <div class="room-message__name">`+`</div>
                                                        </div>
                                                        <!---->
                                                    </div>
                                                    <div class="room-message__content">Hey`+`</div>
                                                    <!---->
                                                </div>
                                            </div>
                                        </div>
                                        <div class="vue-room-message">
                                            <!----> 
                                            <div class="room-message__container rtl">
                                                <!----> <!----> 
                                                <div class="room-message personal">
                                                    <div class="room-message__header">
                                                        <div class="room-message__info">
                                                            <div class="room-message__name">
                                                                You
                                                            </div>
                                                        </div>
                                                        <!---->
                                                    </div>
                                                    <div class="room-message__content">Hello`+`</div>
                                                    <!---->
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!----> 
                                    <div class="room__footer">
                                        <!----> 
                                        <form class="room__form">
                                            <textarea id="room__input" rows="1" placeholder="Say something" class="room__input" style="resize: none; overflow: hidden; height: 80px;"></textarea>
                                            <div>
                                                <input type="file" id="file" idt-test="upload-file" accept="image/*, application/pdf, .pdf" style="display: none;"> 
                                                <button for="file" type="button" class="upload-file upload-file__btn">
                                                    <span class="upload-file__progress"><i class="fas fa-paperclip"></i></span> <!---->
                                                </button>
                                            </div>
                                            <button type="button" class="room__submit">
                                                <div class="idt-icon">
                                                    <i class="far fa-paper-plane"></i>
                                                    <!---->
                                                </div>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>`);
          $(this).trigger('classChat');
        });

        await timer(2000);
      }
    }

    loadChat();
  }
});