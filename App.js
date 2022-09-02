import React from "react";
import LoginPage from "./src/components/Login/LoginPage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TodoView from "./src/components/TodoView/TodoView";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Todo List" component={TodoView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
