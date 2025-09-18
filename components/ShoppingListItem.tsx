import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { theme } from "../theme";
// import { AntDesign } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";

type Props = {
  name: string;
  id: string;
  completed: boolean;
  deleteItemById: Function;
  toggleStatusById: Function;
};

export function ShoppingListItem({
  name,
  id,
  completed,
  deleteItemById,
  toggleStatusById,
}: Props) {
  const handleDelete = () => {
    Alert.alert(
      `Are you sure you want to delete ${name}`,
      "It'l be deleted for sure",
      [
        {
          text: "Sure",
          onPress: () => deleteItemById(id),
          style: "destructive",
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ]
    );
  };

  const toggleStatus = () => {
    toggleStatusById(id);
  };

  return (
    <View
      style={[
        styles.itemContainer,
        completed ? styles.completedContainer : undefined,
      ]}
    >
      <Text
        style={[styles.itemText, completed ? styles.completedText : undefined]}
        onPress={toggleStatus}
      >
        {name}
      </Text>
      <TouchableOpacity
        onPress={handleDelete}
        activeOpacity={0.8}
        disabled={completed}
      >
        <AntDesign
          name="close-circle"
          size={24}
          color={completed ? theme.colorGrey : theme.colorRed}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  completedContainer: {
    backgroundColor: theme.colorLightGrey,
    borderBottomColor: theme.colorLightGrey,
  },
  completedButton: {
    backgroundColor: theme.colorGrey,
  },
  completedText: {
    textDecorationLine: "line-through",
    textDecorationColor: theme.colorGrey,
    color: theme.colorGrey,
  },
  itemContainer: {
    borderBottomColor: theme.colorCerulean,
    borderBottomWidth: 1,
    paddingHorizontal: 18,
    paddingVertical: 16,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemText: { fontSize: 18, fontWeight: "200" },
});
