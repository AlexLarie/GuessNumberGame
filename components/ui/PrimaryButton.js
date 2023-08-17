import { StyleSheet, View, Pressable, Text } from "react-native"

export default function PrimaryButton({style, children, onPressHendler}){
  return (
    <View >
      <Pressable style={({pressed})=>pressed?{ ...styles.button, backgroundColor: style , ...styles.pressedButton}:{ ...styles.button, backgroundColor: style }} onPress={onPressHendler}>
        <Text style={{ color: "white" , textAlign: "center", fontFamily:'open-sans'}}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 10,
    borderRadius: 4,
  },
  pressedButton:{
    opacity: 0.75,
  }
})