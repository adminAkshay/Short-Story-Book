import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';


const Page1 = ({navigation}) => {
 
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 50, color: 'white', fontWeight: 'bold'}}>Hi</Text>
      <Text
        style={{
          fontSize: 20,
          color: 'white',
          padding: 30,
          textAlign: 'center',
        }}>
        Lorem ipsum dolor sit amet,  <Text style={{
          fontSize: 20,
          color: '#BB6BD9',
        }}>Pellentesque pharetra placerat elit non congue</Text> Pellentesque pharetra placerat elit non conguewho going to
      </Text>
      <Text style={{fontWeight: 'bold', color: 'white'}}>The Story Of US</Text>
      <Text style={{fontWeight: 'bold', color: 'white', fontSize: 20, paddingTop:80, paddingBottom: 30}}>Walk with me on this Journey</Text>
      <Button title='Shall We?' onPress={() => navigation.navigate('Page2')}  color='#BB6BD9'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  white: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Page1;