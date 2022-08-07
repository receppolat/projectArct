import { StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    input: {
        borderWidth: 1,
        padding: '3%',
        borderColor: 'gray',
        fontSize: 16,
        width: '60%',
        marginTop: '5%',
        borderRadius: 5
    },
    button : {
        backgroundColor: 'rgba(0,0,0,.3)',
        padding: '3%',
        borderRadius: 5,
        marginTop: '5%',
        marginLeft: '37%'
    },
    textButton:{
        fontSize: 16,
        color: 'blue'
    }
})

export default styles