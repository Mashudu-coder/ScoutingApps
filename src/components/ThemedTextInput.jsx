import React from 'react';
import {useState} from 'react'
import {TextInput, StyleSheet } from 'react-native';

export default function ThemedTextInput({style, onFocus, onBlur, ...props}){

   const [isFocused, setIsFocused ] = useState(false);

  return (
  <TextInput
  style={[styles.textInput, style, isFocused && styles.focusedText]}
  onFocus ={(e) =>{
    setIsFocused(true);
    if(onFocus) onFocus(e);
  }}

  onBlur = {(e) => {
    setIsFocused(false);
    if (onBlur) onBlur(e);
  }}
            {...props}
  />
  )
}

const styles = StyleSheet.create({

  textInput: {

    width:'82%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#777c837a',
    fontSize: 16,
    marginBottom: 12,
    },

    focusedText:{
      borderColor: '#7dcfdf',
      borderWidth: 2
    }
  }
)