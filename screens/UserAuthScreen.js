import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import auth from '@react-native-firebase/auth';

export default function UserAuthScreen({navigation}) {
  const [user, setUser] = useState('');
  return (
    <View style={styles.screen}>
      <Text>This is the user auth screen</Text>
      <Button
        title="Go to main chat"
        onPress={() =>
          navigation.navigate('mainChat', {screen: 'mainChatScreen'})
        }
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
