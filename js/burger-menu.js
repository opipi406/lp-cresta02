$(function () {
    $("body").on("click", ".burger-menu", function () {
        $(".burger-menu, .burger-menu__lines").toggleClass("open");
    });

    $("body").on("click", ".header__menu a", function () {
        $(".burger-menu, .burger-menu__lines").removeClass("open");
    });
});