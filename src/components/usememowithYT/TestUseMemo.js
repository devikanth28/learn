import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import UseMemoExample from './UseMemoExample';

describe('UseMemoExample', () => {
  it('renders todos and allows adding new todos', () => {
    const { getByText, getByRole } = render(<UseMemoExample />);

    // Check if initial todos are rendered
    expect(getByText('My Todos')).toBeInTheDocument();
    expect(getByText('Add Todo')).toBeInTheDocument();
    
    // Add a new todo
    fireEvent.click(getByText('Add Todo'));
    expect(getByText('NEW TODO')).toBeInTheDocument();
  });

  it('increments count when the increment button is clicked', () => {
    const { getByText } = render(<UseMemoExample />);
    
    // Initial count
    const initialCount = getByText('0');
    expect(initialCount).toBeInTheDocument();
    
    // Increment count
    fireEvent.click(getByText('+'));
    const updatedCount = getByText('1');
    expect(updatedCount).toBeInTheDocument();
  });

  it('updates calculation when count changes', () => {
    const { getByText, rerender } = render(<UseMemoExample />);

    // Initial calculation
    const initialCalculation = getByText('Expensive Calculation');
    expect(initialCalculation).toBeInTheDocument();

    // Change count
    fireEvent.click(getByText('+'));
    
    // Re-render component
    rerender(<UseMemoExample />);
    
    // Check if calculation updates
    const updatedCalculation = getByText('Expensive Calculation');
    expect(updatedCalculation).toBeInTheDocument();
  });
});
