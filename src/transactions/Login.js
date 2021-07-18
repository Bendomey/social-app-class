import React from "react";
import { Feather } from "@expo/vector-icons";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";

const LoginScreen = () => {
  return (
    <View
      style={{ flex: 1, backgroundColor: "#F3F8FE", paddingHorizontal: 20 }}
    >
      <View
        style={{ flex: 0.7, alignItems: "center", justifyContent: "center" }}
      >
        <Image
          source={require("../../assets/adaptive-icon.png")}
          style={{ height: 150, width: 150 }}
        />
      </View>
      <View
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            height: 90,
            borderRadius: 30,
            paddingHorizontal: 20,
            paddingVertical: 17,

            shadowColor: "#d6d6d6",
            shadowOffset: {
              width: 0,
              height: 9,
            },
            shadowOpacity: 0.48,
            shadowRadius: 11.95,

            elevation: 18,
          }}
        >
          <Text style={{ fontSize: 15, color: "#969595" }}>Email address</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <View>
              <Feather name="mail" size={20} color="#878686" />
            </View>
            <View style={{ flex: 1, marginLeft: 10 }}>
              <TextInput
                placeholder="Username@gmail.com"
                value={"Username@gmail.com"}
                style={{
                  fontSize: 17,
                }}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            marginTop: 20,
            backgroundColor: "white",
            height: 90,
            borderRadius: 30,
            paddingHorizontal: 20,
            paddingVertical: 17,

            shadowColor: "#d6d6d6",
            shadowOffset: {
              width: 0,
              height: 9,
            },
            shadowOpacity: 0.48,
            shadowRadius: 11.95,

            elevation: 18,
          }}
        >
          <Text style={{ fontSize: 15, color: "#969595" }}>Password</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <View>
              <Feather name="lock" size={20} color="#878686" />
            </View>
            <View style={{ flex: 1, marginLeft: 10 }}>
              <TextInput
                secureTextEntry
                placeholder="* * * * *"
                value={"Hello world"}
                style={{
                  fontSize: 17,
                }}
              />
            </View>
            <View>
              <Feather name="eye" size={20} color="#878686" />
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#3E4685",
            marginTop: 30,
            height: 60,
            borderRadius: 50,
          }}
        >
          <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
            Login
          </Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            marginTop: 30,
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ fontWeight: "500", color: "#74777C" }}>Signup</Text>
          </View>
          <View>
            <Text style={{ fontWeight: "500", color: "#74777C" }}>
              Forgot Password?
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
