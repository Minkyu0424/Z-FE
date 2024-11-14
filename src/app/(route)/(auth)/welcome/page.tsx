import WelcomeSignup from '@/app/components/auth/WelcomeSignup';
import welcomeSignup from '@/app/components/auth/WelcomeSignup';

import Image from 'next/image';

const welcome = () => {
  return (
    <div className="flex justify-center items-center bg-white w-[480px]">
      <WelcomeSignup />
    </div>
  );
};
export default welcome;
