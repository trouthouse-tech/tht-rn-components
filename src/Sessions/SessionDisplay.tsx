import React from 'react';

import {View} from 'react-native';

import {SessionTypes, BaseTypes} from '../Types';
import {SessionList} from './SessionsList';
import {SessionToggler} from './SessionToggler';

export const SessionDisplay: React.FC<SessionTypes.SessionMessageListProps> = ({
  sessions,
}) => {
  const [currentMessageStatus, setcurrentMessageStatus] = React.useState<
    SessionTypes.SessionMessageTypeEnum
  >(SessionTypes.SessionMessageTypeEnum.Scheduled);

  const sessionsToDisplay = () => {
    if (
      currentMessageStatus === SessionTypes.SessionMessageTypeEnum.Scheduled
    ) {
      return sessions.filter(
        (m) => m.status === BaseTypes.MessageStatusEnum.Scheduled
      );
    } else {
      return sessions.filter(
        (m) => m.status !== BaseTypes.MessageStatusEnum.Scheduled
      );
    }
  };

  const toggleSessionStatus = (
    selectedMessageStatus: SessionTypes.SessionMessageTypeEnum
  ) => {
    setcurrentMessageStatus(selectedMessageStatus);
  };

  return (
    <View>
      <SessionToggler
        onPress={(
          selectedMessageStatus: SessionTypes.SessionMessageTypeEnum
        ) => {
          return toggleSessionStatus(selectedMessageStatus);
        }}
        currentMessageType={currentMessageStatus}
      />
      <SessionList sessions={sessionsToDisplay()} />
    </View>
  );
};
