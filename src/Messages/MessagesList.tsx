import React from 'react';

import {View, FlatList, StyleSheet} from 'react-native';

import {MessageItemProps, MessageListProps} from './Types';
import {MessageItem} from './MessageItem';

export const MessageList: React.FC<MessageListProps> = ({messages}) => {
  return (
    <View style={styles.listStyle}>
      <FlatList
        keyExtractor={(item: MessageItemProps, index: number) =>
          index.toString()
        }
        data={messages}
        renderItem={({item}: {item: MessageItemProps}) => (
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
