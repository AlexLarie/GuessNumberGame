import { View, StyleSheet, FlatList, Text, Alert } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import Title from "../components/ui/Title"
import { useState, useEffect } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({pickedNumber, gameOverHandler}){
  const initialGuess = generateRandomBetween(1,100, pickedNumber)
  const [guessesList, setGuessesList] = useState([initialGuess])
  const [currentGuess, setCurrentGuess]= useState(initialGuess)
  useEffect(() => {
    if (currentGuess === pickedNumber) {
      gameOverHandler();
    }
  }, [currentGuess, pickedNumber, gameOverHandler]);
  useEffect(()=>{
    minBoundary = 1;
    maxBoundary = 100;
  },[])
  function nextGuessHandler(direction){
    if((direction === 'down' && currentGuess < pickedNumber) || (direction === 'up' && currentGuess > pickedNumber)) {
      Alert.alert("Lie", "Don't lie, pick right direction", [{text:'Sorry', style: 'cancel'}]);
      return
    }
    if(direction === 'down'){
      maxBoundary = currentGuess;
    } else if (direction === 'up'){ 
      minBoundary = currentGuess+1;
    } 
    const newGuess = generateRandomBetween(minBoundary,maxBoundary, currentGuess)
    setCurrentGuess(newGuess)
    setGuessesList(prev=>[newGuess, ...prev])
  }

  
  
  return (
    <View style={styles.main}>
      <Title>Opponent's guess</Title>
      <NumberContainer number={currentGuess} />
      <View style={styles.buttons}>
        <PrimaryButton
          onPressHendler={() => nextGuessHandler("down")}
          style="red"
        >
          <Ionicons size={24} name="md-remove" />
        </PrimaryButton>
        <PrimaryButton
          onPressHendler={() => nextGuessHandler("up")}
          style="#88FF00AD"
        >
          <Ionicons size={24} name="md-add" />
        </PrimaryButton>
      </View>
      <Text
        style={{
          color: "white",
          textAlign: "center",
          marginBottom: 10,
          fontFamily: "open-sans",
        }}
      >
        Prev. guesses:
      </Text>
      <View style={styles.listContainer}>
        <FlatList
          keyExtractor={(item) => item}
          style={styles.list}
          data={guessesList}
          renderItem={(elData) => {
            return <Text style={styles.guessedItem}>{elData.item}</Text>;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 20,
    flex: 1,
    justifyContent: 'start',
    
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  list: {
    flex: 1,
  },
  guessedItem: {
    backgroundColor: '#F5F2FFAD',
    color: 'black',
    width: '100%',
    textAlign: 'center',
    marginBottom: 10,
    padding: 5,
  },
  listContainer:{
    flex: 1,
  }
})