$(document).ready(function() {
    $(".menu-icon").on("click", function() {
        nav_rein_raus();
        $("div.normal1").toggleClass("gedreht1");
        $("div.normal2").toggleClass("gedreht2");
        $("div.normal3").toggleClass("gedreht3");
    });
});
function nav_rein_raus() {
    var button = $("header nav");
    if (button.hasClass("inemitdem")) {
        button.removeClass("inemitdem").addClass("usemitdem");
    }
    else if (button.hasClass("usemitdem")) {
        button.removeClass("usemitdem").addClass("inemitdem");
    }
    else {
        button.addClass("inemitdem");
    }
};
