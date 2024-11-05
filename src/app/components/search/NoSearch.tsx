import { noResultIcon } from '@/app/constants/iconPath';
import { NO_RESULT_TEXT } from '@/app/constants/search';
import Icons from '../common/ui/Icons';

const NoSearch = () => {
  return (
    <div className="w-full flex-col-center gap-y-5 min-h-[560px] justify-center">
      <Icons name={noResultIcon} />
      <p className="w-[275px] text-center text-[14px]">{NO_RESULT_TEXT}</p>
    </div>
  );
};

export default NoSearch;
