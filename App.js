import { View, Text, StyleSheet } from "react-native";

import tw from "./tailwind";
import { colors } from "./constants/Colors";

const App = () => {
  return (
    <View
      style={[
        tw`flex-1 justify-center items-center`,
        { backgroundColor: colors.light },
      ]}
    >
      <Text>Hello World</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default App;
