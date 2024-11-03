import SideBar from '../components/common/layouts/SideBar';
import MainContainer from '../components/main/MainContainer';

export default function Home() {
  return (
    <div className="flex bg-white w-[480px]">
      <SideBar />
      <MainContainer />
    </div>
  );
}
