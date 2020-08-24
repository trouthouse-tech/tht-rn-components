import {render, cleanup} from 'react-native-testing-library';
import React from 'react';

import ListItem from '../../src/ActionList/ListItem';
import {ActionListItemProps} from '../../src/ActionList/ListTypes';

afterEach(cleanup);

describe('<ListItem />', () => {
  const actionItem: ActionListItemProps = {
    title: 'Edit Account',
    route: 'EditAccount',
  };

  it('should match snapshot', () => {
    const rendered = render(
      <ListItem title={actionItem.title} route={actionItem.route} />
    ).toJSON();

    expect(rendered).toMatchSnapshot();
  });
});
