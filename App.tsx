import React from 'react';
import {View} from 'react-native';
import {AudioPlayer} from "react-native-simple-audio-player";

const Audioapp = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#313131',
        justifyContent: 'center',
      }}>
      <AudioPlayer
        url={'http://oreact.ir/test/m.mp3'}
      />
    </View>
  );
};

export default Audioapp;