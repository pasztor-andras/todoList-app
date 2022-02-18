import React, { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View, TouchableOpacity, Keyboard } from "react-native";
import Task from "./components/Task";

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const handleDeleteTask = index => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <View style={styles.items}>
          {taskItems.map((item, index) => {
            return (
              <Text key={index} onPress={() => handleDeleteTask(index)}>
                <Task text={item} />
              </Text>
            );
          })}
        </View>
      </View>
      <KeyboardAvoidingView behavior={Platform.OS === "android" ? "padding" : "height"} style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={"Write a task"} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(0, 150, 150)",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    bottom: 60,
    width: "100%",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    borderRadius: 60,
    borderColor: "rgb(220, 220, 220)",
    borderWidth: 1,
    backgroundColor: "rgb(255, 255, 255)",
  },
  addWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    backgroundColor: "rgb(255, 255, 255)",
    borderColor: "rgb(220, 220, 220)",
    borderWidth: 1,
    borderRadius: 60,
  },
  addText: {},
});
