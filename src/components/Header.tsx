import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './Header.css';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const Header = () => {
  const location = useLocation();
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDownloadPDF = async () => {
    setIsGeneratingPDF(true);
    try {
      const cvElement = document.querySelector('.cv-container') as HTMLElement;
      if (!cvElement) return;

      // Piilotetaan lataa-painike PDF:ssä
      const downloadBtn = document.querySelector('.download-btn') as HTMLElement;
      if (downloadBtn) downloadBtn.style.display = 'none';

      const canvas = await html2canvas(cvElement, {
        scale: 2,
        useCORS: true,
        logging: false,
      });

      // Näytetään painike takaisin
      if (downloadBtn) downloadBtn.style.display = 'flex';

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 0;

      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save('Esko_Taivassalo_CV.pdf');
    } catch (error) {
      console.error('Virhe PDF:n luonnissa:', error);
      alert('PDF:n luonti epäonnistui. Yritä uudelleen.');
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  const isCV = location.pathname === '/';

  return (
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
      {isCV ? (
        <>
          <button 
            onClick={handleDownloadPDF} 
            className="download-btn download-btn-top"
            disabled={isGeneratingPDF}
          >
            {isGeneratingPDF ? 'Luodaan PDF...' : '📄 Lataa CV'}
          </button>
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>CV</Link>
            <Link to="/biografia" className="nav-link" onClick={() => setIsMenuOpen(false)}>Biografia</Link>
            <Link to="/harrastukset" className="nav-link" onClick={() => setIsMenuOpen(false)}>Harrastukset</Link>
            <Link to="/projektit" className="nav-link" onClick={() => setIsMenuOpen(false)}>Projektit</Link>
          </nav>
        </>
      ) : (
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>CV</Link>
          <Link to="/biografia" className="nav-link" onClick={() => setIsMenuOpen(false)}>Biografia</Link>
          <Link to="/harrastukset" className="nav-link" onClick={() => setIsMenuOpen(false)}>Harrastukset</Link>
          <Link to="/projektit" className="nav-link" onClick={() => setIsMenuOpen(false)}>Projektit</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
