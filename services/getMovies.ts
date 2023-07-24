import { IMovie } from "@/models/IMovie";

export async function getMovies() {
  try {
    const response = await fetch('http://localhost:4000/movies?_limit=10&_sort=rating&_order=asc');
  
    if (!response.ok) {
      throw new Error('Не удалось загрузить данные');
    }
  
    const result = (await response.json()) as IMovie[];
    return result;
    
  } catch (error) {
    console.error(error);
  }
}

export async function getAllMovies() {
  try {
    const response = await fetch('http://localhost:4000/movies');
    
    if (!response.ok) {
      throw new Error('Не удалось загрузить данные');
    }
  
    const result = (await response.json()) as IMovie[];
    return result;
  } catch (error) {
    console.error(error);
  }
}

export interface IFilterOptions {
  year: string;
  type: string;
}

export async function getFilteredMovies(filterOptions: IFilterOptions) {
  let url = 'http://localhost:4000/movies?_limit=10&_sort=rating&_order=asc';

  if (filterOptions.year) url += `&year=${filterOptions.year}`;
  if (filterOptions.type) url += `&type=${filterOptions.type}`;

  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('Не удалось загрузить данные');
    }
  
    const result = (await response.json()) as IMovie[];
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieById(id: string) {
  try {
    const response = await fetch(`http://localhost:4000/movies/${id}`);
  
    if (!response.ok) {
      throw new Error('Не удалось загрузить данные');
    }
  
    const result = (await response.json()) as IMovie;
    return result;
    
  } catch (error) {
    console.error(error);
  }
}