import React from 'react';

import {View, FlatList, StyleSheet} from 'react-native';

import {MessageTypes} from '../Types';
import {SessionItem} from './SessionItem';

export const SessionList: React.FC<MessageTypes.SessionMessageListProps> = ({
  messages,
}) => {
  return (
    <View style={styles.listStyle}>
      <FlatList
        keyExtractor={(
          item: MessageTypes.SessionMessageItemProps,
          index: number
        ) => index.toString()}
        data={messages}
        renderItem={({item}: {item: MessageTypes.SessionMessageItemProps}) => (
          <SessionItem
            name={item.name}
            status={item.status}
            messageType={item.messageType}
            date={item.date}
            notes={item.notes}
            durationInHours={item.durationInHours}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listStyle: {
    marginVertical: 10,
  },
});
