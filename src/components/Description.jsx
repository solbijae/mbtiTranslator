import { useNavigate, Link } from 'react-router-dom';
import { validMbti } from '../constants/Mbti';
import ArrowBackIcon from '../icons/ArrowBackIcon';
import Heading from './Heading';

function Description() {
  const navigate = useNavigate();
  const handleArrowBackClick = () => {
    navigate('/');
  };

  return (
    <div className='p-60'>
      <ArrowBackIcon 
        style={{cursor: 'pointer'}} 
        onClick={handleArrowBackClick}
      />
      <Heading />
      <ul>
        {Object.keys(validMbti).map(type => (
          <li className='text-white' key={type.toLowerCase()}>
              <Link to={`/mbti/${type.toLowerCase()}`}>{type}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Description;