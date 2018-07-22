/* De Wiss schissdräck underem header Bild --> VIlL Z'LANG GHA FÜR DE GAGIFURZ!!!!!!!! */
window.onresize = displayWindowSize;
window.onload = displayWindowSize;
function displayWindowSize() {
  breite = window.innerWidth;
  var koordinate = "0,50 " + breite + ",50 " + breite + ",0";
  document.getElementById("zeichnebitte").setAttribute("points", koordinate);
};

/*
Okay, für die Funktion hani extrem lang gha. Umso stolzer, dassis ohni externi Library anebracht han!!!!!!
die erste 3 Ziile mached, dass s'Hamburgermenu zumne X wird.
De Rest füegt oder entfernt d'Animation zum NAV inetue oder usetue
*/

function nav_ine_use() {

  nav = document.getElementById("navfuerjs");

  document.getElementById("normal1").classList.toggle("gedreht1");
  document.getElementById("normal2").classList.toggle("gedreht2");
  document.getElementById("normal3").classList.toggle("gedreht3");

  if (nav.classList.contains("inemitdem")) {
    nav.classList.remove("inemitdem");
    nav.classList.add("usemitdem");
  }
  else if (nav.classList.contains("usemitdem")){
    nav.classList.remove("usemitdem");
    nav.classList.add("inemitdem");
  }
  else {
    nav.classList.add("inemitdem");
  }
}
