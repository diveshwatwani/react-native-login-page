import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StackNavigator from './navigation/StackNavigator';
 

const App: React.FC = () => {
  return (
  // <View style={styles.container}>
  //   <Text style={styles.text}>Hello, World!</Text>
  // </View>
    <>
      <StackNavigator/>
    </>
  );
};

 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

 

export default App;