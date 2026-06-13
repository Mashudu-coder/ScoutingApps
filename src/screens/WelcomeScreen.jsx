import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { useSafeAreaInsets}  from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';






export default function WelcomeScreen() {

    
    const insets =useSafeAreaInsets();
    const navigation = useNavigation();
    return (

        <LinearGradient
                colors={["#b2eaf5", "#d6f5f0", "#ffffff", "#e8fafa"]}
                locations={[0, 0.3, 0.65, 1]}
                start={{ x: 0.1, y: 0 }}
                end={{ x: 0.9, y: 1 }}
                style={{ flex: 1 }} >
                {/* Layer 2 — top glow */}
            <View style={{ position: "absolute", top: 0}}>
                <LinearGradient colors={["rgba(0,196,222,0.28)", "transparent"]}
                 style={{flex:1}}
                />
            </View>

                {/* Layer 3 — bottom glow */}
            <View style={{ position: "absolute", bottom: 0 }}>
                <LinearGradient colors={["transparent", "rgba(0,220,190,0.20)"]}
                 style={{flex:1}}
                />
            </View>

                {/* Content layer — respects safe area */}
            <View style={styles.container,{ flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom }}>
    
                <View style={styles.textGroup}>
                    <Text style={styles.appname}>PRIME SCOUT</Text>
                    <Text style={styles.slogan}>Discover Talent.Build Futures.</Text>
                </View>
                 
            
                <Pressable style={styles.startbutton} 
                onPress={() => navigation.navigate('LogIn')}>
                        <Text style={styles.buttonText}>Get Started</Text>
                    
                    </Pressable>
            
                
                
            </View>
        </LinearGradient>
       ); 
    }



const styles = StyleSheet.create({

    appname: {

            fontWeight: 'bold',
            fontSize: 45,
            color: '#0d2f40',
            fontFamily: 'sans-serif-condensed'
        },

        textGroup: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },

        slogan: {
            fontSize: 15,
            fontFamily: 'Inter'
        },

        startbutton: {
            alignSelf: 'center',
            marginBottom: 40,
            borderRadius: 20,
            paddingVertical: 14,
            paddingHorizontal: 50,
            backgroundColor: '#7dcfdf'
        },

        buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
        
        fontFamily: 'monospace' ,

        },


    });

       