import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
    modal: {
        margin: 40,
        borderRadius: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 60

    },
    title: {
        fontFamily: 'Bariol-Bold',
        fontSize: 28,
        color: '#344d61',
        marginBottom: 20
    },
    description: {
        fontFamily: 'Bariol-Regular',
        fontSize: 20,
        color: '#344d61',
        textAlign: 'center'
    }
});