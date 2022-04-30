import { IMentorUpdated } from '../interfaces/IMentor';

const filterMentorsList = (
  mentor: IMentorUpdated,
  price: Array<number>,
  exp: Array<number>,
  skills: Array<string>,
  tier: Array<string>,
  rating: number,
  freeSession: boolean
) => {
  let expFlag = 0;
  const expLowerRange = exp[0];
  const expUpperRange = exp[1];

  if (
    expUpperRange === 20 &&
    mentor?.portfolio?.currentEmployment?.experience >= expLowerRange
  ) {
    expFlag = 1;
  }

  if (
    mentor?.portfolio?.currentEmployment?.experience <= expUpperRange &&
    mentor?.portfolio?.currentEmployment?.experience >= expLowerRange
  ) {
    expFlag = 1;
  }

  let priceFlag = 0;
  const priceLowerRange = price[0];
  const priceUpperRange = price[1];

  if (
    priceUpperRange === 20000 &&
    mentor?.sessions?.sessionPrice >= priceLowerRange
  ) {
    priceFlag = 1;
  }

  if (
    mentor?.sessions?.sessionPrice <= priceUpperRange &&
    mentor?.sessions?.sessionPrice >= priceLowerRange
  ) {
    priceFlag = 1;
  }

  let skillsFlag = 0;
  if (skills.length === 0) skillsFlag = 1;

  for (let i = 0; i < skills.length; i++) {
    for (let y = 0; y < mentor.skills.length; y++) {
      if (
        mentor.skills[y]?.toLowerCase().trim() ===
        skills[i].toLowerCase().trim()
      ) {
        skillsFlag = 1;
      }
    }
  }

  let tierFlag = 0;
  if (tier.length === 0) tierFlag = 1;

  for (let i = 0; i < tier.length; i++) {
    for (let y = 0; y < mentor.tier.length; y++) {
      if (
        mentor.tier[y]?.toLowerCase().trim() ===
        tierName(tier[i]).toLowerCase().trim()
      ) {
        tierFlag = 1;
      }
    }
  }

  let ratingFlag = 0;
  if (mentor.overAllRating >= rating || mentor.overAllRating === 0) {
    ratingFlag = 1;
  }

  let freeSessionFlag = 0;
  if (freeSession && mentor?.wiseup_consent) {
    freeSessionFlag = 1;
  } else if (
    (!freeSession && !mentor?.wiseup_consent) ||
    mentor.wiseup_consent
  ) {
    freeSessionFlag = 1;
  }

  return (
    priceFlag &&
    expFlag &&
    skillsFlag &&
    tierFlag &&
    freeSessionFlag &&
    ratingFlag
  );
};

const tierName = (name: string) => {
  let tier = '';

  switch (name) {
    case 'Gold Tier':
      tier = 'Tier 1';
      break;
    case 'Diamond Tier':
      tier = 'Tier 2';
      break;
    case 'Platinum Tier':
      tier = 'Tier 3';
      break;
    case 'Indyfluencer':
      tier = 'Tier X';
      break;
  }

  return tier;
};

export default filterMentorsList;
