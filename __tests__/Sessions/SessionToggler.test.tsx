import {render, cleanup} from 'react-native-testing-library';
import React from 'react';

import {SessionToggler} from '../../src/Sessions/SessionToggler';

afterEach(cleanup);

describe('<SessionToggler />', () => {
  it('should match snapshot', () => {
    const rendered = render(
      <SessionToggler
        showScheduled={true}
        onPress={(item) => {
          console.log(item);
        }}
      />
    ).toJSON();

    expect(rendered).toMatchSnapshot();
  });
});
