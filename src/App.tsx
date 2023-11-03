import { FC, ReactElement } from 'react';
import Gallery from './pages/gallery/Gallery';
import ErrorBoundary from './components/atoms/errorBoundary/ErrorBoundary';

type Props = unknown;

const App: FC<Props> = (): ReactElement => {
  return (
    <ErrorBoundary>
      <Gallery />
    </ErrorBoundary>
  );
};

export default App;
