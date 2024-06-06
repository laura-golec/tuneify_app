import React, { useState, useRef } from 'react';
import { StyleSheet, Pressable, ViewProps, Animated, StyleProp, ViewStyle } from 'react-native';
import { Text } from './Text';
import { Colours, ColourValues } from '@constants';

type StyleName = 'default' | 'button' | StyleProp<ViewStyle>;

export interface ButtonProps extends ViewProps {
  styleName?: StyleName;
  defaultColour?: ColourValues;
  activeColour?: ColourValues;
  onPress?: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  colour?: ColourValues;
  hitSlop?: number | { top?: number; bottom?: number; left?: number; right?: number; };
}

export const Button: React.FC<ButtonProps> = ({
  children,
  styleName = 'button',
  defaultColour = Colours.accentColour,
  activeColour = Colours.accentColourFocused,
  hitSlop = 5,
  onPressIn,
  onPressOut,
  onPress,
  ...props
}) => {
  const [localColour, setLocalColour] = useState(defaultColour);
  const scale = useRef(new Animated.Value(1)).current;

  const predefinedStyles = StyleSheet.create({
    default: {
      flex: 0,
      padding: 10,
      borderRadius: 20,
      overflow: 'hidden',
      transform: [{ scale }],
    },
    button: {
      backgroundColor: localColour,
    },
  });

  const handlePressIn = () => {
    if (!onPressIn) {
      setLocalColour(activeColour);
    }
    Animated.spring(scale, {
      toValue: 0.95,
      useNativeDriver: true,
      speed: 30,
    }).start();
  };

  const handlePressOut = () => {
    if (!onPressOut) {
      setLocalColour(defaultColour);
    }
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
      speed: 30,
    }).start();
  };

  const mergedOnPressIn = onPressIn ? () => {
    handlePressIn();
    onPressIn();
  } : handlePressIn;

  const mergedOnPressOut = onPressOut ? () => {
    handlePressOut();
    onPressOut();
  } : handlePressOut;


  let appliedStyle;
  if (typeof styleName === 'string') {
    appliedStyle = [predefinedStyles.default, predefinedStyles[styleName]];
  } else {
    appliedStyle = [predefinedStyles.default, styleName];
  }

  return (
    <Animated.View style={appliedStyle}>
      <Pressable
        onPressIn={mergedOnPressIn}
        onPressOut={mergedOnPressOut}
        onPress={onPress}
        hitSlop={hitSlop}
        {...props}
      >
        <Text>{children}</Text>
      </Pressable>
    </Animated.View>
  );
};