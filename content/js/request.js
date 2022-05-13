
function callDoc(page) {

    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", "/pages/"+page, false);

    xhttp.send();
    
    document.getElementById("resp").innerHTML = xhttp.responseText;

}
