import React from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  bBack: {
    justifyContent: 'flex-start',
    width: '20%',
    // alignItems: '',
  },
});

export default function BackButton({ pop }) {
  return (
    <View style={styles.bBack}>
      <Button title="<-" color="#A72300" onPress={() => pop(1)} />
    </View>
  );
}

BackButton.propTypes = {
  pop: PropTypes.func.isRequired,
};
