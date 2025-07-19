import { Outlet } from 'react-router';

import { Header } from '@modules/header';

const MainLayout = () => (
  <div className="flex min-h-screen flex-col">
    <Header />
    <main className="container mx-auto flex-1 p-4">
      <Outlet />
    </main>
  </div>
);

export default MainLayout;
