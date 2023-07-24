// import React from 'react'

import { IMovie } from "@/models/IMovie";
import { IFilterOptions, getAllMovies, getFilteredMovies } from "@/services/getMovies";
import { FormEventHandler, useEffect, useState } from "react"

type MoviesFilterProps = {
  setMovies: (movies: IMovie[]) => void;
}

function MoviesFilter({setMovies}: MoviesFilterProps) {
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
    const filteredMovies = await getFilteredMovies(filter);
    if (filteredMovies) setMovies(filteredMovies);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select name="movie-year" id="movie-year" value={filter.year} onChange={handleYearSelectChange}>
          <option value=''>Все года</option>
          {years.length && years.map((el, index) => (
            <option key={index} value={el}>{el}</option>
          ))}
        </select>
        <select name="movie-type" id="movie-type" value={filter.type} onChange={handleTypeSelectChange}>
          <option value=''>Любой</option>
          <option value='movie'>Кино</option>
          <option value='series'>Сериал</option>
        </select>
        <button type="submit">Показать</button>
      </form>
    </div>
  )
}

export default MoviesFilter