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

- What is a variable?
- Variables vs. constants in Javascript
- Identifiers and naming conventions
- Assigning values to variables (`=`)
- Variable scope (global and local)
- Changing constant objects in Javascript

### Data types

- Intro to computer data and binary numbers
- Data types in Javascript
  - Boolean (`true` i `false`)
  - Number
  - String (text)
  - Array
  - Object
  - Non-existing values (`null` i `undefined`)
- Primitive data vs. data structures
- `typeof` operator
- Type conversion

### Numbers and arithmetic

- Basic arithmetic operations (`+`, `-`, `*`, `/`)
- Modulo operator (`%`)
- Floating-point arithmetic errors
- Advance `Math` methods
- Conversions
  - String to number (`Number()`, `parseInt()`)
  - Translate binary (`parseInt('10100', 2)`) and hexadecimal (`parseInt('ffaadd', 16)`)
- `prompt()` function for user input
- Project: How long I have to learn to become an expert
- Project: Setup your business model

### Working with text

- Double quotes vs single quotes
- Basic string methods: `length`, `indexOf()`, `toLowerCase()`, `toUpperCase()`, `trim()`, `substr()`
- Multiline strings
- Project: Find specific word in a text and change case
- Project: Write word-censoring function which replace all profanities with ***

### Programming logic

- Intro to programming logic
- Comparison operators
- Logical operators (and, or, no)
- Conditional statements
  - `if`
  - `if-else`
  - `else if`
  - `switch`
- Project: Create a text adventure
- Project: Implement logic to check if user is underage

### Loops and iteration

- Loops in Javascript
  - `while` loop
  - `do while` loop
  - `for` loop
- `break` and `continue`
- A flag variable

### Functions

- What is a function?
- Different ways of defining functions
- Input parameters
  - Default parameters
- `return` statement
- Function invocation
  - Assign return value to a variable
- Pure vs. impure functions
- Arrow functions
- Anonymous functions
- Project: Create pure functions for basic arithmetic

### Working with arrays

- One-dimensional and two-dimensional arrays
- Adding element to array (`push()` method)
- Accessing array element (`array[index]`)
- `sort()` method (caution, mutator method!)
- Array iteration
  - `for`, `forEach()`, `map()`
- Project: Find specific user in array of users
- Project: Find minimal number in array of numbers

### Objects

- Intro to data structures
- Three common usages of objects in Javascript
  - Object as a dictionary
  - Object as a real-world model
  - Object as a tree
- Object iteration (`for in` and `hasOwnProperty`)
- Project: Find all occurrences of specific name in array
- Project: [Building a Cash Register](https://www.codecademy.com/courses/close-the-super-makert/0/1?curriculum_id=506324b3a7dffd00020bf661)

### JSON format

- Intro to JSON
- Basic methods: `JSON.parse()`, `JSON.stringify()`
- Project: Create an adress book in JSON file

### Object-oriented programming

- Classes and inheritance
  - Properties and methods
  - `constructor`, `super` and `this`
- Instantiate `new` objects
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

### React

- React tools and ecosystem
- JSX format
- Components
  - Class vs. functional component
  - Component lifecycle
  - Render method
- `props`
  - Passing properties
  - Passing *handler* functions
- `state`
  - Initial state
  - Updating state
  - Updating parent state
- Styling
  - `className` attribute
  - Conditional CSS classes
- Routing
- Project: Render data from JSON

### Završni projekat

- Napravi jednostraničnu aplikaciju sa pretragom koja uzima podatke iz javnog API-ja
- Refaktorisanje (optimizacija i povećanje čitkosti koda)
- Objavljivanje na GitHub Pages ili Heroku
