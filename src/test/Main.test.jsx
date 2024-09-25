import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react'; 
import '@testing-library/jest-dom'; 
import { theme } from '../Theme';
import Home from '../components/Home';
import Description from '../components/Description';
import MbtiDetail from '../components/description/MbtiDetail';
import Error from '../components/Error';

describe('Home', () => {
  test('Home 컴포넌트 렌더링', () => {
    render(
      <MemoryRouter>
        <ThemeProvider theme={theme}>
          <Home />
        </ThemeProvider>
      </MemoryRouter>
    );
    expect(screen.getByText('MBTI 번역기')).toBeInTheDocument();
  });

  test('Description 컴포넌트 렌더링', () => {
    render(
      <MemoryRouter>
        <ThemeProvider theme={theme}>
          <Description />
        </ThemeProvider>
      </MemoryRouter>
    );
    expect(screen.getByText('MBTI 번역기')).toBeInTheDocument();
  });

  test('Description 컴포넌트가 올바르게 렌더링되는지 확인', () => {
    render(
      <MemoryRouter>
        <ThemeProvider theme={theme}>
          <Description />
        </ThemeProvider>
      </MemoryRouter>
    );
    expect(screen.getByText('MBTI 번역기')).toBeInTheDocument();
  });

  test('MbtiDetail 컴포넌트가 올바르게 렌더링되는지 확인', () => {
    render(
      <MemoryRouter initialEntries={['/mbti/INTJ']}>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/mbti/:type" element={<MbtiDetail />} />
          </Routes>
        </ThemeProvider>
      </MemoryRouter>
    );
    expect(screen.getByText('MBTI 번역기')).toBeInTheDocument();
  });

  test('Error 컴포넌트가 올바르게 렌더링되는지 확인', () => {
    render(
      <MemoryRouter>
        <ThemeProvider theme={theme}>
          <Error />
        </ThemeProvider>
      </MemoryRouter>
    );
    expect(screen.getByText('NOT FOUND')).toBeInTheDocument();
  });
});
