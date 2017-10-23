function $ (selektor) {
    return document.querySelector(selektor)
}

const print = console.log

document.body.style.background = 'red';
document.body.style.fontSize = '1.2em';

const naslov = document.getElementById('naslov')
naslov.innerText = 'Zdravo Zdravo'

const prazno = document.getElementById('prazno')
prazno.innerHTML = `
<div>
    <h3>Promenjen naslov</h3>
    <p>asdf asdflk asdfl ksdflkj </p>
    <p>asdf asdflk asdfl ksdflkj </p>
    <img>
</div>
`

$('#naslov').style.color = 'green'
$('.prvi-pasus').style.color = 'yellow'
$('h3').style.color = 'purple'

const pasusi = document.querySelectorAll('p')

for (let i = 0; i < pasusi.length; i++) {
    print (pasusi[i])
}
