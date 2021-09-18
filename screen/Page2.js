import React from 'react';
import {StyleSheet, Text, View, Button, Image, ScrollView} from 'react-native';
import Video from 'react-native-video';

//const { height } = Dimensions.get('window');
const Page2 = ({navigation}) => {
  onContentSizeChange = (contentWidth, contentHeight) => {
    // Save the content height in state
    this.setState({ screenHeight: contentHeight });
  };
  return (
    <ScrollView>
    <View style={styles.container}>
          
      <Image source={require('../src/img/Vector1.png')} />
      <Text style={{fontSize: 10, color: 'black', fontWeight: 'bold', textAlign: 'center'}}>14 FEB 2018</Text>
      <Text
        style={{
          fontSize: 20,
          color: 'black',
          textAlign:'center'
        }}>It all Started from here.
        Sed a lacinia massa, eu venenatis orci. Sed ullamcorper eu sapien eu finibus. Nullam eget convallis urna, vitae vehicula eros. Proin orci lacus, laoreet non cursus quis, congue et nisi. Pellentesque a elit ac magna pulvinar cursus sed sed nisi
      </Text>
     <Video source={require('../src/img/Hands.mp4')} style={{height: 300, width: 300, alignItems: 'center', paddingBottom:100}}/>
     
      <Text style={{fontWeight: 'bold', color: 'black', textAlign: 'center', paddingBottom: -50}}>Cras gravida ipsum eget tortor rhoncus, non iaculis risus venenatis. Nam eu accumsan odio.</Text>
      <Image source={require('../src/img/Vector2.png')} style={{paddingBottom: - 10}}/>
      <Button title='Then?' onPress={() => navigation.navigate('Page3')}  color='#BB6BD9'></Button>
      
    </View>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  white: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Page2;