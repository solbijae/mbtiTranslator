import { useRef, useState } from 'react';
import { validMbti } from '../../constants/Mbti';

const SearchMbti = ({setMbti}) => {
    const inputRef = useRef();
    const [feedback, setFeedback] = useState('');
    
    const handleValidMbti = () => {
        if (inputRef.current !== null) {
            const input = inputRef.current.value.trim().toUpperCase();
            if (Object.keys(validMbti).includes(input)) {
                setFeedback(`${input}로 변할게! 얍!`);
                setMbti(input);
            } else {
                setFeedback('올바른 MBTI를 입력해주세요!')
            }
        } else {
            setFeedback('MBTI를 입력해주세요!')
        }
    }

    return (
        <div className='mbtiContainer'>
            <input type='text' placeholder='MBTI를 검색하세요!' id='searchMbti' ref={inputRef} />
            <button onClick={handleValidMbti}>선택</button>
            {feedback && <p>{feedback}</p>}
        </div>
    )

};

export default SearchMbti;