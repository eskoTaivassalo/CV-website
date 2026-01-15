import './Harrastukset.css';
import { useState } from 'react';

const Harrastukset = () => {
  const [openModal, setOpenModal] = useState<string | null>(null);

  const hobbies = [
    {
      title: 'Koodaus',
      icon: '💻',
      description: 'Vapaa-ajalla tykkään kokeilla uusia teknologioita ja kehittää omia projekteja. Open source -projektit kiinnostavat erityisesti.',
      hasModal: true,
      modalKey: 'koodaus'
    },
    {
      title: 'Pelaaminen',
      icon: '🎮',
      description: 'Pelaan mielellään erilaisia pelejä, erityisesti strategiapelit ja RPG:t. Pelit ovat myös inspiraation lähde omille projekteille.',
      hasModal: true,
      modalKey: 'gaming'
    },
    {
      title: 'Urheilu',
      icon: '⚽',
      description: 'Pidän huolta kunnostani urheilemalla säännöllisesti. Se auttaa myös pitämään mielen kirkkaana koodausta varten.',
      hasModal: true,
      modalKey: 'urheilu'
    },
    {
      title: 'Lukeminen',
      icon: '📚',
      description: 'Luen paljon teknisiä kirjoja ja artikkeleja. Oppiminen on jatkuva prosessi ja pidän itseni ajan tasalla uusimmista trendeistä.',
      hasModal: true,
      modalKey: 'lukeminen'
    },
    {
      title: 'Musiikki',
      icon: '🎵',
      description: () => <>Musiikki auttaa keskittymään koodauksessa. Tykkään kuunnella erilaisia genrejä taustalle koodaillessa. <a href="https://www.youtube.com/@musicbythevoid" target="_blank" rel="noopener noreferrer">🎵 YouTube</a></>,
      hasModal: true,
      modalKey: 'musiikki'
    }
  
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">Harrastukset</h1>
      
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
            <h2>Koodaus - Matka alkoi jo lapsena</h2>
            <div className="modal-text">
              <p>
                Koodaus on kiinnostanut minua jo pikku pojasta lähtien. Kun olin 6-vuotias, saimme vanhan Amstrad CPC464 kasettiasemalla toimivan tietokoneen. Tietokoneen mukana tuli muutama alkeellinen peli joita innolla kokeilimme pelata. Kokeilin myös ohjelmointia, nähdäkseni ja oppiakseni kuinka voi "käskeä" tietokoneen tekemään halutut asiat. Mukana tuli myös ohjekirja jossa kerrottiin kaikki Basic 1.0 ohjelmoinnista.
              </p>
              <p>
                Kovin pitkälle en päässyt koska en ollut lukutaitoinen, mutta muistan oppineeni ensimmäisinä sanoina kirjoittamaan sanat kuten "paper: RED, Background BLUE". Aivan varma en ole kirjoitusasusta mutta kopioin kirjaimet ohjekirjasta yksi kerrallaan.
              </p>
              <p>
                Muistan että jokin erityisen kiinnostava peli ei toiminut ja se harmitti kovasti. Yritin sitä lukuisia kertoja päälle, en muista mitä kaikkea yritin mutta koska olin tullut tietoiseksi siitä että tietokonetta käsketään ajattelin saman toimivan muuallakin. Yritin siis "KÄSKEÄ" peliä toimimaan esim. paukauttamalla kasettiasemaa nyrkillä juuri silloin kun peli alkaa latautua.
              </p>
              <p>
                Seuraava tietokoneeni olikin sitten Pentium 486, 33Mhz. Olin tuolloin n.11-vuotias. Olin ensimmäinen meidän luokalta jonka kotona oli tietokone. Ja itse asiassa ensimmäinen tietokone meillä oli valovuosia edellä muita vanha kunnon AMSTRAD joka oli nyt hylätty kaapin perälle. Käyttiksenä 486:ssa oli Windows 95. Naapuritalossa oli muistaakseni 386 ja siinä taas folderpohjainen käyttöliittymä, Olisikohan ollut jokin varhaisimmista Windows versioista.
              </p>
            </div>
          </div>
        </div>
      )}

      {openModal === 'musiikki' && (
        <div className="modal-overlay" onClick={() => setOpenModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setOpenModal(null)}>×</button>
            <h2>Musiikki - Rakkaus soittamiseen</h2>
            <div className="modal-text">
              <p>
                Innostuin rumpujen soitosta jo hyvin pienestä. Jo 6 vuotiaana kun äitimme nauhoitti C-kasetille puheitamme, kuuluu kuinka minä isolla äänellä: "MÄ SOITAN ROKKIA!" ja siihen perään suulla rumpututusta.
              </p>
              <p>
                Haaveet musiikin soittamisesta sai kuitenkin unohtaa uskonnollisista syistä ja yleinen kiinnostus musiikkiin johti siihen että jotain instrumenttia on voitava soittaa ja niin minusta tuli hetkeksi aikaa viulisti. Viulu hommattiin minulle kun olin n. 12-vuotias. Samalla aloin käydä kerran viikossa soittotunneilla.
              </p>
                <p>
                Nuoresta asti minua kiinnosti erityisesti rummut ja niiden soittaminen kuuluikin varhaisaikuisuuteen noin 8 vuoden ajan kun soittelin eri
                kokoonpanoissa. Noin 28-vuotiaana hankin ensimmäisen sähkökitaran ja aloin opetella soittamista vaikka monet väittävät ettei sillä iällä enää opi.
                Nykyään soitan kaikkia instrumentteja ja teen ja sävellän musiikkia. Tässä linkki YouTube-kanavalleni jonka olen vastikään perustanut. Minulla on noin 16 biisiä
                odottamassa julkaisukuntoon saattamista.
                </p>
                <a
                  href="https://www.youtube.com/@musicbythevoid"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube-kanavani
                </a>
            </div>
          </div>
        </div>
      )}

      {openModal === 'gaming' && (
        <div className="modal-overlay" onClick={() => setOpenModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setOpenModal(null)}>×</button>
            <h2>Pelaaminen - Matka Amstradin pelaajasta nykyiseen PS5-harrastelijaan</h2>
            <div className="modal-text">
              <p>
                Pelaaminen alkoi jo pienestä, ensimmäisellä tietokoneella joka oli Amstrad CPC464. Sillä pelasin mitä pelejä koneen mukana tuli ja joita saimme. Nuo pelit olivat alkeellisia ja eivät aina toimineet: Muistan kuinka jännityksellä odotimme lähteekö peli päälle ollenkaan ja valitettavan usein homma kaatui syntax error:ready- tekstiin.
              </p>
              <p>
                Seuraava harppaus tuli, kun saimme Pentium 486:n 90-luvun puolivälissä. Tuo kone oli valtava edistys! Sillä pelasin jo paljon suurempia ja teknisesti vaativampia pelejä, kuten NHL-94, Doom 1-2 sekä joitain arcade pelejä, kuten Jack Jazzrabbit ym- Nämä pelit määrittelivät 90-luvun puoliskoa minulle, kuten myös muille ikäisilleni,täysin.
              </p>
              <p>
                Nykyään pelaamisen painopiste on PS5:llä. Pelaan WRC- rallyä , Skyrimiä, Ghost of Tsutsimia. Pojan kanssa NHL, Fifa ym kaksin pelattavat pelit sekä aika ajoin pelaamme tietokoneella roblox alustalla olevia pelejä. Se yhdistää meitä ja tekee pelaamisesta yhteisen harrastuksen. Pelaaminen ei ole enää vain minun asia, vaan se on myös tapa viettää aikaa perheen kanssa ja luoda muistoja.
              </p>
            </div>
          </div>
        </div>
      )}

      {openModal === 'urheilu' && (
        <div className="modal-overlay" onClick={() => setOpenModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setOpenModal(null)}>×</button>
            <h2>Urheilu - Voimailusta kuntosaliharjoitteluun</h2>
            <div className="modal-text">
              <p>
                En ole koskaan ymmärtänyt pallopelejä. Jalkapallo, koripallo, jääkiekko - kaikki tuntui sekavalta ja en saanut otetta siitä, miten pelata tai seurata niitä. Yritin kyllä osallistua koulun liikuntatunneilla, mutta en koskaan innostunut joukkuepeleistä.
              </p>
              <p>
                Voimailu vei minut kuitenkin mukanaan. Aloitin kuntosalilla käymisen nuorena aikuisena, kun ymmärsin että voin hallita omaa kehitystäni. Painojen nostaminen tuntui loogiselta - enemmän painoa, enemmän toistoja, paremmat tulokset. Rakastan sitä, miten voin nähdä edistymisen peilistä ja mittarista.
              </p>
              <p>
                Nykyään urheiluharrastukseni ovat jääneet lähinnä kuntosalilla käyntiin. Käyn salilla 3-4 kertaa viikossa, keskityen voimaharjoitteluun ja kehonpainoharjoituksiin. Se auttaa pitämään mielen kirkkaana koodausta varten ja antaa energiaa päivittäisiin haasteisiin. Vaikka en harrasta kilpailu-urheilua, säännöllinen harjoittelu on tärkeä osa elämäntapaani.
              </p>
            </div>
          </div>
        </div>
      )}

      {openModal === 'lukeminen' && (
        <div className="modal-overlay" onClick={() => setOpenModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setOpenModal(null)}>×</button>
            <h2>Lukeminen - Matka lastenklassikoista teknisiin kirjoihin</h2>
            <div className="modal-text">
              <p>
                Aloin lukea paksuja, kovakantisia kirjoja heti kun osasin lukea. Ensimmäisenä luin Viisikko-sarjan kaikki kirjat - ne olivat jännittäviä seikkailuja, joissa lapset ratkoivat mysteerejä. Sitten siirryin Kolme etsivään -sarjaan, joka jatkoi samalla linjalla mutta hieman vanhemmille lukijoille.
              </p>
              <p>
                Tarzan-kirjasarjan kaikki kirjat olivat myös tärkeitä. Edgar Rice Burroughs'in luomat tarinat viidakosta, eläimistä ja ihmisistä veivät minut täysin toiseen maailmaan. Luin myös muita klassikoita kuten Robin Hood, Muumit ja Asterix-sarjan.
              </p>
              <p>
                Nykyään luen enemmän teknisiä kirjoja ja artikkeleita. Oppiminen on jatkuva prosessi ja pidän itseni ajan tasalla uusimmista trendeistä ohjelmoinnissa, teknologioissa ja muissa kiinnostavissa aiheissa. Lukeminen auttaa myös rentoutumaan ja inspiroitumaan uusista ideoista.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Harrastukset;
