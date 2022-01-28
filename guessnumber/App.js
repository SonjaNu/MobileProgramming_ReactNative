import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

export default function GuessNumberApp() {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#b8a9c9',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    button: {
      flex: 1,
      borderColor:'purple',
      paddingTop: 20,
      width: 150
    },
  });
// const on tilamuuttuja, let tavallinen
// vain välttämättömät tilamuuttujiksi
  const [correctNumber, setCorrectNumber] = React.useState(Math.floor(Math.random() * 100) + 1);
  const [guessedNumber, setGuessedNumber] = React.useState('');
  const [guess, setGuess] = React.useState(1);
  const [responseText, setResponseText] = React.useState('Guess a number between 1-100');

  const guessSomeNumber = () => {
    setGuess (guess + 1);

    if(guessedNumber < correctNumber) {
      setResponseText('Your guess ' + guessedNumber + ' is too low')
    } 
    
    if(guessedNumber > correctNumber) {
      setResponseText('Your guess ' + guessedNumber + ' is too high')
    } 

    if(guessedNumber == correctNumber) {
      setResponseText('Your guess ' + guessedNumber + ' is correct')
      Alert.alert('You guessed the number in ' + guess + ' guesses')
    }

  }

  return (
  <View style={styles.container}>

    <View style={styles.input}>

      <Text style={{fontSize: 18, color: 'purple', paddingBottom: 10}}>{responseText}</Text>
    
      <TextInput style={{width:50,  borderWidth:2, borderColor:'purple',}}
      onChangeText={guessNumber => setGuessedNumber(guessNumber)}
      value={guessedNumber}
      keyboardType='numeric'/>

    </View>

    <View style={styles.button}>

      <Button color="purple" onPress={guessSomeNumber} title="MAKE GUESS"/>

    </View>
  </View>
  );
}

