import { BrowserRouter } from 'react-router';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { store } from './redux/store';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
