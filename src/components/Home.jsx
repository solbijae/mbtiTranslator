/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
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
    <div css={css({
      padding: '60px',
    })}>
      <div css={css({
          display: 'flex',
          justifyContent: 'space-between',
        })}
      >
        <ArrowBackIcon 
          css={css({
            visibility: complete ? 'visible' : 'hidden',
            cursor: 'pointer'
          })}
          onClick={handleArrowBackClick}
        />
        <InfoIcon
          css={css({
            cursor: 'pointer'
          })}
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
