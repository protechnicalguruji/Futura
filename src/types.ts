export interface Project {
  id: string;
  name: string;
  location: string;
  category: string;
  description: string;
  image: string;
}

export interface Review {
  id: string;
  name: string;
  text: string;
  rating: number;
}
