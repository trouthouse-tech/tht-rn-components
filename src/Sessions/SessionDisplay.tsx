import React from 'react';

import {View} from 'react-native';

import {MessageTypes} from '../Types';
import {SessionList} from './SessionsList';
import {SessionToggler} from './SessionToggler';

export const SessionDisplay: React.FC<MessageTypes.SessionMessageListProps> = ({
  messages,
}) => {
  const [currentMessageStatus, setcurrentMessageStatus] = React.useState<
    MessageTypes.SessionMessageTypeEnum
  >(MessageTypes.SessionMessageTypeEnum.Scheduled);

  const toggleMessageStatus = (
    selectedMessageStatus: MessageTypes.SessionMessageTypeEnum
  ) => {
    console.log(selectedMessageStatus);
    setcurrentMessageStatus(selectedMessageStatus);
  };

  return (
    <View>
      <SessionToggler
        onPress={(
          selectedMessageStatus: MessageTypes.SessionMessageTypeEnum
        ) => {
          return toggleMessageStatus(selectedMessageStatus);
        }}
        currentMessageType={currentMessageStatus}
      />
      <SessionList
        messages={messages.filter(
          (m) => m.messageType === currentMessageStatus
        )}
      />
    </View>
  );
};
