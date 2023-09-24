import { useState } from "react";
import {
  IoBarcodeOutline,
  IoLocateOutline,
  IoAddOutline,
  IoRemoveOutline,
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
  IoScanOutline,
  IoMapOutline,
  IoPinOutline,
  IoNavigateCircleOutline,
} from "react-icons/io5";

const MapTools = ({ maxHeight }) => {
  const [showTool, setShowTool] = useState(false);

  return (
    <div className='flex flex-col justify-between py-10 px-6 text-neutral-gray-700 h-full'>
      <div>
        <button className='bg-neutral-gray-100 p-3 rounded-lg hover:text-primary-brand-500 w-11'>
          <IoBarcodeOutline className='w-5 h-5' />
        </button>
      </div>
      <div className={`flex flex-col gap-4 ${maxHeight ? "hidden" : ""}`}>
        <button className='bg-neutral-gray-100 p-3 rounded-lg hover:text-primary-brand-500 w-11'>
          <IoLocateOutline className='w-5 h-5' />
        </button>
        <button className='bg-neutral-gray-100 p-3 rounded-lg hover:text-primary-brand-500 w-11'>
          <IoAddOutline className='w-5 h-5' />
        </button>
        <button className='bg-neutral-gray-100 p-3 rounded-lg hover:text-primary-brand-500 w-11'>
          <IoRemoveOutline className='w-5 h-5' />
        </button>
        <button
          onClick={() => setShowTool(!showTool)}
          className={`bg-neutral-gray-100 p-3 rounded-lg ${
            showTool
              ? "w-48 transition-all duration-500 ease-in-out"
              : "w-11 transition-all duration-500 ease-in-out"
          }`}
        >
          {showTool ? (
            <div className='flex gap-4 items-center'>
              <IoChevronBackCircleOutline className='w-5 h-5' />
              <div className='flex  gap-4 items-center'>
                <div className='h-5 bg-gray-400 w-[1px]' />
                <button className='hover:text-primary-brand-500'>
                  <IoScanOutline />
                </button>
                <button className='hover:text-primary-brand-500'>
                  <IoMapOutline />
                </button>
                <button className='hover:text-primary-brand-500'>
                  <IoNavigateCircleOutline />
                </button>
                <button className='hover:text-primary-brand-500'>
                  <IoPinOutline />
                </button>
              </div>
            </div>
          ) : (
            <IoChevronForwardCircleOutline className='w-5 h-5' />
          )}
        </button>
      </div>
    </div>
  );
};

export default MapTools;
