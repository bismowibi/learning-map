import Sidebar from "@/components/Sidebar";
import { Accordion, AccordionItem } from "@nextui-org/react";

const Index = () => {
  return (
    <main>
      <div className='flex'>
        <Sidebar />
        <div className='w-full bg-blue-400'>
          <h1 className='text-center text-4xl mt-20'>Map</h1>
        </div>
      </div>
    </main>
  );
};

export default Index;
