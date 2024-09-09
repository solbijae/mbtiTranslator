/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import { useRef, useState } from 'react';
import { CallGPT } from '../../apis/gpt';

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
      // const message = await CallGPT(param);
      const message = `
        다리 다쳐서 통증과 불편함을 겪음. 발목, 팔목, 엉덩이 등 다양한 부위에서 통증을 느낌. 현재 상태가 힘들고 위로가 필요함
      `
      // input : 오늘 출근길에 넘어져서 다리 다쳐서 너무 아프고 발목도 삐고 팔목도 아프고 엉덩이고 아프고 다 쑤시고 너무 힘들어ㅜㅜㅜ 위로해줘ㅜㅜㅜ
      setTimeout(() => {
        setResult(message)
        setLoading(false);
        setComplete(true);
      }, 1000);

    } catch (err) {
      // messageApi.open({
      //     type: 'error',
      //     content: 'API 요청 에러',
      // });
      // console.log(messageApi);
    } finally {
      // setLoading(false);
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
      css={css({
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '10px',
        alignItems: 'center',
      })}
    >
      {loading && (
        <div 
          css={css({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            position: 'fixed',
            top: '0',
          })}
        >
          <div 
            css={css({
              width: '40px',
              height: '40px',
              border: '5px solid var(--color-blue)',
              borderTop: '5px solid transparent',
              borderRadius: '50%',
              animation: `${rotate} 1s linear infinite`,
            })}
          ></div>
        </div>
      )}
      {result && (
        <div 
          css={css({
            position: 'absolute',
            width: '50%',
            height: '100%',
            backgroundColor: 'var(--color-cream)',
          })}
        >
          <p 
            css={css({
              marginBottom: '10px',
              fontWeight: 'bold',
            })}
          >이렇게 번역되었어요!</p>
          {result}
        </div>
      )}
      <div 
        css={css({
          width: '50%',
          height: '100%',
        })}
      >
        <textarea 
          css={css({
            width: '100%',
            padding: '10px',
          })}
          name='searchContent' 
          id='searchContent' 
          cols={100} 
          rows={50} 
          placeholder='어떤 말을 번역해드릴까요?' 
          ref={textAreaRef}>
        </textarea>
      </div>
      <button
        css={css({
          padding: '8px 15px',
          backgroundColor: 'var(--color-orange)',
          border: 'none',
          borderRadius: '3px',
          fontWeight: '600',
          color: '#25262b',
          fontSize: '1rem',
          cursor: 'pointer',
        })} 
        onClick={handleSubmit}
      >번역하기</button>
    </div>
  );
};

export default Translate;