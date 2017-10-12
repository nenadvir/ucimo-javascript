fetch('/telefonski-imenik.json')
  .then(response => response.json())
  .then(text => console.log(text))
