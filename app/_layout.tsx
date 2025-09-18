import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Shopping List",
          tabBarIcon: ({ color, size }) => {
            return (
              <AntDesign name="unordered-list" size={size} color={color} />
            );
          },
        }}
      />
      <Tabs.Screen
        name="counter"
        options={{
          title: "Counter",
          tabBarIcon: ({ color, size }) => {
            return <AntDesign name="clock-circle" size={24} color="black" />;
          },
        }}
      />
      <Tabs.Screen
        name="idea"
        options={{
          title: "Ideas",
          tabBarIcon: ({ color, size }) => {
            return <AntDesign name="bulb" size={size} color={color} />;
          },
        }}
      />
    </Tabs>
  );
}
