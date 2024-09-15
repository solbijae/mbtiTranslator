import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '../icons/ArrowBackIcon';
import InfoIcon from '../icons/InfoIcon';
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
    <div className='p-60'>
      <div className='flex justify-between'>
        <ArrowBackIcon 
          style={{visibility: complete ? 'visible' : 'hidden', cursor: 'pointer'}} 
          onClick={handleArrowBackClick}
        />
        <InfoIcon
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
