import React from 'react';
import {StyleSheet, Text, View, Button, Image, ScrollView} from 'react-native';
import Video from 'react-native-video';

//const { height } = Dimensions.get('window');
const Page4 = ({navigation}) => {
  onContentSizeChange = (contentWidth, contentHeight) => {
    // Save the content height in state
    this.setState({ screenHeight: contentHeight });
  };
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={{fontSize: 10, color: 'black', fontWeight: 'bold', textAlign: 'center'}}>24 FEB 2018</Text>
      <Text
        style={{
          fontSize: 20,
          color: 'black',
          padding: 30,
          textAlign:'center'
        }}>Proin ut tortor ipsum. Mauris sit amet condimentum risus</Text>
        <Text style={{fontWeight: 'bold', color: 'black', textAlign:'center', flex:1, padding: 10}}>Proin ut tortor ipsum. Mauris sit amet condimentum risus</Text>
      
     <Video repeat source={require('../src/img/screen4.mp4')} style={{height: 400, width: 540, alignItems: 'center', justifyContent:'center', alignSelf: 'center'}}/>

<Button title='vehicula lacus.'  color='#BB6BD9'></Button>
      
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

export default Page4;