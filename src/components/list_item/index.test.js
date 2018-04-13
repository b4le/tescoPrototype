import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import List from './index.jsx';
import renderer from 'react-test-renderer';

describe('List Component', () => {
    it('renders correctly', () => {
        const mockProps = {
            params: {
                listId: "1"
            }
        }
        const list = renderer.create(<MemoryRouter><List match={mockProps}/></MemoryRouter>).toJSON();
        expect(list).toMatchSnapshot();
    });
});