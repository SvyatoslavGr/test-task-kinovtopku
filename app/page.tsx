'use client';
import MovieList from '@/compopnents/MovieList';
import MoviesFilter from '@/compopnents/MoviesFilter';
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
  
  if (loading) {
    return <h1>Загрузка...</h1>
  }

  return (
    <main className="flex flex-col items-center justify-between p-2">
      <MoviesFilter setMovies={setMovies}/>
      <MovieList movies={movies}/>
    </main>
  )
}
