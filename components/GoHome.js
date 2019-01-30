import React from 'react';
import { Button } from 'react-native';

const goHome = props => {
  return (
    <Button title="Enter" onPress={props.onGetHome} />
  );
};

export default goHome;
