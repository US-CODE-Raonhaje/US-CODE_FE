import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Frame from './components/Frame';

function App() {
  return (
    <BrowserRouter>
      <Frame>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Frame>
    </BrowserRouter>
  );
}

export default App;

