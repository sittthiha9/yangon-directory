import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "./../../constants/Colors";

const PopularBusinessCard = ({ index, item }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item?.imageUrl }} style={styles.cardImage} />
      <View style={styles.cardWrapper}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.address}>{item.address}</Text>
      </View>

      <View style={styles.ratingContainer}>
        <View style={styles.ratingWrapper}>
          <Image
            source={require("./../../assets/images/star.png")}
            style={styles.starLogo}
          />
          <Text style={styles.rating}>4.3</Text>
        </View>
        <Text style={styles.category}>{item.category}</Text>
      </View>
    </View>
  );
};

export default PopularBusinessCard;

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 15,
  },
  cardWrapper: {
    marginTop: 7,
    gap: 3,
  },
  cardImage: {
    width: 200,
    height: 130,
    borderRadius: 15,
  },
  name: {
    fontFamily: "default",
    fontSize: 17,
  },
  address: {
    fontFamily: "default",
    fontSize: 13,
    color: Colors.GRAY,
  },
  ratingContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ratingWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  starLogo: {
    width: 14,
    height: 14,
  },
  rating: {
    fontFamily: "default",
  },
  category: {
    fontFamily: "default",
    backgroundColor: Colors.PRIMARY,
    color: "white",
    padding: 3,
    paddingHorizontal: 5,
    fontSize: 10,
    borderRadius: 5,
  },
});
