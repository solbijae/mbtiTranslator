import { useState } from 'react';
import Heading from './Heading';
import SearchMbti from './home/SearchMbti'
import Translate from './home/Translate';

function Home() {
  const [mbti, setMbti] = useState('');

  return (
    <div className='mainContainer'>
      <Heading />
      <SearchMbti setMbti={setMbti} />
      <Translate mbti={mbti} />
    </div>
  )
}

export default Home;
