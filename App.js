import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './src/screens/WelcomeScreen.jsx';
import AuthChoiceScreen from './src/screens/AuthChoiceScreen.jsx';
import LogInScreen from './src/screens/LoginScreen.jsx';



const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown: false}}>
        <stack.Screen name="Welcome" component={WelcomeScreen}/>
        <stack.Screen name='AuthChoice' component={AuthChoiceScreen}/>
       <stack.screen  name='Login' component={LogInScreen}/>    
       
         </stack.Navigator>
    </NavigationContainer>
  );
}
