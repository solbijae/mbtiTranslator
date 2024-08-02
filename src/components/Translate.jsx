import { useRef } from 'react';

const Translate = () => {
    const textAreaRef = useRef();

    const handleSubmit = () => {
        const userInput = textAreaRef.current.value;
    }

    return (
        <div>
            <div>
                <textarea name="searchContent" id="searchContent" cols={100} rows={50} placeholder='어떤 말을 번역해드릴까요?' ref={textAreaRef}></textarea>
            </div>
            <button onClick={handleSubmit}>번역하기</button>
        </div>
    );
};

export default Translate;