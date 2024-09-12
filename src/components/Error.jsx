/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useNavigate } from 'react-router-dom';
import { Container } from "./common/Container";
import { Heading } from "../components/common/Heading"
import HomeIcon from '../icons/HomeIcon';

const Error = () => {
  const navigate = useNavigate();
  const handleToHome = () => {
    navigate('/');
  };

  return (
    <Container>
      <Heading>NOT FOUND</Heading>
      <div 
        css={theme => css`
          text-align: center;
          margin: 80px 0;
          line-height: 1.6;
          color: ${theme.colors.white};
        `}
      >
        <p>죄송합니다, 페이지를 찾을 수 없습니다.</p>
        <p>존재하지 않는 주소를 입력하셨거나,</p>
        <p>요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.</p>
      </div>
      <div 
        css={theme => css`
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 5px;
          cursor: pointer;
          line-height: 1;
          color: ${theme.colors.white};
          font-weight: bold;
        `}
        onClick={handleToHome}
      >
        <HomeIcon />
        <span>메인으로 가기</span>
      </div>
    </Container>
  );
};

export default Error;