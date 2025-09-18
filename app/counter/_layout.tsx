import { AntDesign } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { Pressable, Text } from "react-native";
import { theme } from "../../theme";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Counter",
          headerRight: () => {
            return (
              <Link href="/counter/history" asChild>
                <Pressable hitSlop={20}>
                  <AntDesign name="history" size={24} color={theme.colorGrey} />
                </Pressable>
              </Link>
            );
          },
        }}
      />
    </Stack>
  );
}
