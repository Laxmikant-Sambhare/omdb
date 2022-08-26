import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MovieListing from "./pages/MovieListing";
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MovieListing" component={MovieListing} />
        <Stack.Screen name="MovieDetails" component={MovieDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
