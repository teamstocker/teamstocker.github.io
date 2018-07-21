/* Menu Icon chan sich verändere, wenns drückt wird */
$(document).ready(function() {
    $(".menu-icon").on("click", function() {
        nav_rein_raus();
        $("div.normal1").toggleClass("gedreht1");
        $("div.normal2").toggleClass("gedreht2");
        $("div.normal3").toggleClass("gedreht3");
    });
});
/* Dass D'navigation smooth ine und use gaht */
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
/* De Wiss schissdräck underem header Bild --> VIlL Z'LANG GHA FÜR DE GAGIFURZ!!!!!!!! */
window.onresize = displayWindowSize;
window.onload = displayWindowSize;
function displayWindowSize() {
  breite = window.innerWidth;
  var koordinate = "0,50 " + breite + ",50 " + breite + ",0";
  document.getElementById("zeichnebitte").setAttribute("points", koordinate);
};
