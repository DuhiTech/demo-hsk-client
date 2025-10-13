import { Outlet } from 'react-router';
import Sidebar from './components/sidebar';

const SidebarLayout = () => {
  return (
    <div className="min-h-screen bg-[url('/img/background.jpg')] bg-cover bg-fixed bg-top-left bg-no-repeat p-4">
      <div className="relative flex h-full gap-4">
        <div className="sticky top-4 h-[calc(100vh-32px)]">
          <Sidebar />
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
