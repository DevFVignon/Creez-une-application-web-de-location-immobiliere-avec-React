// Footer.test.js
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from '../components/Footer/Footer';


test('it should render the Footer component', () => {
const { footer } = render(<Footer />);
expect(footer).toBeInTheDocument();
});
