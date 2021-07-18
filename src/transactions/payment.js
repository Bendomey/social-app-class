import React, { Fragment } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const PaymentScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F3F8FE" }}>
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Feather name="chevron-left" size={28} color="black" />
          </View>

          <View style={{}}>
            <Feather name="search" size={24} color="black" />
          </View>
        </View>

        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text
              style={{ fontWeight: "bold", fontSize: "25", color: "#3B4483" }}
            >
              Recent Transactions
            </Text>
          </View>
          <View>
            <Text>See all</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", marginTop: 25 }}>
          {["All", "Income", "Expense"].map((types, typesIdx) => (
            <Fragment key={typesIdx}>
              <View
                style={{
                  backgroundColor: types === "All" ? "#3B4483" : "#fff",
                  borderRadius: 30,
                  paddingHorizontal: 20,
                  paddingVertical: 5,
                  marginRight: 10,
                  alignItems: "center",
                  justifyContent: "center",
                  shadowColor: "#d6d6d6",
                  shadowOffset: {
                    width: 0,
                    height: 9,
                  },
                  shadowOpacity: 0.48,
                  shadowRadius: 11.95,

                  elevation: 18,
                  borderRadius: 30,
                }}
              >
                <Text style={{ color: types === "All" ? "#fff" : "#3B4483" }}>
                  {types}
                </Text>
              </View>
            </Fragment>
          ))}
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#3B4483" }}>
            Today
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "white",
            marginTop: 10,
            flexDirection: "row",
            alignItems: "center",
            padding: 20,
            shadowColor: "#d6d6d6",
            shadowOffset: {
              width: 0,
              height: 9,
            },
            shadowOpacity: 0.48,
            shadowRadius: 11.95,

            elevation: 18,
            borderRadius: 20,
          }}
        >
          <View
            style={{
              paddingHorizontal: 1,
              paddingVertical: 5,
              justifyContent: "center",
            }}
          >
            <Feather name={"mail"} size={35} color={"#3B4483"} />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flex: 1,
            }}
          >
            <View style={{ justifyContent: "center", marginLeft: 10 }}>
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>Payment</Text>
              <Text style={{ fontSize: 12, marginTop: 4 }}>
                Payment from Andrea
              </Text>
            </View>

            <View>
              <Text style={{ fontWeight: "bold" }}>$130.00</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CirclComponent />
        </View>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#3E4685",
            marginTop: 30,
            paddingVertical: 15,
            borderRadius: 50,
          }}
        >
          <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
            See Details
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const CirclComponent = () => {
  return (
    <Fragment>
      <View
        style={{
          height: width - 100,
          width: width - 100,
          borderRadius: (width - 100) / 2,
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 1,
          borderColor: "#e8e8e8",
          position: "relative",
        }}
      >
        <View style={{ position: "absolute", flex: 1, top: -30, zIndex: 10 }}>
          <Image
            source={require("../../assets/five.jpeg")}
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              borderWidth: 2,
              borderColor: "#fff",
            }}
          />
        </View>
        <View style={{ position: "absolute", flex: 1, left: -30, zIndex: 10 }}>
          <Image
            source={require("../../assets/five.jpeg")}
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              borderWidth: 2,
              borderColor: "#fff",
            }}
          />
        </View>
        <View style={{ position: "absolute", flex: 1, right: -30, zIndex: 10 }}>
          <Image
            source={require("../../assets/five.jpeg")}
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              borderWidth: 2,
              borderColor: "#fff",
            }}
          />
        </View>
        <View
          style={{
            position: "absolute",
            flex: 1,
            bottom: 0,
            right: 20,
            zIndex: 10,
          }}
        >
          <Image
            source={require("../../assets/five.jpeg")}
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              borderWidth: 2,
              borderColor: "#fff",
            }}
          />
        </View>
        <View
          style={{
            position: "absolute",
            flex: 1,
            bottom: 0,
            left: 20,
            zIndex: 10,
          }}
        >
          <Image
            source={require("../../assets/five.jpeg")}
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              borderWidth: 2,
              borderColor: "#fff",
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: "#cfe4fa",
            height: width - 160,
            width: width - 160,
            borderRadius: (width - 160) / 2,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 3,
            borderColor: "#fff",
          }}
        >
          <View
            style={{
              backgroundColor: "#F3F8FE",
              height: width - 210,
              width: width - 210,
              borderRadius: (width - 210) / 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "#fff",
                height: width - 250,
                width: width - 250,
                borderRadius: (width - 250) / 2,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 3,
                borderColor: "#3E4685",
              }}
            >
              <Image
                source={require("../../assets/five.jpeg")}
                style={{
                  width: width - 280,
                  height: width - 280,
                  borderRadius: width - 280,
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </Fragment>
  );
};

export default PaymentScreen;
