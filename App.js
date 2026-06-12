import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './screens/WelcomeScreen';
import LogInScreen from './screens/LogInScreen';


const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Welcome'>
        <stack.Screen name="Welcome" component={WelcomeScreen}/>
        <stack.Screen name='LogIn' component={LogInScreen}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}
