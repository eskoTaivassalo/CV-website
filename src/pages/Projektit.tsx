import './Projektit.css';

const Projektit = () => {
  const projects = [
    {
      id: 'region',
      name: 'Region.community',
      description: 'Moderni verkkosivusto, joka tarjoaa yhteisölähtöisen alustan tapahtumille ja verkostoitumiselle.',
      technologies: ['React', 'Firebase', 'TypeScript', 'CSS'],
      details: [
        'Toteutettu Reactilla ja Firebase-taustalla',
        'Painotus käyttäjäystävälliseen käyttöliittymään ja yhteisön tarpeiden huomioimiseen'
      ],
      live: 'https://www.region.community'
    },
    {
      id: 'riffgenerator',
      name: 'RiffGenerator',
      description: 'Työkalu musiikintekijöille. Sovellus on vielä työn alla. Toteutetaan ensin selainversiona, sen jälkeen mobiiliversiona. Ajatuksena on että kuka tahansa voisi esim. ihan hyräilemällä tuottaa ääntä, jonka sovellus muuntaa midiksi ja leikkeen voi toistaa haluamallaan instrumentilla. Hyräilemällä voi siis periaatteessa tuottaa kokonaisen kappaleen.',
      technologies: ['TypeScript', 'React', 'React Native', 'Python'],
      details: [
        'Selainversio toimii web-selaimessa, mobiiliversio toteutetaan React Nativella',
        'Tarkoitus julkaista expo(eas)-pilveen',
        'Projektissa yhdistyy luovuus, ohjelmointi ja musiikin harrastus',
        'Sovellus on kehitysvaiheessa'
      ],
      github: 'https://github.com/eskoTaivassalo/riffmakerapp/tree/basicViews',
      live: null
    },
    {
      id: 'epq',
      name: 'EPQ',
      description: 'EPQ on mobiilisovellus jolla eri aloilla työskentelevät ammattilaiset voivat jakaa osaamistaan. kohdeyleisönä on vanhemmat jotka etsivät lapsilleen tukiopetusta terapiaa ym.',
      technologies: ['React Native', 'Js', 'Expo'],
      details: [
        'Mobiilisovellus Android ja iOS alustoille',
        'Kehitetty ammattilaisten osaamisen jakamiseen',
        'Rakennettu React Native ja Expo-teknologioilla'
      ],
      github: 'https://github.com/eskoTaivassalo/EPQ',
      live: null
    }
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">Projektit</h1>
      
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
                  <span>GitHub</span> →
                </a>
              )}
              {project.live && (
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link live-link"
                >
                  <span>Avaa projekti</span> →
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
