import React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event'

describe('Teste App.js', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('Verifica o funcionamento do link Home', async () => {
    const homeLink = screen.getByRole('link', { name: /home/i });
    expect(homeLink).toBeInTheDocument();

    userEvent.click(homeLink);
    const homeScreen = await 

  });
});
