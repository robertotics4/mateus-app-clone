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

export default function Contact() {
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
                        <Text style={styles.headerTitle}>Informações de Contato</Text>
                        <Text style={styles.headerDescription}>Não vamos entrar em contato com você a menos que seja necessário</Text>
                    </View>
                </View>

                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder="Telefone"
                        textContentType="telephoneNumber"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        textContentType="emailAddress"
                    />

                    <Text style={styles.warningText}>*Seus dados estão seguros e nos responsabilizamos.</Text>

                    <WideButton
                        style={{ marginHorizontal: 40 }}
                        title="Continuar"
                        buttonStyle="blue"
                        onPress={() => navigation.navigate("Password")}
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