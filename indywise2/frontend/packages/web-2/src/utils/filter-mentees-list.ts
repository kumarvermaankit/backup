import { IMentee } from '../interfaces/IMentee';

const filterMenteesList = (
  mentee: IMentee,
  location: Array<string>,
  exp: Array<number>,
  wantsInternshipIn: Array<string>
) => {
  let expFlag = 0;
  const expLowerRange = exp[0];
  const expUpperRange = exp[1];

  if (expUpperRange === 20 && mentee.experience >= expLowerRange) {
    expFlag = 1;
  }

  if (
    mentee.experience <= expUpperRange &&
    mentee.experience >= expLowerRange
  ) {
    expFlag = 1;
  }

  let locationFlag = 0;

  if (location.length === 0) locationFlag = 1;

  const indexFound = location.findIndex((f) => f === mentee.locationCity);

  if (indexFound < 0) locationFlag = 1;

  let skillsFlag = 0;
  if (wantsInternshipIn.length === 0) skillsFlag = 1;

  for (let i = 0; i < wantsInternshipIn.length; i++) {
    for (let y = 0; y < mentee.wantsInternshipIn.length; y++) {
      if (mentee.wantsInternshipIn[y].skill === wantsInternshipIn[i]) {
        skillsFlag = 1;
      }
    }
  }

  return locationFlag && expFlag && skillsFlag;
};

export default filterMenteesList;
