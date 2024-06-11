import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "./../../configs/FirebaseConfig";
import { Colors } from "./../../constants/Colors";

const Slider = () => {
  const [sliderList, setSliderList] = useState([]);
  useEffect(() => {
    GetSliderList();
  }, []);

  const GetSliderList = async () => {
    setSliderList([])
    const q = query(collection(db, "Slider"));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      setSliderList((prev) => [...prev, doc.data()]);
    });
  };

  return (
    <View>
      <Text style={styles.title}># Special for you</Text>

      <FlatList
        data={sliderList}
        horizontal={true}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        style={{ paddingLeft: 20, marginRight: 10 }}
        renderItem={({ item, index }) => (
          <Image source={{ uri: item.imageUrl }} style={styles.image} />
        )}
      />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  title: {
    fontFamily: "default-bold",
    fontSize: 20,
    paddingLeft: 20,
    paddingTop: 20,
    marginBottom: 10,
    color: Colors.TEXT,
  },
  image: {
    width: 300,
    height: 150,
    borderRadius: 15,
    marginRight: 15,
  },
});
