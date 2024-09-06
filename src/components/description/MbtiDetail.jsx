import { useParams, useNavigate } from 'react-router-dom';
import { validMbti } from '../../constants/Mbti';
import ArrowBack from '../../icons/ArrowBack';
import Heading from '../Heading';

const MbtiDetail = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const description = validMbti[type];

  const handleArrowBackClick = () => {
    navigate('/mbti');
  }

  return(
    <div className='mainContainer'>
      <ArrowBack 
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