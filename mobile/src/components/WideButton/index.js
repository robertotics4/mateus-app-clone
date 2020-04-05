import React from 'react';
import { Text, TouchableOpacity, } from 'react-native';

import styles from './styles';

export default function WideButton(props) {
    if (props.buttonStyle === 'white') {
        return (
            <TouchableOpacity
                style={[styles.buttonArea, styles.inverseArea, props.style]}
                onPress={props.onPress}
            >
                <Text style={styles.titleInverse}>Continuar</Text>
            </TouchableOpacity>
        );
    } else {
        return (
            <TouchableOpacity
                style={[styles.buttonArea, props.style]}
                onPress={props.onPress}
            >
                <Text style={styles.title}>Continuar</Text>
            </TouchableOpacity>
        );
    }
}