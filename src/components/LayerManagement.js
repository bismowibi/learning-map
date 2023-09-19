import { IoClose } from "react-icons/io5";

const LayerManagement = ({ showLayer, onClose }) => {
  return (
    <div
      className={`py-12 px-6 text-neutral-800 ${
        showLayer ? "w-80 transition-all duration-300 ease-in-out" : "hidden"
      }`}
    >
      {/* Title */}
      <div className='flex justify-between items-center'>
        <h1 className='text-xl'>Layers</h1>
        <button onClick={onClose}>
          <IoClose className='w-6 h-6' />
        </button>
      </div>
    </div>
  );
};

export default LayerManagement;
