import * as React from "react";
import { Text, View, StyleSheet, TextInput, Button, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import Constants from "expo-constants";

export default ({navigation}) => {
  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  const onChange = (arg) => {
    return {
      value: arg.nativeEvent.text,
    };
  };

  console.log("errors", errors);

  return (
    <View style={styles.container}>
        <Text style={styles.headerText}>Login Page</Text>
      <Text style={styles.label}>Username</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
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
          />
        )}
        name="password"
        rules={{ required: true }}
      />

      <View style={styles.button}>
        <Button
          style={styles.buttonInner}
          title="Login"
          // onPress={handleSubmit(onSubmit)}
          onPress={() => navigation.navigate('TodoList')}
        />
      </View>

      <View style={styles.button}>
        <Button
          style={styles.buttonInner}
          title="Reset"
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
    color:"#000",
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
    borderWidth:1,
    borderColor: "#1b6110",
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#30756d',
    alignSelf:"center"
  },
});
