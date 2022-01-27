import React, {useState} from 'react';
import {Text, TouchableOpacity, TouchableOpacityComponent} from 'react-native';
import color from '../../../assets/theme/color';

import styles from './styles';

const CustomButton = ({
  title,
  secondary,
  primary,
  danger,
  disabled,
  loading,
  onPress,
  ...props
}) => {
  const getBackgroundColor = () => {
    if (!disabled) {
      return color.primary;
    }
  };
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.wrapper, {backgroundColor: getBackgroundColor()}]}>
      {title && (
        <Text style={{color: disabled ? 'black' : color.white}}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
