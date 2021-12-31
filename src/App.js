import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Explore from './components/pages/Explore';
import Subscription from './components/pages/Subscription';

function App() {
  
  return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/subscription" element={<Subscription />} />
      </Routes>
  );
}

export default App;
