import React from 'react';
import {StyleSheet, Pressable, View } from 'react-native';
import {useState } from 'react';


export default function ThemedRoleCard({style,onFocus, onBlur, ...props}){

    const [isFocused, setIsFocused] = useState(false)

    return(

        <View style={styles.roleCardContainer}>

        <Pressable style={[styles.styleButton, style, isFocused && styles.focusedButton]}
        onFocus = {(e) => {
            setIsFocused(true);
            if(onFocus) onFocus(e);
        }}

        onBlur = {(e) => {
            setIsFocused(false);
            if(onBlur) onBlur(e);
        }}

        {...props}

        >

          {props.children}
          </Pressable>
        </View>
    )
    
}

const styles = StyleSheet.create({

        focusedButton: {
            borderColor: '#7dcfdf',
            borderWidth: 5
        },

        styleButton:{
        width: '50%',      
        aspectRatio: 1,  
        padding: 10,


        }, 

        roleCardContainer:
        {
        flex: 1,
         flexDirection: 'row',
         flexWrap: 'wrap', 
         padding: 10,
         backgroundColor: '#f5f5f5',
        }
})