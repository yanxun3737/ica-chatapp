import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet, Button} from 'react-native';
import FancyText from '../components/FancyText';
import FancyInputField from '../components/FancyInputField';
import auth from '@react-native-firebase/auth';

export default function UserAuthScreen({navigation}) {
  const [user, setUser] = useState('');
  const [initializing, setInitializing] = useState(true);
  const [username, setUsername] = useState('');

  return (
    <SafeAreaView style={styles.screen}>
      <FancyText text="Welcome to ICA!" />
      <FancyInputField text="Username" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: '90%',
  },
});
