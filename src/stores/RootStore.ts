import { createContext } from "react";
import { ProfileStore } from "./ProfileStore";
import { LoadingStore } from "./LoadingStore";

export class RootStore {
  profileStore: ProfileStore;
  loadingStore: LoadingStore;
  constructor() {
    this.profileStore = new ProfileStore(this);
    this.loadingStore = new LoadingStore(this);
  }
}

export const RootStoreContext = createContext(new RootStore());
