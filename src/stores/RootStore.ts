import { createContext } from "react";
import { ProfileStore } from "./ProfileStore";
import { LoadingStore } from "./LoadingStore";
import { MovieStore } from "./MovieStore";

export class RootStore {
  profileStore: ProfileStore;
  loadingStore: LoadingStore;
  movieStore: MovieStore;
  constructor() {
    this.profileStore = new ProfileStore(this);
    this.loadingStore = new LoadingStore(this);
    this.movieStore = new MovieStore(this);
  }
}

export const RootStoreContext = createContext(new RootStore());
