import './CV.css';
import profileImage from '../assets/esko.png';

const CV = () => {
  return (
    <div className="cv-container">
      <div className="profile-overlay">
        <img src={profileImage} alt="Esko Taivassalo" className="overlay-profile-image" />
        <div className="overlay-info">
          <h1 className="overlay-name">Esko  Taivassalo</h1>
          <p className="overlay-title">Ohjelmistokehittäjä</p>
        </div>
      </div>
      <div className="pdf-only-header">
        <div className="pdf-header-info">
          <h1>Esko  Taivassalo</h1>
          <p className="pdf-title">Ohjelmistokehittäjä</p>
        </div>
      </div>
      <div className="cv-content-wrapper">
        <aside className="cv-sidebar">
          <section className="cv-section">
            <h2>Henkilötiedot</h2>
            <div className="contact-info">
              <p><strong>Nimi:</strong> Esko Taivassalo</p>
              <p><strong>Osoite:</strong> Kauppakuja 4, 47200 Kouvola</p>
              <p><strong>Puhelin:</strong> 0413172320</p>
              <p><strong>Sähköposti:</strong> esko.taivassalo@gmail.com</p>
              <p><strong>Syntymäaika:</strong> 16.07.1984</p>
              <p><strong>Syntymäpaikka:</strong> Toholampi</p>
              <p><strong>Sukupuoli:</strong> Mies</p>
              <p><strong>Kansallisuus:</strong> Suomi</p>
              <p><strong>Siviilisääty:</strong> Avoliitossa</p>
              <p><strong>Ajokortti:</strong> A, B</p>
            </div>
          </section>

          <section className="cv-section">
            <h2>Kiinnostuksen Kohteet</h2>
            <ul>
              <li>Musiikki: Säveltäminen ja useiden eri instrumenttien soittaminen</li>
              <li>Kuntosali</li>
            </ul>
          </section>

          <section className="cv-section">
            <h2>Projektit</h2>
            <ul>
              <li><a href="/projektit#region">Region (www.region.community)</a></li>
              <li><a href="/projektit#riffgenerator">RiffGenerator</a></li>
              <li><a href="/projektit#epq">EPQ</a></li>
              <li><a href="https://github.com/eskoTaivassalo" target="_blank" rel="noopener noreferrer">GitHub Projects</a></li>
            </ul>
          </section>
        </aside>

        <main className="cv-main">
          <section className="cv-section">
            <h2>Profiili</h2>
            <p>
              Olen ohjelmistokehittäjä, joka on erikoistunut web- ja mobiilisovelluksiin. Taustani
              sisältää Python-, JavaScript- ja TypeScript-osaamista sekä kokemusta Reactin ja React
              Nativen käytöstä. Olen toteuttanut omia projekteja aina käyttöliittymistä kokonaisiin
              sovelluksiin asti, ja innostun erityisesti luomaan työkaluja ja palveluja, jotka
              helpottavat käyttäjien arkea. Hyödynnän GitHub Copilotia tehokkaasti kehitystyössä ja 
              hallitsen useiden taustapalveluiden, kuten Gitin, Expon ja Firebasen, integroinnin 
              projekteihini. Vahvuuksiani ovat itsenäinen oppiminen, ratkaisukeskeinen ote ja kyky 
              nähdä asiat useasta näkökulmasta.
            </p>
          </section>

          <section className="cv-section">
            <h2>Taidot</h2>
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
            <h2>Suosittelijat</h2>
            <p>Saatavissa soittamalla puhelimitse</p>
          </section>
        </main>

        <aside className="cv-right-sidebar">
          <section className="cv-section">
            <h2>Koulutus ja Pätevyydet</h2>
            
            <div className="education-item">
              <h3>Ohjelmistokehittäjä</h3>
              <p className="school">Careeria, Porvoo</p>
              <p className="period">Tammikuu 2023 - Joulukuu 2025 (Valmistunut)</p>
              <p>Koulutus mahdollistaa ohjelmistokehittäjänä toimimisen joko työntekijänä tai yksityisenä elinkeinon harjoittajana. 
              Painottuu erityisesti React Native ja Google Firebase ympäristössä tapahtuvaan ohjelmistokehitykseen.</p>
            </div>

            <div className="education-item">
              <h3>Tieto- ja viestintätekniikan perustutkinto (koodausosio, 45 osp)</h3>
              <p className="school">Forssan ammatti-instituutti, Forssa</p>
              <p className="period">Maaliskuu 2022 - Heinäkuu 2022</p>
              <p>Opinnot: Python, C#, C++, Java, JavaScript, HTML, CSS</p>
              <p>Lopputyöt: React-websovellus ja Pythonilla toteutettu peli.</p>
              <p>Koulutus antoi peruskäsityksen eri ohjelmistokielistä.</p>
            </div>

            <div className="education-item">
              <h3>Prosessinhoitajan pt</h3>
              <p className="school">Edupoli, Porvoo</p>
              <p className="period">Syyskuu 2013 - Toukokuu 2016</p>
              <p>Prosessinhoitajan perustutkinto, öljynjalostus</p>
            </div>

            <div className="education-item">
              <h3>Ylioppilastutkinto</h3>
              <p className="school">Toholammin lukio, Toholampi</p>
              <p className="period">Elokuu 2000 - Joulukuu 2003</p>
            </div>

          </section>

          <section className="cv-section">
            <h2>Työkokemus</h2>
            
            <div className="experience-item">
              <h3>Materiaalin käsittelijä</h3>
              <p className="company">Adecco, Hamina</p>
              <p className="period">Toukokuu 2020 - Syyskuu 2021</p>
            </div>

            <div className="experience-item">
              <h3>Prosessinhoitaja</h3>
              <p className="company">Okmetic Oy & Neste Oyj, Vantaa/Porvoo</p>
              <p className="period">Huhtikuu 2015 - Elokuu 2018</p>
            </div>

            <div className="experience-item">
              <h3>Rakennus-, tehdas- ja muuttotyöt sekä taksinkuljettajan työt</h3>
              <p className="company">Useita eri työnantajia</p>
              <p className="period">Syyskuu 2004 - Elokuu 2014</p>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
};

export default CV;
