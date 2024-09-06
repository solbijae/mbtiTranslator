import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBack from '../icons/ArrowBack';
import Info from '../icons/Info';
import Heading from './Heading';
import SearchMbti from './home/SearchMbti'
import Translate from './home/Translate';

function Home() {
  const navigate = useNavigate();

  const [mbti, setMbti] = useState('');
  const [complete, setComplete] = useState(false);
  const [result, setResult] = useState('');

  const handleArrowBackClick = () => {
    setComplete(false);
    setResult('');
  };

  const handleInfoClick = () => {
    navigate('/mbti');
  };

  return (
    <div className='mainContainer'>
      <div className='homeIconContainer'>
        <ArrowBack 
          style={{visibility: complete ? 'visible' : 'hidden', cursor: 'pointer'}} 
          onClick={handleArrowBackClick}
        />
        <Info
          style={{cursor: 'pointer'}} 
          onClick={handleInfoClick}
        />
      </div>
      <Heading />
      <SearchMbti setMbti={setMbti} />
      <Translate 
        mbti={mbti} 
        setComplete={setComplete} 
        result={result} 
        setResult={setResult} 
      />
    </div>
  );
};

export default Home;
