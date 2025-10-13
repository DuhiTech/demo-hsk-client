import { cn } from '@/lib/utils';
import { ArrowLeftToLine, ArrowRightToLine } from 'lucide-react';
import { useState } from 'react';

const Sidebar = () => {
  const [isCollapse, setIsCollapse] = useState(false);

  const toggleSidebar = () => {
    setIsCollapse((prev) => !prev);
  };

  return (
    <div className={cn('card h-full w-72 overflow-hidden p-0', { 'w-20': isCollapse })}>
      <div className="flex h-16 items-center justify-center gap-4">
        {!isCollapse && (
          <div className="flex flex-1 items-center justify-center">
            <img src="/img/logo.png" alt="ChineseHSK" className="h-12" />
          </div>
        )}
        {/* <button className="bg-primary cursor-pointer rounded-bl-2xl p-4 text-white" onClick={toggleSidebar}>
          <ArrowLeftToLine className="size-5" />
        </button> */}
        <button
          className={cn(
            'bg-primary hover:bg-primary/90 flex cursor-pointer items-center justify-center text-white transition-colors',
            isCollapse ? 'size-10 rounded-full' : 'h-full rounded-none rounded-bl-2xl p-4',
          )}
          onClick={toggleSidebar}
        >
          {isCollapse ? <ArrowRightToLine className="size-5" /> : <ArrowLeftToLine className="size-5" />}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
