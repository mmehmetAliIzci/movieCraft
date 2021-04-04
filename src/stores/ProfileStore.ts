import { action, makeObservable, observable, runInAction } from "mobx";
import { RootStore } from "./RootStore";
import { fetchCurrentProfile, login } from "../services/ProfileService";
import * as Keychain from "react-native-keychain";

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

  @action async fetchProfile() {
    try {
      this.rootStore.loadingStore.startLoading();
      const profile = await fetchCurrentProfile();
      this.setProfile(profile);
    } catch (e) {
      console.warn(e.error);
    } finally {
      // Syntetic timeout to imitate fetch delay
      setTimeout(() => this.rootStore.loadingStore.stopLoading(), 1000);
    }
  }

  @action async login(username: string, password: string) {
    try {
      this.rootStore.loadingStore.startLoading();

      const profile = await login(username, password);
      this.setProfile({ username, name: profile.name });
      await Keychain.setGenericPassword(username, profile.token);
    } catch (e) {
      console.warn(e.error);
    } finally {
      // Syntetic timeout to imitate fetch delay
      setTimeout(() => this.rootStore.loadingStore.stopLoading(), 1000);
    }
  }

  @action async logout() {
    await Keychain.resetGenericPassword();
    runInAction(() => {
      this.profile = undefined;
    });
  }
}
