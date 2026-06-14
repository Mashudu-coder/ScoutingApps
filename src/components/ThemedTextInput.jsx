import React from 'react';
import {TextInput, StyleSheet } from 'react-native';

export default function ThemedTextInput({style, error, ...props}){

    

  return (
  <TextInput
  style={[styles.textInput, style]}
            {...props}
  />
  )
}

const styles = StyleSheet.create({

    textInput: {
    width:'80%',
    paddingHorizontal: 15,
    paddingVertical: 11,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    fontSize: 16,
    marginBottom: 12,
    }
}
)