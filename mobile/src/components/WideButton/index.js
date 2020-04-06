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
                <Text style={[styles.title, styles.titleInverse]}>{props.title}</Text>
            </TouchableOpacity>
        );
    } else {
        return (
            <TouchableOpacity
                style={[styles.buttonArea, props.style]}
                onPress={props.onPress}
            >
                <Text style={styles.title}>{props.title}</Text>
            </TouchableOpacity>
        );
    }
}