
function callDoc(page) {

    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", "/pages/"+page, false);

    xhttp.send();
    
    document.getElementById("resp").innerHTML = xhttp.responseText;

    xhttp.abort();

    document.getElementById('box').style.animation="barAnimationRetract 4s";
    document.getElementById('box').style.left = "-40%";
}






function destroyDoc() {
    document.getElementById('resp').style.animation="documentDestroyAnimation 4s";
    document.getElementById('resp').style.right = "-200%";
    setTimeout(() => {document.getElementById("resp").innerHTML = ""}, 5000);
    

    document.getElementById('box').style.animation="barAnimation 4s";
    document.getElementById('box').style.left = "0%";
}