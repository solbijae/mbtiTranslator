/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { validMbti } from '../../constants/Mbti';
import { Container } from "../common/Container";
import ArrowBackIcon from '../../icons/ArrowBackIcon';
import Header from "../common/Header";

const MbtiDetail = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const description = validMbti[type?.toUpperCase() as keyof typeof validMbti];

  const handleArrowBackClick = () => {
    navigate('/mbti');
  }

  if (!validMbti[type?.toUpperCase() as keyof typeof validMbti]) {
    return <Navigate to='/error' />;
  }
  
  return(
    <Container>
      <ArrowBackIcon 
        style={{cursor: 'pointer'}} 
        onClick={handleArrowBackClick}
      />
      <Header />
      <h2 
        css={theme => css`
          color: ${theme.color.white};
          margin-bottom: 10px;
        `}
      >{type}</h2>
      <p 
        css={theme => css`
          color: ${theme.color.white};
        `}
      >{description}</p>
    </Container>
  );
}

export default MbtiDetail;