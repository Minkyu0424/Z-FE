import SideBar from '@/app/components/common/layouts/SideBar';
import MessagesContainer from '@/app/components/messages/MessagesContainer';

export default async function MessagePage() {
  return (
    <div className="flex bg-white w-[480px]">
      <SideBar />
      <MessagesContainer />
    </div>
  );
}
