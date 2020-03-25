const woodData = [
  "Oak",
  "Yew",
  "Regular",
  "Willow",
  "Monster",
  "Arctic Pine",
  "Dead",
  "Magic"
]

export const getRandomWood = () => {
  let random = Math.floor(Math.random() * woodData.length)
  return woodData[random]
}