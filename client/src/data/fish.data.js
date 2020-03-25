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

export const getRandomFish = () => {
  let random = Math.floor(Math.random() * fishData.length)
  return fishData[random]
}