import { useNavigate } from 'react-router-dom';
import HomeIcon from '../icons/HomeIcon';

const Error = () => {
  const navigate = useNavigate();
  const handleToHome = () => {
    navigate('/');
  };

  return (
    <div className='p-60'>
      <h1 className='text-center mb-25 text-white'>NOT FOUND</h1>
      <div className='text-center my-80 leading-relaxed text-white'>
        <p>죄송합니다, 페이지를 찾을 수 없습니다.</p>
        <p>존재하지 않는 주소를 입력하셨거나,</p>
        <p>요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.</p>
      </div>
      <div className='flex justify-center items-center gap-5 cursor-pointer leading-none; text-white font-bold' onClick={handleToHome}>
        <HomeIcon />
        <span>메인으로 가기</span>
      </div>
    </div>
  );
};

export default Error;