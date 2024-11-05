import { closeIconSmall } from '@/app/constants/iconPath';
import Icons from '../common/ui/Icons';

interface MainImagesProps {
  uploads: ImageFileTypes[];
  handleDeleteImage: (index: number) => void;
}

const MainImages = ({ uploads, handleDeleteImage }: MainImagesProps) => {
  //메인에서 이미지를 나열하는 컴포넌트

  return (
    <div className="mt-3 pl-12 w-full flex flex-col gap-y-2">
      <div className="flex gap-x-2">
        {uploads.slice(0, 2).map((upload, index) => (
          <div key={index} className=" w-1/2 relative rounde-xl">
            <img src={upload.preview} alt="preview" className="flex-1 h-40 object-cover rounded-xl" />
            <div
              onClick={() => handleDeleteImage(index)}
              className="absolute top-1 left-1 bg-black bg-opacity-50 rounded-full w-6 h-6 flex-center"
            >
              <Icons name={closeIconSmall} />
            </div>
          </div>
        ))}
      </div>
      {uploads.length > 2 && (
        <div className="flex gap-x-2">
          {uploads.slice(2).map((upload, index) => (
            <div key={index} className=" w-1/2 relative rounde-xl">
              <img src={upload.preview} alt="preview" className="flex-1 h-40 object-cover rounded-xl" />
              <div
                onClick={() => handleDeleteImage(index)}
                className="absolute top-1 left-1 bg-black bg-opacity-50 rounded-full w-6 h-6 flex-center"
              >
                <Icons name={closeIconSmall} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MainImages;
