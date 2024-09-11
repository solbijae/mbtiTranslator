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
    <div className='mainContainer'>
      <ArrowBackIcon 
        style={{cursor: 'pointer'}} 
        onClick={handleArrowBackClick}
      />
      <Heading />
      <h2 className='mbtiType'>{type}</h2>
      <p className='mbtiDetail'>{description}</p>
    </div>
  );
}

export default MbtiDetail;