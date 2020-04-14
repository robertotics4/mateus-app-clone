import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AppLoading } from 'expo';
import { Feather } from '@expo/vector-icons';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';

import FontsLoader from '../../utils/FontsLoader';
import imgSend from '../../assets/send-whatsapp.png';
import styles from './styles';

import ModalMessage from '../../components/ModalMessage';
import WideButton from '../../components/WideButton';

export default function Terms() {
    const [modalVisible, setModalVisible] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmation, setConfirmation] = useState('');
    const [fontsLoaded] = FontsLoader();

    const navigation = useNavigation();

    function navigateBack() {
        closeModal();
        navigation.goBack();
    }

    const showModal = () => {
        if (modalVisible)
            return;

        setModalVisible(true);
    }

    const closeModal = () => {
        if (!modalVisible)
            return;

        setModalVisible(false);
    }

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={styles.container}>

                <View style={styles.header}>
                    <TouchableOpacity
                        style={styles.buttonBack}
                        onPress={showModal}
                    >
                        <Feather name="chevron-left" size={32} color="#C64B4C" />
                    </TouchableOpacity>

                    <View style={styles.headerText}>
                        <Text style={styles.headerTitle}>Termos de Uso</Text>
                        <Text style={styles.headerDescription}>Termos e condições de uso do aplicativo.</Text>
                    </View>
                </View>

                <View style={styles.instructions}>
                    <WideButton
                        style={{ marginHorizontal: 40, marginTop: 170, }}
                        title="Continuar"
                        buttonStyle="blue"
                        onPress={() => navigation.navigate('Contact')}
                    />

                </View>

                <View style={styles.footer}>
                    <TouchableOpacity
                        style={styles.buttonSend}
                        onPress={() => { }}
                    >
                        <Image source={imgSend} alt="Whatsapp" />
                    </TouchableOpacity>
                </View>

                <ModalMessage
                    visible={modalVisible}
                    title="Tem certeza?"
                    description="Se você voltar essa etapa, os dados preenchidos serão apagados"
                    cancelButtonTitle="< Voltar"
                    confirmButtonTitle="Quero continuar"
                    cancelButtonAction={() => navigateBack()}
                    confirmButtonAction={closeModal}
                />

            </View>
        );
    }

}