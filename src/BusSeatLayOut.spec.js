import React from 'react';
import { render } from '@testing-library/react';
import BusSeatLayOut from './BusSeatLayOut'; // Adjust the import path

describe('BusSeatLayOut Component', () => {
  it('renders all seat buttons correctly', () => {
    const { getAllByRole } = render(<BusSeatLayOut />);
    const seatButtons = getAllByRole('button');

    // Expect the number of rendered seat buttons to be 6 rows * 12 columns = 72
    expect(seatButtons.length).toBe(72);

    // You can add more specific assertions about the buttons if needed
    // For example, checking for class names, SVG elements, etc.
  });

  it('renders the correct number of "s" spans', () => {
    const { getAllByText } = render(<BusSeatLayOut />);
    const sSpans = getAllByText('s');

    // Expect the number of rendered "s" spans to be 2 rows * 12 columns = 24
    expect(sSpans.length).toBe(24);
  });

  // You can add more test cases for specific scenarios, if needed
});
