import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function CalculatorApp() {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'pink',
      alignItems: 'center',
      justifyContent: 'center',
      
    },

    text: {
      marginBottom: 20,

    },

    input: {
      width:80, 
      borderColor:'purple', 
      borderWidth:2,
      color: 'purple',
      justifyContent: 'space-around', //how to get space between two textfields...?
      
    }, 
    operators: {
    marginTop: 20,
    flexDirection:'row', 
    justifyContent: 'space-around',  //How to get space between two buttons...?

    },
  });
  
  const [count, setCount] = useState('');
  const [count2, setCount2] = useState('');
  const [result, setResult] = useState('');

  const subtraction= () =>{
    setResult(Number(count) - Number(count2));
    setCount('')
    setCount2('')
  }

  const addition= () =>{
    setResult(Number(count) + Number(count2));
    setCount('')
    setCount2('')
  }


  
  return (
    
    <View style={styles.container}>
      <Text style={styles.text} color="purple" >Result: {result}  </Text>
      <TextInput style={styles.input}
        keyboardType= 'number-pad'
        onChangeText={text=> setCount(text)}
        value={count}/>
      <TextInput style={styles.input}
        keyboardType= 'number-pad'
        onChangeText={text=> setCount2(text)}
        value={count2}/>
      <View  style={styles.operators}>
        <Button  onPress={addition} title="+" color="purple" /> 
        <Button onPress={subtraction} title="-" color="purple"/> 

      </View>

    </View>
  );
}

