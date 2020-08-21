import { render, cleanup } from 'react-native-testing-library';
import React from 'react';

import ActionList from '../../src/ActionList/ActionList';
import { ActionListProps } from '../../src/ActionList/ListTypes';

afterEach(cleanup);

describe('<ActionList />', () => {
    const actions: ActionListProps = {
        items: [
            {
                title: 'Edit Account',
                route: 'EditAccount',
            },
            {
                title: 'Terms and Conditions',
                route: 'TermsAndConditions',
            },
        ],
    };

    it('should match snapshot', () => {
        const rendered = render(<ActionList items={actions.items} />).toJSON();

        expect(rendered).toMatchSnapshot();
    });
});
