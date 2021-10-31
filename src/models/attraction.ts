export interface Attraction {
  id?: number;
  name: string;
  cityId: number;
  category: string;
  latitude: string;
  longitude: string;
  image: string[];
  description: string;
  address: string;
  pageUrl?: string;
  phoneNumber?: string;
  videoUrl?: string;
  star: number;
}
