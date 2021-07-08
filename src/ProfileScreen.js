import React from "react";
import { View, Text, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#F4F8FD" }}>
      <View
        style={{
          backgroundColor: "#FAFBFC",
          padding: 20,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
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
        <View
          style={{
            flexDirection: "row",
            paddingTop: 40,
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

        <View style={{ paddingTop: 15 }}>
          <Text style={{ fontSize: "25", fontWeight: "bold" }}>My Profile</Text>
        </View>

        <View
          style={{
            paddingTop: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/two.jpeg")}
            style={{ width: 90, height: 90, borderRadius: "50" }}
          />

          <View style={{ marginTop: 20 }}>
            <Text style={{ fontWeight: "bold", fontSize: 25 }}>
              Anna Alvarado
            </Text>
          </View>

          <View style={{ paddingTop: 10 }}>
            <Text style={{ fontSize: 15, color: "#a5a9ad" }}>
              Guldhali School of Music & Drama
            </Text>
          </View>

          <View style={{ paddingTop: 5 }}>
            <Text style={{ fontSize: 15, color: "#a5a9ad" }}>London, UK</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
            marginBottom: 20,
            paddingHorizontal: 20,
          }}
        >
          <View>
            <Text style={{ fontSize: 20, color: "#a5a9ad" }}>Photos</Text>
            <View style={{ alignItems: "center", paddingTop: 10 }}>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>456</Text>
            </View>
          </View>
          <View>
            <Text style={{ fontSize: 20, color: "#a5a9ad" }}>Followers</Text>
            <View style={{ alignItems: "center", paddingTop: 10 }}>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>602</Text>
            </View>
          </View>
          <View>
            <Text style={{ fontSize: 20, color: "#a5a9ad" }}>Follows</Text>
            <View style={{ alignItems: "center", paddingTop: 10 }}>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>290</Text>
            </View>
          </View>
        </View>
      </View>

      <View>
        <View style={{ flexDirection: "row", marginTop: 30 }}>
          <View>
            <Image
              source={require("../assets/nine.jpeg")}
              style={{
                height: 300,
                width: 190,
                borderRadius: 10,
                marginLeft: 10,
              }}
            />
          </View>

          <View style={{ marginLeft: 10 }}>
            <Image
              source={require("../assets/eight.jpeg")}
              style={{ height: 150, width: 170, borderRadius: 20 }}
            />
            <Image
              source={require("../assets/seven.jpeg")}
              style={{
                height: 140,
                width: 170,
                marginTop: 10,
                borderRadius: 20,
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
