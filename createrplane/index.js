function load_header() {
    document.getElementById("header").innerHTML='<object type="text/html" data="header.html" style="width: 100%;height: 100%;"></object>';
}

function load_PLANEbox() {
    document.getElementById("boxPLANECREATER").innerHTML='<object type="text/html" data="createrplane/create plane.html" style="width: 100%;height: 100%;"></object>';
}


//////////////////////////////////////////////////////////////
window.onload = function() {
// load_header();
load_PLANEbox();

}