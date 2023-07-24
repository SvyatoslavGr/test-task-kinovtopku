import { IMovie } from "@/models/IMovie"
import Image from "next/image";
import Link from "next/link";

type MovieListItemProps = {
  movie: IMovie;
}

function MovieListItem({movie}: MovieListItemProps) {
  return (
    <li>
      <Link href={`/movies/${movie.id}`}>
        <div>
          <div>
            <Image 
              src={movie.preview} 
              width={200} 
              height={300} 
              alt="Movie preview"
            />
          </div>
          <div>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <p>{movie.shortDescription}</p>
            <div>{movie.rating}</div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default MovieListItem