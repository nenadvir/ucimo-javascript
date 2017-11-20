const validnoIme = ime => 
    typeof ime == 'string' && ime.length > 0

const validanBroj = broj => 
    !isNaN(broj) && broj.length > 0

const validnaPoruka = poruka => 
    poruka.length > 0 && poruka.length <= 144

    
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault()

    const ime = document.querySelector('#ime').value
    const broj = document.querySelector('#broj').value
    const poruka = document.querySelector('#poruka').value

    if (validnoIme(ime) && validanBroj(broj) && validnaPoruka(poruka))
        this.submit()

})
