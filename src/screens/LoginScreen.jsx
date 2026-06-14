import React, {useState} from 'react-native';
import {Text, View, StyleSheet, Image, TextInput, KeyboardAvoidingView, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import { Alert } from 'react-native/types_generated/index';


export default function LogInScreen() {

    const insets = useSafeAreaInsets();
    const navigation = useNavigation();
     
    const [message, setMessage] = onState('');
        return(

        <KeyboardAvoidingView>
            <LinearGradient    
             colors={["#b2eaf5", "#d6f5f0", "#ffffff", "#e8fafa"]}
                locations={[0, 0.3, 0.65, 1]}
                start={{ x: 0.1, y: 0 }}
                end={{ x: 0.9, y: 1 }}
                style={{ flex: 1 }} 
            >
                <View style={{ position: "absolute", bottom: 0}}>
                        <LinearGradient colors={["rgba(0,196,222,0.28)", "transparent"]}
                        style={{flex:1}}
                        />
                 </View>

                <View style={{ position: "absolute", top: 0 }}>
                    <LinearGradient colors={["transparent", "rgba(0,220,190,0.20)"]}
                     style={{flex:1}}
                     />
                </View>

                <View style={styles.container, {flex:1, paddingTop: insets.top, paddingBottom: insets.bottom, }} >

                    <image source={'../assets/Images/download-removebg-preview.png'} style={styles.appLogo}/>
               
                <Text>Welcome Back</Text>
                <Text>Log in to continue building your future</Text>

                <View style={styles.formContainer}>
                     <TextInput />
                </View>
                 
                <Pressable styles={styles.loginBtn} onPress={() => setMessage('LogIn Success')}>
                    <Text style={styles.LoginButtonText}>Login</Text>
                </Pressable>
                    {message ? <Text style={styles.successText}>{message}</Text> : null}
                    

                </View>


                
            </LinearGradient>

        </KeyboardAvoidingView>
    );
}


const styles = StyleSheet.create({


})
