import { IMovie } from "@/models/IMovie"
import MovieListItem from "./MovieListItem";

type MovieListProps = {
  movies: IMovie[];
}

function MovieList({movies}: MovieListProps) {
  return (
    <div>
      {movies.length ? (
        movies.map((el: IMovie) => (
          <MovieListItem key={el.id} movie={el}/>
        ))
      ) : (
        <p>Ничего не найдено</p>
      )}
    </div>
  )
}

export default MovieList