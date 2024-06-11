import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/Colors";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors.PRIMARY,
        tabBarStyle: {
          height: 72,
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >

      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={23}
                color={color}
              />
              <Text
                style={{
                  color: focused ? Colors.PRIMARY : color,
                  fontSize: 12,
                  marginTop: 4,
                  fontFamily: "default",
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="deals"
        options={{
          tabBarLabel: "Deals",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Ionicons
                name={focused ? "pricetags" : "pricetags-outline"}
                size={23}
                color={color}
              />
              <Text
                style={{
                  color: focused ? Colors.PRIMARY : color,
                  fontSize: 12,
                  marginTop: 4,
                  fontFamily: "default",
                }}
              >
                Deals
              </Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: 56,
                width: 56,
                borderRadius: 999,
                backgroundColor: Colors.PRIMARY,
                marginBottom: 56,
              }}
            >
              <Ionicons
                name={focused ? "search" : "search-outline"}
                size={23}
                color={"white"}
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Ionicons
                name={focused ? "people-circle" : "people-circle-outline"}
                size={23}
                color={color}
              />
              <Text
                style={{
                  color: focused ? Colors.PRIMARY : color,
                  fontSize: 12,
                  marginTop: 4,
                  fontFamily: "default",
                }}
              >
                Profile
              </Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="about"
        options={{
          tabBarLabel: "About",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Ionicons
                name={focused ? "information-circle" : "information-circle-outline"}
                size={23}
                color={color}
              />
              <Text
                style={{
                  color: focused ? Colors.PRIMARY : color,
                  fontSize: 12,
                  marginTop: 4,
                  fontFamily: "default",
                }}
              >
                About
              </Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
