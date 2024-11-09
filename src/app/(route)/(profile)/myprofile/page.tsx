import SideBar from '@/app/components/common/layouts/SideBar';
import MyProfile from '@/app/components/profile/MyProfile';


export default function mainPage() {
  return (
    <div className="flex h-screen bg-white w-[480px]">
      <SideBar/>
      <MyProfile />
    </div>
  );
}