import React from 'react';
import {Text, View, Pressable, ScrollView, StyleSheet, Platform, Image,} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ThemedTextInput from '../components/ThemedTextInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import appLogo from '../../assets/Images/Untitled design-Photoroom.png';
import {useState} from 'react';
import ThemeButton from '../components/ThemeButton';



export default function SignUp(){

     const navigation = useNavigation();
     const insets = useSafeAreaInsets();

     const [fullName, setFullName] = useState('');
     const [email, setEmail ] = useState('');

    return (

        <View style={{flex: 1}}>

            <View style={styles.pageHeading}>
                 <Image source={appLogo} style={styles.styleLogo} />
                 <Text style={styles.logoText}>RIME SCOUT</Text>
            </View>
           

          <KeyboardAwareScrollView
            style={{ flex: 1 }, styles.container}
            contentContainerStyle={{ 
                flexGrow: 1, 
                paddingTop: insets.top, 
                paddingBottom: insets.bottom + 16 }}
            enableOnAndroid={true}
            extraScrollHeight={Platform.OS === 'ios' ? 0 : 20}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
        >

            <Text style={{marginBottom: 5, left: 6, fontWeight: 'semibold'}}>Full Name</Text>
            <ThemedTextInput
              placeholder='Enter your full name'
              autoCapitalise = 'none'
              value={fullName}
              onChangeText={setFullName}
            />

           <Text style={{marginBottom: 5, left: 6, fontWeight: 'semibold'}}>Email</Text>
           <ThemedTextInput
              placeholder= 'yourEmail@example.com'
              autoCapitalise= 'none'
              value={email}
              onChangeText={setEmail}
           
           />

        
            <View style={styles.buttonsContainer}>
                <ThemeButton>
                    <Text style={styles.buttonLabel}>Create Account</Text>
                </ThemeButton>

                <Pressable style={styles.backButton} onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.backBtnLabel}>Back to Login</Text>
                    </Pressable>
            </View>
 
           </KeyboardAwareScrollView>
             </View>
    )
}

const styles= StyleSheet.create({
    styleLogo:{
     width: 180,
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'flex-start', 
    marginLeft: -50,          
    marginBottom: 20,
               
    },

    pageHeading: {
        flexDirection: 'row',
    },
     
    logoText:{
    alignSelf: 'flex-start', 
    marginLeft: -69,          
    marginTop: 50,
    fontWeight: 'bold',
    fontSize: 18         
    },
    container:{
        left: 14,
        
    },

  buttonLabel:{
    color: '#ffff',
    fontWeight: 'bold',
    fontSize: 15,
    alignContent: 'center'

  },

  buttonsContainer:{

    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 30,
  },

  backBtnLabel:{

    color: 'gray',
    fontSize: 16,
  }

})