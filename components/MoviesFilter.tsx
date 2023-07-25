import { IMovie } from "@/models/IMovie";
import { IFilterOptions, getAllMovies, getFilteredMovies } from "@/services/getMovies";
import { FormEventHandler, useEffect, useState } from "react"

type MoviesFilterProps = {
  setMovies: (movies: IMovie[]) => void;
  setLoading: (state: boolean) => void;
}

function MoviesFilter({setMovies, setLoading}: MoviesFilterProps) {
  const [filter, setFilter] = useState<IFilterOptions>({year: '', type: ''});
  const [years, setYears] = useState<number[]>([]);

  useEffect(() => {
    getAllMovies().then((res) => {
      if (res) {
        const array = res.map((el: IMovie) => el.year);
        const set = new Set(array);
        const years = Array.from(set).sort();
        setYears(years)
      }
    });
  }, [])
  
  const handleYearSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter({...filter, year: event.target.value});
  }

  const handleTypeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter({...filter, type: event.target.value});
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setLoading(true);
    const filteredMovies = await getFilteredMovies(filter);
    if (filteredMovies) setMovies(filteredMovies);
    setLoading(false);
  }

  return (
    <div className="mb-2">
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center sm:px-2 px-0 py-2 flex-nowrap">
          <select className="bg-white px-0 py-2 sm:px-2 mr-2 sm:mr-4 w-[150px] rounded-md border-2 border-blue-600" name="movie-year" id="movie-year" value={filter.year} onChange={handleYearSelectChange}>
            <option value=''>Все года</option>
            {years.length && years.map((el, index) => (
              <option key={index} value={el}>{el}</option>
            ))}
          </select>
          <select className="bg-white px-0 py-2 sm:px-2 mr-2 sm:mr-4 w-[150px] rounded-md border-2 border-blue-600" name="movie-type" id="movie-type" value={filter.type} onChange={handleTypeSelectChange}>
            <option value=''>Любой</option>
            <option value='movie'>Кино</option>
            <option value='series'>Сериал</option>
          </select>
          <button className="w-[150px] rounded-md bg-blue-600 text-white py-2" type="submit">Показать</button>
        </div>
      </form>
    </div>
  )
}

export default MoviesFilter