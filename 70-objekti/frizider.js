const frizider = {
  marka: "Gorenje",
  vlasnik: "ja",
  pametan: true,
  kapacitetJaja: 10,
  brojJaja: 5,

  trenutnoStanje() {
    return this.brojJaja
  },

  izvadiJaje() {
    this.brojJaja --
  },

  dopuniJaja() {
    const fali = this.kapacitetJaja - this.brojJaja
    this.brojJaja += fali
    console.log('Trenutno fali', fali, 'jaja, dopunjavam...');
  }
}

frizider.trenutnoStanje()
frizider.izvadiJaje()
frizider.trenutnoStanje()
frizider.dopuniJaja()
frizider.trenutnoStanje()
