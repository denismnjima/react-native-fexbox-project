import React from "react";
import { StatusBar } from "expo-status-bar"
import {View,Text,StyleSheet, Image} from 'react-native';
function App() {
  const Icon = require('./assets/favicon.png');
  return (
    <View>
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor="orange" />
      <Image source={Icon} style={{width: 100, height: 100}} />
      <Text style={styles.text}>Flex Boxes</Text>
    </View>

          {/* container for boxes */}
          <View style={styles.boxcontainer}>
          <View style={styles.box}> 
            <Text>One</Text>
          </View>
          <View style={styles.box}>
            <Text>Two</Text> 
          </View>
          <View style={styles.box}>
            <Text>Three</Text>
          </View>
          <View style={styles.box}>
            <Text>Four</Text> 
          </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: 20,
    backgroundColor: 'teal'
    },
  text:{
    fontSize: 20,
    color: 'white',
    marginVertical: 10,
    fontWeight: 'bold'
  },
  boxcontainer:{
    gap: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding:10

  },
  box:{ 
    backgroundColor: 'orange',
    padding: 20,
    width: '48%',

  }
});

export default App