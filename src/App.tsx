import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BootstrapNavbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import InsurancesPage from './pages/InsurancesPage';

export default function App() {
  return (
    <div className="app-wrapper d-flex flex-column min-vh-100">
      <BrowserRouter>
        <BootstrapNavbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/insurances" element={<InsurancesPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
