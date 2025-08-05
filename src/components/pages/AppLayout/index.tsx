// libraries
import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
// components
import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';

const AppLayout: FC = () => (
  <div className="container">
    <Header />

    <main>
      <Outlet />
    </main>

    <Footer />
  </div>
);

export default AppLayout;
