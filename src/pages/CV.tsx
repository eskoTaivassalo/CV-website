import './CV.css';
import profileImage from '../assets/esko.png';
import { useLanguage } from '../context/LanguageContext';

const CV = () => {
  const { t } = useLanguage();
  
  return (
    <div className="cv-container">
      <div className="profile-overlay">
        <img src={profileImage} alt="Esko Taivassalo" className="overlay-profile-image" />
        <div className="overlay-info">
          <h1 className="overlay-name">Esko  Taivassalo</h1>
          <p className="overlay-title">{t('cv.jobTitle')}</p>
        </div>
      </div>
      <div className="pdf-only-header">
        <div className="pdf-header-info">
          <h1>Esko  Taivassalo</h1>
          <p className="pdf-title">{t('cv.jobTitle')}</p>
        </div>
      </div>
      <div className="cv-content-wrapper">
        <aside className="cv-sidebar">
          <section className="cv-section">
            <h2>{t('cv.personalInfo')}</h2>
            <div className="contact-info">
              <p><strong>{t('cv.name')}:</strong> Esko Taivassalo</p>
              <p><strong>{t('cv.address')}:</strong> Kauppakuja 4, 47200 Kouvola</p>
              <p><strong>{t('cv.phone')}:</strong> 0413172320</p>
              <p><strong>{t('cv.email')}:</strong> esko.taivassalo@gmail.com</p>
              <p><strong>{t('cv.birthDate')}:</strong> 16.07.1984</p>
              <p><strong>{t('cv.birthPlace')}:</strong> Toholampi</p>
              <p><strong>{t('cv.gender')}:</strong> {t('cv.male')}</p>
              <p><strong>{t('cv.nationality')}:</strong> Suomi</p>
              <p><strong>{t('cv.maritalStatus')}:</strong> {t('cv.relationship')}</p>
              <p><strong>{t('cv.driversLicense')}:</strong> A, B</p>
            </div>
          </section>

          <section className="cv-section">
            <h2>{t('cv.interests')}</h2>
            <ul>
              <li>{t('cv.interest.music')}</li>
              <li>{t('cv.interest.gym')}</li>
            </ul>
          </section>

          <section className="cv-section">
            <h2>{t('cv.projects')}</h2>
            <ul>
              <li><a href="/projektit#region">Region (www.region.community)</a></li>
              <li><a href="/projektit#riffgenerator">RiffGenerator</a></li>
              <li><a href="/projektit#epq">EPQ</a></li>
              <li><a href="https://github.com/eskoTaivassalo" target="_blank" rel="noopener noreferrer">{t('cv.githubProjects')}</a></li>
            </ul>
          </section>
        </aside>

        <main className="cv-main">
          <section className="cv-section">
            <h2>{t('cv.profile')}</h2>
            <p>
              {t('cv.profileText')}
            </p>
          </section>

          <section className="cv-section">
            <h2>{t('cv.skills')}</h2>
        <div className="skills-list">
          <div className="skill-item">
            <span className="skill-name">Python</span>
            <div className="skill-level">
              <span className="dot filled"></span>
              <span className="dot filled"></span>
              <span className="dot filled"></span>
              <span className="dot filled"></span>
              <span className="dot filled"></span>
            </div>
          </div>
          <div className="skill-item">
            <span className="skill-name">JavaScript</span>
            <div className="skill-level">
              <span className="dot filled"></span>
              <span className="dot filled"></span>
              <span className="dot filled"></span>
              <span className="dot filled"></span>
              <span className="dot filled"></span>
            </div>
          </div>
          <div className="skill-item">
            <span className="skill-name">TypeScript</span>
            <div className="skill-level">
              <span className="dot filled"></span>
              <span className="dot filled"></span>
              <span className="dot filled"></span>
              <span className="dot filled"></span>
              <span className="dot filled"></span>
            </div>
          </div>
          <div className="skill-item">
            <span className="skill-name">C#</span>
            <div className="skill-level">
              <span className="dot filled"></span>
              <span className="dot filled"></span>
              <span className="dot filled"></span>
              <span className="dot filled"></span>
              <span className="dot filled"></span>
            </div>
          </div>
          <div className="skill-item">
            <span className="skill-name">Web-teknologiat: React, HTML, CSS, Bootstrap</span>
            <div className="skill-level">
              <span className="dot filled"></span>
              <span className="dot filled"></span>
              <span className="dot filled"></span>
              <span className="dot filled"></span>
              <span className="dot filled"></span>
            </div>
          </div>
          <div className="skill-item">
            <span className="skill-name">Mobiilikehitys: React Native, .NET MAUI</span>
            <div className="skill-level">
              <span className="dot filled"></span>
              <span className="dot filled"></span>
              <span className="dot filled"></span>
              <span className="dot filled"></span>
              <span className="dot filled"></span>
            </div>
          </div>
          <div className="skill-item">
            <span className="skill-name">Firebase, Node.js, Azure</span>
            <div className="skill-level">
              <span className="dot filled"></span>
              <span className="dot filled"></span>
              <span className="dot filled"></span>
              <span className="dot filled"></span>
              <span className="dot filled"></span>
            </div>
          </div>
          <div className="skill-item">
            <span className="skill-name">Git, versionhallinta, tietoturvan perusteet</span>
            <div className="skill-level">
              <span className="dot filled"></span>
              <span className="dot filled"></span>
              <span className="dot filled"></span>
              <span className="dot filled"></span>
              <span className="dot filled"></span>
            </div>
          </div>
        </div>
          </section>

          <section className="cv-section">
            <h2>{t('cv.references')}</h2>
            <p>{t('cv.referencesText')}</p>
          </section>
        </main>

        <aside className="cv-right-sidebar">
          <section className="cv-section">
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

          <section className="cv-section">
            <h2>{t('cv.workExperience')}</h2>
            
            <div className="experience-item">
              <h3>{t('cv.work1.title')}</h3>
              <p className="company">{t('cv.work1.company')}</p>
              <p className="period">{t('cv.work1.period')}</p>
            </div>

            <div className="experience-item">
              <h3>{t('cv.work2.title')}</h3>
              <p className="company">{t('cv.work2.company')}</p>
              <p className="period">{t('cv.work2.period')}</p>
            </div>

            <div className="experience-item">
              <h3>{t('cv.work3.title')}</h3>
              <p className="company">{t('cv.work3.company')}</p>
              <p className="period">{t('cv.work3.period')}</p>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
};

export default CV;
