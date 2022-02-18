import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = props => {
  return (
    <View style={style.item}>
      <View style={style.itemLeft}>
        <TouchableOpacity style={style.square}></TouchableOpacity>
        <Text style={style.itemText}>{props.text}</Text>
      </View>
      <View style={style.circular}></View>
    </View>
  );
};

const style = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    marginBottom: 20,
    backgroundColor: "rgb(255, 255, 255)",
    borderRadius: 10,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "rgba(50, 205, 255, 0.4)",
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "rgba(50, 205, 255, 0.4)",
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Task;
