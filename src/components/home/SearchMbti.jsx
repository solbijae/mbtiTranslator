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
        <div className='flex justify-center gap-5 mb-15'>
            <input type='text' placeholder='MBTI를 검색하세요!' id='searchMbti' className='text-center bg-cream border-gray outline-none shadow-inset-cream transition-colors duration-5000 ease-in-out rounded-sm text-base' ref={inputRef} />
            <button className='px-15 py-8  bg-orange border-none rounded-sm font-semibold text-dark text-base cursor-pointer' onClick={handleValidMbti}>선택</button>
            {feedback && <p className='self-center text-white'>{feedback}</p>}
        </div>
    )

};

export default SearchMbti;