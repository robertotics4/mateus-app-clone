import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
    modal: {
        borderRadius: 20,
        backgroundColor: '#fff',
        paddingHorizontal: 40,
        paddingVertical: 20,
        margin: 45,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 2,
    },
    modalContainer: {
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'Bariol-Bold',
        fontSize: 28,
        color: '#344d61',
        marginTop: 20,
        marginBottom: 20,
    },
    description: {
        fontFamily: 'Bariol-Regular',
        fontSize: 20,
        color: '#344d61',
        textAlign: 'center',
        marginBottom: 40,
    },
});