export interface IReview {
  // Name of the reviewer
  name: string;

  // Place where the reviewer lives
  place?: string;

  // Content of the review
  review?: string;

  // Subject of the review
  subject?: string;

  // Avatar of the reviewer
  avatar?: string;

  // Rating given by the reviewer
  rating: number;
}

export interface ICourse {
  ID: string;

  title: string;

  // Name of the creator of the course
  creator?: string;

  // Skills that are relevant to the course
  skills: string[];

  // Original price of the course
  price?: number;

  // Duration of the course
  duration?: string;

  // Reviews of the course
  reviews?: IReview[];

  // Name of the Service Provider of the course
  service?: string;

  // Avatar of the service provider
  service_avatar?: string;

  thumbnail?: string;

  // Description of the Course
  description?: string;

  // Link to booking the course on simply book
  courseLink: string;

  // Category of the Course
  category?: string;
}
