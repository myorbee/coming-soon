import React from 'react';
import Image from 'next/image'
import { Search, Menu, Settings } from 'lucide-react';

const TopBar: React.FC = () => {
  return (
    <div className="h-16 border-b border-orbee-gray-200 flex items-center px-4 gap-4">
      <div className="md:hidden">
        <button className="p-2 rounded-full hover:bg-orbee-gray-100">
          <Search className="h-6 w-6 text-orbee-gray-600" />
        </button>
      </div>
      
      <div className="flex-grow flex justify-center md:justify-start">
        
        <div className="text-2xl font-bold text-orbee-violet">
         
          <span className="font-funnel">Orbee</span>
        </div>
      </div>
      
      <div className="hidden md:flex flex-grow mx-4">
        <div className="relative max-w-2xl mx-auto w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-orbee-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search mail"
            className="block w-full pl-10 pr-3 py-2 border border-orbee-gray-300 rounded-lg bg-orbee-gray-100 focus:bg-white focus:ring-2 focus:ring-orbee-violet-light focus:border-orbee-violet-light transition-colors"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <button className="p-2 rounded-full hover:bg-orbee-gray-100">
          <Settings className="h-5 w-5 text-orbee-gray-600" />
        </button>
        <div className="h-8 w-8 rounded-full bg-orbee-violet flex items-center justify-center text-white font-medium">
          O
        </div>
      </div>
    </div>
  );
};

export default TopBar