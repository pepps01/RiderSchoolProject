import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AutoComplete from '../../components/AutoComplete';
import MapComponent from '../../components/MapCompnent';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <MapComponent />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
