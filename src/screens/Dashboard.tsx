import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Dimensions,
  FlatList,
  ImageBackground,
  Text,
  View,
} from "react-native";
import { observer } from "mobx-react-lite";
import { RootStoreContext } from "../stores/RootStore";
import { Movie } from "../stores/MovieStore";

export const Dashboard = observer(() => {
  const rootStore = useContext(RootStoreContext);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    async function fetchMovies() {
      await rootStore.movieStore.fetchNextFilms(page);
    }
    fetchMovies();
  }, [page]);

  return (
    <>
      <FlatList<Movie>
        numColumns={2}
        data={rootStore.movieStore.movies}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => `${item.imdbID}/${index}`}
        onEndReached={async () => {
          setPage(page + 1);
        }}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                height: Dimensions.get("window").height / 3,
                flexDirection: "row",
                flex: 1,
              }}>
              <ImageBackground
                style={{ flex: 1 }}
                source={{ uri: item.Poster }}
                resizeMode={"cover"}>
                <Text>{item.Title}</Text>
                <Text>{item.Type}</Text>
              </ImageBackground>
            </View>
          );
        }}
      />
      <Button
        title={"Logout"}
        onPress={() => rootStore.profileStore.logout()}
      />
    </>
  );
});
