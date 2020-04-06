import React, { useEffect } from 'react'
import { View, Text, PanResponder, Animated } from 'react-native'

//@ I love hooks! 
const usePanHandlerBouceBack = ({ draggingMode }) => {
  // console.log(draggingMode)
  const positionOfSlot = new Animated.ValueXY({ x: 0, y: 0 })
  const scaleOfSlot = new Animated.Value(1)
  const scaleOfBg = new Animated.Value(1)

  useEffect(() => {
    if (draggingMode) {
      const timeout = setTimeout(() => {
        clearTimeout(timeout)
        // console.log('object')
        executeAnimation()
      }, (Math.random() * 3000) + 2000)
    }
  }, [draggingMode])

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      if (draggingMode) {
        positionOfSlot.setValue({ x: gesture.dx, y: gesture.dy });
      }
    },
    onPanResponderGrant: (event, gesture) => {
      scaleOfSlot.setValue(1.1)
      scaleOfBg.setValue(1.2)
    },
    onPanResponderEnd: (event, gesture) => {
      scaleOfSlot.setValue(1)
      scaleOfBg.setValue(1)
    },
    onPanResponderRelease: (e, gesture) => {
      Animated.spring(positionOfSlot, {
        toValue: { x: 0, y: 0 },
        friction: 3
      }).start();
    },
  })
  const executeAnimation = () => {
    // scaleOfBg.setValue(1)
    Animated.timing(scaleOfBg, {
      toValue: 1.1,
      friction: 20,
      duration: 300,
      // delay: 6000
    }).start(() => executeAnimation2()); //when draggingMode === true then fire function 
  }
  const executeAnimation2 = () => {
    // scaleOfBg.setValue(1.5)
    Animated.timing(scaleOfBg, {
      toValue: 1.22,
      friction: 10,
      duration: 300,
      // delay: 6000
    }).start(() => executeAnimation());
  }
  return { panResponder, positionOfSlot, scaleOfBg }
}

export default usePanHandlerBouceBack
