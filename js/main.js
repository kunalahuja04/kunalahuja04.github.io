// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

$(".nav-link").click(function () {
  var href = $(this).attr('href');
  $('html,body').animate({
    scrollTop: $(href).offset().top + -100
  },
    'fast');
});

const inViewport = (entries, _) => {
  entries.forEach(entry => {
    entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
  });
};

const Obs = new IntersectionObserver(inViewport);
const obsOptions = {}; //See: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options

// Attach observer to every [data-inviewport] element:
const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
ELs_inViewport.forEach(EL => {
  Obs.observe(EL, obsOptions);
});

$(window).on('scroll', e => {
  $('section').each(function () {
    if ($(this).offset().top - 300 < $(window).scrollTop()) {
      let id = '#nav-' + $(this).attr('id');
      $('.navbar-nav .nav-link').removeClass('active')
      $('.navbar-nav .nav-link' + id).addClass('active')
    }
  })
  $(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      $('.navbar').removeClass('transparent');
    }

    if ($(window).scrollTop() < 1) {
      $('.navbar').addClass('transparent');
    }
  });
});

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('nav').outerHeight();

$(window).scroll(function (event) {
  didScroll = true;
});

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();

  // Make sure they scroll more than delta
  if (Math.abs(lastScrollTop - st) <= delta)
    return;

  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  if (st > lastScrollTop && st > navbarHeight) {
    // Scroll Down
    $('nav').removeClass('nav-down').addClass('nav-up');
  } else {
    // Scroll Up
    if (st + $(window).height() < $(document).height()) {
      $('nav').removeClass('nav-up').addClass('nav-down');
    }
  }

  lastScrollTop = st;
}