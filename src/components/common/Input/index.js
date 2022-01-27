import React from 'react';
import {Text, TextInput, View} from 'react-native';

import styles from './styles';
const Input = ({
  onChangeText,
  icon,
  style,
  text,
  label,
  placeholder,
  secureTextEntry,
}) => {
  return (
    <View style={styles.inputContainer}>
      {label && <Text>{label}</Text>}
      <View style={[styles.wrapper, {alignItems: 'center'}]}>
        <View>{icon && icon}</View>
        <TextInput
          style={[styles.input, style]}
          onChangeText={onChangeText}
          value={text}
          iconPosition="left"
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
        />
      </View>
    </View>
  );
};

export default Input;
