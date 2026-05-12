import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
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
      // Lataa pdfmake dynaamisesti vain tarvittaessa
      const pdfMake = (await import('pdfmake/build/pdfmake')).default;
      const pdfFonts = (await import('pdfmake/build/vfs_fonts')).default;
      
      (pdfMake as any).vfs = (pdfFonts as any).pdfMake.vfs;
      
      const docContent: any[] = [
        { text: 'ESKO TAIVASSALO', fontSize: 18, bold: true, alignment: 'center', margin: [0, 0, 0, 10] },
        { text: t('cv.jobTitle'), fontSize: 11, alignment: 'center', margin: [0, 0, 0, 20] },
        
        // Henkilötiedot
        { text: t('cv.personalInfo'), fontSize: 12, bold: true, margin: [0, 0, 0, 8] },
        { text: `Puhelin: +358 (näytetään soittamalla)\nSähköposti: (saatavissa soittamalla)\nSyntymäpaikka: Toholampi, Suomi`, fontSize: 10, margin: [0, 0, 0, 15] },
        
        // Profiili
        { text: t('cv.profile'), fontSize: 12, bold: true, margin: [0, 0, 0, 8] },
        { text: t('cv.profileText'), fontSize: 10, margin: [0, 0, 0, 15], alignment: 'justify' },
        
        // Koulutus
        { text: t('cv.education'), fontSize: 12, bold: true, margin: [0, 0, 0, 8] },
        { text: `${t('cv.edu1.title')} | ${t('cv.edu1.period')}\n${t('cv.edu1.school')}\n${t('cv.edu1.desc')}`, fontSize: 10, margin: [0, 0, 0, 10] },
        { text: `${t('cv.edu2.title')} | ${t('cv.edu2.period')}\n${t('cv.edu2.school')}\n${t('cv.edu2.studies')}\n${t('cv.edu2.thesis')}`, fontSize: 10, margin: [0, 0, 0, 10] },
        { text: `${t('cv.edu3.title')} | ${t('cv.edu3.period')}\n${t('cv.edu3.school')}\n${t('cv.edu3.desc')}`, fontSize: 10, margin: [0, 0, 0, 10] },
        { text: `${t('cv.edu4.title')} | ${t('cv.edu4.period')}\n${t('cv.edu4.school')}`, fontSize: 10, margin: [0, 0, 0, 15] },
        
        // Työkokemus
        { text: t('cv.workExperience'), fontSize: 12, bold: true, margin: [0, 0, 0, 8] },
        { text: `${t('cv.work1.title')} | ${t('cv.work1.period')}\n${t('cv.work1.company')}`, fontSize: 10, margin: [0, 0, 0, 10] },
        { text: `${t('cv.work2.title')} | ${t('cv.work2.period')}\n${t('cv.work2.company')}`, fontSize: 10, margin: [0, 0, 0, 10] },
        { text: `${t('cv.work3.title')} | ${t('cv.work3.period')}\n${t('cv.work3.company')}`, fontSize: 10, margin: [0, 0, 0, 15] },
        
        // Harrastukset
        { text: t('cv.interests'), fontSize: 12, bold: true, margin: [0, 0, 0, 8] },
        { text: `${t('cv.interest.music')}\n${t('cv.interest.gym')}`, fontSize: 10, margin: [0, 0, 0, 15] },
      ];

      const docDefinition: any = {
        content: docContent,
        pageSize: 'A4',
        pageMargins: [40, 40, 40, 40],
        defaultStyle: {
          font: 'Helvetica',
          size: 11,
          lineHeight: 1.4,
        }
      };

      pdfMake.createPdf(docDefinition).download('Esko_Taivassalo_CV.pdf');
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
