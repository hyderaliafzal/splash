import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';

export default function App() {
  useEffect(() => {
    RNBootSplash.hide({duration: 450});
  }, []);

  return (
    <View style={styles.container}>
      <Text>Welcome to Splash Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
