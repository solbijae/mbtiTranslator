import { useParams } from 'react-router-dom';
import { validMbti } from '../../constants/Mbti';
import Heading from '../Heading';

const MbtiDetail = () => {
    const { type } = useParams();
    const description = validMbti[type];

    return(
        <div className='mainContainer'>
            <Heading />
            <p>{type}</p>
            <p>{description}</p>
        </div>
    );
}

export default MbtiDetail;