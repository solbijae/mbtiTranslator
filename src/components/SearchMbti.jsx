import { useRef, useState } from 'react';

const validMbti = [
    'ISTJ', 'ISFJ', 'INFJ', 'INTJ',
    'ISTP', 'ISFP', 'INFP', 'INTP',
    'ESTP', 'ESFP', 'ENFP', 'ENTP',
    'ESTJ', 'ESFJ', 'ENFJ', 'ENTJ'
];

const SearchMbti = ({setMbti}) => {
    const inputRef = useRef();
    const [feedback, setFeedback] = useState('');
    
    const chkValidMbti = () => {
        if (inputRef.current !== null) {
            const input = inputRef.current.value.trim().toUpperCase();
            if (validMbti.includes(input)) {
                setFeedback(`${input}로 변할게요!`);
                setMbti(input);
            } else {
                setFeedback("올바른 MBTI를 입력해주세요!")
            }
        } else {
            setFeedback('MBTI를 입력해주세요!')
        }
    }

    return (
        <div className=''>
            <input type="text" placeholder="MBTI를 검색하세요!" id="searchMbti" ref={inputRef} />
            <button onClick={chkValidMbti}>선택</button>
            {feedback && <p>{feedback}</p>}
        </div>
    )

};

export default SearchMbti;