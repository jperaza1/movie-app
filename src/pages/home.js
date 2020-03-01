import React from "react";
import useFetch from "../hooks/useFetch";
import { URL_API, API } from "../Utils/contants";
import SliderMovies from "../components/SliderMovies/SliderMovies";

export default function Home() {
  const newMovies = useFetch(
    `${URL_API}movie/now_playing?api_key=${API}&language=es-Es&page=1`
  );

  return (
    <>
      <SliderMovies movies={newMovies} />
    </>
  );
}
