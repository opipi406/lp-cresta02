$(function () {
    const $window = $(window), $header = $("header");

    $(window).on("scroll", function () {
        if ($header.hasClass("sticky") && $window.scrollTop() <= 600) {
            $header.removeClass("sticky");
        }
        if (!$header.hasClass("sticky") && $window.scrollTop() > 600) {
            $header.addClass("sticky");
        }
    });
});