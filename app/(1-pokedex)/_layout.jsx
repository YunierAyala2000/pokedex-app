import { Stack } from "expo-router";

export default function Tablayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="detalles" />
    </Stack>
  );
}
