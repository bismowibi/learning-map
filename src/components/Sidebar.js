import { useState } from "react";
import Image from "next/image";

import {
  MapIcon,
  CircleStackIcon,
  TableCellsIcon,
} from "@heroicons/react/24/outline";

import iconSmall from "@/assets/brg-icon.png";
import iconLarge from "@/assets/brg-icon-large.png";

const Sidebar = () => {
  const [hide, setHide] = useState(true);

  return (
    <div
      className={`h-screen pt-12 ${
        hide
          ? "w-24 transition-all duration-300 ease-in-out"
          : "w-72 transition-all duration-300 ease-in-out"
      }`}
    >
      {/* Brand Icon */}
      <div className='h-16 px-6 flex items-center justify-center'>
        <Image src={hide ? iconSmall : iconLarge} height={hide ? 30 : "auto"} />
      </div>

      {/* Nav Items */}
      <div className='px-6 mt-6 space-y-4 text-[#777574]'>
        <div
          className={`flex gap-3 py-2 rounded-lg text-primary-brand-400  bg-[#FBFBFA] text-sm font-medium items-center ${
            hide ? "justify-center" : "pl-3"
          }`}
        >
          <MapIcon className='w-6 h-6' />
          <p
            className={`transition-opacity whitespace-nowrap ${
              hide ? "hidden" : ""
            }`}
          >
            2D GeoDashboard
          </p>
        </div>
        <div
          className={`flex gap-2 py-2 rounded-lg text-xs items-center h-6 ${
            hide ? "justify-center" : ""
          }`}
        >
          <div
            className={`h-[1px] bg-gray-300 w-full  ${hide ? "" : "hidden"}`}
          />
          <p
            className={`transition-opacity whitespace-nowrap text-[#B4B2AF] ${
              hide ? "hidden" : "pl-3"
            }`}
          >
            Geo-Map Management
          </p>
        </div>
        <div
          className={`flex gap-3 py-2 rounded-lg  hover:bg-[#FBFBFA] hover:text-[#F36A1D] text-xs items-center hover:cursor-pointer ${
            hide ? "justify-center" : "pl-3"
          }`}
        >
          <CircleStackIcon className='w-6 h-6' />
          <p
            className={`transition-opacity whitespace-nowrap ${
              hide ? "hidden" : ""
            }`}
          >
            Layer Management
          </p>
        </div>
        <div
          className={`flex gap-3 py-2 rounded-lg  hover:bg-[#FBFBFA] hover:text-[#F36A1D] text-xs items-center  hover:cursor-pointer ${
            hide ? "justify-center" : "pl-3"
          }`}
        >
          <TableCellsIcon className='w-6 h-6' />
          <p
            className={`transition-opacity whitespace-nowrap ${
              hide ? "hidden" : ""
            }`}
          >
            Layer Table
          </p>
        </div>
      </div>

      {/* Bottom Section */}

      <button className='mt-20' onClick={() => setHide(!hide)}>
        coba
      </button>
    </div>
  );
};

export default Sidebar;
