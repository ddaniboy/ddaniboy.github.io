GetParams = location.href.split("?")[1].split("&")
params = {}
if (GetParams != "") {
    for (let param in GetParams) {
        params[GetParams[param].split("=")[0]] = GetParams[param].split("=")[1];
    }
}

user = params["user"];


var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.github.com/users/'+user+'/repos', false);
xhr.send();

Repositories = JSON.parse(xhr.response);

lastPubOrCreate = null;
pub = null;

for (let repo in Repositories) {
    pushed_at = new Date(Repositories[repo]["pushed_at"]).getTime();

    if (lastPubOrCreate == null || pushed_at > lastPubOrCreate) {
        lastPubOrCreate = pushed_at;
        pub = repo;
    }
}

months = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar",
    "04": "Apr",
    "05": "May",
    "06": "Jun",
    "07": "Jul",
    "08": "Aug",
    "09": "Sep",
    "10": "Oct",
    "11": "Nov",
    "12": "Dec",
}


pushed_at = Repositories[pub]["pushed_at"].split("T")[0].split("-")

pushed_at = "Updated on "+months[pushed_at[1]]+" "+pushed_at[2]+" "+pushed_at[0]
title = Repositories[pub]["full_name"].split("/")[1];
url = Repositories[pub]["html_url"];
description = Repositories[pub]["description"];

document.getElementById("title").innerHTML = document.getElementById("title").innerHTML+"\n"+title;
document.getElementById("last").onclick = function () {
    top.location.href = url;
}

document.getElementById("updated_at").innerHTML = pushed_at

if (description != null) {
    document.getElementById("description").innerHTML = description
}

