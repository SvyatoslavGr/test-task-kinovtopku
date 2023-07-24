import ImageSlider from "@/compopnents/ImageSlider";
import { getMovieById } from "@/services/getMovies"
import Image from "next/image";

type MovieProps = {
  params: {
    id: string
  }
}

export default async function Movie({params: {id}}: MovieProps) {
  const movie = await getMovieById(id);
  return (
    <div>
      {movie && (
        <div>
          <div>
            <Image
              src={movie.poster}
              width={400}
              height={600}
              alt="Movie poster"
            />
          </div>
          <div>
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            <p><b>Режиссер: </b>{movie.creator}</p>
            <p><b>В ролях: </b>{movie.actors.join(', ')}</p>
          </div>
          <div>
            <ImageSlider images={movie.frames}/>
          </div>
        </div>
      )}
    </div>
  )
}