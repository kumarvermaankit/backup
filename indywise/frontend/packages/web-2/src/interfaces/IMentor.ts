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

export interface Education {
  courseName: string;
  specialization: string;
  instituteName: string;
  avatar: string;
  courseType: string;
  passingYear: string;
  description?: string;
}

export interface Review {
  // Name of the reviewer
  name: string;

  // Place where the reviewer lives
  place: string;

  // Content of the review
  review: string;

  // Subject of the review
  subject: string;

  // Avatar of the reviewer
  avatar?: string;
}

export interface Employment {
  designation: string;

  organization_name: string;

  worked_from: string;

  worked_till: string;

  location: string;

  job_status: string;

  description: string;

  // Avatar of the organization
  avatar?: string;
}

// TODO: Add more fields for `MentorCard`.
export interface IMentor {
  // Unique identifier of the Mentor.
  ID: string;

  // Custom username to be used to create Mentor Card links
  username: string;

  // Name of the Mentor.
  name: string;

  // Cost of one session with the Mentor.
  sessionPrice: any;

  // Mentor's avatar image source URL.
  avatar: string;

  // Mentor's years of experience.
  experience: number;

  // Mentor's skills.
  skills: Skills[];

  education: Education[];

  // Company name where the Mentor is currently affiliated with.
  company: string;

  // Location of Mentor.
  location: string;

  // Short description of the Mentor.
  shortDescription: string;

  about: string;

  // The average rating of the Mentor.
  rating: number;

  reviews: Review[];

  // Mentor's Work Experience
  employment: Employment[];

  // Mentor's SimplyBook link.
  sessionBookingLink: string;

  // Mentor's SimplyBook service number (provider -> service)
  service?: number;

  tier: string[];
}

export interface ISession {
  sessionPrice: any;
  discountedPrice?: number;
  currency: string;
  sessionBookingLink: string;
  service: number;
}

export interface IMentorPortfolio {
  location: {
    city: string;
    country: string;
  };
  currentEmployment: {
    companyName: string;
    designation: string;
    job_status: 'Full Time' | 'Part Time' | 'Internship' | 'Freelancer' | '';
    avatar: string;
    experience: number;
  };
}

export interface IWorked {
  month: string;
  year: string;
}

export interface UpdatedEmployment {
  designation: string;

  organizationName: string;

  workedFrom: IWorked;

  workedTill: IWorked;

  location: string;

  job_status: string;

  description: string;

  // Avatar of the organization
  avatar?: string;
}

export interface UpdatedEducation {
  courseName: string;
  courseType: string;
  specialization: string;
  end: IWorked;
  start: IWorked;
  instituteName: string;
  instituteLocation: string;
  institutionAvatar: string;
  description?: string;
}

export interface IMentorUpdated {
  // Unique identifier of the Mentor.
  ID: string;

  userID: string;

  // Custom username to be used to create Mentor Card links
  username: string;

  // Name of the Mentor.
  name: string;

  email: string;

  about: string;

  valueProposition: string;

  sessions: ISession;

  // Mentor's avatar image source URL.
  avatar: string;

  // Mentor's skills.
  skills: Array<string>;

  portfolio: IMentorPortfolio;

  // The average rating of the Mentor.
  overAllRating: number;

  reviews: Review[];

  tier: string[];

  category: string[];

  wiseup_consent: boolean;
}
