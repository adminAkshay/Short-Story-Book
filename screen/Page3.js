import React from 'react';
import {StyleSheet, Text, View, Button, Image, ScrollView} from 'react-native';
import Video from 'react-native-video';

//const { height } = Dimensions.get('window');
const Page3 = ({navigation}) => {
  onContentSizeChange = (contentWidth, contentHeight) => {
    // Save the content height in state
    this.setState({ screenHeight: contentHeight });
  };
  return (
    <ScrollView>
    <View style={styles.container}>
          
      <Image source={require('../src/img/Vector1.png')} />
      <Text style={{fontSize: 10, color: 'black', fontWeight: 'bold', textAlign: 'center'}}>22 FEB 2018</Text>
      <Text
        style={{
          fontSize: 20,
          color: 'black',
          padding: 30,
          textAlign:'center'
        }}>Duis gravida eleifend tortor eu congue.</Text>
     <Video repeat source={require('../src/img/screen3.mp4')} style={{height: 350, width: 540, alignItems: 'center', justifyContent:'center', alignSelf: 'center'}}/>
     
      <Text style={{fontWeight: 'bold', color: 'black', textAlign:'center', flex:1, padding: 10}}>Fusce volutpat enim vel urna sodales, gravida interdum risus tempus.</Text>
      

      <Button title='Mag kai jhal?' onPress={() => navigation.navigate('Page4')}  color='#BB6BD9'></Button>
      
    </View>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  white: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Page3;