import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const ConverScreen = () => {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View
        style={{
          flexDirection: "row",
          paddingTop: 50,
          justifyContent: "space-between",
        }}
      >
        <View style={{}}>
          <Feather name="arrow-left" size={24} color="black" />
        </View>
        <View style={{}}>
          <Feather name="more-vertical" size={24} />
        </View>
      </View>

      <View style={{ paddingTop: 20 }}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Conversation</Text>
      </View>

      <View>
        <View
          style={{
            backgroundColor: "#FFFFFF",
            marginTop: 10,
            marginBottom: 10,
            height: 60,
            borderRadius: 10,
            padding: 20,
            shadowColor: "#c7c7c7",
            shadowOffset: {
              width: 0,
              height: 9,
            },
            shadowOpacity: 0.48,
            shadowRadius: 11.95,

            elevation: 18,
          }}
        >
          <TextInput placeholder="Search friend" />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {[1, 2, 3, 4, 5, 6, 7].map((item, key) => (
          <View
            key={key}
            style={{
              flexDirection: "row",
              marginVertical: 15,
              borderRadius: 5,
            }}
          >
            <View>
              <Image
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 30,
                }}
                source={require("./../assets/seven.jpeg")}
              />
            </View>
            <View
              style={{
                justifyContent: "space-evenly",
                marginLeft: 15,
              }}
            >
              <Text>Beverly Jones</Text>
              <Text style={{ color: "rgba(0,0,0,0.5)" }}>
                You know you are in love when
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity
        style={{
          position: "absolute",
          right: 30,
          bottom: 30,
          backgroundColor: "#f556d2",
          height: 65,
          width: 65,
          borderRadius: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Feather name={"edit-3"} size={22} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default ConverScreen;
