import React from 'react';
import { StyleSheet, Pressable } from 'react-native';

export default function ThemedPressable({style, ...props}){

    return (
        <Pressable style={[styles.pressable, style]}
           {...props}
        />
    )
}

const styles = StyleSheet.create({
    pressable:{
        alignSelf: 'center',
    marginBottom: 40,
    borderRadius: 25,
    paddingVertical: 14,
    paddingHorizontal: 120,
    backgroundColor: '#7dcfdf'      
        
    }

})