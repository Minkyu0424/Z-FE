'use client';

import { SIDEBAR_ICONS, SIDEBAR_ICONS_SELECTED, SIDEBAR_PATHS } from '@/app/constants/common';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icons from '../ui/Icons';

const SideBar = () => {
  const pathname = usePathname();

  return (
    <div className="w-16 h-screen flex-col-center pt-6 gap-y-10 border-r border-r-main-2">
      <div className="relative w-16 h-16">
        <Image src="/logo_z.jpg" alt="로고사진" fill />
      </div>
      <div className="w-full flex flex-col items-center gap-y-[50px]">
        {SIDEBAR_ICONS.map((icon, i) => (
          <Link href={SIDEBAR_PATHS[i]}>
            <Icons
              key={icon.path}
              name={pathname === SIDEBAR_PATHS[i] ? SIDEBAR_ICONS_SELECTED[i] : icon}
              className="cursor-pointer"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
