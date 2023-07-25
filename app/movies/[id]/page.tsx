import ImageSlider from "@/components/ImageSlider";
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
    <main className="container mx-auto py-4 sm:py-6 px-2 sm:px-4 grow">
      {movie ? (
        <div className="mb-8">
          <div className="flex sm:flex-row flex-col items-start mb-6">
            <div className="sm:w-2/5 lg:w-[400px] shrink-0 aspect-[2/3] mx-auto sm:mr-4 lg:mr-6 sm:mb-0 mb-4">
              <Image
                className="object-cover object-center w-full h-full"
                src={movie.poster}
                width={400}
                height={600}
                alt="Movie poster"
              />
            </div>
            <div>
              <h2 className="text-blue-600 font-semibold uppercase text-lg md:text-xl lg:text-3xl mb-2 lg:mb-6">{movie.title}</h2>
              <p className="text-sm md:text-base mb-2 lg:mb-6">{movie.description}</p>
              <p className="text-sm md:text-base"><b>Режиссер: </b>{movie.creator}</p>
              <p className="text-sm md:text-base"><b>В ролях: </b>{movie.actors.join(', ')}</p>
            </div>
          </div>
          <div>
            <ImageSlider images={movie.frames}/>
          </div>
        </div>
      ) : (
        <p>Данные не найдены</p>
      )}
    </main>
  )
}