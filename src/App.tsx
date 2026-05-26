import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import FloatingButtons from './components/FloatingButtons';
import Home from './pages/Home';
import PropertyDetail from './pages/PropertyDetail';
import useScrollReveal from './hooks/useScrollReveal';
import './index.css';
import './styles/animations.css';
import './styles/responsive.css';

function App() {
  useScrollReveal();

  return (
    <Router>
      <Preloader />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
        </Routes>
      </main>
      <Footer />
      <FloatingButtons />
    </Router>
  );
}

export default App;
