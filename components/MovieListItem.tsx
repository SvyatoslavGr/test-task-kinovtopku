import { IMovie } from "@/models/IMovie"
import Image from "next/image";
import Link from "next/link";

type MovieListItemProps = {
  movie: IMovie;
}

function MovieListItem({movie}: MovieListItemProps) {
  return (
    <li className="mb-4 border-2 border-blue-600 relative before:absolute before:[counter-increment:list] before:[content:counter(list)'.'] before:-left-6">
      <Link href={`/movies/${movie.id}`}>
        <div className="flex items-start relative">
          <div className="w-1/3 sm:w-[200px] shrink-0 aspect-[2/3]">
            <Image 
              className="object-cover object-center w-full h-full"
              src={movie.preview} 
              width={200} 
              height={300} 
              alt="Movie preview"
            />
          </div>
          <div className="sm:p-3 p-1">
            <h3 className="text-blue-600 font-semibold uppercase text-xs sm:text-base pr-3">{movie.title}</h3>
            <p className="sm:mb-2 text-yellow-600 font-bold text-xs sm:text-base">{movie.year}</p>
            <p className="text-xs sm:text-base line-clamp-4">{movie.shortDescription}</p>
          </div>
          <div className="absolute right-1 sm:right-3 top-1 sm:top-3 sm:text-2xl sm:font-bold font-semibold text-rose-600">{movie.rating}</div>
        </div>
      </Link>
    </li>
  )
}

export default MovieListItem