
import { FaRegCopyright } from 'react-icons/fa6';

const Copy = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-white ">
      <div className="flex justify-center items-center gap-2 text-[#212741] py-8 border-t-[1px] border-[#212741] mx-2 sm:mx-6 md:mx-12 lg:mx-20">
        <FaRegCopyright size={30} />
        <p>{currentYear} Axis Marketing Service. All right reserved.</p>
      </div>
    </div>
  );
};

export default Copy;
