import { WorkExperience, Studies as StdInt } from '../../../interfaces/IMentee';

export interface BDInt {
  category: string;
  skill: string;
}

export interface BasicDetails {
  location: { city: string; country: string };
  // location: string;
  // internship: BDInt;
  skills: Array<string>;
}

export interface AboutYourself {
  //state: { careerObjective: string; wantsInternshipIn: Array<string> };
  //submitCS: (data: any) => void;
  state: { aboutYourself: string };
  submitAY: (data: any, id: any) => void;
  mentorid?: string;
}

export interface Work {
  desg: string;
  comp: string;
  startY: string;
  startM: string;
  endY?: string;
  endM?: string;
  desc: string;
}

export interface WorkExp {
  state: Work;
  weHandler: (name: string, value: string) => void;
  submitWorkExp: () => void;
  workList: WorkExperience[];
  editValueHandler: (name: 'work' | 'std', value: number) => void;
}

export interface Studies {
  univ: string;
  course: string;
  spec: string;
  type: 'Full time' | 'Part time' | 'Distance Learning';
  startY: string;
  startM: string;
  passY?: string;
  passM?: string;
  desc: string;
  docs?: string;
}

export interface StudiesCompoInt {
  state: Studies;
  stdHandler: (name: string, value: string) => void;
  submitStd: () => void;
  currStd: StdInt[];
  editValueHandler: (name: 'work' | 'std', value: number) => void;
}

export interface ExternalLinks {
  state: { externalLinks: string };
  //  links: Array<string>;
  submitEL: (data: any) => void;
}
