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
    xp: 8,
  },
  {
    name: "Copper",
    sellValue: 9,
    stackable: true,
    xp: 11,
  },
  {
    name: "Iron",
    sellValue: 12,
    stackable: true,
    xp: 14,
  },
  {
    name: "Coal",
    sellValue: 18,
    stackable: true,
    xp: 17,
  },
  {
    name: "Mithril",
    sellValue: 24,
    stackable: true,
    xp: 21,
  },
  {
    name: "Silver",
    sellValue: 29,
    stackable: true,
    xp: 34,
  },
  {
    name: "Gold",
    sellValue: 40,
    stackable: true,
    xp: 40,
  },
  {
    name: "Adamentine",
    sellValue: 64,
    stackable: true,
    xp: 69,
  },
  {
    name: "Rune",
    sellValue: 118,
    stackable: true,
    xp: 112
  },
]

export const getRandomOre = () => {
  let random = Math.floor(Math.random() * oreData.length)
  return oreData[random]
}