import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    containerImg: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    imgLogo: {
        width: 263,
        height: 46,
    },
    containerButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingBottom: 30,
        paddingHorizontal: 15,
    },
    buttonRegister: {
        width: '48%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        borderWidth: 2,
        borderColor: '#C64B4C',
        borderRadius: 50,
        borderTopRightRadius: 8,
    },
    buttonEnter: {
        width: '48%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        backgroundColor: '#C64B4C',
        borderRadius: 50,
        borderTopLeftRadius: 8,
    },
    buttonText: {
        fontFamily: 'Bariol-Bold',
        color: '#C64B4C',
        fontSize: 15,
    },
    buttonTextInverse: {
        color: '#fff',
    }
});