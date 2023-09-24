import { useState } from "react";
import { Button } from "@nextui-org/react";
import {
  IoDocumentTextOutline,
  IoFileTrayFullOutline,
  IoFilterOutline,
  IoCloudDownloadOutline,
  IoCloseOutline,
  IoBrowsersOutline,
} from "react-icons/io5";

const BottomDrawer = ({ onClose, maxHeight, setMaxHeight }) => {
  return (
    <div
      className={`max-full bg-neutral-gray-50 rounded-t-2xl pt-6 px-10 ${
        maxHeight
          ? "h-[62rem] transition-all duration-1000 ease-in-out"
          : "h-96 transition-all duration-1000 ease-in-out"
      }`}
    >
      <section className='flex justify-between'>
        <div className='flex gap-4'>
          <Button
            className='hover:text-primary-brand-500 hover:border-primary-brand-300'
            variant='bordered'
            startContent={<IoDocumentTextOutline className='w-5 h-5' />}
          >
            Choose Data
          </Button>
          <Button
            className='hover:text-primary-brand-500 hover:border-primary-brand-300'
            variant='bordered'
            startContent={<IoFileTrayFullOutline className='w-5 h-5' />}
          >
            Show All Fields
          </Button>
          <Button
            className='hover:text-primary-brand-500 hover:border-primary-brand-300'
            variant='bordered'
            startContent={<IoFilterOutline className='w-5 h-5' />}
          ></Button>
        </div>
        <div className='flex gap-4'>
          <Button
            className='hover:text-primary-brand-500 hover:border-primary-brand-300'
            variant='bordered'
            isIconOnly
          >
            <IoCloudDownloadOutline className='w-5 h-5' />
          </Button>
          <Button
            onClick={() => setMaxHeight(!maxHeight)}
            variant='bordered'
            className={`hover:text-primary-brand-500 hover:border-primary-brand-300 ${
              maxHeight ? "text-primary-brand-500 border-primary-brand-300" : ""
            }`}
            isIconOnly
          >
            <IoBrowsersOutline className='w-5 h-5' />
          </Button>
          <Button
            onClick={onClose}
            className='hover:text-primary-brand-500 hover:border-primary-brand-300'
            variant='bordered'
            isIconOnly
          >
            <IoCloseOutline className='w-5 h-5' />
          </Button>
        </div>
      </section>
      <section className='pt-6 text-neutral-gray-500'>
        <h1 className='text-center text-sm font-light mt-10'>No Data Shown</h1>
      </section>
    </div>
  );
};

export default BottomDrawer;
