import { StyleSheet, TextInput, FlatList, Text, View } from "react-native";
import { ShoppingListItem } from "../components/ShoppingListItem";
import { useState } from "react";
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
    <FlatList
      data={list}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      stickyHeaderIndices={[0]}
      ListEmptyComponent={() => (
        <View style={styles.emptyContainer}>
          <Text>Your List is empty</Text>
        </View>
      )}
      ListHeaderComponent={
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
      }
      renderItem={({ item }) => {
        return (
          <ShoppingListItem
            name={item.name}
            completed={item.completed}
            id={item.id}
            toggleStatusById={toggleStatusById}
            deleteItemById={deleteItemById}
          />
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 12,
    // justifyContent: "center",
  },
  contentContainer: { paddingBottom: 24 },
  textInput: {
    borderColor: theme.colorLightGrey,
    borderWidth: 2,
    padding: 12,
    marginHorizontal: 12,
    marginBottom: 12,
    fontSize: 18,
    borderRadius: 50,
    backgroundColor: theme.colorWhite,
  },
  emptyContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 18,
  },
});

export default App;
