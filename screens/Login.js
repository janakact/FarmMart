import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import "react-native-gesture-handler";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Login({ route, navigation }) {
  const [phone, setPhone] = useState({
    phone: "123",
  });
  const [password, setPassword] = useState({
    password: "abc",
  });

  const Login = () => {
    if (phone == "123" && password == "abc") {
      //navigation.navigate("Home");
      alert("pass");
    } else {
      alert("fuck");
    }
  };

  const words = {
    sin: {
      Welcome: "ආයුබෝවන්",
    },
    tam: {
      Welcome: "வணக்கம்",
    },
    eng: {
      Welcome: "Welcome",
    },
  };

  const { lang } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.logo}> {JSON.stringify(lang)}!</Text>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Phone Number..."
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setPhone(text)}
          //enablesReturnKeyAutomatically="true"
          //maxLength="10"
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          //enablesReturnKeyAutomatically="true"
          textContentType="password"
        />
      </View>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Sign Up")}>
        <Text style={styles.loginText}>Signup</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003f5c",
    alignItems: "center",
    justifyContent: "space-around",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40,
  },
  inputText: {
    height: 50,
    fontSize: 24,
    color: "white",
  },
  inputView: {
    width: "80%",
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  forgot: {
    color: "white",
    ///fontSize: 11,
  },
  loginBtn: {
    width: "75%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
});
