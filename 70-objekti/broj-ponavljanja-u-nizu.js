const imena = ["dajana", "marija", "damjan", "mirko", "ana", "mirko", "dajana", "milena", "darko", "dajana"]

const recnik = {}

imena.map(ime => {
  if (recnik[ime]) recnik[ime]++
  else recnik[ime] = 1
})

console.log(recnik)
