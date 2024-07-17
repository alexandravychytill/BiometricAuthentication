
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      padding: 24,
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
      justifyContent: 'center',
      alignItems: 'center', 
    },
    title: {
      fontFamily: 'Futura Bk BT',
      fontSize: 42,
      fontWeight: 'bold',
      color: '#014f86',
      marginBottom: 6,
      textAlign: 'center',
    },
    subtitle: {
      fontFamily: 'Fira Sans',
      fontSize: 20,
      fontWeight: 'bold',
      color: '#468faf',
      textAlign: 'center',
      paddingBottom: 15
    },
    btn: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      paddingVertical: 8,
      paddingHorizontal: 16,
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      shadowColor: '#2667ff',
      backgroundColor: '#2667ff',
    },
    btnText: {
      fontSize: 17,
      lineHeight: 24,
      fontWeight: '600',
      textAlign: 'center',
      color: '#e7ecef'
    },
    btnE: {
      marginTop: 5,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 8,
      color: '#2667ff'
    },

    btnEText: {
      fontSize: 15,
      lineHeight: 24,
      fontWeight: '600',
      textAlign: 'center',
      color: '#2667ff'
    },
  });