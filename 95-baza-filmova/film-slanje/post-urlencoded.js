const forma = document.querySelector("form")
const {naziv, godina, slika} = forma.elements // izvlaci atribute iz objekta

forma.addEventListener("submit", function(event){
    event.preventDefault()
    var http = new XMLHttpRequest();
    http.open("POST", "https://baza-podataka.herokuapp.com/dodaj-film/", true);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.send(`naziv=${naziv.value}&godina=${godina.value}&slika=${slika.value}`);
});