interface review {
  name: string;
  rating: number;
}

export interface ICourse {
  ID: string;
  title: string;
  creator: string;
  skills: string[];
  price: number;
  duration: string;
  reviews: review[];
  service: string;
  description: string;
  courseLink: string;
  category: string;
  service_avatar: string;
}
