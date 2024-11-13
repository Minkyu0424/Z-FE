import SideBar from '../components/common/layouts/SideBar';
import MainContainer from '../components/main/MainContainer';

export default function mainPage() {
  return (
    <div className="flex h-screen bg-white w-[480px] rounded-lg">
      <SideBar />
      <MainContainer />
    </div>
  );
}
