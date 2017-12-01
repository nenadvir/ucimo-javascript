const okvir = document.querySelector('#okvir')
const http = new XMLHttpRequest()

http.open("GET", "https://baza-podataka.herokuapp.com/filmovi/")
http.send()
http.onload = () => init(http.responseText)

function init(data) {
  let html = ''
  JSON.parse(data).map(film => {
    html += `
    <div class="film">
      <h3>${film.naziv}</h3>
      <img src="${film.slika}" alt="${film.naziv}">
      <p>Godina: ${film.godina}</p>
    </div>
    `
  })
  okvir.insertAdjacentHTML('beforeend', html)
}
