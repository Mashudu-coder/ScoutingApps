import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, KeyboardAvoidingView, Pressable, Platform, ScrollView, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import pageImage from '../../assets/Images/Adobe Express - file.png';
import ThemedTextInput from '../components/ThemedTextInput';
import Checkbox, { CheckBox } from 'expo-checkbox';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const userRoles = ['Player', 'Coach', 'Parent', 'Scout']

export default function LogInScreen() {

    const insets = useSafeAreaInsets();
    const navigation = useNavigation();
     
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    
    const [password, setPassword] = useState('');
        return(

        <KeyboardAwareScrollView  
                tyle={{ flex: 1 }}
                contentContainerStyle={{ flexGrow: 1 }}
                enableOnAndroid={true}
                extraScrollHeight={Platform.OS === 'ios' ? 0 : 20}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
        >
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


                 <ScrollView
                        contentContainerStyle={[
                                styles.container,
                            { 
                                paddingTop: insets.top, 
                                paddingBottom: insets.bottom + 16 
                            }
                        ]} >

                <Image source={pageImage} style={styles.screenImage}/>
               
                

                <Text style={styles.heading}>Welcome Back</Text>
                <Text style={styles.caption}>Log in to continue building your future</Text>

                        
                <View style={styles.formContainer}>
                        <Text style={{fontWeight: 'medium', marginBottom: 2, left: 5 }}>Email address*</Text>
                        <ThemedTextInput style={{ marginBottom: 20}}
                            placeholder='your.email@example.com'
                            keyboardType='email-address'
                            onChangeText= {setEmail}
                            value={email}
                            onSubmitEditing={() => password.current ?.focus()}
                        />

                        <Text style={{fontWeight: 'medium', marginBottom: 2, left: 6}}>Password*</Text>
                        <ThemedTextInput style={{ marginBottom: 20}}
                            placeholder='Enter your password'
                            onChangeText= {setPassword}
                            value={password}
                            secureTextEntry
                        />

                </View>
                 
                <View style={styles.recoveryTools}>
                           
                        <Checkbox 
                        value={rememberMe}
                        onValueChange={setRememberMe}
                        style={styles.checkBoxContainer}
                        hitSlop={{top:30, bottom: 30, left: 30, right: 30}}
                        />
                        <Text style={styles.toolLabel}>Remember me</Text>
                        <Pressable style={styles.resetPasswordButton}
                        >
                            <Text style={styles.resetButtonLabel}>Forgot Password?</Text>
                        </Pressable>
                </View>

                <Pressable style={styles.loginBtn} onPress={() => Alert.alert('Logged in succesfully')}>
                    <Text style={styles.LoginButtonText}>Login</Text>
                </Pressable>
    
                
                <View style={styles.registerContainer}>

                    <Text style={styles.registerLabel}>Don't have an account? </Text>
                    <Pressable onPress={() => navigation.navigate('SignUp')}
                        hitSlop={{top:20, bottom: 20, left: 20, right: 20}}>
                        <Text style={styles.SignUpLink}>Sign Up</Text>
                    </Pressable>
                </View>

            </ScrollView>
            </LinearGradient>

        </KeyboardAwareScrollView>
    );
}


const styles = StyleSheet.create({
screenImage:{
        
    width: 250,
    height: 180,
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 20,
},

heading:{

   fontSize: 30,
   color: 'black',
   marginBottom: 8,
   fontWeight: 'bold',
   textAlign: 'center',
   alignItems: 'stretch',


 
},

caption: {
    fontSize: 14,
    color: '#4B5563',
    marginBottom: 24,
    textAlign: 'center',
    alignSelf: 'stretch',

},

loginBtn:{
    alignSelf: 'center',
    marginBottom: 40,
    borderRadius: 25,
    paddingVertical: 14,
    paddingHorizontal: 120,
    backgroundColor: '#7dcfdf'

},

LoginButtonText:{

    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'monospace' ,

},

formContainer: {
    left: 15
},

recoveryTools:{
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center'
    
},

checkBoxContainer:
{
    marginRight: 5,
    marginLeft: 20
},

toolLabel:{
    color: 'gray',
    fontSize: 14
},

resetPasswordButton:{
    marginLeft: 60,         
},

resetButtonLabel:{
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    fontSize: 13,


},
registerContainer:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 2,
},

SignUpLink: {
    color: '#00BCD4',
    fontWeight: 'semibold',
    fontSize: 16
},

registerLabel:{
    color: '#757575',
    fontSize: 15,
},


});
