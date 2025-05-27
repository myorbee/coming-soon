import React from 'react';
import { Mail, Send, File, Trash, Star } from 'lucide-react';
import SidebarItem from './SidebarItem';

const Sidebar: React.FC = () => {
  return (
    <div className="gmail-sidebar h-full bg-white border-r border-orbee-gray-200 flex-shrink-0 overflow-y-auto">
      <div className="p-4">
        <button className="flex items-center gap-2 bg-orbee-gray-100 hover:bg-orbee-gray-200 text-orbee-dark-text px-6 py-3 rounded-2xl shadow-sm transition-colors">
          <Mail className="h-5 w-5" />
          <span className="font-medium">Compose</span>
        </button>
      </div>

      <div className="mt-2">
        <SidebarItem 
          icon={<Mail />} 
          label="Inbox" 
          count={1} 
          active={true} 
        />
        <SidebarItem 
          icon={<Star />} 
          label="Starred" 
          count={0} 
        />
        <SidebarItem 
          icon={<Send />} 
          label="Sent" 
          count={0} 
        />
        <SidebarItem 
          icon={<File />} 
          label="Drafts" 
          count={0} 
        />
        <SidebarItem 
          icon={<Trash />} 
          label="Trash" 
          count={0} 
          hideOnMobile={true}
        />
      </div>
    </div>
  );
};

export default Sidebar;