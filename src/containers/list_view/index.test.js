import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { TestListView } from './index.jsx';
import renderer from 'react-test-renderer';

describe('List View Component', () => {
    it('renders correctly', () => {
        const lists = [
            {
                "id": "1",
                "title": "First List"
            },
            {
                "id": "2",
                "title": "Second List"
            },
            {
                "id": "3",
                "title": "Third List"
            }
        ]
        const listView = renderer.create(<MemoryRouter><TestListView render='false' lists={lists}/></MemoryRouter>).toJSON();
        expect(listView).toMatchSnapshot();
    });
});