import {render, cleanup} from 'react-native-testing-library';
import React from 'react';

import {MessageToggler} from '../../src/Messages/MessageToggler';
import {MessageTypes} from '../../src/Types/';

afterEach(cleanup);

describe('<MessageToggler />', () => {
  it('should match snapshot', () => {
    const rendered = render(
      <MessageToggler
        currentMessageType={MessageTypes.MessageTypeEnum.Requests}
        onPress={(item) => {
          console.log(item);
        }}
      />
    ).toJSON();

    expect(rendered).toMatchSnapshot();
  });
});
