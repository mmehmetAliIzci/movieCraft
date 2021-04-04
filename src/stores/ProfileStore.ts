import { action, observable } from "mobx";
import { RootStore } from "./RootStore";

export interface Profile {
  email: string;
  name: string;
}

export class ProfileStore {
  private rootStore: RootStore;
  @observable profile: Profile | undefined;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.profile = undefined;
  }

  @action setProfile(profile: Profile) {
    this.profile = profile;
  }

  @action login() {
    // http call to the be for getting token
    this.profile = undefined;
  }

  @action logout() {
    this.profile = undefined;
  }
}
