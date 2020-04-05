import React from 'react';
import { View, Modal, Text, Button } from 'react-native';

import styles from './styles';

import WideButton from '../WideButton';

export default function ModalMessage(props) {
    return (
        <Modal
            visible={false}
            animationType="fade"
            transparent
        >
            <View style={styles.container}>
                <View style={styles.modal}>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.description}>{props.description}</Text>

                    <WideButton
                        title={props.cancelButtonTitle}
                        buttonStyle="blue"
                        cancelButtonAction={props.cancelButtonAction}
                    />
                    <WideButton
                        title={props.confirmButtonTitle}
                        buttonStyle="white"
                        ancelButtonAction={props.confirmButtonAction}
                    />

                </View>

            </View>
        </Modal>
    );
}
