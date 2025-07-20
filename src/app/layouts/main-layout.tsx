import { Outlet } from 'react-router';

import { Header } from '@modules/header';
import { Container } from '@shared/ui/container';

const MainLayout = () => (
  <div className="flex min-h-screen flex-col">
    <Header />
    <main className="flex-1">
      <Container>
        <Outlet />
      </Container>
    </main>
  </div>
);

export default MainLayout;
