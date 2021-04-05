import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { observer } from "mobx-react-lite";
import { RootStoreContext } from "../stores/RootStore";
import { Movie } from "../stores/MovieStore";
import { font } from "../theme/styleVariables";
import { Card } from "../components/Card";

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
            <Card>
              <View style={styles.itemWrapper}>
                <Image
                  style={styles.moviePoster}
                  source={{ uri: item.Poster }}
                  resizeMode={"cover"}
                />
                <View style={styles.movieInfoContainer}>
                  <Text style={font.subTitle}>{item.Title}</Text>
                  <View style={styles.movieSubInfoContainer}>
                    <Text style={font.paragraph}>{item.Year}</Text>
                    <Text style={font.paragraph}>{item.Type}</Text>
                  </View>
                </View>
              </View>
            </Card>
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

const styles = StyleSheet.create({
  itemWrapper: {
    flex: 1,
    backgroundColor: "transparent",
    overflow: "hidden",
    borderRadius: 10,
  },
  moviePoster: {
    height: Dimensions.get("window").height / 3,
    width: "100%",
  },
  movieInfoContainer: {
    marginVertical: 5,
    marginHorizontal: 10,
    flex: 1,
    justifyContent: "space-around",
  },
  movieSubInfoContainer: {
    flex: 1,
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
