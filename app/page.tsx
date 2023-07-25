'use client';
import MovieList from '@/components/MovieList';
import MoviesFilter from '@/components/MoviesFilter';
import { IMovie } from '@/models/IMovie';
import { getMovies } from '@/services/getMovies';
import { useEffect, useState } from 'react'

export default function Home() {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovies()
    .then((res) => {
      if (res) setMovies(res)
    })
    .finally(()=> setLoading(false));
  }, [])
  
  return (
    <main className="container mx-auto py-2 px-2 sm:px-4 grow flex flex-col">
      <MoviesFilter setMovies={setMovies} setLoading={setLoading}/>
      <MovieList movies={movies} loading={loading}/>
    </main>
  )
}
