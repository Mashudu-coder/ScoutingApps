import React from 'react';
import {Text, View, Pressable, ScrollView, StyleSheet, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ThemedTextInput from '../components/ThemedTextInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export default function SignUp(){

     const navigation = useNavigation();
     const insets = useSafeAreaInsets();

    return (

    <KeyboardAwareScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{ flexGrow: 1 }}
            enableOnAndroid={true}
            extraScrollHeight={Platform.OS === 'ios' ? 0 : 20}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
        >
           <ScrollView
                    contentContainerStyle={[
                {
                    paddingTop: insets.top, 
                    paddingBottom: insets.bottom + 16 }]}>

                        <Image source={} />
                </ScrollView>
           
    </KeyboardAwareScrollView>

    )
}

const styles= StyleSheet.create({

})