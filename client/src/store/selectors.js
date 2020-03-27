

export const xpLevels = {
  fishing: [
    600,
    1800,
    3000,
    5000,
    8000,
    20600,
    33600,
    50600,
    71600,
    97600,
    129600
  ],
  woodcutting: [
    600,
    1800,
    3000,
    5000,
    8000,
    20600,
    33600,
    50600,
    71600,
    97600,
    129600
  ],
  mining: [
    600,
    1800,
    3000,
    5000,
    8000,
    20600,
    33600,
    50600,
    71600,
    97600,
    129600
  ],
}


// select level from xp
export const selectFishingLevel = (state) => {
  let fishingXp = state.skills.fishingXp

  let fishingLevel;
  let flag=false;
  let count = 0;
  while(!flag) {
    if(xpLevels.fishing[count] > fishingXp) {
      fishingLevel = count+1;
      flag = true;
    }
    count++;
  }

  return fishingLevel
}

export const selectWoodcuttingLevel = (state) => {
  let woodcuttingXp = state.skills.woodcuttingXp

  let woodcuttingLevel;
  let flag=false;
  let count = 0;
  while(!flag) {
    if(xpLevels.woodcutting[count] > woodcuttingXp) {
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
    if(xpLevels.mining[count] > miningXp) {
      miningLevel = count+1;
      flag = true;
    }
    count++;
  }

  return miningLevel
}
