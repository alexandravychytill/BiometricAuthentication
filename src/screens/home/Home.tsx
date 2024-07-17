import React from 'react';
import { Text, View , SafeAreaView} from 'react-native';


export const HomeScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#e7ecef' }}>
            <View>
                <Text>Sign in worked!</Text>      
            </View>
        </SafeAreaView>
    )
}