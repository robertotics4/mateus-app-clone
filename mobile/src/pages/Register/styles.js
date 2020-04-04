import React from 'react';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        paddingTop: Constants.statusBarHeight + 10,
        flexDirection: 'row',
        width: '100%',
        height: 140,
        backgroundColor: '#FFEFEF',
        paddingHorizontal: 10,
    },
    headerText: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
    },
    headerTitle: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    headerDescription: {
        fontSize: 14,
        paddingHorizontal: 10,
        fontWeight: 'normal',
    }
});