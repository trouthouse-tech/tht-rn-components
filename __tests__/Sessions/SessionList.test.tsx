import {render, cleanup} from 'react-native-testing-library';
import React from 'react';

import {SessionList} from '../../src/Sessions/SessionsList';
import {SessionTypes, BaseTypes} from '../../src/Types';

afterEach(cleanup);

describe('<SessionList />', () => {
  const SessionsList: SessionTypes.SessionMessageListProps = {
    sessions: [
      {
        messageType: SessionTypes.SessionMessageTypeEnum.History,
        name: 'Edwards Moses',
        status: BaseTypes.MessageStatusEnum.Completed,
        date: 1598457958,
        durationInHours: 1,
        notes: 'Note for test',
      },
      {
        messageType: SessionTypes.SessionMessageTypeEnum.Scheduled,
        name: 'Edwards Moses',
        status: BaseTypes.MessageStatusEnum.Canceled,
        date: 1598457958,
        durationInHours: 2,
        notes: 'Second Test Note',
      },
    ],
  };

  it('should match snapshot', () => {
    const rendered = render(
      <SessionList sessions={SessionsList.sessions} />
    ).toJSON();

    expect(rendered).toMatchSnapshot();
  });
});
