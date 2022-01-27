import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import color from '../../assets/theme/color';
import {LOGIN} from '../../constants';
import Container from '../common/Container';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import styles from './styles';

function RegisterComponent() {
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

        <View>
          <Input label="Firstname" placeholder="Enter Firstname" />
          <Input label="Lastname" placeholder="Enter Lastname" />
          <Input label="Username" placeholder="Enter Username" />
          <Input
            label="Password"
            icon={<Text>Hide</Text>}
            placeholder="Enter Password"
            secureTextEntry={true}
          />
          <CustomButton title="Submit" loading={true}></CustomButton>
        </View>
      </View>

      <View
        style={{
          marginTop: 30,
          color: color.primary,
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <Text>Already have an account?</Text>
        <TouchableOpacity
          onPress={() => {
            navigate(LOGIN);
          }}>
          <Text style={{color: 'purple'}}>Login</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
}

export default RegisterComponent;
