import { useState } from "react";
import Image from "next/image";

import { Avatar } from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IoLayersOutline,
  IoPrismOutline,
  IoMapOutline,
  IoHelpCircleOutline,
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
} from "react-icons/io5";

import LayerManagement from "./LayerManagement";
import MapTools from "./MapTools";

import iconSmall from "@/assets/brg-icon.png";
import iconLarge from "@/assets/brg-icon-large.png";

const Sidebar = () => {
  const [hide, setHide] = useState(true);
  const [showLayer, setShowLayer] = useState();

  return (
    <div className='flex'>
      <section
        className={`flex flex-col justify-between h-screen py-8 shadow-lg bg-neutral-gray-50 ${
          hide
            ? "w-24 transition-all duration-300 ease-in-out"
            : "w-72 transition-all duration-300 ease-in-out"
        }`}
      >
        {/* Brand Icon */}
        <div>
          <div className='h-16 px-6 flex items-center justify-center'>
            <Image src={hide ? iconSmall : iconLarge} height={hide ? 30 : 28} />
          </div>
          {/* Nav Items */}
          <div className='px-6 mt-6 space-y-4 text-[#777574]'>
            <div
              className={`flex gap-3 py-2 rounded-lg text-primary-brand-400  bg-[#FBFBFA] text-sm font-medium items-center ${
                hide ? "justify-center" : "pl-3"
              }`}
            >
              <IoMapOutline className='w-5 h-5' />
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
                className={`h-[1px] bg-gray-300 w-full  ${
                  hide ? "" : "hidden"
                }`}
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
              onClick={() => {
                setShowLayer(!showLayer);
                setHide(true);
              }}
              className={`flex gap-3 py-2 rounded-lg  hover:bg-[#FBFBFA] hover:text-primary-brand-400 text-xs items-center hover:cursor-pointer ${
                hide ? "justify-center" : "pl-3"
              } ${showLayer ? "text-primary-brand-400" : ""}`}
            >
              <IoLayersOutline className='w-5 h-5' />
              <p
                className={`transition-opacity whitespace-nowrap ${
                  hide ? "hidden" : ""
                }`}
              >
                Layer Management
              </p>
            </div>
            <div
              className={`flex gap-3 py-2 rounded-lg  hover:bg-[#FBFBFA] hover:text-primary-brand-400 text-xs items-center  hover:cursor-pointer ${
                hide ? "justify-center" : "pl-3"
              }`}
            >
              <IoPrismOutline className='w-5 h-5' />
              <p
                className={`transition-opacity whitespace-nowrap ${
                  hide ? "hidden" : ""
                }`}
              >
                Layer Table
              </p>
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className='px-6 mt-6 space-y-4 text-[#777574]'>
          <div
            className={`flex gap-3 py-2 rounded-lg  hover:bg-[#FBFBFA] hover:text-primary-brand-400 text-xs items-center hover:cursor-pointer ${
              hide ? "justify-center" : "pl-3"
            }`}
          >
            <IoHelpCircleOutline className='w-[22px] h-auto' />
            <p
              className={`transition-opacity whitespace-nowrap ${
                hide ? "hidden" : ""
              }`}
            >
              Bantuan
            </p>
          </div>
          <div
            onClick={() => !showLayer && setHide(!hide)}
            className={`flex gap-3 py-2 rounded-lg  hover:bg-[#FBFBFA] hover:text-primary-brand-400 text-xs items-center  hover:cursor-pointer ${
              hide ? "justify-center" : "pl-3"
            } ${
              showLayer
                ? "text-neutral-gray-400  hover:text-neutral-gray-400 hover:cursor-not-allowed"
                : ""
            }`}
          >
            <button
              disabled={showLayer}
              className='disabled:hover:cursor-not-allowed'
            >
              {hide ? (
                <IoChevronForwardCircleOutline className='w-5 h-5' />
              ) : (
                <IoChevronBackCircleOutline className='w-5 h-5' />
              )}
            </button>

            <p
              className={`transition-opacity whitespace-nowrap ${
                hide ? "hidden" : ""
              }`}
            >
              Minimize
            </p>
          </div>
          <div
            className={`flex items-center gap-4 pt-2  ${
              hide ? "justify-center" : "pl-3"
            }`}
          >
            <Avatar
              size='sm'
              isBordered
              radius='lg'
              src='https://i.pravatar.cc/150?u=a042581f4e29026704d'
            />
            <div className={`text-xs ${hide ? "hidden" : ""}`}>
              <p className='font-medium'>#User2023</p>
              <p>user@braga.co.id</p>
            </div>
          </div>
        </div>
      </section>
      {/* Layer Management Sidebar */}
      <div
        className={
          showLayer
            ? "w-80 transition-all duration-600 ease-in-out"
            : "w-0 transition-all duration-600 ease-in-out invisible"
        }
      >
        <LayerManagement
          showLayer={showLayer}
          onClose={() => setShowLayer(!showLayer)}
        />
      </div>
      {/* Map Tools */}
      <MapTools />
    </div>
  );
};

export default Sidebar;
