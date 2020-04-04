import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

import logo from '../../assets/logo.png';

export default function MainScreen() {
    const navigation = useNavigation();

    function navigateToRegister() {
        navigation.navigate('Register');
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <View style={styles.containerImg}>
                <Image
                    style={styles.imgLogo}
                    source={logo}
                    alt="mateus-app-clone" />
            </View>

            <View style={styles.containerButton}>
                <TouchableOpacity
                    style={styles.buttonRegister}
                    onPress={() => navigateToRegister()}
                >
                    <Text style={styles.buttonText}>Cadastro</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonEnter}
                    onPress={() => { }}
                >
                    <Text style={[styles.buttonText, styles.buttonTextInverse]}>Entre no App</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}