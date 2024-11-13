import SideBar from '@/app/components/common/layouts/SideBar';
import MyProfile from '@/app/components/profile/MyProfile';

export default async function SearchPage() {
  return (
    <div className="flex bg-white w-[480px]">
      <SideBar />
      <MyProfile />
    </div>
  );
}
