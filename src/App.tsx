import { FC, ReactElement } from 'react';
import Gallery from './pages/gallery/Gallery';
import Error from './pages/error/Error';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ArtAsideWidget from './components/organisms/ArtAsideWidget/ArtAsideWidget';
import Home from './pages/home/Home';
import RootLayout from './pages/rootLayout/RootLayout';
import NotFound from './pages/notFound/NotFound';

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
        path: '/gallery',
        element: <Gallery />,
        children: [
          {
            path: '/gallery/:artID',
            element: <ArtAsideWidget />,
          },
        ],
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

type Props = unknown;

const App: FC<Props> = (): ReactElement => {
  return <RouterProvider router={router} />;
};

export default App;
