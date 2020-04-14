import React from 'react';
import { Feather } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';

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
    } else if (props.buttonStyle === 'blue' || props.buttonStyle == null) {
        return (
            <TouchableOpacity
                style={[styles.buttonArea, props.style]}
                onPress={props.onPress}
            >
                <Text style={styles.title}>{props.title}</Text>
            </TouchableOpacity>
        );
    } else if (props.buttonStyle === 'download') {
        return (
            <TouchableOpacity
                style={[styles.buttonArea, styles.inverseArea, props.style]}
                onPress={props.onPress}
            >
                <View style={styles.buttonContainer}>
                    <View style={styles.iconArea}>
                        <Feather name="arrow-down" size={32} color="#fff" />
                    </View>
                    <Text style={styles.title, styles.titleInverse}>{props.title}</Text>
                </View>

            </TouchableOpacity>
        );
    }

}