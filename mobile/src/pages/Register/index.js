import React from 'react';
import { StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Register() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.imgBack}
                >
                    <Feather name="chevron-left" size={32} color="#C64B4C" />
                </TouchableOpacity>


                <View style={styles.headerText}>
                    <Text style={styles.headerTitle}>Antes de começar</Text>
                    <Text style={styles.headerDescription}>Precisamos de algumas informações suas para concluir o seu cadastro</Text>
                </View>
            </View>
        </View>
    );
}