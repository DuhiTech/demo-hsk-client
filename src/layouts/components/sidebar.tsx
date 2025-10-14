import { cn } from '@/lib/utils';
import { SignedIn, UserButton, useUser } from '@clerk/clerk-react';
import { ArrowLeftToLine, ArrowRightToLine } from 'lucide-react';
import { useState } from 'react';
import SidebarNavigation, { type NavigationItem } from './sidebar-navigation';
import Tooltip from '@/components/custom/tooltip';

const Sidebar = ({ items }: { items: NavigationItem[] }) => {
  const [isCollapse, setIsCollapse] = useState(false);
  const { user } = useUser();

  const toggleSidebar = () => {
    setIsCollapse((prev) => !prev);
  };

  return (
    <div className={cn('card h-full w-72 overflow-hidden p-0 transition-all duration-300', { 'w-20': isCollapse })}>
      <div className="flex h-full flex-col gap-4">
        <div className="flex h-16 items-center justify-center gap-4">
          <div className={cn('flex flex-1 items-center justify-center', { hidden: isCollapse })}>
            <img src="/img/logo.png" alt="ChineseHSK" className="h-12" title="ChineseHSK" />
          </div>
          <Tooltip content={isCollapse ? 'Mở rộng' : 'Thu gọn'}>
            <button
              className={cn(
                'bg-primary hover:bg-primary/90 flex cursor-pointer items-center justify-center text-white transition-colors',
                isCollapse ? 'size-12 rounded-full' : 'h-full rounded-none rounded-bl-2xl p-4',
              )}
              onClick={toggleSidebar}
            >
              {isCollapse ? <ArrowRightToLine className="size-5" /> : <ArrowLeftToLine className="size-5" />}
            </button>
          </Tooltip>
        </div>

        <div className="flex-1 px-2">
          <SidebarNavigation items={items} collapsed={isCollapse} />
        </div>

        <div className="mb-4 flex flex-col items-center gap-1">
          <SignedIn>
            <UserButton appearance={{ elements: { avatarBox: isCollapse ? 'size-12!' : 'size-16!' } }} />
          </SignedIn>
          {!isCollapse && (
            <>
              <div className="text-base font-semibold">{user?.fullName}</div>
              <span className="text-muted-foreground">{user?.emailAddresses?.[0]?.emailAddress}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
