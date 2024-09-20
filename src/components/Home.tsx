/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from "./common/Container";
import ArrowBackIcon from '../icons/ArrowBackIcon';
import InfoIcon from '../icons/InfoIcon';
import Header from "./common/Header";
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
    <Container>
      <div 
        css={css`
          display: flex;
          justify-content: space-between;
        `}
      >
        <ArrowBackIcon 
          css={css`
            visibility: ${complete ? 'visible' : 'hidden'};
            cursor: pointer;
          `}
          onClick={handleArrowBackClick}
        />
        <InfoIcon
          css={css`
            cursor: pointer;
          `}
          onClick={handleInfoClick}
        />
      </div>
      <Header />
      <SearchMbti setMbti={setMbti} />
      <Translate 
        mbti={mbti} 
        setComplete={setComplete} 
        result={result} 
        setResult={setResult} 
      />
    </Container>
  );
}

export default Home;
