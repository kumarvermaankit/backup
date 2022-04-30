export interface IDateDetails {
  year: number;
  month: string;
  day: number;
}

export interface IMentorForMentee {
  mentorID: string;
  mentorFrom: IDateDetails;
  mentorTill: IDateDetails;
}

export interface IProject {
  title: string;
  description?: string;
  projectLink?: string;
  thumbnail?: string;
}

export interface IProfile {
  nameOfWebsite: string;
  linkToProfile: string;
}
export interface IMenteeCourse {
  courseID: string;
  status: string;
}

export interface IRecommendedCourseStatus {
  recommendedCourseID: string;
  status: string;
}

export interface IMenteeCoursesRaw {
  menteeCourses: IMenteeCourse[];
}

export interface IMentorForMenteeRaw {
  mentorsList: IMentorForMentee[];
}

export interface IReview {
  mentorID: string; // Id of the reviewer
  name: string; // Name of the reviewer
  place?: string; // Place where the reviewer lives
  subject?: string; // Subject of the review
  review: string; // Content of the review
  rating: number; // Rating for the review
  avatar?: string; // Avatar of the reviewer
}

export interface IReviewsRaw {
  reviews: IReview[];
}

export interface ICareerSection {
  careerObjective: string;
}
export interface IMenteePortfolio {
  career?: ICareerSection;
  profiles?: IProfile[];
  projects?: IProject[];
}
export interface IMenteePortfolioData {
  ID: string;
  menteePortfolio?: IMenteePortfolio;
}

export interface IEnquire {
  menteeId: string; // userID of the mentee who the business are interested in
  menteeName: string; // name of the mentee passed from frontend
  message: string; // message for the mentee
}

export interface IMenteeRaw extends IMenteePortfolioData {
  ID: string;
  email: string;
  fullName?: string;
  menteeCourses?: IMenteeCourse[];
  mentorsList?: IMentorForMentee[];
  reviews?: IReview[];
  recommendedCourses?: IRecommendedCourse[];
}

export interface IAdminEditData {
  certified: boolean;
  menteePortfolio: IMenteePortfolio;
  menteeCourses: IMenteeCourse[];
  mentorsList: IMentorForMentee[];
  reviews: IReview[];
}

export interface IRecommendedCourse {
  courseID?: string;
  courseName: string;
  courseLink: string;
  expectedDateOfCompletion?: IDateDetails;
  status: string;
  recommendationDate?: IDateDetails; // added in backend
  recommendationUnixTime?: number; //added in backend
  recommendedCourseID?: string; //added in backend
}

export interface IAddRecommendedCourses {
  recommendedCourses: IRecommendedCourse[];
}

export interface IFetchMenteesOptions {
  limit?: number;
  next_token?: string;
}

export interface IFetchMenteesOutput {
  mentees: IMenteeRaw[];
  next_token?: string;
}

export interface IFetchMenteesQuery {
  limit?: string;
  next_token?: string;
}
