/**
 * @format
 */
import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';

import {MessageTypes} from './src/Types/';

import {MessageDisplay} from './src/Messages/MessageDisplay';

import {Colors, Fonts} from './src/styles/';

const App = () => {
  const messagesList: MessageTypes.MessageListProps = {
    messages: [
      {
        messageType: MessageTypes.MessageTypeEnum.Requests,
        name: 'Edwards Moses',
        status: MessageTypes.MessageStatusEnum.Completed,
        date: new Date(),
      },
      {
        messageType: MessageTypes.MessageTypeEnum.Sessions,
        name: 'Joe Buey',
        status: MessageTypes.MessageStatusEnum.Scheduled,
        date: new Date(),
      },
      {
        messageType: MessageTypes.MessageTypeEnum.Requests,
        name: 'Matthew Ruiz',
        status: MessageTypes.MessageStatusEnum.Canceled,
        date: new Date(),
      },
      {
        messageType: MessageTypes.MessageTypeEnum.Sessions,
        name: 'Types Working',
        status: MessageTypes.MessageStatusEnum.Canceled,
        date: new Date(),
      },
    ],
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Help</Text>
          <MessageDisplay messages={messagesList.messages} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 40,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: Fonts.larger,
    fontWeight: '600',
    color: Colors.Black,
    paddingVertical: 10,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: Fonts.normal,
    fontWeight: '400',
    color: Colors.Black,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.Black,
    fontSize: Fonts.small,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
