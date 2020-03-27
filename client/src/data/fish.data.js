
export const fishNamesData = [
  "Tuna",
  "Mackeral",
  "Salmon",
  "Trout",
  "Sardine",
  "Anchovies",
  "Lobster",
  "Rainbow Trout",
  "Monk Fish",
  "Swordfish",
  "Gift of Zion",
]

// 'maxStack' is 99 by default
export const fishData = [
  {
    name: "Anchovies",
    sellValue: 6,
    stackable: true,
    xp: 5
  },
  {
    name: "Sardine",
    sellValue: 8,
    stackable: true,
    xp: 7
  },
  {
    name: "Mackeral",
    sellValue: 10,
    stackable: true,
    xp: 9
  },
  {
    name: "Trout",
    sellValue: 14,
    stackable: true,
    xp: 12
  },
  {
    name: "Tuna",
    sellValue: 17,
    stackable: true,
    xp: 14
  },
  {
    name: "Salmon",
    sellValue: 19,
    stackable: true,
    xp: 19
  },
  {
    name: "Lobster",
    sellValue: 22,
    stackable: true,
    xp: 32
  },
  {
    name: "Rainbow Trout",
    sellValue: 26,
    stackable: true,
    xp: 40
  },
  {
    name: "Monk Fish",
    sellValue: 34,
    stackable: true,
    xp: 50
  },
  {
    name: "Swordfish",
    sellValue: 48,
    stackable: true,
    xp: 72
  },
  {
    name: "Gift of Zion",
    sellValue: 136,
    stackable: false,
    xp: 112
  },
]


export const getRandomFish = () => {
  let random = Math.floor(Math.random() * fishData.length)
  return fishData[random]
}

export const getRandomFishName = () => {
  let random = Math.floor(Math.random() * fishNamesData.length)
  return fishNamesData[random]
}