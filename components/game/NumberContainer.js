import { View, Text, StyleSheet, Dimensions, Platform } from "react-native"
import Colors from "../../constants/colors"
export default function NumberContainer({number}){
  return (
    <View style={styles.container}>
      <Text style={styles.number}>
        {number}
      </Text>
    </View>
  )
}
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary500,
    marginTop: Platform.select({ios: 20, android: 25}),
    borderRadius: Platform.OS === 'ios' ? 25 : 10,
    padding: deviceWidth < 450 ? 12 : 20,
  },
  number: {
    fontSize: 36,
    color: Colors.secondary500,
    textAlign: 'center',
    fontFamily:'open-sans-bold',
  }
})