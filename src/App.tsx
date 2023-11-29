import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/rootLayout/RootLayout';
import NotFound from './pages/notFound/NotFound';
import Error from './pages/error/Error';
import Home from './pages/home/Home';
import ManuallyForm from './pages/manuallyForm/ManuallyForm';
import ReactHookForm from './pages/reactHookForm/ReactHookForm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/manually-form',
        element: <ManuallyForm />,
      },
      {
        path: '/react-hook-form',
        element: <ReactHookForm />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
