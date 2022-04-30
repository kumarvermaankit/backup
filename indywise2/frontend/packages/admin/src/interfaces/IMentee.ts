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
  kpi: KPICategory | string;

  value: number;
}

// TODO: Add more fields for `MenteeCard`.
export interface IMentee {
  // Unique identifier of the Mentee.
  id: string;

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

  recommendedMentor: string;

  // The average rating of the Mentee.
  rating: number;

  KPIs: KPI[];
}
