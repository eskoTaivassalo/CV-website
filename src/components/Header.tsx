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
      const { jsPDF } = await import('jspdf');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const pageHeight = pdf.internal.pageSize.getHeight();
      const pageWidth = pdf.internal.pageSize.getWidth();
      const margin = 15;
      const maxWidth = pageWidth - margin * 2;
      let y = margin;

      const ensureSpace = (needed = 8) => {
        if (y + needed > pageHeight - margin) {
          pdf.addPage();
          y = margin;
        }
      };

      const writeHeading = (text: string) => {
        ensureSpace(10);
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(13);
        pdf.text(text, margin, y);
        y += 6;
      };

      const writeText = (text: string, fontSize = 10) => {
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(fontSize);
        const lines = pdf.splitTextToSize(text, maxWidth) as string[];
        lines.forEach((line) => {
          ensureSpace(5);
          pdf.text(line, margin, y);
          y += 5;
        });
      };

      const writeList = (items: string[]) => {
        items.forEach((item) => {
          writeText(`- ${item}`);
        });
      };

      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(18);
      pdf.text('Esko Taivassalo', pageWidth / 2, y, { align: 'center' });
      y += 8;

      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(11);
      pdf.text(t('cv.jobTitle'), pageWidth / 2, y, { align: 'center' });
      y += 10;

      writeHeading(t('cv.personalInfo'));
      writeText(`${t('cv.name')}: Esko Taivassalo`);
      writeText(`${t('cv.address')}: Kauppakuja 4, 47200 Kouvola`);
      writeText(`${t('cv.phone')}: 0413172320`);
      writeText(`${t('cv.email')}: esko.taivassalo@gmail.com`);
      writeText(`${t('cv.birthDate')}: 16.07.1984`);
      writeText(`${t('cv.birthPlace')}: Toholampi`);
      writeText(`${t('cv.gender')}: ${t('cv.male')}`);
      writeText(`${t('cv.nationality')}: Suomi`);
      writeText(`${t('cv.maritalStatus')}: ${t('cv.relationship')}`);
      writeText(`${t('cv.driversLicense')}: A, B`);
      y += 3;

      writeHeading(t('cv.profile'));
      writeText(t('cv.profileText'));
      y += 3;

      writeHeading(t('cv.education'));
      writeText(`${t('cv.edu1.title')} | ${t('cv.edu1.period')}`);
      writeText(`${t('cv.edu1.school')}`);
      writeText(`${t('cv.edu1.desc')}`);
      y += 2;
      writeText(`${t('cv.edu2.title')} | ${t('cv.edu2.period')}`);
      writeText(`${t('cv.edu2.school')}`);
      writeText(`${t('cv.edu2.studies')}`);
      writeText(`${t('cv.edu2.thesis')}`);
      writeText(`${t('cv.edu2.desc')}`);
      y += 2;
      writeText(`${t('cv.edu3.title')} | ${t('cv.edu3.period')}`);
      writeText(`${t('cv.edu3.school')}`);
      writeText(`${t('cv.edu3.desc')}`);
      y += 2;
      writeText(`${t('cv.edu4.title')} | ${t('cv.edu4.period')}`);
      writeText(`${t('cv.edu4.school')}`);
      y += 3;

      writeHeading(t('cv.workExperience'));
      writeText(`${t('cv.work1.title')} | ${t('cv.work1.period')}`);
      writeText(`${t('cv.work1.company')}`);
      y += 2;
      writeText(`${t('cv.work2.title')} | ${t('cv.work2.period')}`);
      writeText(`${t('cv.work2.company')}`);
      y += 2;
      writeText(`${t('cv.work3.title')} | ${t('cv.work3.period')}`);
      writeText(`${t('cv.work3.company')}`);
      y += 3;

      writeHeading(t('cv.interests'));
      writeList([t('cv.interest.music'), t('cv.interest.gym')]);

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
