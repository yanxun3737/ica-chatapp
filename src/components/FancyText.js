import React from 'react';
import {Text, StyleSheet} from 'react-native';

export default function FancyText({text, style}) {
  return <Text style={{...styles.text, ...style}}>{text}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 36,
    fontFamily: 'Pacifico-Regular',
    color: 'black',
  },
});
