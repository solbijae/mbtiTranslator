import { Link } from 'react-router-dom';
import Heading from './Heading';
import { validMbti } from '../constants/Mbti';

function Description() {
    return (
        <div className='mainContainer'>
            <Heading />
            <ul>
                {Object.keys(validMbti).map(type => (
                    <li key={type}>
                        <Link to={`/mbti/${type}`}>{type}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Description;