import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Alert
} from 'react-native';
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics';
import { styles } from "./Login.styles"
import { LoginProps } from './Login.interface';


export const LoginScreen = ({navigation}: LoginProps) => {
  const rnBiometrics = new ReactNativeBiometrics()

  const enableBiometricAuth = () => {
    rnBiometrics.isSensorAvailable()
    .then((resultObject) => {
      const { available, biometryType } = resultObject;
      
      if (available && biometryType === BiometryTypes.TouchID) {
        Alert.alert('TouchID', 'Would you like to enable TouchID authentication for the next time?', [
          {
            text: 'Yes please',
            onPress: async () => {
              Alert.alert('Success!', 'TouchID authentication enabled successfully!');
            },
          },
          { text: 'Cancel', style: 'cancel' },
        ]);
      } else if (available && biometryType === BiometryTypes.FaceID) {
        Alert.alert('FaceID', 'Would you like to enable FaceID authentication for the next time?', [
          {
            text: 'Yes please',
            onPress: async () => {
              Alert.alert('Success!', 'FaceID authentication enabled successfully!');
            },
          },
          { text: 'Cancel', style: 'cancel' },
        ]);
      } else if (available && biometryType === BiometryTypes.Biometrics) {
        Alert.alert('Device Supported Biometrics', 'Biometrics authentication is supported.');
      } else {
        Alert.alert('Biometrics not supported', 'This device does not support biometric authentication.');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      Alert.alert('Error', 'An error occurred while checking biometrics availability.');
    });
  }


  const handleBiometricAuth = async () => {
    try {
      const rnBiometrics = new ReactNativeBiometrics();
      const { success, error } = await rnBiometrics.simplePrompt({ promptMessage: 'Authenticate to continue' });
  
      if (success) {
        Alert.alert( 'Success', 'Biometric authentication successful');
        navigation.navigate("HomeScreen")
        return true;
      } else {
        Alert.alert('Authentication failed', 'Biometric authentication failed');
        return false;
      }
    } catch (error) {
      console.error('[handleBiometricAuth] Error:', error);
      Alert.alert('Error', 'Biometric authentication failed');
      return false;
    }
  };

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#e7ecef' }}>
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>Login</Text>
            <Text style={styles.subtitle}>Sign in to your account</Text>
          </View>                            
            <View>
              <TouchableOpacity onPress={handleBiometricAuth} style={styles.btn}>
                  <Text style={styles.btnText}>Sign in</Text>    
              </TouchableOpacity>
                                                          
              <TouchableOpacity onPress={enableBiometricAuth} style={styles.btnE}>  
                  <Text style={styles.btnEText}>Enable Authentication availability</Text>
              </TouchableOpacity>

            </View>
        </View>
      </SafeAreaView>
    );
};

