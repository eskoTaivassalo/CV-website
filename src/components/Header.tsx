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
      // Piilotetaan header ja profiilikuva väliaikaisesti
      const header = document.querySelector('.header') as HTMLElement;
      const profileOverlay = document.querySelector('.profile-overlay') as HTMLElement;
      const languageBtn = document.querySelector('.language-btn') as HTMLElement;
      const pdfHeader = document.querySelector('.pdf-only-header') as HTMLElement;
      const cvContainer = document.querySelector('.cv-container') as HTMLElement;
      
      const originalHeaderDisplay = header?.style.display || '';
      const originalProfileDisplay = profileOverlay?.style.display || '';
      const originalLanguageDisplay = languageBtn?.style.display || '';
      const originalPdfHeaderDisplay = pdfHeader?.style.display || '';
      const originalCvPaddingTop = cvContainer?.style.paddingTop || '';
      const originalCvMinHeight = cvContainer?.style.minHeight || '';
      const originalCvHeight = cvContainer?.style.height || '';
      
      if (header) header.style.display = 'none';
      if (profileOverlay) profileOverlay.style.display = 'none';
      if (languageBtn) languageBtn.style.display = 'none';
      if (pdfHeader) pdfHeader.style.display = 'flex';
      if (cvContainer) {
        cvContainer.style.paddingTop = '0';
        cvContainer.style.minHeight = 'auto';
        cvContainer.style.height = 'auto';
      }
      
      // Otetaan kuvakaappaus vain CV-containerista
      const element = cvContainer;

      const canvas = await html2canvas(element, {
        scale: 1.5,
        useCORS: true,
        logging: false,
        backgroundColor: '#e5e3df',
        windowWidth: 1300,
        windowHeight: element.scrollHeight,
      });

      // Palautetaan elementit takaisin
      if (header) header.style.display = originalHeaderDisplay;
      if (profileOverlay) profileOverlay.style.display = originalProfileDisplay;
      if (languageBtn) languageBtn.style.display = originalLanguageDisplay;
      if (pdfHeader) pdfHeader.style.display = originalPdfHeaderDisplay;
      if (cvContainer) {
        cvContainer.style.paddingTop = originalCvPaddingTop;
        cvContainer.style.minHeight = originalCvMinHeight;
        cvContainer.style.height = originalCvHeight;
      }

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
