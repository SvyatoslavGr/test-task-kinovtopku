export interface IMovie {
  id: number;
  title: string;
  rating: number;
  type: 'movie' | 'series';
  creator: string;
  actors: string[];
  year: number;
  shortDescription: string;
  description: string;
  preview: string;
  poster: string;
  frames: string[];
}