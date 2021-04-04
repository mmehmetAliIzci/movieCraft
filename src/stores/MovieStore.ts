import {action, makeObservable, observable, runInAction, toJS} from "mobx";
import { RootStore } from "./RootStore";
import { fetchFilms } from "../services/MovieService";

export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export class MovieStore {
  private rootStore: RootStore;
  @observable movies: Array<Movie> = [];

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this);
  }

  @action async fetchNextFilms(pageNumber: number) {
    try {
      this.rootStore.loadingStore.startLoading();
      const results = await fetchFilms(pageNumber);
      if (results.Response === "True" && results.Search.length > 0) {
        runInAction(() => {
          this.movies = [...this.movies, ...results.Search];
        });
      }
    } catch (e) {
      console.warn("Error fetching movies");
    } finally {
      this.rootStore.loadingStore.stopLoading();
    }
  }
}
