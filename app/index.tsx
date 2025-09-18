import { View, StyleSheet, TextInput } from "react-native";
import { ShoppingListItem } from "../components/ShoppingListItem";
import { useState } from "react";
import { Link } from "expo-router";
import { theme } from "../theme";

const initialList = [
  {
    id: "Coffee",
    name: "Coffee",
    completed: false,
  },
  {
    id: "Sugar",
    name: "Sugar",
    completed: false,
  },
  {
    id: "Cookie",
    name: "Cookie",
    completed: false,
  },
];

const App = () => {
  const [taskInput, setTaskInput] = useState("");
  const [list, setList] = useState(initialList);

  const deleteItemById = (id: string) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  const addTask = (taskDescription: string) => {
    const task = {
      name: taskDescription,
      id: taskDescription,
      completed: false,
    };
    setList([...list, task]);
  };

  const toggleStatusById = (id: string) => {
    const newList = list.map((item) => {
      if (item.id === id) return { ...item, completed: !item.completed };
      return item;
    });
    setList(newList);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="E.g. Coffee"
        style={styles.textInput}
        value={taskInput}
        onChangeText={setTaskInput}
        returnKeyType="done"
        onSubmitEditing={(e) => {
          addTask(e.nativeEvent.text);
          setTaskInput("");
        }}
      />
      {list.map((item) => (
        <ShoppingListItem
          name={item.name}
          completed={item.completed}
          id={item.id}
          key={item.id}
          toggleStatusById={toggleStatusById}
          deleteItemById={deleteItemById}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 12,
    // justifyContent: "center",
  },
  textInput: {
    borderColor: theme.colorLightGrey,
    borderWidth: 2,
    padding: 12,
    marginHorizontal: 12,
    marginBottom: 12,
    fontSize: 18,
    borderRadius: 50,
  },
});

export default App;
