import { useRef } from 'react';
import { CallGPT } from '../apis/gpt';

const Translate = ({mbti}) => {
    const textAreaRef = useRef();

    const connectGPT = async (userInput) => {
        const param = {
            "mbti": mbti,
            "content": userInput
        }
        try {
            const message = await CallGPT(param);
            console.log(JSON.parse(message))
        } catch (err) {
            // messageApi.open({
            //     type: 'error',
            //     content: 'API 요청 에러',
            // });
            // console.log(messageApi);
        }
    }

    const handleSubmit = () => {
        const userInput = textAreaRef.current.value;
        connectGPT(userInput);
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