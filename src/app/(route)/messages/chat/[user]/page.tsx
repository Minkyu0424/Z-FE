import SideBar from '@/app/components/common/layouts/SideBar';
import ChattingContainer from '@/app/components/messages/ChattingContainer';

export default async function MessagePage() {
  return (
    <div className="flex bg-white w-[480px]">
      <SideBar />
      <ChattingContainer />
    </div>
  );
}
