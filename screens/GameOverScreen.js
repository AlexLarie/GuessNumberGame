import { Text , View, StyleSheet} from "react-native"
import Title from "../components/ui/Title"
import PrimaryButton from "../components/ui/PrimaryButton"

export default function GameOverScreen({resetGameHandler, pickedNumber}){
  return (
    <View style={StyleSheet.main}>
      <Title>Game Over</Title>
      <Text style={{textAlign: 'center', margin: 10}}>Your number is</Text>
      <Text style={styles.guessedItem}>{pickedNumber}</Text>
      <PrimaryButton onPressHendler={resetGameHandler} style='green'>Play Again</PrimaryButton>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    
  },
  guessedItem: {
    backgroundColor: '#F5F2FFAD',
    color: 'black',
    width: '100%',
    textAlign: 'center',
    marginBottom: 10,
    padding: 8,
    fontSize: 30,
  }
})