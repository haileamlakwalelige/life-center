// import React from 'react'

import { FaRegCopyright } from 'react-icons/fa6';

const Copy = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-[#212741]">
      <div className="flex justify-center items-center gap-2 text-white py-8">
        <FaRegCopyright size={30} />
        <p>{currentYear} Habesha Digital Marketing. All right reserved.</p>
      </div>
    </div>
  );
};

export default Copy;
