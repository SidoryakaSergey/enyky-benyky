import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout.tsx';
import { LanguageURLHandler } from './components/LanguageURLHandler.tsx';
import { Home } from './pages/Home.tsx';
import { About } from './pages/About.tsx';
import { Services } from './pages/Services.tsx';
import { CelebrityDubbing } from './pages/CelebrityDubbing.tsx';
import { Portfolio } from './pages/Portfolio.tsx';
import { Contacts } from './pages/Contacts.tsx';
import './App.css';

function App() {
  return (
    <Router>
      <LanguageURLHandler />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/celebrity-dubbing" element={<CelebrityDubbing />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
