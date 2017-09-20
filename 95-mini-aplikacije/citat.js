const citati = [
  'Time is of the essence! Comb your hair.',
  'Sanity is a golden apple with no shoelaces.',
  'Repent! The end is coming, $9.95 at Amazon.',
  'Honesty blurts where deception sneezes.',
  'Pastry satisfies where art is unavailable.',
  'Delete not, lest you, too, be deleted.',
  'O! Youth! What a pain in the backside.',
  'Wishes are like goldfish with propellors.',
  'Love the river\'s "beauty", but live on a hill.',
  'Invention is the mother of too many useless toys.'
]
const citat = citati[Math.floor(Math.random() * citati.length)]

if (typeof document === 'object')
  document.write(citat)
else
  console.log(citat)
