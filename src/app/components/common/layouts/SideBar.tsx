'use client';

import { SIDEBAR_ICONS, SIDEBAR_ICONS_SELECTED, SIDEBAR_PATHS } from '@/app/constants/common';
import { logoutIcon } from '@/app/constants/iconPath';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Icons from '../ui/Icons';

const SideBar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const handleLogout = async () => {
    const res = await fetch('/api/logout');

    const data = await res.json();
    router.push('/login');
  };

  return (
    <div className="w-16 h-min-screen flex-col-center pt-6 gap-y-10 border-r border-r-main-2">
      <Link className="relative w-[62px] h-[62px]" href="/">
        <Image src="/logo_z.jpg" alt="로고사진" fill />
      </Link>
      <div className="w-full flex flex-col items-center gap-y-[50px]">
        {SIDEBAR_ICONS.map((icon, i) => (
          <Link href={SIDEBAR_PATHS[i]} key={icon.path}>
            <Icons
              key={icon.path}
              name={pathname === SIDEBAR_PATHS[i] ? SIDEBAR_ICONS_SELECTED[i] : icon}
              className="cursor-pointer"
            />
          </Link>
        ))}
        <Icons name={logoutIcon} onClick={handleLogout} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default SideBar;
