import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { theme } from "./theme";

const App = () => {
  const handleDelete = () => {
    Alert.alert("Are you sure you want to delete this", "It'l be deleted for sure", [{
      text: "Sure",
      onPress: () => console.log('Deleted!'),
      style: "destructive",
    }, {
      text: "Cancel",
      style: "cancel",
    }]);
  }

  return (
    <View style={styles.container}>
      
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}> Coffee Latte</Text>
        <TouchableOpacity onPress={handleDelete} activeOpacity={0.8} style={styles.button}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  itemContainer: {
    borderBottomWidth: 1,
    margin: 16,
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemText: { fontSize: 18, fontWeight: '200'},
  button: {
    backgroundColor: theme.colorBlack,
    padding: 8,
    borderRadius: 6, 
  },
  buttonText: {
    color: theme.colorWhite,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  }
});

export default App;
