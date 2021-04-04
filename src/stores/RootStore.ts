import { createContext } from "react";
import { ProfileStore } from "./ProfileStore";

export class RootStore {
  profileStore: ProfileStore;
  constructor() {
    this.profileStore = new ProfileStore(this);
  }
}

export const RootStoreContext = createContext(new RootStore());
