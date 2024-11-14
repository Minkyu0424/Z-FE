// EditProfileModal.js
import { X } from 'lucide-react';

const EditProfileModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const handleProfileUpdate = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-4">
            <button onClick={onClose} className="hover:bg-gray-100 p-2 rounded-full">
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-bold">프로필 수정</h2>
          </div>
          <button
            onClick={handleProfileUpdate}
            className="px-4 py-1 bg-black text-white rounded-full font-bold hover:bg-gray-800"
          >
            저장
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">이름</label>
            <input
              type="text"
              value={editForm.username}
              onChange={(e) => setEditForm({ ...editForm, username: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">소개</label>
            <textarea
              value={editForm.bio}
              onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              rows={3}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
