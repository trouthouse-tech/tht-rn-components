import {render, cleanup} from 'react-native-testing-library';
import React from 'react';

import {MessageList} from '../../src/Messages/MessagesList';
import {MessageTypes, BaseTypes} from '../../src/Types/';

afterEach(cleanup);

describe('<MessageList />', () => {
  const messagesList: MessageTypes.MessageListProps = {
    messages: [
      {
        messageType: MessageTypes.MessageTypeEnum.Requests,
        name: 'Edwards Moses',
        status: BaseTypes.MessageStatusEnum.Completed,
        date: 1598457958,
      },
      {
        messageType: MessageTypes.MessageTypeEnum.Sessions,
        name: 'Edwards Moses',
        status: BaseTypes.MessageStatusEnum.Canceled,
        date: 1598457958,
      },
    ],
  };

  it('should match snapshot', () => {
    const rendered = render(
      <MessageList messages={messagesList.messages} />
    ).toJSON();

    expect(rendered).toMatchSnapshot();
  });
});
