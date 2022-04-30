import { IColorType } from '@indywise/uikit';
import { SkillCategory } from '../interfaces/IMentor';

export const getSkillColorType = (category: SkillCategory): IColorType => {
  switch (category) {
    case 'Youtube, Social Media, Digital Marketing':
      return 'IndyChartreuse';

    case 'HealthCare':
      return 'IndyKelly';

    case 'EdTech and Online Learning':
      return 'IndyJade';

    case 'Consulting':
      return 'IndyLavender';

    case 'Information Technology':
      return 'IndyMagenta';

    case 'E Commerce':
      return 'IndyRuby';
  }
};
