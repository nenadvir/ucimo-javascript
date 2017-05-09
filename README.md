![js](/images/kursevi/js-logo.png)

## Učimo Javaskript:

# Uvod u programiranje

**Učimo programiranje kroz JavaScript, uključujući Node.js i novi ES standard. Kurs je za početnike, ali se donekle podrazumeva poznavanje HTML-a i osnovnih računarskih pojmova.**

### Uvod
- Čemu služi JS?
- Kratka istorija jezika
- [Razlika između frontenda i bekenda?](/razlika-izmedju-frontenda-i-bekenda)
- Razlika između programiranja u pregledaču i na fajl sistemu

### Instalacija i pokretanje programa <a href="https://youtu.be/GxHEdXGu62g"><img src="/images/ikonice/youtube.svg" class="play" alt="play"></a>

- Instalacija editora ([Atom](https://atom.io/)) i dodataka (Emmet)
- Instalacija [NodeJS](https://nodejs.org/)-a
- Izvršenje `.js` fajla u pregledaču
- Izvršenje `.js` fajla preko komandne linije
- Zdravo JS
- Zdravo NodeJS

### Promenljive i nepromenljive <a href="https://youtu.be/MIOz5i_AwQ4"><img src="/images/ikonice/youtube.svg" class="play" alt="play"></a>

- Imenovanje vrednosti
- Dodeljivanje vrednosti (`=`)
- Identifikatori i pravila imenovanja

### Tipovi podataka
- logičke vrednosti (`true` i `false`)
- brojevi
- strune (tekst)
- nizovi
- objekti
- nepostojeće vrednosti (`null` i `undefined`)
- primitivni i složeni podaci
- kopiranje i pokazivanje vrednosti
- promena tipa i provera tipa podatka (`typeof`)

### Komentari
- jednolinijski
- višelinijski

### Logički tok programa
- operatori poređenja (`>`, `<`, `==`, `!=`)
  - jednakost i identičnost (`==`, `===`)
- logički operatori (`i`, `ili`, `ne`)
- uslovi (`if`, `if else`, `else if`, `switch`)
- opseg varijabli unutar bloka
- vežba: napravi priču sa više završetaka na osnovu promenljivih
- vežba: napravi program za otkrivanje većeg broja

### Petlje i iteracija
- vrste petlji (`while`, `do while`, `for`)
- izlazak iz petlje (`break`)
- preskakanje kruga (`continue`)

### Funkcije
- načini pisanja funkcije
- pozivanje funkcije
- ulazni (i podrazumevani) parametri
- vraćanje rezultata funkcije
- opseg varijabli unutar funkcije (lokalni i globalni opseg)
- čiste i nečiste funkcije
- bočni efekti funkcije
- streličaste funkcije
- anonimne funkcije
- vežba: napravi čiste funkcije za osnovne računske operacije

### Rad sa brojevima
- osnovne računske operacije (`+`, `-`, `*`, `/`)
- upotreba modulo operatora (`%`)
- nepreciznosti u računanju
- metode: `Number()`, `Number.parseInt()`, `toFixed()`
- dodatne `Math` metode
- vežba: napiši funkciju koja određuje je li broj paran ili neparan
- vežba: napiši funkciju koja računa koliko si vremena proveo u prevozu
- vežba: napiši funkciju koja računa koliko još moraš učiti ovim tempom da bi postao ekspert

### Rad sa tekstom (strunama)
- metode: `length`, `indexOf()`, `toLowerCase()`, `toUpperCase()`, `trim()`, `slice()`, `substr()`
- vežba: promeni veličinu slova
- vežba: nađi svoje ime u tekstu
- vežba: napiši cenzor funkciju
- šablonske strune (_template strings_): interpolacija, formatiranje teksta
- vežba: prikaži šablonsku strunu koje sadrži datum

### Rad sa nizovima
- pristupanje elementu niza
- metode: `length`, `indexOf()`, `sort()`, `join()`, `push()`, `slice()`, `splice()`
- iteracija: `forEach()`, `for of`, `map()`

### Rad sa objektima
- struktura objekta: svojstva i metode
- objekti kao asocijativni nizovi
- metode: `Object.keys()`, `Object.assign()`, `Object.freeze()`
- iteracija svojstava objekta: `for in` i `hasOwnProperty`
- vežba: [napravi kasu](https://www.codecademy.com/courses/close-the-super-makert/0/1?curriculum_id=506324b3a7dffd00020bf661)

### JSON format
- metode: `JSON.parse()`, `JSON.stringify()`
- vežba: napravi adresar u JSON fajlu

### Klase i nasleđivanje
- objektno orjentisana arhitektura
- `constructor`, `super` i `this`
- vežba: napravi likove za igru (klasa Junak i naslednici Vilenjak i Ork)
- vežba: napravi karton pacijenata (ili bazu filmova) sa pretragom

### Kodni standard
- JS Standard i Airbnb kodni stil
- Instalacija i podešavanje lintera (ESLint)
- vežba: refaktorisanje po kodnom standardu

# Front-end programiranje

### Rad u okruženju browsera
- globalni objekti: `window` i `document`
- `window` svojstva i metode: `innerHeight`, `innerWidth`, `location`, `setTimeout(), open()`

### Manipulacija DOM-a
- Uvod u objektni model dokumenta (DOM)
- selektori elemenata stranice (`document.getElementById()`, `document.querySelector()`, `document.querySelectorAll()`)
- dodavanje sadržaja stranice
- menjanje sadržaja stranice
- menjanje stila

### Oživljavanje stranice: JS događaji
- Uvod u Javaskript događaje
- dodavanje slušača događa (`addEventListener`)
- događaji miša (`click`, `dblclick`, `mousemove`, `mouseenter`, `mouseleave`, `mousedown`, `mouseup`)
- događaji tastature (`keydown`, `keyup`)
- događaji formulara (`focus`, `blur`, `change`, `submit`)
- globalni događaji (`load`, `resize`)
- dodavanje jednog ili više događaja
- povratna funkcije i `event` objekat
- sprečavanje podrazumevanog ponašanja (`preventDefault()`)
- vežba: promeni naslov kad je miš iznad
- vežba: otvori novu stranicu klikom na element
- vežba: uporedi `this` unutar obične i streličaste povratne funkcije

### Obrada korisničkog unosa
- čitanje vrednosti `input` polja
- validacija i slanje formulara
- vežba: provera dužinu unetog teksta
- vežba: proveri da li je uneti broj unutar dozvoljenog opsega
- vežba: spreči podrazumevano slanje, proveri podatke pa pošalji

### Rad sa slikama
- dodavanje i učitavanje slika
- menjanje veličine slike
- menjanje izvora slike
- vežba: promeni sliku kad je miš iznad
- vežba: javi veličinu slike (po učitavanju)
- vežba: javi kada su sve slike učitane
- vežba: napravi galeriju malih sličica i veliku izabranu

### Stilizovanje Javaskriptom
- `style` atribut
- Prevođenje CSS-a u JS
- Stilizovanje Javaskriptom kao loša praksa

### jQuery biblioteka
- dodavanje biblioteke
- metode: `hide()`, `show()`, `toggle()`, `append()`, `addClass()`, `removeClass()`
- događaji u jQuery-u
- vežba: sakrij/prikaži deo stranice na klik
- vežba: dodaj neki jQuery UI element (meni, harmoniku, kalendarče...)

### Asinhroni Javaskript (AJAX) i programski interfejs aplikacija (API)
- uvod u AJAX tehniku
- čist JS i jQuery AJAX poziv
- vežba: učitaj adresar iz JSON fajla
- vežba: učitaj Wikipediju, vremensku prognozu ili neki drugi [javni API](https://github.com/toddmotto/public-apis)

### Postavljanje projekta

- Upotreba paket menadžera ([Bower](https://bower.io/), [NPM](https://www.npmjs.com/))
- Upotreba [Webpack](https://webpack.js.org/)-a
- Upotreba modula ES6 (`export` i `import`)
- Organizacija foldera i fajlova

### Završni projekat

- Napravi jednostraničnu aplikaciju sa pretragom koja uzima podatke iz javnog API-ja
- Refaktorisanje (optimizacija i povećanje čitkosti koda)
- Objavljivanje na GitHub Pages ili Heroku

## Materijali

- [Učimo Javaskript](https://github.com/skolakoda/ucimo-javaskript)
- [Bojanka](https://github.com/mudroljub/bojanka)
- [Different Slider](https://github.com/mudroljub/different-slider)
- [Javascript animacija (prosta)](https://github.com/mudroljub/javascript-magic)
- [Javascript animacija (napredna)](https://jsfiddle.net/mudroljub/ooy5a11g/3/)
- [Wikimedia Commons API](https://jsfiddle.net/mudroljub/us2mkmq1/)
