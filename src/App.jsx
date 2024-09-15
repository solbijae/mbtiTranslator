import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Description from './components/Description';
import MbtiDetail from './components/description/MbtiDetail';
import Error from './components/Error';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/mbti' element={<Description />}></Route>
      <Route path='/mbti/:type' element={<MbtiDetail />}></Route>
      <Route path='/*' element={<Error />}></Route>
    </Routes>
  );
};

export default App;
