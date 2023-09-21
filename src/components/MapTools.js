import { useState } from "react";
import {
  IoBarcodeOutline,
  IoLocateOutline,
  IoAddOutline,
  IoRemoveOutline,
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
} from "react-icons/io5";

const MapTools = () => {
  const [showTool, setShowTool] = useState();
  return (
    <div className='flex flex-col justify-between py-10 px-6 text-neutral-gray-700'>
      <div>
        <button className='bg-neutral-gray-100 p-3 rounded-lg hover:text-primary-brand-500'>
          <IoBarcodeOutline className='w-5 h-5' />
        </button>
      </div>
      <div className='flex flex-col gap-4'>
        <button className='bg-neutral-gray-100 p-3 rounded-lg hover:text-primary-brand-500'>
          <IoLocateOutline className='w-5 h-5' />
        </button>
        <button className='bg-neutral-gray-100 p-3 rounded-lg hover:text-primary-brand-500'>
          <IoAddOutline className='w-5 h-5' />
        </button>
        <button className='bg-neutral-gray-100 p-3 rounded-lg hover:text-primary-brand-500'>
          <IoRemoveOutline className='w-5 h-5' />
        </button>
        <button
          onClick={() => setShowTool(!showTool)}
          className={`bg-neutral-gray-100 p-3 rounded-lg hover:text-primary-brand-500`}
        >
          {showTool ? (
            <div>
              <IoChevronBackCircleOutline className='w-5 h-5' />
            </div>
          ) : (
            <div className='w-32 transition-all duration-1000'>
              <IoChevronForwardCircleOutline className='w-5 h-5' />
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default MapTools;
