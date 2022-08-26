import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Text,
} from "react-native";
import React, { useState } from "react";

const Home = ({ navigation }) => {
  let [response, setResponse] = useState("")
  let [inputValue, setInputValue] = useState("");
  const Search = () => {
    if (inputValue !== "") {
      fetch(`http://www.omdbapi.com/?s='${inputValue}'&apikey=4512232e`)
        .then((data) => data.json())
        .then((data2) => {
          setResponse(data2.Response)
          setInputValue("");
          let totalResults = data2.totalResults
          if(data2.Response === "True"){
          navigation.navigate("MovieListing",{inputValue,totalResults})
          }
        });
    }
  };
  const SearchInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <View style={styles.maincontainer}>
      <View style={styles.search}>
        <TextInput
          placeholder="Search Movies"
          onChange={SearchInput}
          value={inputValue}
          style={styles.input}
        />
        <Button onPress={Search} title="Search" style={styles.button} />
      </View>
      {
        response === "False" && <Text style={styles.noresults}>
          No result
        </Text>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    marginHorizontal: 20,
  },
  noresults:{
    textAlign:"center",
    color: "red"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  button: {
    margin: 12,
  },
});
export default Home;
