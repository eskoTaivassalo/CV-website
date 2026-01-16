import { useLanguage } from '../context/LanguageContext';
import './Harrastukset.css';
import { useState } from 'react';

const Harrastukset = () => {
  const { t } = useLanguage();
  const [openModal, setOpenModal] = useState<string | null>(null);

  const hobbies = [
    {
      title: t('hobbies.coding'),
      icon: '💻',
      description: t('hobbies.codingDesc'),
      hasModal: true,
      modalKey: 'koodaus'
    },
    {
      title: t('hobbies.gaming'),
      icon: '🎮',
      description: t('hobbies.gamingDesc'),
      hasModal: true,
      modalKey: 'gaming'
    },
    {
      title: t('hobbies.sports'),
      icon: '⚽',
      description: t('hobbies.sportsDesc'),
      hasModal: true,
      modalKey: 'urheilu'
    },
    {
      title: t('hobbies.reading'),
      icon: '📚',
      description: t('hobbies.readingDesc'),
      hasModal: true,
      modalKey: 'lukeminen'
    },
    {
      title: t('hobbies.music'),
      icon: '🎵',
      description: () => <>{t('hobbies.musicDesc')} <a href="https://www.youtube.com/@musicbythevoid" target="_blank" rel="noopener noreferrer">🎵 YouTube</a></>,
      hasModal: true,
      modalKey: 'musiikki'
    }
  
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">{t('hobbies.title')}</h1>
      
      <div className="hobbies-grid">
        {hobbies.map((hobby, index) => (
          <div 
            key={index} 
            className={`hobby-card ${hobby.hasModal ? 'clickable' : ''}`}
            onClick={() => hobby.hasModal && hobby.modalKey && setOpenModal(hobby.modalKey)}
          >
            <div className="hobby-icon">{hobby.icon}</div>
            <h3 className="hobby-title">{hobby.title}</h3>
            <p className="hobby-description">{typeof hobby.description === 'function' ? hobby.description() : hobby.description}</p>
          </div>
        ))}
      </div>

      {openModal === 'koodaus' && (
        <div className="modal-overlay" onClick={() => setOpenModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setOpenModal(null)}>×</button>
            <h2>{t('hobbies.modal.coding.title')}</h2>
            <div className="modal-text">
              <p>{t('hobbies.modal.coding.p1')}</p>
              <p>{t('hobbies.modal.coding.p2')}</p>
              <p>{t('hobbies.modal.coding.p3')}</p>
              <p>{t('hobbies.modal.coding.p4')}</p>
            </div>
          </div>
        </div>
      )}

      {openModal === 'musiikki' && (
        <div className="modal-overlay" onClick={() => setOpenModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setOpenModal(null)}>×</button>
            <h2>{t('hobbies.modal.music.title')}</h2>
            <div className="modal-text">
              <p>{t('hobbies.modal.music.p1')}</p>
              <p>{t('hobbies.modal.music.p2')}</p>
              <p>{t('hobbies.modal.music.p3')}</p>
              <a
                href="https://www.youtube.com/@musicbythevoid"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('hobbies.modal.music.youtube')}
              </a>
            </div>
          </div>
        </div>
      )}

      {openModal === 'gaming' && (
        <div className="modal-overlay" onClick={() => setOpenModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setOpenModal(null)}>×</button>
            <h2>{t('hobbies.modal.gaming.title')}</h2>
            <div className="modal-text">
              <p>{t('hobbies.modal.gaming.p1')}</p>
              <p>{t('hobbies.modal.gaming.p2')}</p>
              <p>{t('hobbies.modal.gaming.p3')}</p>
            </div>
          </div>
        </div>
      )}

      {openModal === 'urheilu' && (
        <div className="modal-overlay" onClick={() => setOpenModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setOpenModal(null)}>×</button>
            <h2>{t('hobbies.modal.sports.title')}</h2>
            <div className="modal-text">
              <p>{t('hobbies.modal.sports.p1')}</p>
              <p>{t('hobbies.modal.sports.p2')}</p>
              <p>{t('hobbies.modal.sports.p3')}</p>
            </div>
          </div>
        </div>
      )}

      {openModal === 'lukeminen' && (
        <div className="modal-overlay" onClick={() => setOpenModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setOpenModal(null)}>×</button>
            <h2>{t('hobbies.modal.reading.title')}</h2>
            <div className="modal-text">
              <p>{t('hobbies.modal.reading.p1')}</p>
              <p>{t('hobbies.modal.reading.p2')}</p>
              <p>{t('hobbies.modal.reading.p3')}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Harrastukset;
