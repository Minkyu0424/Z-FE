import SideBar from '@/app/components/common/layouts/SideBar';
import OtherProfile from '@/app/components/profile/OtherProfile';


export default function mainPage() {
  return (
    <div className="flex h-screen bg-white w-[480px]">
      <SideBar/>
      <OtherProfile />
    </div>
  );
}