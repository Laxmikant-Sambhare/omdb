import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";

const MovieDetails = (props) => {
  const [movie, setMovie] = useState({});
  const { Title } = props.route.params.item;
  useEffect(() => {
    fetch(`http://www.omdbapi.com/?t='${Title}'&apikey=4512232e`)
      .then((data) => data.json())
      .then((data2) => setMovie(data2));
  });

  return (
    <View>
      <View style={styles.headercontainer}>
        <Image
          style={styles.poster}
          source={{
            uri: `${movie.Poster}`,
          }}
        />
        <Text style={styles.Title}>
          {movie.Title}({movie.Year})
        </Text>
      </View>
      <View style={styles.details}>
        <Text>Released: {movie.Released}</Text>
        <Text>Runtime: {movie.Runtime}</Text>
        <Text>Genre: {movie.Genre}</Text>
        <Text>Director: {movie.Director}</Text>
        <Text>Actors: {movie.Actors}</Text>
        <Text>Plot: {movie.Plot}</Text>
        <Text>Language: {movie.Language}</Text>
        <Text>Country: {movie.Country}</Text>
        <Text>Awards: {movie.Awards}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headercontainer: {
    textAlign: "center",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  details: {
    margin: 10,
  },
  poster: {
    width: "300px",
    height: "469px",
  },
  Title: {
    fontSize: "2vh",
    fontWeight: "700",
  },
});

export default MovieDetails;
