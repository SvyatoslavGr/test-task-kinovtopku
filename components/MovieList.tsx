import { IMovie } from "@/models/IMovie"
import MovieListItem from "./MovieListItem";

type MovieListProps = {
  movies: IMovie[];
  loading: boolean;
}

function MovieList({movies, loading}: MovieListProps) {
  if (loading) {
    return <p className="mx-auto my-auto">Загрузка...</p>
  }

  return (
    <div className="mb-10">
      {movies.length ? (
        <ul className="list-none pl-5 [counter-reset:list]">
          {movies.map((el: IMovie) => (
            <MovieListItem key={el.id} movie={el}/>
          ))}
        </ul>
      ) : (
        <p>Ничего не найдено</p>
      )}
    </div>
  )
}

export default MovieList