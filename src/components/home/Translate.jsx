import { useRef, useState } from 'react';
import { CallGPT } from '../../apis/gpt';

const Translate = ({ mbti, setComplete, result, setResult }) => {
  const textAreaRef = useRef();
  const [loading, setLoading] = useState(false);

  const connectGPT = async (userInput) => {
    const param = {
      'mbti': mbti,
      'content': userInput
    }
    try {
      setLoading(true);
      // const message = await CallGPT(param);
      const message = `
        다리 다쳐서 통증과 불편함을 겪음. 발목, 팔목, 엉덩이 등 다양한 부위에서 통증을 느낌. 현재 상태가 힘들고 위로가 필요함
      `
      // input : 오늘 출근길에 넘어져서 다리 다쳐서 너무 아프고 발목도 삐고 팔목도 아프고 엉덩이고 아프고 다 쑤시고 너무 힘들어ㅜㅜㅜ 위로해줘ㅜㅜㅜ
      setTimeout(() => {
        setResult(message)
        setLoading(false);
        setComplete(true);
      }, 1000);

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
    <div className='flex flex-col items-center gap-10 h-60'>
      {loading && (
        <div className='flex flex-col items-center justify-center w-full h-full bg-black-10 fixed top-0'>
          <div className='w-40 h-40 border-5 border-blue border-t-transparent rounded-full animate-spin'></div>
        </div>
      )}
      {result && (
        <div className='flex-1 w-[90%] bg-cream transition-width duration-300 ease-in-out md:w-[80%] lg:w-[70%]'>
          <p className='mb-10 font-bold'>이렇게 번역되었어요!</p>
          {result}
        </div>
      )}
      {!result && (
        <div className='flex-1 w-[90%] bg-cream transition-width duration-300 ease-in-out md:w-[80%] lg:w-[70%]'>
          <textarea name='searchContent' id='searchContent' className=' bg-cream border border-gray outline-none shadow-inset-cream transition-all duration-[5000s] ease-in-out rounded-sm text-base' placeholder='어떤 말을 번역해드릴까요?' ref={textAreaRef}></textarea>
        </div>
      )}
      <button className='px-15 py-8  bg-orange border-none rounded-sm font-semibold text-dark text-base cursor-pointer' onClick={handleSubmit}>번역하기</button>
    </div>
  );
};

export default Translate;