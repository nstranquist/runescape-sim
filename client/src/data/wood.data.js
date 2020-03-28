export const woodNamesData = [
  "Regular",
  "Dead",
  "Oak",
  "Willow",
  "Arctic Pine",
  "Monster",
  "Yew",
  "Magic"
]

export const woodData = [
  {
    name: "Regular",
    sellValue: 6,
    stackable: true,
    xp: 9,
  },
  {
    name: "Oak",
    sellValue: 9,
    stackable: true,
    xp: 14
  },
  {
    name: "Willow",
    sellValue: 12,
    stackable: true,
    xp: 19
  },
  {
    name: "Monster",
    sellValue: 15,
    stackable: true,
    xp: 26
  },
  {
    name: "Arctic Pine",
    sellValue: 21,
    stackable: true,
    xp: 33
  },
  {
    name: "Yew",
    sellValue: 42,
    stackable: true,
    xp: 45
  },
  {
    name: "Magic",
    sellValue: 86,
    stackable: true,
    xp: 60
  },
  {
    name: "Elder",
    sellValue: 166,
    stackable: false,
    xp: 116
  }
]

export const getRandomWood = () => {
  let random = Math.floor(Math.random() * woodData.length)
  return woodData[random]
}