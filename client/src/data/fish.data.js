import { v4 as uuidv4 } from 'uuid'

// 'maxStack' is 99 by default
export const fullFishData = [
  {
    id: uuidv4(),
    name: "Tuna",
    sellValue: 8,
    stackable: true,
  },
  {
    id: uuidv4(),
    name: "Mackeral",
    sellValue: 10,
    stackable: true,
  },
  {
    id: uuidv4(),
    name: "Salmon",
    sellValue: 14,
    stackable: true,
  },
  {
    id: uuidv4(),
    name: "Lobster",
    sellValue: 22,
    stackable: true,
  },
]

export const fishData = [
  "Tuna",
  "Mackeral",
  "Salmon",
  "Trout",
  "Sardine",
  "Anchovies",
  "Lobster",
  "Rainbow Trout",
  "Swordfish"
]

export const getRandomFishName = () => {
  let random = Math.floor(Math.random() * fishData.length)
  return fishData[random]
}

export const getRandomFish = () => {
  let random = Math.floor(Math.random() * fullFishData.length)
  return fullFishData[random]
}