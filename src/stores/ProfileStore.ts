import { action, makeObservable, observable } from "mobx";
import { RootStore } from "./RootStore";
import { login } from "../services/ProfileService";

export interface Profile {
  username: string;
  name: string;
}

export class ProfileStore {
  private rootStore: RootStore;
  @observable profile: Profile | undefined;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.profile = undefined;
    makeObservable(this);
  }

  @action setProfile(profile: Profile) {
    this.profile = profile;
  }

  @action async login(username: string, password: string) {
    try {
      this.rootStore.loadingStore.startLoading();
      const profile = await login(username, password);
      this.setProfile({ username, name: profile?.name });
    } catch (e) {
      console.warn("Something went wrong during login");
    } finally {
      setTimeout(() => this.rootStore.loadingStore.stopLoading(), 1000);
    }
  }

  @action logout() {
    this.profile = undefined;
  }
}
