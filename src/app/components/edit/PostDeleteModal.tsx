'use client';

import { DELETE_MODAL_TEXT } from '@/app/constants/post';
import { callDelete } from '@/app/utils/callApi';
import Button from '../common/ui/Button';
interface PostDeleteModalProps {
  postId: string;
  closeModal: () => void;
}

const PostDeleteModal = ({ postId, closeModal }: PostDeleteModalProps) => {
  const deletePost = () => {
    callDelete(`/api/past-order/delete?pastorder_id=${postId}`);
    closeModal();
  };

  return (
    <div className="fixed inset-0 flex-center bg-main-3 bg-opacity-10 z-50">
      <div className="w-[340px] h-[284px] gap-y-4 px-7 py-[30px] bg-black rounded-xl shadow flex flex-col text-white">
        <p className="text-2xl font-semibold">{DELETE_MODAL_TEXT[0]}</p>
        <p className="flex flex-wrap text-[15px] font-light">{DELETE_MODAL_TEXT[1]}</p>
        <div className="self-stretch h-[76px] flex-col justify-start items-start gap-3 flex mt-5">
          <Button
            buttonText="삭제"
            type="deleteModal"
            className="bg-[#E62222] text-white"
            onClickHandler={deletePost}
          />
          <Button buttonText="취소" type="deleteModal" className="bg-white text-main-0" onClickHandler={closeModal} />
        </div>
      </div>
    </div>
  );
};

export default PostDeleteModal;
