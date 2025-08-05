// libraries
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// components
import App from 'components/App';
// styles
import 'styles/index.scss';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
