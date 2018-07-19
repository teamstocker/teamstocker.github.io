
$(document).ready(function() {
    $('.menu-icon').on("click", function() {
        nav_rein_raus();
    });
});
function nav_rein_raus() {
    var button = $('header nav');
    if (button.hasClass('inemitdem')) {
        button.removeClass('inemitdem').addClass('usemitdem');
    }
    else if (button.hasClass('usemitdem')) {
        button.removeClass('usemitdem').addClass('inemitdem');
    }
    else {
        button.addClass('inemitdem');
    }
};
