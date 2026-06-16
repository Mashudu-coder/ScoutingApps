import React from 'react';
import {StyleSheet, Pressable, View } from 'react';
import {useState } from 'react-native';


export default function ThemedRoleCard(style,onFocus, onBlur, ...props){

    const [isFocused, setIsFocused] = useState(false)

    return(

        <View styles={styles.roleCardContainer}>

        <Pressable style={[styles.styleButton, style, isFocused && styles.focusedButton]}
        onFocus = {(e) => {
            setIsFocused(true);
            if(onFocus) onFocus(e);
        }}

        onBlur = {(e) => {
            setIsFocused(true);
            if(onFocus) onFocus(e);
        }}

        {...props}

        />

        </View>

    )
    
}

const styles = StyleSheet.create({

        focusedButton: {
            borderColor: '#7dcfdf',
            borderWidth: 5
        },

        styleButton:{

        }, 

        roleCardContainer:
        {
            flex: 1,
         flexDirection: 'row',
    flexWrap: 'wrap', // Forces items to wrap into a grid
    padding: 10,
    backgroundColor: '#f5f5f5',
        }
})