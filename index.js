function load_header() {
    document.getElementById("header").innerHTML='<object type="text/html" data="header.html" ></object>';
}

function load_box() {
    document.getElementById("boxPLANECREATER").innerHTML='<object type="text/html" data="create plane.html" ></object>';
}


//////////////////////////////////////////////////////////////
window.onload = function() {
load_header();
load_box();

}