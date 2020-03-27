export const oreNamesData = [
  "Tin",
  "Copper",
  "Iron",
  "Coal",
  "Mithril",
  "Silver",
  "Gold",
  "Adamentine",
  "Rune"
]

export const oreData = [
  {
    name: "Tin",
    sellValue: 8,
    stackable: true,
  },
  {
    name: "Copper",
    sellValue: 9,
    stackable: true,
  },
  {
    name: "Iron",
    sellValue: 12,
    stackable: true,
  },
  {
    name: "Coal",
    sellValue: 18,
    stackable: true,
  },
  {
    name: "Mithril",
    sellValue: 24,
    stackable: true,
  },
  {
    name: "Silver",
    sellValue: 29,
    stackable: true,
  },
  {
    name: "Gold",
    sellValue: 40,
    stackable: true,
  },
  {
    name: "Adamentine",
    sellValue: 64,
    stackable: true,
  },
  {
    name: "Rune",
    sellValue: 118,
    stackable: true,
  },
]

export const getRandomOre = () => {
  let random = Math.floor(Math.random() * oreData.length)
  return oreData[random]
}