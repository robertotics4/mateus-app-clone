import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AppLoading } from 'expo';
import { Feather } from '@expo/vector-icons';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Image,
} from 'react-native';

import FontsLoader from '../../utils/FontsLoader';
import imgSend from '../../assets/send-whatsapp.png';
import styles from './styles';

import ModalMessage from '../../components/ModalMessage';
import WideButton from '../../components/WideButton';

export default function Register() {
    const [modalVisible, setModalVisible] = useState(false);
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

                    <WideButton
                        style={{ marginHorizontal: 40 }}
                        title="Continuar"
                        buttonStyle="blue"
                        onPress={() => { }}
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