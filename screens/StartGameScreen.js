import {
  TextInput,
  StyleSheet,
  View,
  Alert,
  Text,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import { useState } from "react";
export default function StartGameScreen({ gameStartHandler }) {
  const [inputText, setInputText] = useState("");
  const { height } = useWindowDimensions();
  function onConfirmHandler() {
    const chosenNumber = parseInt(inputText);
    // show alert
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      isNaN(chosenNumber) &&
        Alert.alert("Invalid Number", "Please enter a number", [
          { text: "Okay", style: "destructive", onPress: onResetHandler },
        ]);
      chosenNumber <= 0 &&
        Alert.alert("Invalid Number", "Please enter a number > 0", [
          { text: "Okay", style: "destructive", onPress: onResetHandler },
        ]);
      chosenNumber > 99 &&
        Alert.alert("Invalid Number", "Please enter a number < 99", [
          { text: "Okay", style: "destructive", onPress: onResetHandler },
        ]);
      return;
    }
    gameStartHandler(chosenNumber);
  }
  function onResetHandler() {
    setInputText("");
  }
  function onInputChangeHandler(text) {
    setInputText(text);
  }
  return (
    <ScrollView style={{
      flex: 1,
    }}>
    <KeyboardAvoidingView behavior="position" style={{
      flex: 1,
    }}>
      <View
        style={{
          justifyContent: "flex-start",
          flex: 1,
          marginTop: height < 400 ? 20 : 50,
        }}
      >
        <Title>Guess my Number</Title>
        <View style={styles.main}>
          <Text
            style={{
              color: Colors.primary500,
              marginBottom: 10,
              fontFamily: "open-sans-bold",
            }}
          >
            Type your number:
          </Text>
          <TextInput
            value={inputText}
            onChangeText={onInputChangeHandler}
            style={styles.input}
            maxLength={2}
            keyboardType="number-pad"
            autoCorrect={false}
          />
          <View style={styles.buttons}>
            <View style={styles.button}>
              <PrimaryButton onPressHendler={onResetHandler} style="#f7cb07">
                Reset
              </PrimaryButton>
            </View>
            <View style={styles.button}>
              <PrimaryButton
                onPressHendler={onConfirmHandler}
                style="#88FF00AD"
              >
                Confirm
              </PrimaryButton>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    flexDirection: "column",
    padding: 30,
    justifyContent: "center",
    marginHorizontal: 20,
    alignItems: "center",
    backgroundColor: "#DDA6FFA0",
    shadowColor: "#ffffff",
    borderRadius: 3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.4,
    marginTop: 30,
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  input: {
    padding: 8,
    borderRadius: 4,
    width: 60,
    borderBottomWidth: 3,
    borderColor: Colors.primary500,
    textAlign: "center",
    fontSize: 32,
    color: Colors.primary500,
    backgroundColor: "#FFFFFFAD",
    padding: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.7,
    shadowColor: "#ffffff",
    fontFamily: "open-sans-bold",
  },
  button: {
    flex: 1,
  },
});
