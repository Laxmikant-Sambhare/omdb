import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MovieListing from "./pages/MovieListing";
import { Provider } from "react-redux";
import { store } from "./App/Store";
store
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MovieListing" component={MovieListing} />
        <Stack.Screen name="MovieDetails" component={MovieDetails} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

export default App;
