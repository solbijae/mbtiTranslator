/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { validMbti } from '../../constants/Mbti';
import ArrowBackIcon from '../../icons/ArrowBackIcon';
import Heading from '../Heading';

const MbtiDetail = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const description = validMbti[type];

  const handleArrowBackClick = () => {
    navigate('/mbti');
  }

  if (!validMbti[type]) {
    return <Navigate to='/error' />;
  }
  
  return(
    <div 
      css={css({
        padding: '60px',
      })}
    >
      <ArrowBackIcon 
        style={{cursor: 'pointer'}} 
        onClick={handleArrowBackClick}
      />
      <Heading />
      <h2 
        css={css({
          color: 'var(--color-white)',
          marginBottom: '10px',
        })}
      >{type}</h2>
      <p 
        css={css({
          color: 'var(--color-white)',
        })}
      >{description}</p>
    </div>
  );
}

export default MbtiDetail;