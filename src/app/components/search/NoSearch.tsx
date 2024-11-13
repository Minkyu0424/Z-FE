import { noResultIcon } from '@/app/constants/iconPath';
import Icons from '../common/ui/Icons';

interface NoSearchProps {
  text: string;
}

const NoSearch = ({ text }: NoSearchProps) => {
  return (
    <div className="w-full flex-col-center gap-y-5 min-h-[560px] justify-center">
      <Icons name={noResultIcon} />
      <p className="w-[270px] text-center text-[14px]">{text}</p>
    </div>
  );
};

export default NoSearch;
