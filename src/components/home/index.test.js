import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { TestHome } from './index.jsx';
import renderer from 'react-test-renderer';

describe('Home Page Component', () => {
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
        const home = renderer.create(<MemoryRouter><TestHome render='false' lists={lists}/></MemoryRouter>).toJSON();
        expect(home).toMatchSnapshot();
    });
});