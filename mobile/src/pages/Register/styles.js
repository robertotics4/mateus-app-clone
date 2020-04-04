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
    buttonBack: {
        position: 'absolute',
        top: 40,
    },
    headerText: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
        marginHorizontal: 35,
    },
    headerTitle: {
        fontFamily: 'Bariol-Bold',
        fontSize: 17,
        color: '#344d61',
    },
    headerDescription: {
        fontFamily: 'Bariol-Regular',
        fontSize: 17,
        color: '#344d61',
    },
    form: {
        flex: 3,
        paddingTop: 30,
        paddingHorizontal: 40,
    },
    input: {
        height: 35,
        marginBottom: 20,
        borderBottomWidth: 2,
        color: '#344d61',
        borderBottomColor: '#ccc',
        fontFamily: 'Bariol-Regular',
        fontSize: 15,
    },
    warningText: {
        fontFamily: 'Bariol-Regular',
        fontSize: 17,
        color: '#9CA9B2',
    },
    buttonContinue: {
        marginTop: 170,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        borderRadius: 50,
        marginHorizontal: 40,
        backgroundColor: '#50A0FF'
    },
    buttonText: {
        fontFamily: 'Bariol-Bold',
        color: '#fff',
        fontSize: 14,
    },
    footer: {
        flex: 1,
        alignItems: 'flex-end',
        paddingHorizontal: 15,
    },
    buttonSend: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        width: 70,
        borderRadius: 50,
        backgroundColor: '#C1DEFE',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 3
    },
});