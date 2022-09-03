import * as React from "react";
import { Text, View, StyleSheet, TextInput, Button, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import Constants from "expo-constants";

export default ({ navigation }) => {
  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const onSubmit = (data) => {
    if (data.username === "todouser" && data.password === "todopassword") {
      Alert.alert("Login Successful", "Opening Todo List ...", [
        {
          text: "Ok",
          onPress: () => {
            navigation.navigate("Todo List");
            console.log("Login successful");
          },
        },
      ]);
    } else {
      Alert.alert("Login Failed", "Wrong Username and Password", [
        {
          text: "Try Again",
          onPress: () => console.log("Login failed try again"),
        },
      ]);
    }
  };

  const onChange = (arg) => {
    return {
      value: arg.nativeEvent.text,
    };
  };

  console.log("errors", errors);

  return (
    <View style={styles.container} accessibilityLabel="tLoginPageView">
      <Text style={styles.label}>Username</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            accessibilityLabel="tUsernameTextInput"
          />
        )}
        name="username"
        rules={{ required: true }}
      />
      <Text style={styles.label}>Password</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            accessibilityLabel="tPasswordTextInput"
          />
        )}
        name="password"
        rules={{ required: true }}
      />

      <View style={styles.button}>
        <Button
          style={styles.buttonInner}
          title="Login"
          onPress={handleSubmit(onSubmit)}
          accessibilityLabel="tLoginButton"
        />
      </View>

      <View style={styles.button}>
        <Button
          style={styles.buttonInner}
          title="Reset"
          accessibilityLabel="tResetButton"
          onPress={() => {
            reset({
              username: "todouser",
              password: "todopassword",
            });
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: "black",
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: "#000",
    height: 40,
    backgroundColor: "#63a4ff",
    borderRadius: 4,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#1b6110",
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});
