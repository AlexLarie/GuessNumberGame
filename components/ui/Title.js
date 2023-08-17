import { Text, StyleSheet } from "react-native"
import Colors from "../../constants/colors"

export default function Title({children}){
  return(
    <Text style={styles.title}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: Colors.primary500,
    textAlign: 'center',
    borderWidth: 2,
    padding: 12,
    borderColor: Colors.primary500,
    fontWeight: 'bold',
    fontFamily: 'open-sans-bold',
  }
})