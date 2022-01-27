import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

import API_KEY from './../../constants';
const AutoComplete = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Search"
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'AIzaSyB0_vEvEDLwuXf3-_86t7d5W20teoNUsfs',
        language: 'en',
      }}
    />
  );
};

export default AutoComplete;

const styles = StyleSheet.create({});
