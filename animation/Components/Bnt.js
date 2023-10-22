import {Animated,Text,TouchableHighlight, StyleSheet, } from "react-native"

export const Bnt = ({title}) => {

const animatedValue = new Animated.Value(1);
const AnimtedStyle={
    transform: [{scale:animatedValue}]
}
function OnpressIn(){
    Animated.spring(animatedValue, {
    toValue:0.7,
    useNativeDriver:true
  }).start
}
function OnpressOut(){
    Animated.spring(animatedValue, {
    toValue:1,
    useNativeDriver:true
  }).start
}

  return (
    <Animated.View style={[styles.container,AnimtedStyle]} >
        <TouchableHighlight style={styles.btn}
    onPressIn={OnpressIn}
    onPressOut={OnpressOut}>
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