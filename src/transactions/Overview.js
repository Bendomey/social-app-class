import React, { Fragment } from "react";
import { View, Text, Image, SafeAreaView } from "react-native";
import { Feather } from "@expo/vector-icons";

const data = [
  {
    title: "Sent",
    description: "Sending payment to client",
    icon: "arrow-up",
    amount: "$150",
  },
  {
    title: "Recieve",
    description: "Recieving payment from company",
    icon: "arrow-down",
    amount: "$250",
  },
  {
    title: "Loan",
    description: "Loan for the car",
    icon: "dollar-sign",
    amount: "$400",
  },
];

const OverviewScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F3F8FE" }}>
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        {/* top */}
        <View>
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 30,
              padding: 20,
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
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Feather name="arrow-left" size={24} color="black" />
              </View>
              <View>
                <Feather name="more-vertical" size={24} color="black" />
              </View>
            </View>

            <View
              style={{
                marginTop: 15,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../assets/five.jpeg")}
                style={{ width: 80, height: 80, borderRadius: 80 }}
              />
            </View>

            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Text
                style={{ fontSize: 25, fontWeight: "bold", color: "#3B4483" }}
              >
                Hira Riaz
              </Text>
              <Text style={{ fontSize: 10 }}>UX / UI Deigner</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                margin: 20,
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    color: "#3E4685",
                    fontWeight: "500",
                    textAlign: "center",
                  }}
                >
                  $8900
                </Text>
                <Text
                  style={{ paddingTop: 10, fontSize: 10, textAlign: "center" }}
                >
                  Income
                </Text>
              </View>
              <View
                style={{
                  borderLeftWidth: 1,
                  borderRightWidth: 1,
                  paddingHorizontal: 20,
                  borderColor: "#ccc",
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: "#3E4685",
                    fontWeight: "500",
                    textAlign: "center",
                  }}
                >
                  $8900
                </Text>
                <Text
                  style={{ paddingTop: 10, fontSize: 10, textAlign: "center" }}
                >
                  Expenses
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    color: "#3E4685",
                    fontWeight: "500",
                    textAlign: "center",
                  }}
                >
                  $8900
                </Text>
                <Text
                  style={{ paddingTop: 10, fontSize: 10, textAlign: "center" }}
                >
                  Loan
                </Text>
              </View>
            </View>
          </View>

          <View style={{ marginTop: 20 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View>
                  <Text
                    style={{
                      fontSize: 30,
                      fontWeight: "bold",
                      color: "#3E4685",
                    }}
                  >
                    Overview
                  </Text>
                </View>
                <View style={{ paddingLeft: 10 }}>
                  <Feather name="bell" size={20} color="black" />
                </View>
              </View>
              <View style={{}}>
                <Text style={{ color: "#3E4685" }}>Sept 13, 2020</Text>
              </View>
            </View>

            <View>
              {data?.map((transaction, transactionIdx) => (
                <Fragment key={transactionIdx}>
                  <View
                    style={{
                      backgroundColor: "white",
                      marginTop: 20,
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
                      borderRadius: 30,
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "#E6E7F9",
                        padding: 10,
                        justifyContent: "center",
                        borderRadius: 10,
                      }}
                    >
                      <Feather name={transaction?.icon} size={24} />
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "flex-end",
                        justifyContent: "space-between",
                        flex: 1,
                      }}
                    >
                      <View
                        style={{ justifyContent: "center", marginLeft: 10 }}
                      >
                        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                          {transaction?.title}
                        </Text>
                        <Text style={{ fontSize: 12, marginTop: 4 }}>
                          {transaction?.description}
                        </Text>
                      </View>

                      <View>
                        <Text style={{ fontWeight: "bold" }}>
                          {transaction?.amount}
                        </Text>
                      </View>
                    </View>
                  </View>
                </Fragment>
              ))}
            </View>
          </View>
          {/* middle */}
        </View>

        {/* bottom */}
        <View
          style={{
            flexDirection: "row",
            marginTop: 30,
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <View>
            <Feather name="home" size={24} color="black" />
          </View>

          <View>
            <Feather name="credit-card" size={24} color="black" />
          </View>

          <View
            style={{
              backgroundColor: "#3B4483",
              padding: 7,
              borderRadius: 10,
            }}
          >
            <Feather name="plus" size={24} color="#fff" />
          </View>

          <View>
            <Feather name="dollar-sign" size={24} color="black" />
          </View>

          <View>
            <Feather name="user" size={24} color="black" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OverviewScreen;
