import React from 'react';

import {View, FlatList, StyleSheet} from 'react-native';

import {MessageTypes} from '../Types/';
import {MessageItem} from './MessageItem';

export const MessageList: React.FC<MessageTypes.MessageListProps> = ({
  messages,
}) => {
  return (
    <View style={styles.listStyle}>
      <FlatList
        keyExtractor={(item: MessageTypes.MessageItemProps, index: number) =>
          index.toString()
        }
        data={messages}
        renderItem={({item}: {item: MessageTypes.MessageItemProps}) => (
          <MessageItem
            name={item.name}
            status={item.status}
            messageType={item.messageType}
            date={item.date}
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
