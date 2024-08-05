import { useState } from 'react';
import './App.css';
import Heading from './components/Heading';
import SearchMbti from './components/SearchMbti';
import Translate from './components/Translate';

function App() {
  const [mbti, setMbti] = useState('');

  return (
    <div className="mainContainer">
      <Heading />
      <SearchMbti setMbti={setMbti} />
      <Translate mbti={mbti} />
    </div>
  )
}

export default App;
