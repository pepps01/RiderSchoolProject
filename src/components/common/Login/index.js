import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Container from '../common/Container';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import styles from './styles';

import REGISTER from './../../constants';
import color from '../../assets/theme/color';
function LoginComponent() {
  const {navigate} = useNavigation();
  return (
    <Container>
      <Image
        height={50}
        width={50}
        source={require('../../assets/images/BusStop.png')}
        style={styles.logoImage}
      />
      <View>
        <Text style={styles.title}>Welcome to Transporta </Text>
        <Text style={styles.subtitle}>Please login here </Text>

        <Input label="Username" placeholder="Enter Username" />
        <Input
          label="Password"
          icon={<Text>Hide</Text>}
          placeholder="Enter Password"
          secureTextEntry={true}
        />
        <CustomButton title="Submit" loading={true}></CustomButton>
      </View>
      <View style={{marginTop: 30, color: color.primary}}>
        <Text>Need a new account?</Text>
        <TouchableOpacity
          onPress={() => {
            navigate(REGISTER);
          }}>
          <Text>Register</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
}

export default LoginComponent;
