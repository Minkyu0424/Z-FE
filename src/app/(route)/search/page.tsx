import SideBar from '@/app/components/common/layouts/SideBar';
import SearchContainer from '@/app/components/search/SearchContainer';

export default async function SearchPage() {
  return (
    <div className="flex bg-white w-[480px]">
      <SideBar />
      <SearchContainer />
    </div>
  );
}
