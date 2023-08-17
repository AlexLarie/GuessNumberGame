import { StyleSheet, View, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import Colors from './constants/colors';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';


export default function App() {
  const [pickedNumber , setPickedNumber] = useState(null)
  const [isGameOver, setIsGameOver] = useState(false)
  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })
  if(!fontsLoaded){
    return <AppLoading/>
  }

  function gameStartHandler (number){
    setPickedNumber(number)
  }
  function resetGameHandler ( ){
    setPickedNumber(null)
    setIsGameOver(false)
  }
  function gameOverHandler(){
    setIsGameOver(true)
  }
  return (
    <LinearGradient colors={[Colors.secondary500, Colors.primary500]} style={styles.container}>
      <ImageBackground
        source={require("./assets/background.png")}
        resizeMode="cover"
        style={styles.container}
        imageStyle={{ opacity: 0.5 }}
      >
        <SafeAreaView style={styles.container}>
          {!isGameOver ? (<View style={styles.container}>{pickedNumber ? (
            <GameScreen gameOverHandler={gameOverHandler} resetGameHandler={resetGameHandler}  pickedNumber={pickedNumber} />
          ) : (
            <StartGameScreen gameStartHandler={gameStartHandler} />
          )}</View>) : <GameOverScreen pickedNumber={pickedNumber} resetGameHandler={resetGameHandler}/>}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  mainBlock : {
    flex: 1,
  }
});