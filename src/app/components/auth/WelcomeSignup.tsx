import Image from 'next/image';
import Link from 'next/link';

const WelcomeSignup = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-black p-4">
      <div className="flex justify-center items-center ">
        <Image src="/logo_Z.jpg" alt="Logo" width={180} height={180} />
      </div>
      <h1 className="text-4xl font-bold mb-8">회원가입 완료!</h1>
      <div className="flex flex-col justify-center items-center gap-y-8">
        <Image src="/checkCircle.svg" alt="Logo" width={60} height={60} />
        <div className="text-center text-lg">
          <p className='mb-2'>Z에 가입하신걸 환영해요! </p>
          <p>지금 바로 Z를 시작해보세요</p>
        </div>
        <Link href="/login" className="bg-black text-lg text-white py-4 px-12 rounded-xl">
          시작하기
        </Link>
      </div>
    </div>
  );
};

export default WelcomeSignup;
