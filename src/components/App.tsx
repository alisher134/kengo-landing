// libraries
import type { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
// components
import AppLayout from 'components/pages/AppLayout';
import DocumentPage from 'components/pages/DocumentPage';
import DocumentsPage from 'components/pages/DocumentsPage';
import HomePage from 'components/pages/HomePage';
import NewsPage from 'components/pages/NewsPage';
import NotFoundPage from 'components/pages/NotFoundPage';
// constants
import { ROUTES } from 'constants/routes';

const App: FC = () => (
  <Routes>
    <Route element={<AppLayout />} path={ROUTES.HOME.route}>
      <Route element={<HomePage />} index />
      <Route element={<NewsPage />} path={ROUTES.NEWS.route} />
      <Route element={<NotFoundPage />} path={ROUTES.NOT_FOUND.route} />
      <Route element={<DocumentsPage />} path={ROUTES.DOCUMENTS.route} />
      <Route element={<DocumentPage />} path={ROUTES.DOCUMENT.route} />
    </Route>
  </Routes>
);

export default App;
