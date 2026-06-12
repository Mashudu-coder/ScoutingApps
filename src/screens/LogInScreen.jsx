import {Text, Button, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { use } from 'react';

export default function LogInScreen(){

    const navigation = useNavigation();
    return (
        <View>
            <Text>Welcome</Text>
        </View>

    );
}