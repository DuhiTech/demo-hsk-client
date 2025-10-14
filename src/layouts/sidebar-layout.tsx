import { Outlet } from 'react-router';
import Sidebar from './components/sidebar';
import type { NavigationItem } from './components/sidebar-navigation';

const SidebarLayout = ({ items }: { items: NavigationItem[] }) => {
  return (
    <div className="min-h-screen bg-[url('/img/background.jpg')] bg-cover bg-fixed bg-top-left bg-no-repeat p-4">
      <div className="relative flex h-full gap-4">
        <div className="sticky top-4 h-[calc(100vh-32px)]">
          <Sidebar items={items} />
        </div>

        <main className="flex-1">
          Header
          <Outlet />
        </main>
      </div>
    </div>
  );
};
export default SidebarLayout;
