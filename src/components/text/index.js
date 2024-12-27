import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import AppColors from '../../utills/AppColors';
import { width } from '../../utills/Dimension';



export const MediumText = ({
  children = '',
  size = 4.5,
  textAlign,
  color = AppColors.textColor,
  textStyles,
  textProps,
  onPress = undefined,
  numberOfLines,
  fontWeight= fontWeight
}) => {
  const styles = StyleSheet.create({
    text: {
      fontSize: width(size),
      color: color,
      textAlign: textAlign,
      fontWeight:'bold'
    },
  });
  return (
    <Pressable disabled={typeof onPress == 'undefined'} onPress={onPress}>
      <Text numberOfLines={numberOfLines} style={[styles.text, textStyles]} {...textProps}>
        {children}
      </Text>
    </Pressable>
  );
};
export const SmallText = ({
  children = '',
  size = 3,
  textAlign,
  color = 'grey',
  textStyles,
  textProps,
  onPress = undefined,
  numberOfLines,
  fontWeight=fontWeight
}) => {
  const styles = StyleSheet.create({
    text: {
      fontSize: width(size),
      color: color,
      textAlign: textAlign,
      fontWeight:'900',
      
    },
  });
  return (
    <Pressable disabled={typeof onPress == 'undefined'} onPress={onPress}>
      <Text numberOfLines={numberOfLines} style={[styles.text, textStyles]} {...textProps}>
        {children}
      </Text>
    </Pressable>
  );
};
export const LargeText = ({
  children = '',
  size = 5,
  textAlign,
  color = AppColors.primary,
  textStyles,
  textProps,
  onPress = undefined,
  numberOfLines,
  // fontWeight=fontWeight
}) => {
  const styles = StyleSheet.create({
    text: {
      fontSize: width(size),
      color: color,
      textAlign: textAlign,
      fontWeight:'bold',
      
    },
  });
  return (
    <Pressable disabled={typeof onPress == 'undefined'} onPress={onPress}>
      <Text numberOfLines={numberOfLines} style={[styles.text, textStyles]} {...textProps}>
        {children}
      </Text>
    </Pressable>
  );
};


