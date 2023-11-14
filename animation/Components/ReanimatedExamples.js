//shared value
import { PanGestureHandler } from "react-native-gesture-handler";
import React from "react";
import Animated, {
  useSharedValue,
  withTiming,
  Easing,
  useAnimatedStyle,
  withSpring,
  withSequence,
  withDelay,
  withRepeat,
  useAnimatedGestureHandler,
} from "react-native-reanimated";


import { Button, SafeAreaView, ScrollView } from "react-native";


function SharedValue() {
  const randomWidth = useSharedValue(10);
  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const style = useAnimatedStyle(() => {
    return {
      with: withTiming(randomWidth.value, config),
    };
  });

  return (
    <>
      <Animated.View
        style={[
          { height: 30, backgroundColor: "yellow", marginTop: 80, margin: 10 },
          style,
        ]}
      />
      <Button
        title="Toggle"
        onPress={() => {
          randomWidth.value = Math.random() * 350;
        }}
      />
    </>
  );
}

function Box() {
  const offset = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(offset.value * 255, {
            damping: 40,
            stiffness: 90,
          }),
        },
      ],
    };
  });
  return (
    <>
      <Animated.View
        style={[
          { width: 100, height: 100, backgroundColor: "purple" },
          animatedStyles,
        ]}
      />
      <Button
        title="Move"
        onPress={() => (offset.value = withSpring(Math.random()))}
      />
    </>
  );
}

function Wooble (){
const rotation = useSharedValue(0);
const animatedStyle= useAnimatedStyle(()=>{
  return{
    transform:[{rotateZ: `${rotation.value}deg`}]
  }

})

  return(
    <>
    <Animated.View
    style= 
    {[
      { width: 100, height: 100, backgroundColor: "purple" },
      animatedStyle,
    ]}
    
    />
    <Button
    title="move"
    onPress={()=>
    rotation.value=withSequence(
      withTiming(-10, { duration:20}),
      withRepeat(withTiming(25, {duration:100}),6,true),
      withTiming(0, {duration:60})
    )
    
    }
    />
    </>
  )
}

const Events = () => {
const startingposition=100;
const x= useSharedValue(startingposition);
const y=useSharedValue(startingposition);

const pressed=useSharedValue(false);

const eventHandler = useAnimatedGestureHandler({
  onStart:(event,ctx)=>{
    pressed.value=true;
    ctx.startX = x.value;
  ctx.startY = y.value;
  },
  onActive: (event,ctx)=>{
    x.value = ctx.startX +event.translationX;
    y.value = ctx.startY +event.translationY;
  },
  onEnd:(event,ctx)=>{
    pressed.value = false
  }
});

const stylesuas = useAnimatedStyle(()=>{
  return {
    backgroundColor: pressed.value ? "red" : "gold",
    transform:[{translateX:x.value}, {translationY: x.value}]
  }
});


return (
  <>
  <PanGestureHandler onGestureEvent={eventHandler}>
    <Animated.View
    style={[
      {width: 100, height: 100, backgroundColor: "purple"},
      stylesuas
      
    ]}/>
  </PanGestureHandler>
  </>
)

}


const ReanimatedExamples = () => {
  return (
    <SafeAreaView>
       <Events/>
      <ScrollView>
        {/* <SharedValue /> */}
        <Box />
       
        <Wooble/>
      </ScrollView>
     
    </SafeAreaView>
  );
};

export default ReanimatedExamples;