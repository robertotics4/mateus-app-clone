import React from 'react';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const customFonts = {
    'Bariol-Light': require('../../../assets/fonts/Bariol-Light.ttf'),
    'Bariol-Regular': require('../../../assets/fonts/Bariol-Regular.ttf'),
    'Bariol-Bold': require('../../../assets/fonts/Bariol-Bold.ttf'),
};

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    containerImg: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    imgLogo: {
        width: 263,
        height: 46,
    },
    containerButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingBottom: 30,
        paddingHorizontal: 15,
    },
    buttonRegister: {
        width: '48%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        borderWidth: 2,
        borderColor: '#C64B4C',
        borderRadius: 50,
        borderTopRightRadius: 8,
    },
    buttonEnter: {
        width: '48%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        backgroundColor: '#C64B4C',
        borderRadius: 50,
        borderTopLeftRadius: 8,
    },
    buttonText: {
        color: '#C64B4C',
        fontSize: 14,
        fontWeight: '700',
    },
    buttonTextInverse: {
        color: '#fff',
    }
});