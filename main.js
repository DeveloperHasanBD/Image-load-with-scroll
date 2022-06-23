(function ($) {
  $(document).ready(function () {
    $(window).scroll(function () {
      var get_position = $(window).scrollTop();
      if (get_position > 200) {
        $(".reveal").css({ 'position': 'relative', 'opacity': '0', 'transform': 'translateY(100px)', 'transition': 'all 2s ease' });
        $(".reveal.active").css({ 'opacity': '1', 'transform': 'translateY(0px)' });
      }

    });
    window.addEventListener('scroll', reveal);
    function reveal() {
      var reveals = document.querySelectorAll('.reveal');
      for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 100;
        if (revealtop < windowheight - revealpoint) {
          reveals[i].classList.add('active');
        } else {
          reveals[i].classList.remove('active')
        }
      }
    }

  });
})(jQuery)
