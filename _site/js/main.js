function toggleMobileMenu() {
  $('.navigation-wrapper').toggleClass('visible');
  $('.btn-mobile-menu__icon').toggleClass('hidden');
  $('.btn-mobile-close__icon').toggleClass('hidden');
}

$(document).ready(function () {
  $('a.panel-button').click(function (e) {
    const targetId = $(this).attr('href').split('#')[1];
    
    if ($('.content-wrapper').hasClass('showing')){
      $('.content-wrapper').removeClass('animated slideInRight slideInLeft');
      $('.panel-cover').removeClass('panel-cover--collapsed');
      $('.panel-cover').css('max-width', '100%');
      $('.panel-cover').animate({'width': '100%'}, 400, 'swing', function () {});
      $('.content-wrapper').removeClass('showing');
      history.pushState("", document.title, window.location.pathname + window.location.search);
      e.preventDefault();
      return;
    }
    
    $('.panel-cover').addClass('panel-cover--collapsed');
    const currentWidth = $('.panel-cover').width();
    
    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed');
    } else {
      $('.panel-cover').css('max-width', currentWidth);
      $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, 'swing', function () {});
    }
    
    if (targetId === 'bio') {
      $('.content-wrapper').addClass('animated slideInLeft');
      $('#bio-section').show();
      $('#projects-section').hide();
    } else if (targetId === 'projects') {
      $('.content-wrapper').addClass('animated slideInRight');
      $('#projects-section').show();
      $('#bio-section').hide();
    }

    $('.content-wrapper').addClass('showing');
  });

  if (window.location.hash) {
    $('a[href="' + window.location.hash + '"]').click();
  }

  if (window.location.pathname !== '{{ site.baseurl }}/' && window.location.pathname !== '{{ site.baseurl }}/index.html') {
    $('.panel-cover').addClass('panel-cover--collapsed');
  }

  $('.btn-mobile-menu').click(function () {
    if (!$('.navigation-wrapper').hasClass('animated bounceInDown')){
        $('.navigation-wrapper').addClass('animated bounceInDown');
    }
    toggleMobileMenu();
  });

  $('.navigation-wrapper .projects-button, .navigation-wrapper .bio-button').click(function () {
    toggleMobileMenu();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const bioButton = document.querySelector(".bio-button");
  const codesButton = document.querySelector(".codes-button");
  const panelCover = document.querySelector(".panel-cover");
  const bioContent = document.querySelector(".bio-content");
  const codesContent = document.querySelector(".codes-content");

  if (bioButton) {
      bioButton.addEventListener("click", function () {
          if (!panelCover.classList.contains("panel-cover--bio-active")) {
              panelCover.classList.add("panel-cover--collapsed", "panel-cover--bio-active");
              bioContent.classList.add("content-wrapper--show");
              codesContent.classList.remove("content-wrapper--show");
              window.location.hash = "bio";
          } else {
              panelCover.classList.remove("panel-cover--collapsed", "panel-cover--bio-active");
              bioContent.classList.remove("content-wrapper--show");
              window.location.hash = "";
          }
      });
  }

  if (codesButton) {
      codesButton.addEventListener("click", function () {
          if (!panelCover.classList.contains("panel-cover--codes-active")) {
              panelCover.classList.add("panel-cover--collapsed", "panel-cover--codes-active");
              codesContent.classList.add("content-wrapper--show");
              bioContent.classList.remove("content-wrapper--show");
              window.location.hash = "codes";
          } else {
              panelCover.classList.remove("panel-cover--collapsed", "panel-cover--codes-active");
              codesContent.classList.remove("content-wrapper--show");
              window.location.hash = "";
          }
      });
  }
});
