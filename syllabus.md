## Learn Javascript

# Module I: Introduction to programming

### Intro

- What is programming and how to learn it?
- What to do with Javascript?
- Short history of Javascript
- Programming in browser vs. programming on file system

### First JS program

- Install NodeJS
- Install editor of choice ([Atom](https://atom.io/), [Brackets](//brackets.io/), [Sublime](https://www.sublimetext.com/), [Code](https://code.visualstudio.com/)...)
  - Install plugins (Emmet, linter, beautifier)
- Hello World program
  - Run `.js` file in browser
  - Run `.js` file via command line

### Variables and constants

- [Šta su varijable?](/c-varijable)
- [Promenljive i nepromenljive u Javaskriptu](/promenljive-i-nepromenljive-u-javaskriptu)
- Identifikatori i pravila imenovanja
- Dodela vrednosti (`=`)
- [Opseg važenja](/promenljive-i-nepromenljive-u-javaskriptu#opseg-važenja)
- [Menjanje nepromenljivih u Javaskriptu](https://youtu.be/iQ62GxboWgY)

### Data types

- [Beleženje podataka](/kako-racunar-belezi-podatke) i [binarni zapis](/binarni-brojevi)
- [Tipovi podataka u programskim jezicima](/tipovi-podataka)
- [Tipovi podataka u Javaskriptu](https://youtu.be/T0VLAWelSUA)
  - Logičke vrednosti (`true` i `false`)
  - Brojevi
  - Strune (tekst)
  - Nizovi
  - Objekti
  - Nepostojeće vrednosti (`null` i `undefined`)
- Prosti i složeni tipovi
- Provera tipa podatka (`typeof`)
- Promena tipa podatka
- [Opasnost labavih tipova](/opasnost-labavih-tipova)

### Numbers and arithmetics

- Osnovne računske operacije (`+`, `-`, `*`, `/`)
- Upotreba modulo operatora (`%`)
- Nepreciznosti u računanju
  - decimalni problem
  - oktalni problem
- Napredne `Math` metode
- Konverzije
  - Promena strune u broj (`Number()`, `parseInt()`)
  - Čitanje binarnih (`parseInt('10100', 2)`) i heksadecimalnih brojeva (`parseInt('ffaadd', 16)`)
- `prompt()` funkcija za korisnički unos
- Project: izračunaj koliko moraš učiti ovim tempom da bi postao ekspert
- Project: izračunaj koliko dana si živ
- Project: postavi model poslovanja

### Working with text

- Navodnici (`""`) i polunavodnici (`''`)
- Višelinijske strune (\`\`)
- Osnovne metode: `length`, `indexOf()`, `toLowerCase()`, `toUpperCase()`, `trim()`, `substr()`
- Project: promeni veličinu slova
- Project: nađi svoje ime u tekstu
- Project: napiši cenzor funkciju koja menja ružne reči zvezdicama

### Programming logic

- [Logički tok programa](/programska-logika)
- [Operatori poređenja](/programska-logika#operatori-poređenja-manje-veće-jednako) (veće, manje, jednako, nejednako)
- [Logički operatori](/programska-logika#logički-operatori-i-ili-ne) (i, ili, ne)
- [Uslovi](/programska-logika#uslovi)
  - ako (`if`)
  - ako inače (`if else`)
  - inače ako (`else if`)
  - skretnica (`switch`)
- Project: napravi priču sa više završetaka na osnovu promenljivih
- Project: napravi program za otkrivanje većeg od dva uneta broja

### Loops and iteration

- [Petlje u jeziku C](/c-petlje)
- [Petlje u Javaskriptu](https://youtu.be/qjdBoVHmIQA)
- Vrste petlji
  - `while` petlja
  - `do while` petlja
  - `for` petlja
- [Zaustavljanje petlje i preskakanje kruga](https://youtu.be/8o-NvzDtwHU) (`break` i `continue`)
- Uloga zastavice

### Functions

- [Šta su funkcije?](https://youtu.be/MO9WKt7CRI8)
- Različiti načini pisanja funkcije
- Ulazni parametri
  - [Podrazumevani parametri](https://youtu.be/ElXcmfi0-Lg)
- Vraćanje rezultata funkcije
- Pozivanje funkcije
  - Prosleđivanje rezultata funkcije
- Opseg varijabli unutar funkcije
- Čiste i nečiste funkcije
- Streličaste funkcije
- Anonimne funkcije
- Project: napravi čiste funkcije za osnovne računske operacije

### Working with arrays

- Jednodimenzionalni i višedimenzionalni nizovi
- Dodavanje elementa: `push()`
- Pristupanje elementu: `niz[index]`
- Sortiranje niza: `sort()` (pažljivo, mutatorska metoda)
- Iteracija: `for`, `forEach()`, `map()`
  - izbegavanje bespotrebnog vrtenja
- Ostale metode: `length`, `indexOf()`, `slice()`, `splice()`, `toString()`
- Project: pronađi korisnika u nizu
- Project: pronađi najmanji broj

### Objects

- [Uvod u strukture podataka](/strukture-podataka)
- [Tri vrste objekata u Javaskriptu](/tri-vrste-objekata-u-javaskriptu)
  - [Objekat kao rečnik](https://youtu.be/ZJ5__rBMkso)
  - [Objekat kao model](https://youtu.be/wEVoMn_sX_U)
  - [Objekat kao stablo](https://youtu.be/ppODhkAAQ3A)
- Osnovne metode: `Object.keys()`, `Object.assign()`, `Object.freeze()`
- Iteracija objekta: `for in` i `hasOwnProperty`
- Project: pronađi koliko se koje ime ponavlja u nizu
- Project: [napravi kasu za prodavnicu](https://www.codecademy.com/courses/close-the-super-makert/0/1?curriculum_id=506324b3a7dffd00020bf661)

### JSON format

- [Uvod u JSON](/json-format)
- osnovne metode: `JSON.parse()`, `JSON.stringify()`
- vežba: napravi adresar u JSON fajlu

### Classes and inheritance

- [Objektno orjentisana arhitektura](/objektno-orijentisano-programiranje)
- `constructor`, `super` i `this`
- Project: napravi likove za igru (klasa Junak i naslednici Vilenjak i Ork)
- Project: napravi karton pacijenata (ili bazu filmova) sa pretragom

### Code style

- JS Standard i Airbnb kodni stil
- Instalacija i podešavanje lintera (ESLint)
- vežba: refaktorisanje po kodnom standardu

# Module II: Front-end programming

### Working in a browser environment

- Objektni model dokumenta (DOM)
  - [Struktura stabla](/strukture-podataka#stablo-tree)
  - Razlika HTML-a i DOM-a
- Globalni objekti u pregledaču: `window` i `document`
  - `window` svojstva i metode: `innerHeight`, `innerWidth`, `location`, `setTimeout(), open()`
  - `document` svojstva i metode: `activeElement`, `domain`, `location`, `referrer`
- [Razlika između frontenda i bekenda?](/razlika-izmedju-frontenda-i-bekenda)
- Project: predstavi strukturu HTML stranice pomoću JS objekta

### DOM manipulation

- Selektori elemenata:
  - `document.getElementById()`
  - `document.querySelector()`
  - `document.querySelectorAll()`
- [Dodavanje elemenata](https://jsfiddle.net/mudroljub/rhLggx3t/) (`appendChild`, `innerHTML`, `element.insertAdjacentHTML()`)
- Uklanjanje elemenata (`removeChild` ili `innerHTML`)

### Styling with Javascript

- Stilizovanje preko `style` atributa
  - Prevođenje CSS-a u JS
  - Stilizovanje Javaskriptom kao loša praksa
- Stilizovanje dodavanjem CSS klasa

### Events

- Uvod u Javascript događaje
  - događaji miša (`click`, `dblclick`, `mousemove`, `mouseenter`, `mouseleave`, `mousedown`, `mouseup`)
  - događaji tastature (`keydown`, `keyup`)
  - događaji formulara (`focus`, `blur`, `change`, `submit`)
  - globalni događaji (`DOMContentLoaded`, `load`, `resize`)
  - Razlika između `DOMContentLoaded` i `window.onload`
- Dodavanje slušača događa
  - dodavanje preko atributa i preko metoda (`addEventListener`)
  - povratna funkcija i prosleđivanje argumenata
  - razlika obične i streličaste povratne funkcije
  - `event` objekat i njegova svojstva
- Sprečavanje podrazumevanog ponašanja (`event.preventDefault()`)
  - sprečavanje slanja forme
  - sprečavanje otvaranja linka
- Project: promeni naslov kad je miš iznad
- Project: napravi da [element prati kretanje miša](https://jsfiddle.net/mudroljub/du274n9z/)
- Project: uporedi `this` unutar obične i streličaste povratne funkcije
- Project: spreči podrazumevano ponašanje nekog elementa

### Form validation

- Čitanje vrednosti `input` polja
- Validacija i slanje formulara
  - Validacija putem Javaskripta
  - Prirodna validacija pregledača
  - Slanje podataka bekendu
- Project: [email validacija](https://jsfiddle.net/mudroljub/h70xtpco/)
- Project: proveri dužinu unetog teksta
- Project: spreči podrazumevano slanje, proveri podatke pa pošalji

### Regular expression

- [Regularni izrazi](/regularni-izraz)
  - Početak i kraj (`^`, `$`)
  - Broj pojavljivanja (`?`, `+`, `*`, `{}`)
  - Posebni karakteri (`\d`, `\D`, `\w`, `\W`, `\s`, `\S`)
  - Grupisanje (`[]`) i negacija (`^`)
  - Podobrasci (`()`)
  - Alternativa (`|`)
  - Escape (`\`)
- [JS metode za regularni izraz](/regularni-izraz#js-metode-za-regularni-izraz)
- Project: [izrazi za ime i prezime, adresu i email](https://jsfiddle.net/mudroljub/6b36w613/)

### Working with images

- Dodavanje i učitavanje slika
- Menjanje veličine slike
- Menjanje izvora slike
- Project: promeni sliku na klik
- Project: javi kada su sve slike učitane
- Project: [dinamički napravi foto galeriju](https://jsfiddle.net/mudroljub/d4zwwp70/)

### Working with audio and video

- Učitavanje audio i video fajlova
- Puštanje fajlova
- Project: Napravi plejer i plejlistu
- Project: Napravi program za pravljenje muzike

### Drawing and animation

- Crtanje na platnu (`canvas`) i mrdanje DOM elemenata
- Glavna petlja (`main loop`)
- Animiranje sa `setInterval` i `requestAnimationFrame`
  - FPS (broj kadrova po sekundi)
  - Delta vreme
- [Kako napraviti kružnu animaciju pomoću trigonometrije?](/trigonometrija-animacija)
- Interaktivne animacije
- Project: Napravi animaciju koja reaguje na korisnički unos
- Project: Pravljenje kružne animacije pomoću trigonometrije

### jQuery library

- Dodavanje biblioteke
- Osnovne metode: `hide()`, `show()`, `toggle()`, `append()`, `addClass()`, `removeClass()`
- `jQuery` selektor vs `document.querySelector`
  - Razlika između JS elementa i jQuery objekta
- Događaji u jQuery-u
  - `$(document).ready` vs `window.onload`
- Project: sakrij/prikaži deo stranice na klik
- Project: dodaj neki jQuery UI element (meni, harmoniku, kalendar...)
- Project: napravi mini jQuery

### AJAX i API

- Asinhroni Javascript i HTML
  - uvod u AJAX tehniku
  - čist JS i jQuery AJAX poziv
- Programski interfejs aplikacija (API)
- Project: učitaj adresar iz JSON fajla
- Project: učitaj Wikipediju, vremensku prognozu ili neki drugi [javni API](https://github.com/toddmotto/public-apis)

### Node.js web services

- [Šta je server?](/server)
- [Šta su web servisi?](/web-servisi)
- Žetva podataka (*web scraping*)
- Čitanje i pisanje fajlova
- Služenje podataka
- Project: žanji i kombinuj vesti sa raznih izvora

### Završni projekat

- Napravi jednostraničnu aplikaciju sa pretragom koja uzima podatke iz javnog API-ja
- Refaktorisanje (optimizacija i povećanje čitkosti koda)
- Objavljivanje na GitHub Pages ili Heroku
