import React from 'react';
import {Text, View, Pressable, ScrollView, StyleSheet, Platform, Image, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ThemedTextInput from '../components/ThemedTextInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import appLogo from '../../assets/Images/Untitled design-Photoroom.png';
import {useState} from 'react';
import ThemeButton from '../components/ThemeButton';
import ThemedRoleCard from '../components/ThemedRoleCards';



export default function SignUp(){

     const navigation = useNavigation();
     const insets = useSafeAreaInsets();

     const [fullName, setFullName] = useState('');
     const [email, setEmail ] = useState('');
     const [contactNo, setContactNo ] = useState('');
     const [password, setPassword] = useState('');
     const [confirmPassword, setConfirmPassword] = useState('');
     const [isSecure, setIsSecure] = useState(true);
     const [selectedRole, setSelectedRole ] = useState('');
      

    return (

        <View style={{flex: 1}}>

            <View style={styles.pageHeading}>
                 <Image source={appLogo} style={styles.styleLogo} />
                 <Text style={styles.logoText}>RIME SCOUT</Text>
            </View>
           

          <KeyboardAwareScrollView
            style={[{ flex: 1 }, styles.container]}
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
              autoCapitalize = 'none'
              value={fullName}
              onChangeText={setFullName}
             

              
            />

           <Text style={{marginBottom: 5, left: 6, fontWeight: 'semibold'}}>Email</Text>
           <ThemedTextInput
              placeholder= 'your.email@example.com'
              autoCapitalize= 'none'
              value={email}
              onChangeText={setEmail}
           
           />
            <Text style={{margin:5, left: 6, fontWeight: 'semibold'}}>Phone Number</Text>
           <ThemedTextInput 
             placeholder='+27 XX XXX XXXX'
             value={contactNo}
             onChangeText={setContactNo}
             keyboardType= 'phone-pad'
           />
             <Text style={{margin:5, left: 6, fontWeight: 'semibold'}}>Password*</Text>
           <ThemedTextInput 
             placeholder='Create a password (min 6 character)'
             value={password}
             onChangeText={setPassword}
             secureTextEntry={isSecure}
             autoCapitalize= 'none'
             textContentType= 'password'
             autoCorrect= {false}
             /> 

              <Text style={{margin:5, left: 6, fontWeight: 'semibold'}}>Confirm Password*</Text>
           <ThemedTextInput 
             placeholder='confirm your password'
             value={confirmPassword}
             onChangeText={setConfirmPassword}
             secureTextEntry={isSecure}
             autoCapitalize= 'none'
             textContentType= 'password'
             autoCorrect= {false}
             /> 

              <Text>Select Role</Text>
              <View style={styles.roleCardsContainer}>

                <ThemedRoleCard onPress={() => setSelectedRole('Player')}  >
                  <Text>Player</Text>
                  
                </ThemedRoleCard>

              </View>
        
            <View style={styles.buttonsContainer}>
                <ThemeButton onPress={() =>Alert.alert('Account Created')}
                  >
                    <Text style={styles.buttonLabel}>Create Account</Text>
                </ThemeButton>

                <Pressable style={styles.backButton} onPress={() => navigation.navigate('Login')}
                  hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}>
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
    alignContent: 'center',
  

  },

  buttonsContainer:{

    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 30,
    paddingLeft: 4
    
  },

  backBtnLabel:{

    color: 'gray',
    fontSize: 16,
  },

})