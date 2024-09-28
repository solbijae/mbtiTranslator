import { useNavigate, Link } from 'react-router-dom';
import { useMbtiKeys } from '../shared/hooks/useMbtiKeys';
import { Container } from '../widgets/Container';
import ArrowBackIcon from '../widgets/icons/ArrowBackIcon';
import Header from '../widgets/Header';

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
        {useMbtiKeys().map(type => (
          <li key={type.toLowerCase()}>
              <Link to={`/mbti/${type.toLowerCase()}`}>{type}</Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default Description;