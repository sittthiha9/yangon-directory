import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BusinessListCard = ({item}) => {
  return (
    <View>
      <Text>{item.name}</Text>
    </View>
  )
}

export default BusinessListCard

const styles = StyleSheet.create({})