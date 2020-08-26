import {render, cleanup} from 'react-native-testing-library';
import React from 'react';

import {MessageItem} from '../../src/Messages/MessageItem';
import {MessageTypes, BaseTypes} from '../../src/Types/';

afterEach(cleanup);

describe('<MessageItem />', () => {
  const message: MessageTypes.MessageItemProps = {
    messageType: MessageTypes.MessageTypeEnum.Requests,
    name: 'Edwards Moses',
    status: BaseTypes.MessageStatusEnum.Completed,
    date: 1598457958,
  };

  it('should match snapshot', () => {
    const rendered = render(
      <MessageItem
        name={message.name}
        status={message.status}
        date={message.date}
        messageType={message.messageType}
      />
    ).toJSON();

    expect(rendered).toMatchSnapshot();
  });
});
