(function($) {
  "use strict"; // Start of use strict

  // Opera 8.0+
  var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

  // Firefox 1.0+
  var isFirefox = typeof InstallTrigger !== 'undefined';

  // Safari 3.0+ "[object HTMLElementConstructor]" 
  var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

  // Internet Explorer 6-11
  var isIE = /*@cc_on!@*/false || !!document.documentMode;

  // Edge 20+
  var isEdge = !isIE && !!window.StyleMedia;

  // Chrome 1 - 79
  var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

  if (isFirefox) {
    $('ul.menu.uppercase').addClass('firefox');
  }

  if (isSafari) {
    $('ul.menu.uppercase').addClass('safari');
  }


  // Floating label headings for the contact form
  $("body").on("input propertychange", ".floating-label-form-group", function(e) {
    $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
  }).on("focus", ".floating-label-form-group", function() {
    $(this).addClass("floating-label-form-group-with-focus");
  }).on("blur", ".floating-label-form-group", function() {
    $(this).removeClass("floating-label-form-group-with-focus");
  });

  // Show the navbar when the page is scrolled up
  var MQL = 0;

  //primary navigation slide-in effect
  if ($(window).width() > MQL) {
    var headerHeight = $('#mainNav').height();
    $(window).on('scroll', {
        previousTop: 0
      },
      function() {
        var currentTop = $(window).scrollTop();
        //check if user is scrolling up
        if (currentTop < this.previousTop) {
          //if scrolling up...
          if (currentTop > 0 && $('#mainNav').hasClass('is-fixed')) {
            $('#mainNav').addClass('is-visible');
          } else {
            $('#mainNav').removeClass('is-visible is-fixed');
          }
        } else if (currentTop > this.previousTop) {
          //if scrolling down...
          $('#mainNav').removeClass('is-visible');
          if (currentTop > headerHeight && !$('#mainNav').hasClass('is-fixed')) $('#mainNav').addClass('is-fixed');
        }
        this.previousTop = currentTop;
      });
  }

  $('.tagline').hover( 
    function() { $('.nameFull').removeClass('hidden'); },
    function() { $('.nameFull').addClass('hidden'); }
  );

  $('.tagline').hover( 
    function() { $('.bracket').addClass('hidden'); },
    function() { $('.bracket').removeClass('hidden'); }
  );

  function refactorBrand(w) {
    if (w.matches) {
      $('.navbar-brand').html('<span>Open Innovability \\([ E = mc^2 ]\\)</span> <span class="tagline">Environment = mind collaboration²</span>');
    } else {
      $('.navbar-brand').html("<span>Open Innovability</span><span class='tagline'><span><span class='bracket'>\\([\\)</span><span class='initial'>E</span><span class='hidden nameFull mpathy'>nvironment</span> <span>=</span> <span class='initial'>m</span><span class='hidden nameFull ind'>ind</span> <span class='initial'>c</span><span class='hidden nameFull reativity'>ollaboration</span><span>²</span><span class='bracket'>\\(]\\)</span></span></span>");
      $('.tagline').hover( 
        function() { $('.nameFull').removeClass('hidden'); },
        function() { $('.nameFull').addClass('hidden'); }
      );
      $('.tagline').hover( 
        function() { $('.bracket').addClass('hidden'); },
        function() { $('.bracket').removeClass('hidden'); }
      );
    }
    MathJax.typeset();
  };

  var isTOCvisible = 1;
  function showHideTOC(w) {
    if (w.matches) {
      $(".toc").css('right','-320px');
      setTimeout(function() { $(".toc-box").addClass('hidden'); $(".toc").css('right','-290px'); }, 500);
      isTOCvisible = 0;
    } else {
      $(".toc").css('right','-320px');
      setTimeout(function() { $(".toc-box").removeClass('hidden'); $(".toc").css('right','3px'); }, 500);
      isTOCvisible = 1;
    }
  }

  var w = window.matchMedia("(max-width: 991px)");
  refactorBrand(w);
  w.addListener(refactorBrand);
  showHideTOC(w);
  w.addListener(showHideTOC);

  $('.menu-item-24890').hover( 
    function() { $('.ideasFull').removeClass('hidden'); },
    function() { $('.ideasFull').addClass('hidden'); }
  );

  $('.menu-item-24892').hover( 
    function() { $('.blogFull').removeClass('hidden'); },
    function() { $('.blogFull').addClass('hidden'); }
  );

  $('.menu-item-24896').hover( 
    function() { $('.projectsFull').removeClass('hidden'); },
    function() { $('.projectsFull').addClass('hidden'); }
  );

  $('.mdc-card > .mdc-card__actions > .mdc-card__action-buttons > .expand').click( function() {
    $(this).parent().parent().parent().find('.display').find('.summary').toggleClass('expanded');
    if ($(this).find('.mdc-button__label').text() === 'Collapse') {
      $(this).find('.mdc-button__label').text('Expand');
    } else {
      $(this).find('.mdc-button__label').text('Collapse');
    }
  });

  $('.summary #ez-toc-container').css('display','none');

  if ($('.histoire').length) {
    $('.histoire').createTOC({title: "", insert: ".toc"});
  }

  $(".toc-box").on('click', function (e) {
    if (e.offsetX < 8) {
      if (isTOCvisible) {
        $(".toc").css('right','-320px');
        setTimeout(function() { $(".toc-box").addClass('hidden'); $(".toc").css('right','-290px'); }, 500);
      } else {
        $(".toc").css('right','-320px');
        setTimeout(function() { $(".toc-box").removeClass('hidden'); $(".toc").css('right','3px'); }, 500);
      }
      isTOCvisible = !isTOCvisible;
    }
  });

  // Chat
  var isChatOpen = false;
  $(".idt-messenger-toggle").click( function() {
    $(".idt-history-container").toggleClass('open');
    if (isChatOpen) {
      $(".idt-user-list-container").removeClass('open');
      $(".idt-user-profile-container").removeClass('open');
      $(".idt-messenger-toggle__icon-state .idt-icon").html('<i class="fas fa-chevron-left"></i>');
    } else {
      $(".idt-messenger-toggle__icon-state .idt-icon").html('<i class="fas fa-chevron-right"></i>');
    }
    isChatOpen = !isChatOpen
  });
  $(".idt-history__header__right__close").click( function() {
    $(".idt-history-container").toggleClass('open');
  });
  $(".idt-history__toolbar__open-btn").click( function() {
    $(".idt-user-list-container").toggleClass('open');
  });
  $(".idt-messenger-close").click( function() {
    $(".idt-user-list-container").removeClass('open');
    $(".idt-user-profile-container").removeClass('open');
  });
  $('body').on('click',function(event){
    if(!$(event.target).is('.idt-dropdown--pane') && !$(event.target).is('.input-dropdown__input') && !$(event.target).is('.dropdown-pane__header') && !$(event.target).is('.dropdown-pane__checkbox')  && !$(event.target).is('.fa-chevron-down')  && !$(event.target).is('span')  && !$(event.target).is('input')){
      $(".input-dropdown__input").removeClass('focus');
      $(".idt-dropdown--pane").removeClass('show');
    }
  });
  $(".input-dropdown__input").click( function() {
    $(this).toggleClass('focus');
    $(".idt-dropdown--pane").toggleClass('show');
  });

})(jQuery); // End of use strict
