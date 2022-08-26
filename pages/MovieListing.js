import { View, Text, FlatList, Pressable, StyleSheet, Image, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

const MovieListing = (props) => {
  let [pageno, setPageno] = useState(1)
  let [movies,setMovies] = useState([])
  let navigation = useNavigation();
  const inputValue = props.route.params.inputValue;
  const totalResults = props.route.params.totalResults;
  const totalPages = Math.round((totalResults/10)+1);
  console.log(totalResults/10)
  console.log(totalPages)
  const fetchAPI = () => (
    fetch(`http://www.omdbapi.com/?s='${inputValue}'&page=${pageno}&apikey=4512232e`)
    .then((data) => data.json())
    .then((json) => {
        setMovies([...movies, ...json?.Search])
    })
  )
  const moreMovies =() => {

    setPageno(pageno+1)
  }

  useEffect(() => {
    fetchAPI();
  },[pageno])
  return (
    <View>
      <FlatList
        data={movies}
        renderItem={({ item, i }) => {
          return (
            <Pressable
              key={i}
              onPress={() => {
                navigation.navigate("MovieDetails", { item });
              }}
              style={styles.movieCard}
            >
              <Image
                style={styles.poster}
                source={{
                  uri: `${item.Poster}`,
                }}
              />
              <Text style={styles.Title}>{item.Title}</Text>
            </Pressable>
          );
        }}
      />
      {totalPages !== pageno?<Button onPress={moreMovies} title="More Movies" style={styles.button}  color= "green"/>:null}
    </View>
  );
};

const styles = StyleSheet.create({
    poster: {
        width: "300px",
        height: "469px",
      },
      movieCard: {
        textAlign: "center",
        borderRadius: "20px",
        backgroundColor: "#2196F3",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      Title: {
        fontSize: "2vh",
        fontWeight: "700",
      },
      button: {
        margin: 12,
      },
})

export default MovieListing;
