export type SkillCategory =
  | 'Youtube, Social Media, Digital Marketing'
  | 'HealthCare'
  | 'EdTech and Online Learning'
  | 'Consulting'
  | 'Information Technology'
  | 'E Commerce';

export interface Skills {
  skill: string;

  // Category to which the skill best belong to.
  // This category will help us generate the `colorType` for `SKillTag`.
  category: SkillCategory | string;
}

export type KPICategory =
  | 'technicalSkills'
  | 'delivery'
  | 'fcc'
  | 'leadership'
  | 'strategicImpact';

export interface KPI {
  value: number;

  kpi: KPICategory | string;
}

export interface WorkExperience {
  designation: string;
  organization: string;
  startY: number;
  startM: string;
  endY: number;
  endM: string;
  description: string;
}

export interface Studies {
  universityName: string;
  course: string;
  specialization: string;
  courseType: string;
  startY: number;
  startM: string;
  passedY: number;
  passedM: string;
  courseDescription: string;
}

// TODO: Add more fields for `MenteeCard`.
export interface IMentee {
  // Unique identifier of the Mentee.
  ID: string;

  // Custom username to be used to create Mentee Card links
  username: string;

  // Name of the Mentee.
  fullName: string;

  locationCountry: string;

  locationCity: string;

  // Mentee's avatar image source URL.
  avatar: string;

  // Mentee's years of experience.
  experience: number;

  collegeName: string;

  collegeLocation: string;

  certified: boolean;

  // Mentee's skills.
  skilledIn: Skills[];

  wantsInternshipIn: Skills[];

  // Short description of the Mentee.
  objective: string;

  // The average rating of the Mentee.
  rating: number;

  KPIs: KPI[];
  kpiValue: number;

  workExperience?: WorkExperience[];

  education?: Studies[];
}
