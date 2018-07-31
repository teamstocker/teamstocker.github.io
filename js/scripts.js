window.onresize = displayWindowSize;
window.onload = displayWindowSize;
function displayWindowSize() {

/* Bilder wo uf de Teamsite sind, werded je nach Bildschirmgrössi veränderet */
  Bildbreite = window.innerWidth;
  if (Bildbreite > 900) {
    document.getElementById("teambild").setAttribute("width", "300px");
    document.getElementById("teambild2").setAttribute("width", "300px");
    document.getElementById("teambild3").setAttribute("width", "300px");
    document.getElementById("teambild4").setAttribute("width", "300px");
  }
  else if (Bildbreite < 900 && Bildbreite > 600){
    document.getElementById("teambild").setAttribute("width", "75%");
    document.getElementById("teambild2").setAttribute("width", "75%");
    document.getElementById("teambild3").setAttribute("width", "75%");
    document.getElementById("teambild4").setAttribute("width", "75%");
  }
  else {
    document.getElementById("teambild").setAttribute("width", "50%");
    document.getElementById("teambild2").setAttribute("width", "50%");
    document.getElementById("teambild3").setAttribute("width", "50%");
    document.getElementById("teambild4").setAttribute("width", "50%");
  }
};

//  breite = window.innerWidth;
//  var koordinate = "0,50 " + breite + ",50 " + breite + ",0";
//  document.getElementById("zeichnebitte").setAttribute("points", koordinate);

function nav_ine_use() {

  nav = document.getElementById("navfuerjs");
  container = document.getElementById("emptycontainer");

// entfernt display:none beim emptycontainer
  container.classList.remove("nope");

// mach das Hamburgermenu zum X und zurück
  document.getElementById("normal1").classList.toggle("gedreht1");
  document.getElementById("normal2").classList.toggle("gedreht2");
  document.getElementById("normal3").classList.toggle("gedreht3");

// entweder einfüge-animation oder entfern-animation der Navigation
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

function byenav() {
  nav = document.getElementById("navfuerjs");
  container = document.getElementById("emptycontainer");

// entfernen oder hinzufügen von display:none beim emptycontainer
  if (container.classList.contains("nope")) {
    container.classList.remove("nope");
  }
  else {
    container.classList.add("nope");
  }

// das X zurück zum Hamburgermenu und raus mit der Navigation
  nav.classList.remove("inemitdem");
  nav.classList.add("usemitdem");
  document.getElementById("normal1").classList.toggle("gedreht1");
  document.getElementById("normal2").classList.toggle("gedreht2");
  document.getElementById("normal3").classList.toggle("gedreht3");
}
