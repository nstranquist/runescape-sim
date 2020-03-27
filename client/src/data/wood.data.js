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
    stackable: true
  },
  {
    name: "Dead",
    sellValue: 6,
    stackable: true
  },
  {
    name: "Oak",
    sellValue: 9,
    stackable: true
  },
  {
    name: "Willow",
    sellValue: 12,
    stackable: true
  },
  {
    name: "Monster",
    sellValue: 15,
    stackable: true
  },
  {
    name: "Arctic Pine",
    sellValue: 21,
    stackable: true
  },
  {
    name: "Yew",
    sellValue: 42,
    stackable: true
  },
  {
    name: "Magic",
    sellValue: 86,
    stackable: true
  },
]

export const getRandomWood = () => {
  let random = Math.floor(Math.random() * woodData.length)
  return woodData[random]
}