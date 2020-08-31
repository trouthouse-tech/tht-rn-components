import {render, cleanup} from 'react-native-testing-library';
import React from 'react';

import {SessionToggler} from '../../src/Sessions/SessionToggler';
import {SessionTypes} from '../../src/Types';

afterEach(cleanup);

describe('<SessionToggler />', () => {
  it('should match snapshot', () => {
    const rendered = render(
      <SessionToggler
        currentMessageType={SessionTypes.SessionMessageTypeEnum.History}
        onPress={(item) => {
          console.log(item);
        }}
      />
    ).toJSON();

    expect(rendered).toMatchSnapshot();
  });
});
