/**
 * @format
 */
import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';

import {
  MessageListProps,
  MessageType,
  MessageStatusEnum,
} from './src/Messages/Types';

import {MessageDisplay} from './src/Messages/MessageDisplay';

import {Colors} from './src/styles/';

const App = () => {
  const messagesList: MessageListProps = {
    messages: [
      {
        messageType: MessageType.Requests,
        name: 'Edwards Moses',
        status: MessageStatusEnum.Completed,
        date: new Date(),
      },
      {
        messageType: MessageType.Sessions,
        name: 'Joe Buey',
        status: MessageStatusEnum.Scheduled,
        date: new Date(),
      },
      {
        messageType: MessageType.Requests,
        name: 'Matthew Ruiz',
        status: MessageStatusEnum.Canceled,
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
    fontSize: 24,
    fontWeight: '600',
    color: Colors.Black,
    paddingVertical: 10,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.Black,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.Black,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
