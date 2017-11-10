const forma = document.querySelector('form')
const {naziv, godina, slika} = forma.elements // izvlaci elemente iz forme

function posalji(e) {
  e.preventDefault()

  const http = new XMLHttpRequest()
  http.open('POST', 'https://baza-filmova.herokuapp.com/dodaj/')
  http.setRequestHeader('Content-type', 'application/json')
  http.onload = () => console.log(http.responseText)

  http.send(JSON.stringify({'naziv': naziv.value, 'godina': godina.value, 'slika': slika.value}))
}

forma.addEventListener('submit', posalji)
