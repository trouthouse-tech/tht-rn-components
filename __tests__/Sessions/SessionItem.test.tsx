import {render, cleanup} from 'react-native-testing-library';
import React from 'react';

import {SessionItem} from '../../src/Sessions/SessionItem';
import {SessionTypes, BaseTypes} from '../../src/Types';

afterEach(cleanup);

describe('<MessageItem />', () => {
  const session: SessionTypes.SessionMessageItemProps = {
    name: 'Edwards Moses',
    status: BaseTypes.MessageStatusEnum.Completed,
    date: 1598457958,
    durationInHours: 1,
    notes: 'Note for test',
  };

  it('should match snapshot', () => {
    const rendered = render(
      <SessionItem
        name={session.name}
        status={session.status}
        date={session.date}
        notes={session.notes}
        durationInHours={session.durationInHours}
      />
    ).toJSON();

    expect(rendered).toMatchSnapshot();
  });
});
