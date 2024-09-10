/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useNavigate, Link } from 'react-router-dom';
import { validMbti } from '../constants/Mbti';
import { Container } from "./common/Container";
import ArrowBackIcon from '../icons/ArrowBackIcon';
import Header from "./common/Header";

function Description() {
  const navigate = useNavigate();
  const handleArrowBackClick = () => {
    navigate('/');
  };

  return (
    <Container>
      <ArrowBackIcon 
        style={{cursor: 'pointer'}} 
        onClick={handleArrowBackClick}
      />
      <Header />
      <ul>
        {Object.keys(validMbti).map(type => (
          <li key={type}>
              <Link to={`/mbti/${type}`}>{type}</Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Description;