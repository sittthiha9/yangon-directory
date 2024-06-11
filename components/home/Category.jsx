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
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import { useRouter } from "expo-router";

const Category = () => {
  const [categoryList, setCategoryList] = useState([]);
  const router = useRouter();
  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = async () => {
    setCategoryList([]);
    const q = query(collection(db, "Category"));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      setCategoryList((prev) => [...prev, doc.data()]);
    });
  };

  return (
    <View>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Category</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={categoryList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ marginLeft: 20 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => router.push("/business-list/" + item.name)}
          >
            <View style={styles.categoryWrapper}>
              <Image source={{ uri: item.imageUrl }} style={styles.icon} />
            </View>
            <Text style={styles.label}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {},
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
  categoryWrapper: {
    padding: 15,
    backgroundColor: "#fdffee",
    borderRadius: 99,
    marginRight: 20,
  },
  icon: {
    width: 40,
    height: 40,
  },
  label: {
    fontSize: 12,
    width: 70,
    fontFamily: "default",
    textAlign: "center",
    marginTop: 5,
  },
});
