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
  id: string;

  // Custom username to be used to create Mentor Card links
  username: string;

  // Name of the Mentor.
  name: string;

  // Cost of one session with the Mentor.
  sessionPrice: number;

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

  service: number;

  reviews: Review[];

  // Mentor's Work Experience
  employment: Employment[];

  // Mentor's SimpluBooking link.
  sessionBookingLink?: string;

  wiseup_consent?: boolean;
}
