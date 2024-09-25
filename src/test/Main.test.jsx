import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react'; 
import '@testing-library/jest-dom'; 
import { theme } from '../Theme';
import Home from '../components/Home';

describe('Home', () => {
  test('Render Home', () => {
    render(
      <MemoryRouter>
        <ThemeProvider theme={theme}>
          <Home />
        </ThemeProvider>
      </MemoryRouter>
    );
    expect(screen.getByText('MBTI 번역기')).toBeInTheDocument();
  });
});
