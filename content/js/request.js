
function callDoc(page) {

    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", "/pages/"+page, false);

    xhttp.send();
    
    document.getElementById("resp").innerHTML = xhttp.responseText;

    xhttp.abort();
    
    document.getElementById('load').style = "top: 0%;"
    document.getElementById('cubo').style.animation = "load 6s"

    document.getElementById('box').style.animation="barAnimationRetract 4s";
    document.getElementById('box').style.left = "-40%";
    setTimeout(() => {document.getElementById('load').style = ""}, 5000);
    
}






function destroyDoc() {
    document.getElementById('resp').style.animation="documentDestroyAnimation 4s";
    document.getElementById('resp').style.right = "-200%";
    setTimeout(() => {document.getElementById("resp").innerHTML = ""}, 5000);
    setTimeout(() => {document.getElementById('resp').style = ""}, 5000);

    document.getElementById('box').style.animation="barAnimation 4s";
    document.getElementById('box').style.left = "0%";
    document.getElementById('box').style = "";
}