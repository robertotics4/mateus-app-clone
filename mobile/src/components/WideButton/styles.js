import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    buttonArea: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 42,
        borderRadius: 50,
        backgroundColor: '#50A0FF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 2
    },
    title: {
        fontFamily: 'Bariol-Bold',
        color: '#fff',
        fontSize: 16,
    },
    inverseArea: {
        borderColor: '#50A0FF',
        borderWidth: 2,
        backgroundColor: '#fff',
    },
    titleInverse: {
        color: '#50A0FF',
    }
});