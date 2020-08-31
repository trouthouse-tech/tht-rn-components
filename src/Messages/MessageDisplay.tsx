import React from 'react';

import {View} from 'react-native';

import {MessageTypes} from '../Types/';
import {MessageList} from './MessagesList';
import {MessageToggler} from './MessageToggler';

export const MessageDisplay: React.FC<MessageTypes.MessageListProps> = ({
  messages,
}) => {
  const [currentMessageStatus, setcurrentMessageStatus] = React.useState<
    MessageTypes.MessageTypeEnum
  >(MessageTypes.MessageTypeEnum.Sessions);

  const toggleMessageStatus = (
    selectedMessageStatus: MessageTypes.MessageTypeEnum
  ) => {
    console.log(selectedMessageStatus);
    setcurrentMessageStatus(selectedMessageStatus);
  };

  return (
    <View>
      <MessageToggler
        onPress={(selectedMessageStatus: MessageTypes.MessageTypeEnum) => {
          return toggleMessageStatus(selectedMessageStatus);
        }}
        currentMessageType={currentMessageStatus}
      />
      <MessageList
        messages={messages.filter(
          (m) => m.messageType === currentMessageStatus
        )}
      />
    </View>
  );
};
