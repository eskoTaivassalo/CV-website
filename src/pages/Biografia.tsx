import { useLanguage } from '../context/LanguageContext';
import './Biografia.css';

const Biografia = () => {
  const { t } = useLanguage();
  
  return (
    <div className="biografia-container">
      <div className="biografia-content-wrapper">
        <aside className="biografia-sidebar">
          <div className="bio-section">
            <h2>{t('bio.background')}</h2>
            <p>
              {t('bio.backgroundText')}
            </p>
          </div>
        </aside>

        <main className="biografia-main">
          <div className="bio-section">
            <h2>{t('bio.path')}</h2>
            <p>
              {t('bio.pathText1')}
            </p>
            <p>
              {t('bio.pathText2')}
            </p>
          </div>

          <div className="bio-section">
            <h2>{t('bio.philosophy')}</h2>
            <p>
              {t('bio.philosophyText')}
            </p>
          </div>
        </main>

        <aside className="biografia-right-sidebar">
          <div className="bio-section">
            <h2>{t('bio.future')}</h2>
            <p>
              {t('bio.futureText')}
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Biografia;
