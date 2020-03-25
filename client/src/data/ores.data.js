export const oreData = [
  "Tin",
  "Copper",
  "Iron",
  "Coal",
  "Mithril",
  "Adamentine",
  "Black",
  "Gold",
  "Silver",
  "Rune"
]

export const getRandomOre = () => {
  let random = Math.floor(Math.random() * oreData.length)
  return oreData[random]
}