import './CV.css';
import { useLanguage } from '../context/LanguageContext';

const CV = () => {
  const { t } = useLanguage();

  return (
    <div className="cv-container">
   

      <div className="cv-content-wrapper">
        <aside className="cv-sidebar">
          <section className="cv-section">
            <h2>{t('cv.personalInfo')}</h2>
            <div className="contact-info">
              <p><strong>{t('cv.name')}:</strong> Esko Taivassalo</p>
              <p><strong>{t('cv.phone')}:</strong> 0413172320</p>
              <p><strong>{t('cv.email')}:</strong> esko.taivassalo@gmail.com</p>
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
              <h3>{t('cv.work1.title')} - <span className="company">{t('cv.work1.company')}</span></h3>
              <p className="experiencelines">{t('cv.work1.experiencelines')}</p>
              <p className="period">{t('cv.work1.period')}</p>
            </div>

            <div className="experience-item">
              <h3>{t('cv.work2.title')} - <span className="company">{t('cv.work2.company')}</span></h3>
              <p className="experiencelines">{t('cv.work2.experiencelines')}</p>
              <p className="period">{t('cv.work2.period')}</p>
            </div>

            <div className="experience-item">
              <h3>{t('cv.work3.title')} - <span className="company">{t('cv.work3.company')}</span></h3>
              <p className="experiencelines">{t('cv.work3.experiencelines')}</p>
              <p className="period">{t('cv.work3.period')}</p>
            </div>

            <div className="experience-item">
              <h3>{t('cv.work4.title')} - <span className="company">{t('cv.work4.company')}</span></h3>
              <p className="experiencelines">{t('cv.work4.experiencelines')}</p>
              <p className="period">{t('cv.work4.period')}</p>
            </div>

            <div className="experience-item">
              <h3>{t('cv.work5.title')} - <span className="company">{t('cv.work5.company')}</span></h3>
              <p className="experiencelines">{t('cv.work5.experiencelines')}</p>
              <p className="period">{t('cv.work5.period')}</p>
            </div>

            <div className="experience-item">
              <h3>{t('cv.work6.title')} - <span className="company">{t('cv.work6.company')}</span></h3>
              <p className="experiencelines">{t('cv.work6.experiencelines')}</p>
              <p className="period">{t('cv.work6.period')}</p>
            </div>

            <div className="experience-item">
              <h3>{t('cv.work7.title')} - <span className="company">{t('cv.work7.company')}</span></h3>
              <p className="experiencelines">{t('cv.work7.experiencelines')}</p>
              <p className="period">{t('cv.work7.period')}</p>
            </div>

            <div className="experience-item">
              <h3>{t('cv.work8.title')} - <span className="company">{t('cv.work8.company')}</span></h3>
              <p className="experiencelines">{t('cv.work8.experiencelines')}</p>
              <p className="period">{t('cv.work8.period')}</p>
            </div>

            <div className="experience-item">
              <h3>{t('cv.work9.title')} - <span className="company">{t('cv.work9.company')}</span></h3>
              <p className="experiencelines">{t('cv.work9.experiencelines')}</p>
              <p className="period">{t('cv.work9.period')}</p>
            </div>

            <div className="experience-item">
              <h3>{t('cv.work10.title')} - <span className="company">{t('cv.work10.company')}</span></h3>
              <p className="experiencelines">{t('cv.work10.experiencelines')}</p>
              <p className="period">{t('cv.work10.period')}</p>
            </div>

            <div className="experience-item">
              <h3>{t('cv.work11.title')} - <span className="company">{t('cv.work11.company')}</span></h3>
              <p className="experiencelines">{t('cv.work11.experiencelines')}</p>
              <p className="period">{t('cv.work11.period')}</p>
            </div>

            <div className="experience-item">
              <h3>{t('cv.work12.title')} - <span className="company">{t('cv.work12.company')}</span></h3>
              <p className="experiencelines">{t('cv.work12.experiencelines')}</p>
              <p className="period">{t('cv.work12.period')}</p>
            </div>

            <div className="experience-item">
              <h3>{t('cv.work13.title')} - <span className="company">{t('cv.work13.company')}</span></h3>
              <p className="experiencelines">{t('cv.work13.experiencelines')}</p>
              <p className="period">{t('cv.work13.period')}</p>
            </div>

            <div className="experience-item">
              <h3>{t('cv.work14.title')} - <span className="company">{t('cv.work14.company')}</span></h3>
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
              <h3>{t('cv.edu6.title')}</h3>
              <p className="school">{t('cv.edu6.school')}</p>
              <p className="period">{t('cv.edu6.period')}</p>
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

      

            <div className="education-item">
              <h3>{t('cv.edu5.title')}</h3>
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