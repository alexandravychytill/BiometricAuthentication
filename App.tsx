import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from './src/screens/login/Login';  
import { HomeScreen } from './src/screens/home/Home'; 
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

  const Stack = createStackNavigator();

  return (
      <NavigationContainer >
          <Stack.Navigator 
          initialRouteName="LoginScreen"
          screenOptions={{
            detachPreviousScreen: false, 
            animationEnabled: false,
          }}
        ><Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
          <Stack.Screen 
              name="HomeScreen" 
              component={HomeScreen}  
              options={{ headerShown: false }} 
            />
          </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

App.displayName = 'App';