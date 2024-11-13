import React, {useState} from "react";
import { Text, View, Button, StyleSheet } from "react-native";

export default function CounterApp() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 5);
  const decrement = () => setCount(count - 5);

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Counter: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Increase" onPress={increment} />
        <Button title="Decrease" onPress={decrement} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  counterText: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 200,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
});
