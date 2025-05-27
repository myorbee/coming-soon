import React from 'react';
import { cn } from '@/lib/utils';

interface SidebarItemProps {
  icon?: React.ReactNode;
  label: string;
  count?: number;
  active?: boolean;
  hideOnMobile?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  label,
  count,
  active = false,
  hideOnMobile = false,
}) => {
  return (
    <div 
      className={cn(
        "flex items-center px-6 py-2 rounded-r-full cursor-pointer transition-colors",
        active ? "bg-orbee-violet-light/10 text-orbee-violet font-medium" : "hover:bg-orbee-gray-100",
        hideOnMobile && "hidden md:flex"
      )}
    >
      {icon && <span className="mr-4 text-lg">{icon}</span>}
      <span className="flex-grow">{label}</span>
      {count !== undefined && (
        <span className={cn(
          "text-sm",
          active ? "text-orbee-violet font-medium" : "text-orbee-gray-500"
        )}>
          {count > 0 ? count : ''}
        </span>
      )}
    </div>
  );
};

export default SidebarItem;