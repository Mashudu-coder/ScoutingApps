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
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    fontSize: 16,
    marginBottom: 12,
    backgroundColor: 'rgba(255,255,255,0.85)',
    
}
}
)