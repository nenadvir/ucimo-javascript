// FILMOVI

var $ = function (selector) {
    return document.querySelector(selector);
};

var poljeFilm = $('#dodajFilm');
var poljeGodina = $('#dodajGodinu');
var poljeUrl = $('#dodajUrl')
var dugme = $('#dugmic');
var bigBox = $('#big_box');

function posalji(e) {
    e.preventDefault();

    var xhr = new XMLHttpRequest();
    var url = "https://baza-filmova.herokuapp.com/dodaj/";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText);
        }
    };

    var parametri = {
        "naziv": poljeFilm.value,
        "godina": poljeGodina.value,
        "slika": poljeUrl.value
    }
    console.log(parametri);
    var data = JSON.stringify(parametri);

    xhr.send(data);
    console.log(data);
}

dugme.addEventListener('click', addFilm);
dugme.addEventListener('click', posalji);

function prikazi(e) {
    e.preventDefault();
    function loadDoc() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("bigBox").innerHTML = this.responseText;
            }
        };
        xhttp.open("GET", "demo_get.asp", true);
        xhttp.send();
    }
}
