/**
 * @format
 */
import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';

import {SessionTypes, BaseTypes} from './src/Types/';

import {SessionDisplay} from './src/Sessions/SessionDisplay';

import {Colors, Fonts} from './src/styles/';

const App = () => {
  const messagesList: SessionTypes.SessionMessageListProps = {
    sessions: [
      {
        name: 'Edwards Moses',
        status: BaseTypes.MessageStatusEnum.Completed,
        date: 1598285158,
        notes: "I'd like to work as a driver",
        durationInHours: 3,
      },
      {
        name: 'Joe Buey',
        status: BaseTypes.MessageStatusEnum.Scheduled,
        date: 1598457958,
        notes: "I'd like to work as a driver",
        durationInHours: 1,
      },
      {
        name: 'Matthew Ruiz',
        status: BaseTypes.MessageStatusEnum.Canceled,
        date: 1598285158,
        notes: "I'd like to work as a driver",
        durationInHours: 3,
      },
      {
        name: 'Types Working',
        status: BaseTypes.MessageStatusEnum.Canceled,
        date: 1598457958,
        notes: "I'd like to work as a Type that's working",
        durationInHours: 2,
      },
    ],
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Help</Text>
          <SessionDisplay sessions={messagesList.sessions} />
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
