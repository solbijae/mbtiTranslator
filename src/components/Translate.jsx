import { useRef, useState } from 'react';
import { CallGPT } from '../apis/gpt';

const Translate = ({mbti}) => {
    const textAreaRef = useRef();
    const [loading, setLoading] = useState(false);

    const connectGPT = async (userInput) => {
        const param = {
            "mbti": mbti,
            "content": userInput
        }
        try {
            setLoading(true);
            // const message = await CallGPT(param);
            const message = `
                - 다리 다쳐서 통증과 불편함을 겪음
                - 발목, 팔목, 엉덩이 등 다양한 부위에서 통증을 느낌
                - 현재 상태가 힘들고 위로가 필요함
            `
            // input : 오늘 출근길에 넘어져서 다리 다쳐서 너무 아프고 발목도 삐고 팔목도 아프고 엉덩이고 아프고 다 쑤시고 너무 힘들어ㅜㅜㅜ 위로해줘ㅜㅜㅜ
            setTimeout(() => {
                setLoading(false);
            }, 100000);

        } catch (err) {
            // messageApi.open({
            //     type: 'error',
            //     content: 'API 요청 에러',
            // });
            // console.log(messageApi);
        } finally {
            // setLoading(false);
        }
    }

    const handleSubmit = () => {
        const userInput = textAreaRef.current.value;
        connectGPT(userInput);
    }

    return (
        <div className='contentContainer'>
            {loading && (
                <div className='loadingWrap'>
                    <div className='loadingSpinner'></div>
                </div>
            )}
            <div>
                <textarea name="searchContent" id="searchContent" cols={100} rows={50} placeholder='어떤 말을 번역해드릴까요?' ref={textAreaRef}></textarea>
            </div>
            <button onClick={handleSubmit}>번역하기</button>
        </div>
    );
};

export default Translate;