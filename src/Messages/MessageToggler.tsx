import React from 'react';

import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';

import {MessageTogglerProps, MessageType} from './Types';
import {Colors} from '../styles/';

export const MessageToggler: React.FC<MessageTogglerProps> = (props) => {
  const {currentMessageType, onPress} = props;

  return (
    <View>
      {Object.values(MessageType).map((key: MessageType, index: number) => (
        <TouchableWithoutFeedback
          key={index}
          onPress={() => {
            onPress(key);
          }}>
          <Text
            style={
              currentMessageType === key
                ? styles.selectedTabStyle
                : styles.tabStyle
            }>
            {MessageType[key]}
          </Text>
        </TouchableWithoutFeedback>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  selectedTabStyle: {
    fontSize: 15,
    textDecorationLine: 'underline',
  },
  tabStyle: {
    fontSize: 15,
    color: Colors.Grey,
  },
});
