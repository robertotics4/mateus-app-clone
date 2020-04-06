import React from 'react';
import { View, Modal, Text } from 'react-native';

import styles from './styles';

import WideButton from '../WideButton';

export default function ModalMessage(props) {
    const isVisible = props.visible;

    return (
        <Modal
            visible={isVisible}
            animationType="fade"
            transparent
        >
            <View style={styles.container} onTouchMove={visible => visible = false}>
                <View style={styles.modal}>

                    <View style={styles.modalContainer}>
                        <Text style={styles.title}>{props.title}</Text>
                        <Text style={styles.description}>{props.description}</Text>

                        <View style={styles.buttonsContainer}>
                            <WideButton
                                style={{ paddingHorizontal: 60, marginBottom: 15 }}
                                title={props.cancelButtonTitle}
                                buttonStyle="blue"
                                onPress={props.cancelButtonAction}
                            />
                            <WideButton
                                title={props.confirmButtonTitle}
                                buttonStyle="white"
                                onPress={props.confirmButtonAction}
                            />
                        </View>

                    </View>


                </View>
            </View>
        </Modal>
    );
}
