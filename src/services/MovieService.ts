import { Movie } from "../stores/MovieStore";

export interface FilmResponse {
  Search: Array<Movie>;
  Response: "True" | "False";
  totalResults: number;
}

export async function fetchFilms(page: number): Promise<FilmResponse> {
  try {
    const movies = await fetch(
      `https://www.omdbapi.com/?apikey=741fd8d3&s=car&type=movie&page=${page}`,
    );
    return await movies.json();
  } catch (e) {
    return Promise.reject({ error: e });
  }
}
