import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

import logo from '../../assets/logo.png';

export default function MainScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.containerImg}>
                <Image
                    source={logo}
                    alt="mateus-app-clone" />
            </View>

            <View style={styles.containerButton}>
                <TouchableOpacity
                    style={styles.buttonRegister}
                    onPress={() => { }}
                >
                    <Text style={styles.buttonText}>Cadastro</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonEnter}
                    onPress={() => { }}
                >
                    <Text style={[styles.buttonText, styles.buttonTextInverse]}>Entrar</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}