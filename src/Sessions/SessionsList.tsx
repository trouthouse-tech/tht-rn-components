import React from 'react';

import {View, FlatList, StyleSheet} from 'react-native';

import {SessionTypes} from '../Types';
import {SessionItem} from './SessionItem';

export const SessionList: React.FC<SessionTypes.SessionMessageListProps> = ({
  sessions,
}) => {
  return (
    <View style={styles.listStyle}>
      <FlatList
        keyExtractor={(
          item: SessionTypes.SessionMessageItemProps,
          index: number
        ) => index.toString()}
        data={sessions}
        renderItem={({item}: {item: SessionTypes.SessionMessageItemProps}) => (
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
