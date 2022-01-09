import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default function MainChatSceen({navigation}) {
  return (
    <View style={styles.screen}>
      <Text>This is the main page</Text>
      <Button
        title="Go to userAuth"
        onPress={() => navigation.navigate('userAuth')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
