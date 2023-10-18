import {Animated,Text,TouchableHighlight, StyleSheet, PlatformColor} from "react-native"

export const Bnt = ({title}) => {
  return (
    <Animated.View style={styles.container}>
        <TouchableHighlight style={styles.btn}>
            <Text styles={styles.text}>{title}</Text>

        </TouchableHighlight>
    </Animated.View>
  )
}


const styles =StyleSheet.create({
    container:{
        width:'90%',
        alignItems:'center',
        justifyContent:'center'

    },
    btn:{
        backgroundColor:'blue',
        padding:10,
        borderRadius:10,
        margin:10,
        width:'100%',
        height:50,
        alignItems:'center',
        justifyContent:'center',
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:.25,
        shadowRadius:3.84,
        elevation:5
    },
    text:{
        color:'white',
        fontSize:20
    }
})