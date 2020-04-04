import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { AppLoading } from 'expo';
import { Feather } from '@expo/vector-icons';
import {
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    TextInput,
    Image
} from 'react-native';

import FontsLoader from '../../utils/FontsLoader';
import imgSend from '../../assets/send-whatsapp.png';
import styles from './styles';

export default function Register() {
    const [fontsLoaded] = FontsLoader();
    const navigation = useNavigation();

    function navigateBack() {
        navigation.goBack();
    }

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" />

                <View style={styles.header}>
                    <TouchableOpacity
                        style={styles.buttonBack}
                        onPress={() => navigateBack()}
                    >
                        <Feather name="chevron-left" size={32} color="#C64B4C" />
                    </TouchableOpacity>

                    <View style={styles.headerText}>
                        <Text style={styles.headerTitle}>Antes de começar</Text>
                        <Text style={styles.headerDescription}>Precisamos de algumas informações suas para concluir o seu cadastro</Text>
                    </View>
                </View>

                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome"
                        textContentType="name"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="CPF"
                    />

                    <Text style={styles.warningText}>*Seus dados estão seguros e nos responsabilizamos.</Text>

                    <TouchableOpacity
                        style={styles.buttonContinue}
                        onPress={() => { }}
                    >
                        <Text style={styles.buttonText}>Continuar</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.footer}>
                    <TouchableOpacity
                        style={styles.buttonSend}
                        onPress={() => { }}
                    >
                        <Image source={imgSend} alt="Whatsapp" />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

}