(function($){
    "use strict";
//navbar

$('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide')
});

//Activate scrollspy to add active class to navbar items on scroll
$('body').scrollspy({
    target: '#mainNav',
    offset: 75
});

//collapse navbar
var navbarCollapse = function(){
    if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-scrolled");
    }else{
        $("#mainNav").removeClass("navbar-scrolled");
    }
};
//collapse now if page is not at top 
navbarCollapse()
//collapse navbar when scrolled
$(window).scroll(navbarCollapse);

})(jQuery);