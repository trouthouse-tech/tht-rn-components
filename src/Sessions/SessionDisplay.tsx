import React from 'react';

import {View} from 'react-native';

import {SessionTypes} from '../Types';
import {SessionList} from './SessionsList';
import {SessionToggler} from './SessionToggler';

export const SessionDisplay: React.FC<SessionTypes.SessionMessageListProps> = ({
  sessions,
}) => {
  const [currentMessageStatus, setcurrentMessageStatus] = React.useState<
    SessionTypes.SessionMessageTypeEnum
  >(SessionTypes.SessionMessageTypeEnum.Scheduled);

  const toggleMessageStatus = (
    selectedMessageStatus: SessionTypes.SessionMessageTypeEnum
  ) => {
    console.log(selectedMessageStatus);
    setcurrentMessageStatus(selectedMessageStatus);
  };

  return (
    <View>
      <SessionToggler
        onPress={(
          selectedMessageStatus: SessionTypes.SessionMessageTypeEnum
        ) => {
          return toggleMessageStatus(selectedMessageStatus);
        }}
        currentMessageType={currentMessageStatus}
      />
      <SessionList
        sessions={sessions.filter(
          (m) => m.messageType === currentMessageStatus
        )}
      />
    </View>
  );
};
