import { RootStore } from "../src/stores/RootStore";

jest.mock("react-native-keychain", () => {
  const token = "abcdefghijklmnopqrstuvwxyz0123456789";
  const credentials = {
    username: "session",
    token: token,
  };
  return {
    setGenericPassword: jest.fn(
      (username, password) => new Promise((resolve, reject) => resolve(true)),
    ),
    getGenericPassword: jest.fn(
      () => new Promise((resolve, reject) => resolve(credentials)),
    ),
    resetGenericPassword: jest.fn(
      () => new Promise((resolve, reject) => resolve(true)),
    ),
  };
});

describe("LoadingStore", () => {
  describe("When startLoading called", () => {
    it("should set loading to true", async () => {
      const rootStore = new RootStore();
      expect(rootStore.loadingStore.loading).toBe(false);
      await rootStore.loadingStore.startLoading();
      expect(rootStore.loadingStore.loading).toBe(true);
    });
  });

  describe("When stopLoading called", () => {
    it("should set loading to false", async () => {
      const rootStore = new RootStore();
      expect(rootStore.loadingStore.loading).toBe(false);
      await rootStore.loadingStore.startLoading();
      expect(rootStore.loadingStore.loading).toBe(true);
      await rootStore.loadingStore.stopLoading();
      expect(rootStore.loadingStore.loading).toBe(false);
    });
  });
});

describe("MovieStore", () => {
  describe("When fetching ", () => {
    it("should populate movies", async () => {
      const dummyAPIResponse = {
        Search: [
          {
            Title: "Taarzan: The Wonder Car",
            Year: "2004",
            imdbID: "tt0435437",
            Type: "movie",
            Poster:
              "https://m.media-amazon.com/images/M/MV5BMmMxNDU0MTAtNTA5Zi00NmYwLTg3Y2ItYzI5Zjc4M2ViOTI2XkEyXkFqcGdeQXVyMzc0NzU5MTc@._V1_SX300.jpg",
          },
        ],
        totalResults: "763",
        Response: "True",
      };

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-expect-error
      fetch.mockResponseOnce(JSON.stringify(dummyAPIResponse));
      const rootStore = new RootStore();

      await rootStore.movieStore.fetchNextFilms(1);
      expect(rootStore.movieStore.movies).toStrictEqual(
        dummyAPIResponse.Search,
      );
    });
  });
});
