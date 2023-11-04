import { FC, ReactElement } from 'react';
import Gallery from './pages/gallery/Gallery';
import Error from './pages/error/Error';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ArtAsideWidget from './components/organisms/artAsideWidget/artAsideWidget';

const router = createBrowserRouter([
  {
    path: '/gallery',
    element: <Gallery />,
    errorElement: <Error />,
    children: [
      {
        path: '/gallery/:artID',
        element: <ArtAsideWidget />,
      },
    ],
  },
]);

type Props = unknown;

const App: FC<Props> = (): ReactElement => {
  return <RouterProvider router={router} />;
};

export default App;
