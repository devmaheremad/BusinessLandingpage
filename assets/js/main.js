$(function() {

    // To change the background color of navbar when scrolling
    $(document).scroll(function() {
        var $nav = $(".fixed-top");
        $nav.toggleClass('body-scrolled', $(this).scrollTop() > $nav.height());
    });

    // Scrolled To section
    $('.mynav ul li a').click(function(e) {
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $($(this).data('to')).offset().top
        }, 800)

    });

});