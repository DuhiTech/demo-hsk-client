import { Outlet } from 'react-router';
import Header from './components/header';

const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[url('/img/background.jpg')] bg-cover bg-top-left bg-no-repeat">
      <header className="sticky top-0"><Header /></header>
      <main className="flex-1 py-4">
        <Outlet />
      </main>
    </div>
  );
};
export default MainLayout;
