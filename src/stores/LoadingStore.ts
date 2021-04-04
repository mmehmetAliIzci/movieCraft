import { action, makeObservable, observable } from "mobx";
import { RootStore } from "./RootStore";

export class LoadingStore {
  private rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this);
  }

  @observable loading = false;

  @action stopLoading() {
    this.loading = false;
  }

  @action startLoading() {
    this.loading = true;
  }
}
