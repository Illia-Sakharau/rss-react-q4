import { Component } from 'react';
import Gallery from './pages/gallery/Gallery';
import ErrorBoundary from './components/atoms/errorBoundary/ErrorBoundary';

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <Gallery />
      </ErrorBoundary>
    );
  }
}

export default App;
