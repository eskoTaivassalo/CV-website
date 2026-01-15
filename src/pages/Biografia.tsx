import './Biografia.css';

const Biografia = () => {
  return (
    <div className="biografia-container">
      <div className="biografia-content-wrapper">
        <aside className="biografia-sidebar">
          <div className="bio-section">
            <h2>Taustani</h2>
            <p>
              Kun olin kirjoittanut ylkioppilaaksi, päädyin rakennus alalle mm. Norjaan kipsilevy urakointiin. 
              Sieltä nuoruusajan seikkailun halu ja kiinnostus bänditoimintaan ja soittamiseen veivät 
              minut Helsinkiin. Asuin 8 vuotta pk seudulla tehden mitä hommia milloinkin satuin saamaan, 
              kunnes hakeuduin prosessinhoitajakoulutukseen Porvoohon. Opiskelin prosessinhoitajaksi ja tein 
              prosessinhoitajan töitä aina vuoteen 2018 asti.
            </p>
          </div>
        </aside>

        <main className="biografia-main">
          <div className="bio-section">
            <h2>Polkuni kehittäjäksi</h2>
            <p>
              Prosessinhoitajana toimiessa huomasin kiinnostuneeni erilaisista käyttöjärjestelmistä joita 
              käytettiin mm öljyn jalostuksessa valvomoissa. Pikku hiljaa tutustuin koodaamiseen ja lopulta hakeuduin 
              koodauskouluun. Perustin oman startupin nimeltään DreamButton Oy. Kehittelin omaa liiketoimintaa
              Featsy-nimisen sovelluksen ympärille joka lopulta osoittautui kannattamattomaksi liiketoiminnaksi. 
              Tästä sai kuitenkin hyvät eväät opintojen jatkamiseksi ja tätä nykyä lähes minkä tahansa web- tai mobiilisovelluksen
              kehittäminen on minulle mahdollista.
            </p>
            <p>
              Hakeuduin työvoimakoulutukseen koodauksen pariin Forssan ammatti-instituuttiin vuonna 2022
              Opiskeltuani 4 kuukautta koodaus/ohjelmistokehitysalan perus pilareita ja suoritettuani kurssin, 
              huomasin kiinnostuksen koodausalaan kasvaneen siinä määrin että päätin hakeutua lisäopintojen pariin ja hain ja 
              pääsin Careerialle ohjelmistokehittäjälinjalle. Opiskelin Careerialla Full-stack kehittäjäksi ja valmistuin vuoden 2025
              Joulukuussa parhain arvosanoin.
            </p>
          </div>

          <div className="bio-section">
            <h2>Filosofiani</h2>
            <p>
              Uskon, että hyvä koodi on selkeää, ylläpidettävää ja testattua. Pyrin aina kirjoittamaan 
              koodia, jota muutkin kehittäjät voivat helposti ymmärtää ja jatkokehittää. Clean code 
              ja hyvät käytännöt ovat minulle tärkeitä. KÄytän myös tekoälyä koodauksen apuna mutta pelkästään koodin selkeyttämiseksi
              ja pugien korjaamiseen. 
            Sovellus arkkitehtuurin ja siihen liittyvät käytänteet  pidän vakaasti omissa käsissäni.
            </p>
          </div>
        </main>

        <aside className="biografia-right-sidebar">
          <div className="bio-section">
            <h2>Tulevaisuus</h2>
            <p>
              Tavoitteeni on jatkaa kehittymistä full stack -kehittäjänä ja oppia lisää moderneja 
              teknologioita. Haluaisin myös jakaa osaamistani muiden kanssa ja auttaa muita 
              oppimaan ohjelmointia.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Biografia;
