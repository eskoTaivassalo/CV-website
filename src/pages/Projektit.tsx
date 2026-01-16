import { useLanguage } from '../context/LanguageContext';
import './Projektit.css';

const Projektit = () => {
  const { t } = useLanguage();
  const projects = [
    {
      id: 'region',
      name: t('projects.region.name'),
      description: t('projects.region.desc'),
      technologies: ['React', 'Firebase', 'TypeScript', 'CSS'],
      details: [
        t('projects.region.detail1'),
        t('projects.region.detail2')
      ],
      live: 'https://www.region.community'
    },
    {
      id: 'riffgenerator',
      name: t('projects.riff.name'),
      description: t('projects.riff.desc'),
      technologies: ['TypeScript', 'React', 'React Native', 'Python'],
      details: [
        t('projects.riff.detail1'),
        t('projects.riff.detail2'),
        t('projects.riff.detail3'),
        t('projects.riff.detail4')
      ],
      github: 'https://github.com/eskoTaivassalo/riffmakerapp/tree/basicViews',
      live: null
    },
    {
      id: 'epq',
      name: t('projects.epq.name'),
      description: t('projects.epq.desc'),
      technologies: ['React Native', 'Js', 'Expo'],
      details: [
        t('projects.epq.detail1'),
        t('projects.epq.detail2'),
        t('projects.epq.detail3')
      ],
      github: 'https://github.com/eskoTaivassalo/EPQ',
      live: null
    },
    {
      id: 'cvwebsite',
      name: t('projects.cvsite.name'),
      description: t('projects.cvsite.desc'),
      technologies: ['React', 'TypeScript', 'Vite', 'CSS'],
      details: [
        t('projects.cvsite.detail1'),
        t('projects.cvsite.detail2'),
        t('projects.cvsite.detail3'),
        t('projects.cvsite.detail4')
      ],
      github: 'https://github.com/eskoTaivassalo/CV-website',
      live: null
    }
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">{t('projects.title')}</h1>
      
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} id={project.id} className="project-card">
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            
            {project.details && (
              <ul className="project-details">
                {project.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
            )}
            
            <div className="project-technologies">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">{tech}</span>
              ))}
            </div>
            
            <div className="project-links">
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link github-link"
                >
                  <span>{t('projects.github')}</span> →
                </a>
              )}
              {project.live && (
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link live-link"
                >
                  <span>{t('projects.liveDemo')}</span> →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projektit;
