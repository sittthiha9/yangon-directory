import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import BusinessListCard from "../../components/business-list/BusinessListCard";

const BusinessListByCategory = () => {
  const navigation = useNavigation();
  const { category } = useLocalSearchParams();
  const [businessList, setBusinessList] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: category,
    });

    getBusinessList();
  }, []);

  const getBusinessList = async () => {
    const q = query(
      collection(db, "BusinessList"),
      where("category", "==", category)
    );
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      setBusinessList((prev) => [...prev, doc.data()]);
    });
  };

  return (
    <View>
      <FlatList
        data={businessList}
        renderItem={({ item }) => (
          <BusinessListCard key={item.id} item={item} />
        )}
      />
    </View>
  );
};

export default BusinessListByCategory;

const styles = StyleSheet.create({});
