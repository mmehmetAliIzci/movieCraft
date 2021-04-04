import { action, makeObservable, observable } from "mobx";
import { RootStore } from "./RootStore";

export class LoadingStore {
  private rootStore: RootStore;
  @observable loading = false;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this);
  }

  @action stopLoading() {
    this.loading = false;
  }

  @action startLoading() {
    this.loading = true;
  }
}
