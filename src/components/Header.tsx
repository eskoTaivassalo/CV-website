import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useLanguage } from '../context/LanguageContext';
import profileImage from '../assets/esko.png';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDownloadPDF = async () => {
    setIsGeneratingPDF(true);
    try {
      // Otetaan kuvakaappaus koko sivusta, jotta fixed-elementit (profiilikuva) tulevat mukaan
      const element = document.body;

      const canvas = await html2canvas(element, {
        scale: 1.5,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        windowWidth: 1300, // CV:n leveys
        windowHeight: element.scrollHeight,
      });

      const imgData = canvas.toDataURL('image/jpeg', 0.7);
      
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        compress: true
      });

      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight, undefined, 'FAST');
      pdf.save('Esko_Taivassalo_CV.pdf');
    } catch (error) {
      console.error('Virhe:', error);
      alert('PDF:n luonti epäonnistui.');
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  const isCV = location.pathname === '/';

  return (
    <>
      <div className="profile-overlay">
        <img src={profileImage} alt="Esko Taivassalo" className="overlay-profile-image" />
        <div className="overlay-info">
          <h1 className="overlay-name">Esko Taivassalo</h1>
          <p className="overlay-title">{t('cv.jobTitle')}</p>
        </div>
      </div>
      
      <header className="header">
      <button 
        className="hamburger-btn"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <button 
        className="language-btn"
        onClick={() => setLanguage(language === 'fi' ? 'en' : 'fi')}
        aria-label="Change language"
      >
        {language === 'fi' ? 'EN' : 'FI'}
      </button>
      
      {isCV ? (
        <>
          <button 
            onClick={handleDownloadPDF} 
            className="download-btn download-btn-top"
            disabled={isGeneratingPDF}
          >
            {isGeneratingPDF ? t('btn.generating') : t('btn.downloadCV')}
          </button>
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t('nav.cv')}</Link>
            <Link to="/biografia" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t('nav.bio')}</Link>
            <Link to="/harrastukset" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t('nav.hobbies')}</Link>
            <Link to="/projektit" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t('nav.projects')}</Link>
          </nav>
        </>
      ) : (
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t('nav.cv')}</Link>
          <Link to="/biografia" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t('nav.bio')}</Link>
          <Link to="/harrastukset" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t('nav.hobbies')}</Link>
          <Link to="/projektit" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t('nav.projects')}</Link>
        </nav>
      )}
    </header>
    </>
  );
};

export default Header;
