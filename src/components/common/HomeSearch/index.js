import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';

const HomeSearch = () => {
  return (
    <View style={{marginTop: 0, backgroundColor: 'black', paddingVertical: 50}}>
      <Text>Where's your trip taking you to?</Text>
      <Input placeholder="Pick up bus stop" />
      <Input placeholder="Drop-off bus stop" />
      <CustomButton title="Start Trip"></CustomButton>
    </View>
  );
};

export default HomeSearch;

const styles = StyleSheet.create({});
