/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import { useRef, useState } from 'react';
import { CallGPT } from '../../apis/gpt';
import { BaseButton } from "../common/BaseButton";

const Translate = ({ mbti, setComplete, result, setResult }) => {
  const textAreaRef = useRef();
  const [loading, setLoading] = useState(false);

  const connectGPT = async (userInput) => {
    const param = {
      'mbti': mbti,
      'content': userInput
    }
    
    try {
      setLoading(true);
      // input : 오늘 출근길에 넘어져서 다리 다쳐서 너무 아프고 발목도 삐고 팔목도 아프고 엉덩이고 아프고 다 쑤시고 너무 힘들어ㅜㅜㅜ 위로해줘ㅜㅜㅜ
      // const message = await CallGPT(param);
      const message = `
        다리 다쳐서 통증과 불편함을 겪음. 발목, 팔목, 엉덩이 등 다양한 부위에서 통증을 느낌. 현재 상태가 힘들고 위로가 필요함
      `
      new Promise((resolve) => {
        resolve(message);
      })
      .then((msg) => {
        setResult(msg);
        setLoading(false);
        setComplete(true);
      });
    } catch (err) {
      // messageApi.open({
      //     type: 'error',
      //     content: 'API 요청 에러',
      // });
      alert('번역에 실패했습니다. 잠시후 다시 시도해주세요!')
    } finally {
      setLoading(false);
    }
  }

  const handleSubmit = () => {
    const userInput = textAreaRef.current.value;
    connectGPT(userInput);
  }

  const rotate = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `;

  return (
    <div 
      css={css`
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
        align-items: center;
      `}
    >
      {loading && (
        <div 
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.1);
            position: fixed;
            top: 0;
          `}
        >
          <div 
            css={theme => css`
              width: 40px;
              height: 40px;
              border: 5px solid ${theme.colors.blue};
              border-top: 5px solid transparent;
              border-radius: 50%;
              animation: ${rotate} 1s linear infinite;
            `}
          ></div>
        </div>
      )}
      {result && (
        <div 
          css={theme => css`
            position: absolute;
            width: 90%;
            height: 100%;
            background-color: ${theme.colors.cream};
            transition: width 0.3s ease-in-out;
            
            @media (min-width: 769px) and (max-width: 1024px) {
              width: 80%;
            }
            
            @media (min-width: 1025px) {
              width: 70%;
            }
          `}
        >
          <p 
            css={css`
              margin-bottom: 10px;
              font-weight: bold;
            `}
          >이렇게 번역되었어요!</p>
          {result}
        </div>
      )}
      <div 
        css={css`
          width: 90%;
          height: 100%;
          transition: width 0.3s ease-in-out;

          @media (min-width: 769px) and (max-width: 1024px) {
            width: 80%;
          }

          @media (min-width: 1025px) {
            width: 70%;
          }
        `}
      >
        <textarea 
          css={css`
            width: 100%;
            padding: 10px;
          `}
          name='searchContent' 
          id='searchContent' 
          cols={100} 
          rows={50} 
          placeholder='어떤 말을 번역해드릴까요?' 
          ref={textAreaRef}>
        </textarea>
      </div>
      <BaseButton
        onClick={handleSubmit}
      >번역하기</BaseButton>
    </div>
  );
};

export default Translate;