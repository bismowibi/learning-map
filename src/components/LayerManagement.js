import { IoClose, IoSearch } from "react-icons/io5";
import { Accordion, Input, AccordionItem } from "@nextui-org/react";
import LayerCard from "./LayerCard";

const LayerManagement = ({ onClose, showLayer }) => {
  return (
    <div
      className={`py-12 px-4 bg-neutral-gray-50 rounded-tr-2xl rounded-br-2xl text-neutral-gray-700 h-screen overflow-hidden shadow-lg`}
    >
      {showLayer && (
        <section className='space-y-6'>
          {/* Title */}
          <div className='flex justify-between items-center'>
            <h1 className='text-xl'>Layers</h1>
            <button onClick={onClose}>
              <IoClose className='w-6 h-6' />
            </button>
          </div>
          {/* Searchbar */}
          <Input
            classNames={{
              base: "w-full h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper: "h-full font-normal text-sm",
            }}
            placeholder='Search Layer'
            size='sm'
            endContent={<IoSearch size={18} />}
            type='search'
          />
          {/* Layer List */}
          <div className='h-[42rem] overflow-y-auto'>
            <Accordion
              itemClasses={{
                title: "text-sm text-neutral-gray-700",
                subtitle: "text-xs",
              }}
            >
              <AccordionItem
                isCompact={true}
                subtitle='About Data Layer 1'
                title='Data Layer 1'
              >
                <div className='space-y-2'>
                  <LayerCard />
                  <LayerCard />
                  <LayerCard />
                  <LayerCard />
                  <LayerCard />
                </div>
              </AccordionItem>
            </Accordion>
            <Accordion
              itemClasses={{
                title: "text-sm text-neutral-gray-700",
                subtitle: "text-xs",
              }}
            >
              <AccordionItem
                isCompact={true}
                subtitle='About Data Layer 1'
                title='Data Layer 1'
              >
                <div className='space-y-2'>
                  <LayerCard />
                  <LayerCard />
                  <LayerCard />
                  <LayerCard />
                  <LayerCard />
                </div>
              </AccordionItem>
            </Accordion>
            <Accordion
              itemClasses={{
                title: "text-sm text-neutral-gray-700",
                subtitle: "text-xs",
              }}
            >
              <AccordionItem
                isCompact={true}
                subtitle='About Data Layer 1'
                title='Data Layer 1'
              >
                <div className='space-y-2'>
                  <LayerCard />
                  <LayerCard />
                  <LayerCard />
                  <LayerCard />
                  <LayerCard />
                </div>
              </AccordionItem>
            </Accordion>
            <Accordion
              itemClasses={{
                title: "text-sm text-neutral-gray-700",
                subtitle: "text-xs",
              }}
            >
              <AccordionItem
                isCompact={true}
                subtitle='About Data Layer 1'
                title='Data Layer 1'
              >
                <div className='space-y-2'>
                  <LayerCard />
                  <LayerCard />
                  <LayerCard />
                  <LayerCard />
                  <LayerCard />
                </div>
              </AccordionItem>
            </Accordion>
          </div>
          {/* Notice */}
          <div className='text-xs bg-neutral-gray-100 py-4 px-2 rounded-lg text-neutral-gray-500'>
            <p>
              About Data Layers The data layer list can be used to set the
              display of the active data on the map
            </p>
          </div>
        </section>
      )}
    </div>
  );
};

export default LayerManagement;
