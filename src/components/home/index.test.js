import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Home from './index.jsx';
import renderer from 'react-test-renderer';

describe('Home Page Component', () => {
    it('renders correctly', () => {
        const home = renderer.create(<MemoryRouter><Home render='false'/></MemoryRouter>).toJSON();
        expect(home).toMatchSnapshot();
    });
});