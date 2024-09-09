/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useNavigate } from 'react-router-dom';
import HomeIcon from '../icons/HomeIcon';

const Error = () => {
  const navigate = useNavigate();
  const handleToHome = () => {
    navigate('/');
  };

  return (
    <div 
      css={css({
        padding: '60px',
      })}
    >
      <h1 
        css={css({
          textAlign: 'center',
          marginBottom: '25px',
          color: 'var(--color-white)',
        })}
      >NOT FOUND</h1>
      <div 
        css={css({
          textAlign: 'center',
          margin: '80px 0',
          lineHeight: '1.6',
          color: 'var(--color-white)',
        })}
      >
        <p>죄송합니다, 페이지를 찾을 수 없습니다.</p>
        <p>존재하지 않는 주소를 입력하셨거나,</p>
        <p>요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.</p>
      </div>
      <div 
        css={css({
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '5px',
          cursor: 'pointer',
          lineHeight: '1',
          color: 'var(--color-white)',
          fontWeight: 'bold',
        })}
        onClick={handleToHome}
      >
        <HomeIcon />
        <span>메인으로 가기</span>
      </div>
    </div>
  );
};

export default Error;