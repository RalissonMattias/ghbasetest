/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

function App(): React.JSX.Element {
  const tap = Gesture.Tap().onStart(() => {
    console.log('Tapped');
  });

  return (
    <GestureHandlerRootView>
      {/* UNCOMMENT/COMMENT and SAVE */}
      {/* <SafeAreaView> */}
      <GestureDetector gesture={tap}>
        <Animated.View style={{flex: 1, backgroundColor: 'yellow'}}>
          <Text>Ola</Text>
        </Animated.View>
      </GestureDetector>
      {/* </SafeAreaView> */}
    </GestureHandlerRootView>
  );
}

export default App;
