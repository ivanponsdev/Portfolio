import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import HomePage from './pages/HomePage';
import UltimateGymPage from './pages/UltimateGymPage';
import './App.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/ultimate-gym" element={<UltimateGymPage />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
};

export default App;
