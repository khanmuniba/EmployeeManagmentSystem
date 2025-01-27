import React from 'react';  // Add this if using React < 17
import { FaRegFileAlt } from 'react-icons/fa';
import { MdOutlineFileDownload } from 'react-icons/md';
import { IoIosClose } from 'react-icons/io';

function Cards({ data }) {
  return (
    <div className='relative w-60 h-72 bg-pink-900 rounded-[25px] px-8 py-10 overflow-hidden'>
      {/* Icon */}
      <FaRegFileAlt />

      {/* Description */}
      <p className='text-black font-semibold mt-5 leading-tight'>{data.description}</p>

      {/* Footer Section */}
      <div className='Footer absolute bottom-0 bg-white w-full left-0'>
        <div className='flex items-center justify-between px-8 py-3 mb-5'>
          <h5>{data.fileSize}</h5>
          <span className='w-7 h-7 bg-purple-400 rounded-full flex items-center justify-center'>
            {data.close ? <IoIosClose /> : <MdOutlineFileDownload />}
          </span>
        </div>

        {/* Tag Section */}
        {data.tag.isOpen && (
          <div className={`Tag py-4 flex items-center justify-center w-full h-10 ${data.tag.tagColor==="blue"?"bg-blue-600":"bg-orange-400"}`}>
            <h5 className='font-semibold pl-6 pt-2'>{data.tag.tagTitle}</h5>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cards;
