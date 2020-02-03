$(function () {
    'use strict'

    var scrolled = function () {
        if ($(".navbar").offset().top > 100) {
            $(".navbar").addClass("bg-dark");
        } else {
            $(".navbar").removeClass("bg-dark");
        }
    };
    // Collapse now if page is not at top
    scrolled();
    // Collapse the navbar when page is scrolled
    $(window).scroll(scrolled);

    $('[data-scroll-target]').click(function (e) {
        e.preventDefault();
        $('html, body').scrollTop($('#'+$(this).attr('data-scroll-target')).offset().top);
    });

    $('.nav-item').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })
});