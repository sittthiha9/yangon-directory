import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import { Colors } from "./../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  const { user } = useUser();
  return (
    <View style={styles.container}>
      <View style={styles.profileWrapper}>
        <Image source={{ uri: user?.imageUrl }} style={styles.profile} />
        <View>
          <Text style={styles.welcome}>Welcome, </Text>
          <Text style={styles.name}>{user?.fullName}</Text>
        </View>
      </View>
      <View style={styles.searchWrapper}>
        <Ionicons name="search" size={24} color={Colors.PRIMARY} />
        <TextInput placeholder="Search..." style={styles.input} />
      </View>
      <View style={styles.searchWrapper}>
        <Ionicons name="location-outline" size={24} color={Colors.PRIMARY} />
        <TextInput placeholder="Search Township..." style={styles.input} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 22,
    paddingTop: 50,
    backgroundColor: Colors.PRIMARY,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  profileWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  profile: {
    width: 45,
    height: 45,
    borderRadius: 99,
  },
  welcome: {
    fontSize: 14,
    fontFamily: "default",
    color: "white",
  },
  name: {
    fontSize: 19,
    fontFamily: "default-bold",
    color: "white",
  },
  searchWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    marginTop: 15,
    borderRadius: 8,
  },
  input: {
    fontSize: 16,
    fontFamily: "default",
    flex: 1,
  },
});
