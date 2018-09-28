import { View, Text, StyleSheet } from "react-native";
import React, { Component } from "react";

const styles = StyleSheet.create({
  badge: {
    padding: 5,
    minWidth: 10,
    height: 10,
    borderRadius: 20,
    backgroundColor: "#FF0000",
    justifyContent: "center",
    color: "#ffffff",
    fontWeight: "bold",
    alignItems: "center",
    textAlign: "center",
    textAlignVertical: "center",
    includeFontPadding: false
  },
  badgeContainer: {
    flex: -1,
    flexDirection: "row",
    paddingLeft:'2%'
  }
});

const Badge = props => {
  return (
    <View style={styles.badgeContainer}>
      <Text style={[styles.badge,{backgroundColor:props.color}]}>{props.value}</Text>
    </View>
  );
};

export { Badge };
