import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { themes } from './themes';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  const [currentTheme, setCurrentTheme] = useState('light');

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar onThemeChange={setCurrentTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App; 