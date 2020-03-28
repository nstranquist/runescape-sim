import { upgradesData } from '../data/upgrades.data'

// select level from xp
export const selectFishingLevel = (state) => {
  let fishingXp = state.skills.fishingXp

  let fishingLevel;
  let flag=false;
  let count = 0;
  while(!flag) {
    if(upgradesData.skills.fishing[count] > fishingXp) {
      fishingLevel = count+1;
      flag = true;
    }
    count++;
  }
  console.log('fishing level from selector:', fishingLevel)
  return fishingLevel
}

export const selectWoodcuttingLevel = (state) => {
  let woodcuttingXp = state.skills.woodcuttingXp

  let woodcuttingLevel;
  let flag=false;
  let count = 0;
  while(!flag) {
    if(upgradesData.skills.woodcutting[count] > woodcuttingXp) {
      woodcuttingLevel = count+1;
      flag = true;
    }
    count++;
  }

  return woodcuttingLevel
}

export const selectMiningLevel = (state) => {
  let miningXp = state.skills.miningXp

  let miningLevel;
  let flag=false;
  let count = 0;
  while(!flag) {
    if(upgradesData.skills.mining[count] > miningXp) {
      miningLevel = count+1;
      flag = true;
    }
    count++;
  }

  return miningLevel
}

export const selectSizeCost = (state) => {
  return upgradesData.inventory.size[state.inventory.size - 12]
}