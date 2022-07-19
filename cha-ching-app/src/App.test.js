import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('it renders header', () => {
    render(<App />);
    expect(screen.getByText("This is Cha-ching")).toBeVisible();
  });
})
