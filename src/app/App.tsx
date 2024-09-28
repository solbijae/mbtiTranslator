import { ThemeProvider, Global } from '@emotion/react';
import { Routes, Route } from 'react-router-dom';
import theme from '../shared/theme/Theme';
import { GlobalStyle } from '../shared/styles/GlobalStyle';
import Home from '../pages/HomePage';
import Description from '../pages/DescriptionPage';
import MbtiDetail from '../pages/MbtiDetailPage';
import Error from '../pages/ErrorPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/mbti' element={<Description />}></Route>
        <Route path='/mbti/:type' element={<MbtiDetail />}></Route>
        <Route path='/*' element={<Error />}></Route>
    </Routes>
    </ThemeProvider>
  );
}

export default App;
