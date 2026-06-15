import './CV.css';
import { useLanguage } from '../context/LanguageContext';
import profileImage from '../assets/esko.png';

const CV = () => {
  const { t } = useLanguage();

  return (
    <div className="cv-container">
      <div className="pdf-only-header">
        <img src={profileImage} alt="Esko Taivassalo" className="pdf-profile-image" />
        <div className="pdf-header-info">
          <h1>Esko Taivassalo</h1>
          <p className="pdf-title">{t('cv.jobTitle')}</p>
        </div>
      </div>

      <div className="cv-content-wrapper">
        <aside className="cv-sidebar">
          <section className="cv-section">
            <h2>{t('cv.personalInfo')}</h2>
            <div className="contact-info">
              <p><strong>{t('cv.name')}:</strong> Esko Taivassalo</p>
              <p><strong>{t('cv.phone')}:</strong> 0413172320</p>
              <p><strong>{t('cv.email')}:</strong> esko.taivassalo@gmail.com</p>
              <p><strong>{t('cv.birthDate')}:</strong> 16.07.1984</p>
              <p><strong>{t('cv.birthPlace')}:</strong> Toholampi</p>
              <p><strong>{t('cv.driversLicense')}:</strong> A, B</p>
            </div>
          </section>
        </aside>

        <main className="cv-main">

          {/* PROFIILI LISÄTTY TÄHÄN */}
          <section className="cv-profileSection">
            <h2>{t('cv.profile')}</h2>
            <p>{t('cv.profileText')}</p>
          </section>

          <section className="cv-section">
            <h2>{t('cv.workExperience')}</h2>

            <div className="experience-item">
              <h3>{t('cv.work1.title')}</h3>
              <p className="company">{t('cv.work1.company')}</p>
              <p className="experiencelines">{t('cv.work1.experiencelines')}</p>
              <p className="period">{t('cv.work1.period')}</p>
            </div>

            <div className="experience-item">
              <h3>{t('cv.work2.title')}</h3>
              <p className="company">{t('cv.work2.company')}</p>
              <p className="experiencelines">{t('cv.work2.experiencelines')}</p>
              <p className="period">{t('cv.work2.period')}</p>
            </div>

            <div className="experience-item">
              <h3>{t('cv.work3.title')}</h3>
              <p className="company">{t('cv.work3.company')}</p>
              <p className="experiencelines">{t('cv.work3.experiencelines')}</p>
              <p className="period">{t('cv.work3.period')}</p>
            </div>

            <div className="experience-item">
              <h3>{t('cv.work4.title')}</h3>
              <p className="company">{t('cv.work4.company')}</p>
              <p className="experiencelines">{t('cv.work4.experiencelines')}</p>
              <p className="period">{t('cv.work4.period')}</p>
            </div>

            <div className="experience-item">
              <h3>{t('cv.work5.title')}</h3>
              <p className="company">{t('cv.work5.company')}</p>
              <p className="experiencelines">{t('cv.work5.experiencelines')}</p>
              <p className="period">{t('cv.work5.period')}</p>
            </div>

            <div className="experience-item">
              <h3>{t('cv.work6.title')}</h3>
              <p className="company">{t('cv.work6.company')}</p>
              <p className="experiencelines">{t('cv.work6.experiencelines')}</p>
              <p className="period">{t('cv.work6.period')}</p>
            </div>

            <div className="experience-item">
              <h3>{t('cv.work7.title')}</h3>
              <p className="company">{t('cv.work7.company')}</p>
              <p className="experiencelines">{t('cv.work7.experiencelines')}</p>
              <p className="period">{t('cv.work7.period')}</p>
            </div>

            <div className="experience-item">
              <h3>{t('cv.work8.title')}</h3>
              <p className="company">{t('cv.work8.company')}</p>
              <p className="experiencelines">{t('cv.work8.experiencelines')}</p>
              <p className="period">{t('cv.work8.period')}</p>
            </div>

            <div className="experience-item">
              <h3>{t('cv.work9.title')}</h3>
              <p className="company">{t('cv.work9.company')}</p>
              <p className="experiencelines">{t('cv.work9.experiencelines')}</p>
              <p className="period">{t('cv.work9.period')}</p>
            </div>

            <div className="experience-item">
              <h3>{t('cv.work10.title')}</h3>
              <p className="company">{t('cv.work10.company')}</p>
              <p className="experiencelines">{t('cv.work10.experiencelines')}</p>
              <p className="period">{t('cv.work10.period')}</p>
            </div>

            <div className="experience-item">
              <h3>{t('cv.work11.title')}</h3>
              <p className="company">{t('cv.work11.company')}</p>
              <p className="experiencelines">{t('cv.work11.experiencelines')}</p>
              <p className="period">{t('cv.work11.period')}</p>
            </div>

            <div className="experience-item">
              <h3>{t('cv.work12.title')}</h3>
              <p className="company">{t('cv.work12.company')}</p>
              <p className="experiencelines">{t('cv.work12.experiencelines')}</p>
              <p className="period">{t('cv.work12.period')}</p>
            </div>

            <div className="experience-item">
              <h3>{t('cv.work13.title')}</h3>
              <p className="company">{t('cv.work13.company')}</p>
              <p className="experiencelines">{t('cv.work13.experiencelines')}</p>
              <p className="period">{t('cv.work13.period')}</p>
            </div>

            <div className="experience-item">
              <h3>{t('cv.work14.title')}</h3>
              <p className="company">{t('cv.work14.company')}</p>
              <p className="experiencelines">{t('cv.work14.experiencelines')}</p>
              <p className="period">{t('cv.work14.period')}</p>
            </div>

            <h2>{t('cv.education')}</h2>

            <div className="education-item">
              <h3>{t('cv.edu1.title')}</h3>
              <p className="school">{t('cv.edu1.school')}</p>
              <p className="period">{t('cv.edu1.period')}</p>
              <p>{t('cv.edu1.desc')}</p>
            </div>

            <div className="education-item">
              <h3>{t('cv.edu2.title')}</h3>
              <p className="school">{t('cv.edu2.school')}</p>
              <p className="period">{t('cv.edu2.period')}</p>
              <p>{t('cv.edu2.studies')}</p>
              <p>{t('cv.edu2.thesis')}</p>
              <p>{t('cv.edu2.desc')}</p>
            </div>

            <div className="education-item">
              <h3>{t('cv.edu3.title')}</h3>
              <p className="school">{t('cv.edu3.school')}</p>
              <p className="period">{t('cv.edu3.period')}</p>
              <p>{t('cv.edu3.desc')}</p>
            </div>

            <div className="education-item">
              <h3>{t('cv.edu4.title')}</h3>
              <p className="school">{t('cv.edu4.school')}</p>
              <p className="period">{t('cv.edu4.period')}</p>
            </div>


          </section>
        </main>
      </div>

      <div className="cv-motto">
        <p>{t('cv.motto')}</p>
      </div>
    </div>
  );
};

export default CV;