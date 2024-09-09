/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useRef, useState } from 'react';
import { validMbti } from '../../constants/Mbti';

const SearchMbti = ({setMbti}) => {
  const inputRef = useRef();
  const [feedback, setFeedback] = useState('');
  
  const chkValidMbti = () => {
    if (inputRef.current !== null) {
      const input = inputRef.current.value.trim().toUpperCase();
      if (Object.keys(validMbti).includes(input)) {
        setFeedback(`${input}로 변할게! 얍!`);
        setMbti(input);
      } else {
        setFeedback('올바른 MBTI를 입력해주세요!');
      }
    } else {
      setFeedback('MBTI를 입력해주세요!');
    }
  }

  return (
    <div 
      css={css({
        display: 'flex',
        justifyContent: 'center',
        gap: '5px',
        marginBottom: '15px',
      })}
    >
      <input 
        css={css({
          textAlign: 'center',
          backgroundColor: 'var(--color-cream)',
          border: 'var(--color-gray)',
          outline: 'none',
          boxShadow: '0 0 0px 1000px var(--color-cream) inset',
          transition: 'var(--color-cream) 5000s ease-in-out 0s',
          borderRadius: '3px',
          fontSize: '1rem',
        })}
        type='text' 
        placeholder='MBTI를 검색하세요!' 
        ref={inputRef} 
      />
      <button 
        css={css({
          padding: '8px 15px',
          backgroundColor: 'var(--color-orange)',
          border: 'none',
          borderRadius: '3px',
          fontWeight: '600',
          color: 'var(--color-dark)',
          fontSize: '1rem',
          cursor: 'pointer',
        })}
        onClick={chkValidMbti}
      >선택</button>
      {feedback && 
        <p 
          css={css({
            alignSelf: 'center',
            color: 'var(--color-white)',
          })}
        >{feedback}</p>
      }
    </div>
  )

};

export default SearchMbti;