import React from 'react';

import {View} from 'react-native';

import {SessionTypes, BaseTypes} from '../Types';
import {SessionList} from './SessionsList';
import {SessionToggler} from './SessionToggler';

export const SessionDisplay: React.FC<SessionTypes.SessionMessageListProps> = ({
  sessions,
}) => {
  const toggleSessionsToDisplay = (showScheduled: boolean) => {
    if (showScheduled) {
      return sessions.filter(
        (m) => m.status === BaseTypes.MessageStatusEnum.Scheduled
      );
    } else {
      return sessions.filter(
        (m) => m.status !== BaseTypes.MessageStatusEnum.Scheduled
      );
    }
  };

  const [showScheduledSession, setShowScheduledSession] = React.useState(true);

  return (
    <View>
      <SessionToggler
        onPress={(showScheduled: boolean) => {
          setShowScheduledSession(showScheduled);
        }}
        showScheduled={showScheduledSession}
      />
      <SessionList sessions={toggleSessionsToDisplay(showScheduledSession)} />
    </View>
  );
};
