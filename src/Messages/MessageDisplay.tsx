import React from 'react';

import {View, Text} from 'react-native';

import {MessageListProps, MessageType} from './Types';
import {MessageList} from './MessagesList';
import {MessageToggler} from './MessageToggler';

export const MessageDisplay: React.FC<MessageListProps> = ({messages}) => {
  const [currentMessageStatus, setcurrentMessageStatus] = React.useState<
    MessageType
  >(MessageType.Sessions);

  const toggleMessageStatus = (selectedMessageStatus: MessageType) => {
    console.log(selectedMessageStatus);
    setcurrentMessageStatus(selectedMessageStatus);
  };

  return (
    <View>
      <MessageToggler
        onPress={(selectedMessageStatus: MessageType) => {
          return toggleMessageStatus(selectedMessageStatus);
        }}
        currentMessageType={currentMessageStatus}
      />
      <MessageList
        messages={messages.filter(
          (m) => m.messageType === currentMessageStatus
        )}
      />
      <Text>{currentMessageStatus}</Text>
    </View>
  );
};
