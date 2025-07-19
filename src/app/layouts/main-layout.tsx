import { Outlet } from 'react-router';

const MainLayout = () => (
  <div className="flex min-h-screen flex-col">
    <header></header>
    <main className="flex-1">
      <Outlet />
    </main>
  </div>
);

export default MainLayout;
