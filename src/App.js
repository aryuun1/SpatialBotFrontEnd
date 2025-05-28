import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import Monitor from './pages/Monitor';
import Arbitrage from './pages/Arbitrage';
import Navbar from './components/Navbar';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/monitor" element={<Monitor />} />
              <Route path="/arbitrage" element={<Arbitrage />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;