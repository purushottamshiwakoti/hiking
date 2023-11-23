import { View, Text } from "react-native";
import React from "react";
import Home from "./src/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/Login";
import Register from "./src/Register";
import useAUthStore from "./src/hooks/useAuthStore";
const Stack = createNativeStackNavigator();

const App = () => {
  const { id } = useAUthStore();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!id ? (
          <Stack.Group>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
          </Stack.Group>
        ) : (
          <Stack.Screen name="Home" component={Home} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
