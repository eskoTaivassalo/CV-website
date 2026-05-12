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

      const split = (text: string, width = maxWidth) => pdf.splitTextToSize(text, width) as string[];

      const writeSectionTitle = (text: string) => {
        ensureSpace(12);
        pdf.setFillColor(242, 242, 242);
        pdf.rect(margin, y - 1, maxWidth, 8, 'F');
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(11);
        pdf.text(text, margin + 2, y + 4.2);
        y += 10;
      };

      const writeText = (text: string, fontSize = 10, indent = 0) => {
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(fontSize);
        const lines = split(text, maxWidth - indent);
        lines.forEach((line) => {
          ensureSpace(4.6);
          pdf.text(line, margin + indent, y);
          y += 4.6;
        });
      };

      const writeLabelValue = (label: string, value: string) => {
        const labelText = `${label}: `;
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(9.5);
        const labelWidth = pdf.getTextWidth(labelText);
        const valueLines = split(value, maxWidth - labelWidth);
        ensureSpace(4.5 * Math.max(1, valueLines.length));
        pdf.text(labelText, margin, y);
        pdf.setFont('helvetica', 'normal');
        valueLines.forEach((line, idx) => {
          pdf.text(line, margin + labelWidth, y + idx * 4.5);
        });
        y += 4.5 * Math.max(1, valueLines.length);
      };

      const writeEntry = (title: string, subtitle: string, details: string[] = []) => {
        const titleLines = split(title);
        const subtitleLines = split(subtitle);
        const detailsLines = details.flatMap((d) => split(d));
        ensureSpace((titleLines.length + subtitleLines.length + detailsLines.length + 1) * 4.5);

        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(10);
        titleLines.forEach((line) => {
          pdf.text(line, margin, y);
          y += 4.5;
        });

        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(9);
        subtitleLines.forEach((line) => {
          pdf.text(line, margin, y);
          y += 4.2;
        });

        if (detailsLines.length > 0) {
          pdf.setFontSize(9.5);
          detailsLines.forEach((line) => {
            pdf.text(`- ${line}`, margin + 2, y);
            y += 4.2;
          });
        }

        y += 1.5;
      };

      const drawDivider = () => {
        ensureSpace(4);
        pdf.setDrawColor(215, 215, 215);
        pdf.line(margin, y, pageWidth - margin, y);
        y += 4;
      };

      const toDataUrl = async (url: string): Promise<string | null> => {
        try {
          const response = await fetch(url);
          const blob = await response.blob();
          return await new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(typeof reader.result === 'string' ? reader.result : null);
            reader.readAsDataURL(blob);
          });
        } catch {
          return null;
        }
      };

      const imageDataUrl = await toDataUrl(profileImage);
      if (imageDataUrl) {
        pdf.addImage(imageDataUrl, 'PNG', margin, y, 22, 22);
      }

      const headerX = imageDataUrl ? margin + 28 : margin;
      const headerWidth = pageWidth - margin - headerX;
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(18);
      pdf.text('Esko Taivassalo', headerX + headerWidth / 2, y + 8, { align: 'center' });

      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(11);
      pdf.text(t('cv.jobTitle'), headerX + headerWidth / 2, y + 14, { align: 'center' });

      y += 26;
      drawDivider();

      writeSectionTitle(t('cv.personalInfo'));
      writeLabelValue(t('cv.name'), 'Esko Taivassalo');
      writeLabelValue(t('cv.address'), 'Kauppakuja 4, 47200 Kouvola');
      writeLabelValue(t('cv.phone'), '0413172320');
      writeLabelValue(t('cv.email'), 'esko.taivassalo@gmail.com');
      writeLabelValue(t('cv.birthDate'), '16.07.1984');
      writeLabelValue(t('cv.birthPlace'), 'Toholampi');
      writeLabelValue(t('cv.gender'), t('cv.male'));
      writeLabelValue(t('cv.nationality'), 'Suomi');
      writeLabelValue(t('cv.maritalStatus'), t('cv.relationship'));
      writeLabelValue(t('cv.driversLicense'), 'A, B');
      y += 2;

      writeSectionTitle(t('cv.profile'));
      writeText(t('cv.profileText'));
      y += 2;

      writeSectionTitle(t('cv.education'));
      writeEntry(`${t('cv.edu1.title')} | ${t('cv.edu1.period')}`, t('cv.edu1.school'), [t('cv.edu1.desc')]);
      writeEntry(`${t('cv.edu2.title')} | ${t('cv.edu2.period')}`, t('cv.edu2.school'), [t('cv.edu2.studies'), t('cv.edu2.thesis'), t('cv.edu2.desc')]);
      writeEntry(`${t('cv.edu3.title')} | ${t('cv.edu3.period')}`, t('cv.edu3.school'), [t('cv.edu3.desc')]);
      writeEntry(`${t('cv.edu4.title')} | ${t('cv.edu4.period')}`, t('cv.edu4.school'));

      writeSectionTitle(t('cv.workExperience'));
      writeEntry(`${t('cv.work1.title')} | ${t('cv.work1.period')}`, t('cv.work1.company'));
      writeEntry(`${t('cv.work2.title')} | ${t('cv.work2.period')}`, t('cv.work2.company'));
      writeEntry(`${t('cv.work3.title')} | ${t('cv.work3.period')}`, t('cv.work3.company'));

      writeSectionTitle(t('cv.interests'));
      [t('cv.interest.music'), t('cv.interest.gym')].forEach((item) => {
        writeText(`- ${item}`, 9.5, 2);
      });

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
