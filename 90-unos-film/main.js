const okvir = document.querySelector('#okvir')
const forma = document.querySelector('form')
const {naziv, godina, slika} = forma.elements // izvlaci atribute iz objekta

forma.addEventListener('submit', function (e) {
  e.preventDefault()
  okvir.innerHTML += `
    <h3>${naziv.value}</h3>
    <p>Godina: ${godina.value}</p>
    <img src="${slika.value}" alt="${naziv.value}">
  `
})
