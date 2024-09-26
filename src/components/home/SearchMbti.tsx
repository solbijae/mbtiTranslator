/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useRef, useState } from 'react';
import { validMbti } from '../../constants/Mbti';
import { BaseButton } from "../common/BaseButton";

const SearchMbti = ({setMbti}: {setMbti: (mbti: string) => void}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [feedback, setFeedback] = useState('');

  const handleValidMbti = () => {
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
      css={css`
        display: flex;
        justify-content: center;
        gap: 5px;
        margin-bottom: 15px;
      `}
    >
      <input 
        css={theme => css`
          text-align: center;
          background-color: ${theme.color.cream};
          border: ${theme.color.gray};
          outline: none;
          box-shadow: 0 0 0px 1000px ${theme.color.cream} inset;
          transition: ${theme.color.cream} 5000s ease-in-out 0s;
          border-radius: 3px;
          font-size: 1rem;
        `}
        type='text' 
        placeholder='MBTI를 검색하세요!' 
        ref={inputRef} 
      />
      <BaseButton onClick={handleValidMbti}>선택</BaseButton>
      {feedback && 
        <p 
          css={theme => css`
            align-self: center;
            color: ${theme.color.white};
          `}
        >{feedback}</p>
      }
    </div>
  )

  };

  export default SearchMbti;