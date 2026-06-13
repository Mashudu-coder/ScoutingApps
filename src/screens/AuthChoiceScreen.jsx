import {Text, View, StyleSheet, Image, Pressable, ScrollView, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import { Feather } from '@expo/vector-icons';
import { Shadow } from 'react-native-shadow-2';


export default function AuthChoiceScreen(){

    const insets = useSafeAreaInsets();
    const navigation = useNavigation();

    const features = [
          {icon: 'users', text: 'Connect with scouts'},
          {icons: 'zap', text: 'Showcase Your Skills'}
    ],


    return (
       <scrollView style={{flex:1, backgroundColor: '#ffff'}}>
            <View style={styles.imageContainer}>
                <Image source={require('assets/download.jpg')} style={styles.image}/>
                <LinearGradient colors={['transparent', '#ffffff']} style={styles.imageFade}/>

                <View style={[styles.logoRow, {top: insets.top + 10}]}>
                    <View>
                        <Feather name="search" size={18} color='#fff'/>
                    </View>
                    <Text styel={styles.logoText}>PRIME SCOUT</Text>
                </View>
            </View>

            <View style={styles.content}>
  <Text style={styles.title}>Your Talent</Text>

  <MaskedView maskElement={<Text style={styles.titleAccent}>Deserves Visibility</Text>}>
    <LinearGradient colors={["#7dcfdf", "#80e8cc"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
      <Text style={[styles.titleAccent, { opacity: 0 }]}>Deserves Visibility</Text>
    </LinearGradient>
  </MaskedView>

  {features.map((f, i) => (
    <View key={i} style={styles.featureCard}>
      <View style={styles.featureIconBox}>
        <Feather name={f.icon} size={15} color="#00a0b8" />
      </View>
      <Text style={styles.featureText}>{f.text}</Text>
    </View>
  ))}
</View>


<View style={styles.buttonsContainer}>
  <Shadow distance={10} startColor="rgba(125,207,223,0.35)" offset={[0, 6]} style={{ width: '100%' }}>
    <Pressable style={styles.createButton} onPress={() => navigation.navigate('SignUp')}>
      <LinearGradient colors={["#7dcfdf", "#80e8cc"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.createButtonGradient}>
        <Text style={styles.createButtonText}>Create Account</Text>
      </LinearGradient>
    </Pressable>
  </Shadow>

  <Pressable style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
    <Text style={styles.loginButtonText}>Log In</Text>
  </Pressable>

  <Text style={styles.terms}>By continuing you agree to our Terms & Privacy Policy</Text>
</View>

       </scrollView>
    );
}



const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: Dimensions.get('window').height * 0.5,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  imageFade: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 96,
  },
  logoRow: {
    position: 'absolute',
    left: 24,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logoIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#7dcfdf',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
    letterSpacing: 1,
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#04101c',
  },
  titleAccent: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  featureCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,180,216,0.05)',
    borderWidth: 1,
    borderColor: 'rgba(0,180,216,0.12)',
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
    gap: 10,
  },
  featureIconBox: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: 'rgba(125,207,223,0.25)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  featureText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#1a2e35',
  },
  buttonsContainer: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 30,
    alignItems: 'center',
  },
  createButton: {
    width: '100%',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 12,
  },
  createButtonGradient: {
    paddingVertical: 17,
    alignItems: 'center',
    borderRadius: 16,
  },
  createButtonText: {
    color: '#04101c',
    fontSize: 16,
    fontWeight: '600',
  },
  loginButton: {
    width: '100%',
    paddingVertical: 17,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: 'rgba(0,160,184,0.3)',
    alignItems: 'center',
    marginBottom: 16,
  },
  loginButtonText: {
    color: '#00a0b8',
    fontSize: 16,
    fontWeight: '600',
  },
  terms: {
    fontSize: 11,
    color: 'rgba(4,16,28,0.3)',
    textAlign: 'center',
  },
});
