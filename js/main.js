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