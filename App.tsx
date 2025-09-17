import { View, StyleSheet } from "react-native";
import { ShoppingListItem } from "./components/ShoppingListItem";
import { useState } from "react";

const initialList = [
  {
    id: 1,
    name: "Coffee",
    completed: false,
  },
  {
    id: 2,
    name: "Sugar",
    completed: false,
  },
  {
    id: 3,
    name: "Cookie",
    completed: false,
  },
];

const App = () => {
  const [list, setList] = useState(initialList);

  const deleteItemById = (id: number) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  const toggleStatusById = (id: number) => {
    const newList = list.map((item) => {
      if (item.id === id) return { ...item, completed: !item.completed };
      return item;
    });
    setList(newList);
  };

  return (
    <View style={styles.container}>
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
    justifyContent: "center",
  },
});

export default App;
