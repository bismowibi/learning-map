import { IoEyeOutline, IoSunnyOutline } from "react-icons/io5";

const LayerTitle = () => {
  return (
    <div className='border border-neutral-300 rounded-lg w-full py-2 px-2   flex justify-between'>
      <div className='flex gap-2'>
        <div className='w-1 h-full bg-primary-brand-400 rounded-lg' />
        <div>
          <h1 className='text-xs'>Daerah Rawan Banjir</h1>
          <p className='text-[10px] text-neutral-gray-500 '>MULTIPOLYGON</p>
        </div>
      </div>
      <div className='flex gap-2 my-2'>
        <button className='text-neutral-gray-800'>
          <IoEyeOutline />
        </button>
        <button className='text-neutral-gray-400'>
          <IoSunnyOutline />
        </button>
      </div>
    </div>
  );
};

export default LayerTitle;
