import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout, LanguageURLHandler } from './components';
import {
  Home,
  About,
  Services,
  CelebrityDubbing,
  Portfolio,
  Contacts,
} from './pages';
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
