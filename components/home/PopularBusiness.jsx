import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "./../../constants/Colors";
import { collection, getDocs, limit, query } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import PopularBusinessCard from "./PopularBusinessCard";

const PopularBusiness = () => {
  const [businessList, setBusinessList] = useState([]);

  useEffect(() => {
    getBusinessList();
  }, []);

  const getBusinessList = async () => {
    const q = query(collection(db, "BusinessList"), limit(5));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      setBusinessList((prev) => [...prev, doc.data()]);
    });
  };

  return (
    <View style={{ marginBottom: 30 }}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Popular Business</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={businessList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <PopularBusinessCard index={index} item={item} />
        )}
      />
    </View>
  );
};

export default PopularBusiness;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontFamily: "default-bold",
    color: Colors.TEXT,
  },
  titleWrapper: {
    padding: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  viewAll: {
    color: Colors.PRIMARY,
    fontFamily: "default",
  },
});
