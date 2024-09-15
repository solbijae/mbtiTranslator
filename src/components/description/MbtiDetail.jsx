import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { validMbti } from '../../constants/Mbti';
import ArrowBackIcon from '../../icons/ArrowBackIcon';
import Heading from '../Heading';

const MbtiDetail = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const description = validMbti[type.toUpperCase()];

  const handleArrowBackClick = () => {
    navigate('/mbti');
  }

  if (!validMbti[type.toUpperCase()]) {
    return <Navigate to='/error' />;
  }
  
  return(
    <div className='p-60'>
      <ArrowBackIcon 
        style={{cursor: 'pointer'}} 
        onClick={handleArrowBackClick}
      />
      <Heading />
      <h2 className='text-white mb-10'>{type}</h2>
      <p className='text-white'>{description}</p>
    </div>
  );
}

export default MbtiDetail;