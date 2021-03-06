import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AppLoading } from 'expo';
import { Feather } from '@expo/vector-icons';
import { TextInputMask } from 'react-native-masked-text';
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

export default function Register() {
    const [modalVisible, setModalVisible] = useState(false);
    const [cpf, setCpf] = useState('');
    const [name, setName] = useState('');
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
                    <TextInputMask
                        type={'custom'}
                        options={{mask: 'A' * 50}}
                        value={name}
                        placeholder="Nome"
                        style={styles.input}
                        onChangeText={text => setName(text)}
                    />
                    <TextInputMask
                        type={'cpf'}
                        value={cpf}
                        placeholder="CPF"
                        style={styles.input}
                        onChangeText={text => setCpf(text)}
                    />

                    <Text style={styles.warningText}>*Seus dados estão seguros e nos responsabilizamos.</Text>

                    <WideButton
                        style={{ marginHorizontal: 40 }}
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