import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'fi' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved === 'en' || saved === 'fi') ? saved : 'fi';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};

const translations: Record<Language, Record<string, string>> = {
  fi: {
    // Header
    'nav.cv': 'CV',
    'nav.bio': 'Biografia',
    'nav.hobbies': 'Harrastukset',
    'nav.projects': 'Projektit',
    'btn.downloadCV': '📄 Lataa CV',
    'btn.generating': 'Luodaan PDF...',
    
    // CV Page
    'cv.personalInfo': 'Henkilötiedot',
    'cv.name': 'Nimi',
    'cv.phone': 'Puhelin',
    'cv.email': 'Sähköposti',
    'cv.interests': 'Kiinnostuksen Kohteet',
    'cv.interest.music': 'Musiikki: Säveltäminen ja useiden eri instrumenttien soittaminen',
    'cv.interest.gym': 'Kuntosali',
    
    'cv.projects': 'Projektit',
    'cv.githubProjects': 'GitHub Projects',
    
    'cv.profile': 'Profiili',
    'cv.profileText' : 
    'Olen monipuolisen työkokemuksen omaava tekijä, jolla on taustaa teollisuudesta, prosessiteollisuudesta, logistiikasta, rakentamisesta sekä teknisistä tehtävistä. Olen työskennellyt useissa eri ympäristöissä, joissa korostuvat tarkkuus, vastuullisuus, turvallisuus ja kyky toimia osana tiimiä myös vaihtelevissa ja vaativissa olosuhteissa. Vahvinta kokemustani on prosessiteollisuudesta, jossa olen toiminut mm. piikiekkotuotannossa, öljynjalostuksessa sekä sinkkituotannossa. Lisäksi minulla on kokemusta materiaalien käsittelystä ja logistiikasta sekä teknisistä huolto- ja rakennustehtävistä. Olen kouluttautunut myös ohjelmistokehittäjäksi, ja minulla on osaamista modernista web- ja mobiilikehityksestä (React, React Native, Firebase sekä useat ohjelmointikielet kuten Python, Java ja C#). Yhdistän teknisen osaamisen ja käytännön työkokemuksen, mikä antaa hyvän pohjan sekä fyysisiin että digitaalisiin työtehtäviin. Etsin tehtäviä, joissa voin hyödyntää laaja-alaista kokemustani ja kehittyä edelleen teknisten ja ohjelmistokehityksen tehtävien parissa. ',
    'cv.skills': 'Taidot',
    'cv.references': 'Suosittelijat',
    'cv.referencesText': 'Saatavissa soittamalla puhelimitse',
    'cv.workExperience': 'Työkokemus',

    'cv.work1.title': 'Materiaalin käsittelijä',
    'cv.work1.company': 'Adecco',
    'cv.work1.experiencelines': 
    'Työskentelin GXO Logistics Services Finland Oy:ssä määräaikaisena.Työn kuvaani kuului erilaisten materiaalitoimitusten vastaan ottaminen ja käsittely sekä tilausten tekeminen keskusvarastolta',    
    'cv.work1.period': '27.10.2020 - 31.12.2021',

    'cv.work2.title': 'Piikiekkojen prosessoija',
    'cv.work2.company': 'Okmetic Oy',
    'cv.work2.experiencelines': 
    'Okmetic Oy:llä työskentelin piikiekkotuotannossa prosessoijana. Työtehtäviini kuului piikiekkojen skannaus, analysointi ja käsittely erilaisilla piikiekkotuotantoon kehitetyillä koneilla ja roboteilla. Työskentely vaati huolellisuutta ja tarkkuutta, ja hygienia oli erittäin tärkeä osa työtä.',
    'cv.work2.period': '01.09.2016 - 30.08.2018',

    'cv.work3.title': 'Prosessinhoitaja',
    'cv.work3.company': 'Neste Oyj, Porvoo',
    'cv.work3.experiencelines': 
    'Työskentelin Neste Oyj:lla määräaikaisena kenttä operaattorina. Työtehtäviini kuului valvontakierrosten tekeminen, näytteiden otto eri puolilta prosessia ja analysointi ja käsittely laboratoriossa sekä pienten korjaustöiden tekeminen ja valvonta.',    
    'cv.work3.period': '28.04.2015 - 31.08.2016',

    'cv.work4.title': 'Prosessinhoitaja',
    'cv.work4.company': 'Boliden Oy, Kokkola',
    'cv.work4.period': '12.05.2014-25.08.2014',
    'cv.work4.experiencelines': 
    'Prosessinhoitajaopintojeni alkuvaiheessa työskentelin yhden kesän Boliden Oylla sinkkituotannossa. Tehtäviini kuului irroituskoneiden käyttö sekä prosessin valvonta ja mahdollisten häiriötilanteiden selvittäminen',
    'cv.work5.title': 'Apukairaaja',
    'cv.work5.company': 'Oy Kati Ab, Kalajoki',
    'cv.work5.period': '04.02.2013 - 30.04.2013',
    'cv.work5.experiencelines': 
    'Katilla työskentelin apukairaajana syväkairausurakoinnissa. Työtehtäviini kuuluivat kairausputken tyhjentäminen ja näytteiden kerääminen laatikoihin ja kuljettaminen moottorikelkalla tai mönkijällä ennalta sovittuun paikkaan sekä kairauskoneen siirrossa auttaminen.',    
    
    'cv.work6.title': 'Tekninen eristäjä',
    'cv.work6.company': 'Keski-Pohjanmaan lämpöeristys Oy, Kokkola',
    'cv.work6.period': '12.9.2011-11.12.2011',
    'cv.work6.experiencelines': 
    'Tein teknisen eristäjän töitä saneeraus- ja uudiskrakennuskohteissa. Työtehtäviini kuului siis lähinnä putkien eristäminen, niin kylmä kuin lämpöeristystä.',    
    
    'cv.work7.title': 'Taksiauton kuljettaja',
    'cv.work7.company': 'Taksijets Oy, Espoo, Kruunutaksi Oy, Vantaa, Kovanen Oy, Helsinki',
    'cv.work7.period': '01.10.2009 - 30.08.2011',
    'cv.work7.experiencelines': 
    'Työtehtäviini kuului asiakkaiden kyyditseminen Helsingissä. Asakkaina oli lähinnä Kelakyytiläisiä. Lisäksi täydentävää tolppa-ajoa ja tilausjärjestelmän kautta tulevia kyytejä.',

    'cv.work8.title': 'Remontti- ja kirvesmiehen työt.',
    'cv.work8.company': 'Global Wheel Partners(GWP) Oy, Espoo',
    'cv.work8.period': '01.10.2008-15.07.2009',
    'cv.work8.experiencelines': 
    'Työtehtäviini kuului mm: Kylpyhuoneiden purkamista, Ikkunoiden ja ovien huoltomaalaus, ryömintätilan aukkojen porausta, vesivahinkojen purku- ja rakennustöitä sekä omakotitalon laajennuksen aputyöt. Lisäksi sisä- ja ulkotilojen maalausta.',    
   
    'cv.work9.title': 'Muutto- ja haalaus',
    'cv.work9.company': 'Teollisuusmuutot Oy, Helsinki',
    'cv.work9.period': '12.02.2007-28.08.2008',
    'cv.work9.experiencelines': 
    'Teollisuusmuutot Oy:lla työskentelin erilaisissa muutto- ja haalaus projekteissa aina yksittäisistä toimistomuutoista useita kuukausia kestäneisiin tehdasmuuttoihin. Työtehtävien edellytyksenä oli turvalliset toimintatavat ja huipputekninen kalusto trukeista kurottajiin sekä erilaisiin apuvälineisiin kuten tunkkeihin, siirtorulliin ja nostureihin.',    
    
    'cv.work10.title': 'Varastotyöt ja keräily',
    'cv.work10.company': 'Inex Partners Oy',
    'cv.work10.period': '01.10.2005 - 30.09.2006',
    'cv.work10.experiencelines': 
    'Inexillä työskentelin tuoretuotteiden keräilyssä ja käsittelyssä ääniohjausta apuna käyttäen.',   

    'cv.work11.title': 'Muutto- ja haalaus',
    'cv.work11.company': 'Pekka Niska Oy, Helsinki',
    'cv.work11.period': '15.04.2005-01.09.2005',
    'cv.work11.experiencelines': 
    'Pekka Niskalla työskentelin henkilönostimen kuljettajana ja tutustuin myös haalaus alaan. Myös nostimien huolto ja korjaus kuuluivat toimen kuvaani.',
   
    'cv.work12.title': 'Elintarviketyöntekijä',
    'cv.work12.company': 'Valio Oy, Toholampi',
    'cv.work12.period': '25.08.2004 - 03.04.2005',
    'cv.work12.experiencelines': 
    'Valiolla työskentelin juuston tuotannon eri prosessivaiheissa, juustomassan käsittelystä ja altaiden purkamisesta (”puskumies”) aina juuston pakkaamiseen ja varastointiin.',
 
    'cv.work13.title': 'Rakennustyöntekijä',
    'cv.work13.company': 'Major Byggteknikk as',
    'cv.work13.period': '14.10.2003-21.11.2003 sekä 05.04.2004 - 13.08.2004',
    'cv.work13.experiencelines': 
    'Major Byggteknikillä ollessani tein kipsiväliseiniä sekä seinien eristystä urakka palkalla',
   
    'cv.work14.title': 'Remontti ja purku',
    'cv.work14.company': 'Rivnings Spesialisten as',
    'cv.work14.period': '16.01.2004 - 15.04.2004',
    'cv.work14.experiencelines': 
    'Rivnings spesialisten A/S:llä työskentelin Oslon pääkirjaston saneeraukseen liittyvissä purkutöissä',
    
    'cv.work115.company': 'Puukon Ky',
    'cv.work15.title': 'Huonekalukomponenttien valmistus',
    'cv.work15.period': '09.04.2003 - 08.08.2003',
    'cv.work15.experiencelines': 
    'Puukon Kylla työskentelin vaihetyöntekijänä huonekalukomponenttien sarjavalmistuksessa, mm poraus ja kokoonpano', 
    
    
    
    'cv.motto': 'Edistymistä voi mitata prosentteina, elämää elettyinä hetkinä',
    
    'cv.education': 'Koulutus ja Pätevyydet',
    'cv.edu1.title': 'Ohjelmistokehittäjä',
    'cv.edu1.school': 'Careeria, Porvoo',
    'cv.edu1.period': 'Tammikuu 2023 - Joulukuu 2025 (Valmistunut)',
    'cv.edu1.desc': 'Koulutus mahdollistaa ohjelmistokehittäjänä toimimisen joko työntekijänä tai yksityisenä elinkeinon harjoittajana. Painottuu erityisesti React Native ja Google Firebase ympäristössä tapahtuvaan ohjelmistokehitykseen.',
    
    'cv.edu2.title': 'Tieto- ja viestintätekniikan perustutkinto (koodausosio, 45 osp)',
    'cv.edu2.school': 'Forssan ammatti-instituutti, Forssa',
    'cv.edu2.period': 'Maaliskuu 2022 - Heinäkuu 2022',
    'cv.edu2.studies': 'Opinnot: Python, C#, C++, Java, JavaScript, HTML, CSS',
    'cv.edu2.thesis': 'Lopputyöt: React-websovellus ja Pythonilla toteutettu peli.',
    'cv.edu2.desc': 'Koulutus antoi peruskäsityksen eri ohjelmistokielistä.',
    
    'cv.edu3.title': 'Prosessinhoitajan perustutkinto',
    'cv.edu3.school': 'Edupoli, Porvoo',
    'cv.edu3.period': 'Syyskuu 2013 - Toukokuu 2016',
    'cv.edu3.desc': 'Prosessinhoitajan perustutkinto, öljynjalostus',
    
    'cv.edu4.title': 'Ylioppilastutkinto',
    'cv.edu4.school': 'Toholammin lukio, Toholampi',
    'cv.edu4.period': 'Elokuu 2000 - Joulukuu 2003',

    // Biografia
    'bio.background': 'Taustani',
    'bio.backgroundText': 'Kun olin kirjoittanut ylkioppilaaksi, päädyin rakennus alalle mm. Norjaan kipsilevy urakointiin. Sieltä nuoruusajan seikkailun halu ja kiinnostus bänditoimintaan ja soittamiseen veivät minut Helsinkiin. Asuin 8 vuotta pk seudulla tehden mitä hommia milloinkin satuin saamaan, kunnes hakeuduin prosessinhoitajakoulutukseen Porvoohon. Opiskelin prosessinhoitajaksi ja tein prosessinhoitajan töitä aina vuoteen 2018 asti.',
    'bio.path': 'Polkuni kehittäjäksi',
    'bio.pathText1': 'Prosessinhoitajana toimiessa huomasin kiinnostuneeni erilaisista käyttöjärjestelmistä joita käytettiin mm öljyn jalostuksessa valvomoissa. Pikku hiljaa tutustuin koodaamiseen ja lopulta hakeuduin koodauskouluun. Perustin oman startupin nimeltään DreamButton Oy. Kehittelin omaa liiketoimintaa Featsy-nimisen sovelluksen ympärille joka lopulta osoittautui kannattamattomaksi liiketoiminnaksi. Tästä sai kuitenkin hyvät eväät opintojen jatkamiseksi ja tätä nykyä lähes minkä tahansa web- tai mobiilisovelluksen kehittäminen on minulle mahdollista.',
    'bio.pathText2': 'Hakeuduin työvoimakoulutukseen koodauksen pariin Forssan ammatti-instituuttiin vuonna 2022 Opiskeltuani 4 kuukautta koodaus/ohjelmistokehitysalan perus pilareita ja suoritettuani kurssin, huomasin kiinnostuksen koodausalaan kasvaneen siinä määrin että päätin hakeutua lisäopintojen pariin ja hain ja pääsin Careerialle ohjelmistokehittäjälinjalle. Opiskelin Careerialla Full-stack kehittäjäksi ja valmistuin vuoden 2025 Joulukuussa parhain arvosanoin.',
    'bio.philosophy': 'Filosofiani',
    'bio.philosophyText': 'Uskon, että hyvä koodi on selkeää, ylläpidettävää ja testattua. Pyrin aina kirjoittamaan koodia, jota muutkin kehittäjät voivat helposti ymmärtää ja jatkokehittää. Clean code ja hyvät käytännöt ovat minulle tärkeitä. Käytän myös tekoälyä koodauksen apuna mutta pelkästään koodin selkeyttämiseksi ja bugien korjaamiseen. Sovellus arkkitehtuurin ja siihen liittyvät käytänteet pidän vakaasti omissa käsissäni.',
    'bio.future': 'Tulevaisuus',
    'bio.futureText': 'Tavoitteeni on jatkaa kehittymistä full stack -kehittäjänä ja oppia lisää moderneja teknologioita. Haluaisin myös jakaa osaamistani muiden kanssa ja auttaa muita oppimaan ohjelmointia.',
    
    // Harrastukset
    'hobbies.title': 'Harrastukset',
    'hobbies.coding': 'Koodaus',
    'hobbies.codingDesc': 'Vapaa-ajalla tykkään kokeilla uusia teknologioita ja kehittää omia projekteja. Muun tekemisen puutteessa opiskelen mm. Udemy-alustan kautta koodaamista. Open source -projektit kiinnostavat erityisesti.',
    'hobbies.gaming': 'Pelaaminen',
    'hobbies.gamingDesc': 'Pelaan mielellään erilaisia pelejä, erityisesti räiskintä-, urheilu- ja autopelejä. Pelit ovat myös inspiraation lähde omille projekteille.',
    'hobbies.sports': 'Urheilu',
    'hobbies.sportsDesc': 'Hyötyliikkuja: syksyisin marjastan, ympäri vuoden koiralenkit ja lisäksi kuntosalia 1-3 kertaa viikossa. Liikunta auttaa pitämään mielen kirkkaana koodausta varten.',
    'hobbies.reading': 'Lukeminen',
    'hobbies.readingDesc': 'Luen paljon teknisiä kirjoja ja artikkeleja. Oppiminen on jatkuva prosessi ja pidän itseni ajan tasalla uusimmista trendeistä.',
    'hobbies.music': 'Musiikki',
    'hobbies.musicDesc': 'Intohimoinen musiikin harrastaja. Soitan useita instrumentteja, laulan ja teen omia biisejä. Musiikkia kuuntelen lähes jatkuvasti, ja omaa musiikkia löytyy YouTubesta.',
    
    // Harrastukset - modaalit
    'hobbies.modal.coding.title': 'Koodaus - Matka alkoi jo lapsena',
    'hobbies.modal.coding.p1': 'Koodaus on kiinnostanut minua jo pikku pojasta lähtien. Kun olin 6-vuotias, saimme vanhan Amstrad CPC464 kasettiasemalla toimivan tietokoneen. Tietokoneen mukana tuli muutama alkeellinen peli joita innolla kokeilimme pelata. Kokeilin myös ohjelmointia, nähdäkseni ja oppiakseni kuinka voi "käskeä" tietokoneen tekemään halutut asiat. Mukana tuli myös ohjekirja jossa kerrottiin kaikki Basic 1.0 ohjelmoinnista.',
    'hobbies.modal.coding.p2': 'Kovin pitkälle en päässyt koska en ollut lukutaitoinen, mutta muistan oppineeni ensimmäisinä sanoina kirjoittamaan sanat kuten "paper: RED, Background BLUE". Aivan varma en ole kirjoitusasusta mutta kopioin kirjaimet ohjekirjasta yksi kerrallaan.',
    'hobbies.modal.coding.p3': 'Muistan että jokin erityisen kiinnostava peli ei toiminut ja se harmitti kovasti. Yritin sitä lukuisia kertoja päälle, en muista mitä kaikkea yritin mutta koska olin tullut tietoiseksi siitä että tietokonetta käsketään ajattelin saman toimivan muuallakin. Yritin siis "KÄSKEÄ" peliä toimimaan esim. paukauttamalla kasettiasemaa nyrkillä juuri silloin kun peli alkaa latautua.',
    'hobbies.modal.coding.p4': 'Seuraava tietokoneeni olikin sitten Pentium 486, 33Mhz. Olin tuolloin n.11-vuotias. Olin ensimmäinen meidän luokalta jonka kotona oli tietokone. Ja itse asiassa ensimmäinen tietokone meillä oli valovuosia edellä muita vanha kunnon AMSTRAD joka oli nyt hylätty kaapin perälle. Käyttiksenä 486:ssa oli Windows 95. Naapuritalossa oli muistaakseni 386 ja siinä taas folderpohjainen käyttöliittymä, Olisikohan ollut jokin varhaisimmista Windows versioista.',
    
    'hobbies.modal.music.title': 'Musiikki - Omaa musiikkia YouTubessa',
    'hobbies.modal.music.p1': 'Innostuin rumpujen soitosta jo hyvin pienestä. Jo 6 vuotiaana kun äitimme nauhoitti C-kasetille puheitamme, kuuluu kuinka minä isolla äänellä: "MÄ SOITAN ROKKIA!" ja siihen perään suulla rumpututusta.',
    'hobbies.modal.music.p2': 'Haaveet musiikin soittamisesta sai kuitenkin unohtaa uskonnollisista syistä ja yleinen kiinnostus musiikkiin johti siihen että jotain instrumenttia on voitava soittaa ja niin minusta tuli hetkeksi aikaa viulisti. Viulu hommattiin minulle kun olin n. 12-vuotias. Samalla aloin käydä kerran viikossa soittotunneilla.',
    'hobbies.modal.music.p3': 'Nuoresta asti minua kiinnosti erityisesti rummut ja niiden soittaminen kuuluikin varhaisaikuisuuteen noin 8 vuoden ajan kun soittelin eri kokoonpanoissa. Noin 28-vuotiaana hankin ensimmäisen sähkökitaran ja aloin opetella soittamista vaikka monet väittävät ettei sillä iällä enää opi. Nykyään soitan kaikkia instrumentteja ja teen ja sävellän musiikkia. Tässä linkki YouTube-kanavalleni jonka olen vastikään perustanut. Minulla on noin 16 biisiä odottamassa julkaisukuntoon saattamista.',
    'hobbies.modal.music.youtube': 'YouTube-kanavani',
    
    'hobbies.modal.gaming.title': 'Pelaaminen - Matka Amstradin pelaajasta nykyiseen PS5-harrastelijaan',
    'hobbies.modal.gaming.p1': 'Pelaaminen alkoi jo pienestä, ensimmäisellä tietokoneella joka oli Amstrad CPC464. Sillä pelasin mitä pelejä koneen mukana tuli ja joita saimme. Nuo pelit olivat alkeellisia ja eivät aina toimineet: Muistan kuinka jännityksellä odotimme lähteekö peli päälle ollenkaan ja valitettavan usein homma kaatui syntax error:ready- tekstiin.',
    'hobbies.modal.gaming.p2': 'Seuraava harppaus tuli, kun saimme Pentium 486:n 90-luvun puolivälissä. Tuo kone oli valtava edistys! Sillä pelasin jo paljon suurempia ja teknisesti vaativampia pelejä, kuten NHL-94, Doom 1-2 sekä joitain arcade pelejä, kuten Jack Jazzrabbit ym- Nämä pelit määrittelivät 90-luvun puoliskoa minulle, kuten myös muille ikäisilleni,täysin.',
    'hobbies.modal.gaming.p3': 'Nykyään pelaamisen painopiste on PS5:llä. Pelaan WRC- rallyä , Skyrimiä, Ghost of Tsutsimia. Pojan kanssa NHL, Fifa ym kaksin pelattavat pelit sekä aika ajoin pelaamme tietokoneella roblox alustalla olevia pelejä. Se yhdistää meitä ja tekee pelaamisesta yhteisen harrastuksen. Pelaaminen ei ole enää vain minun asia, vaan se on myös tapa viettää aikaa perheen kanssa ja luoda muistoja.',
    
    'hobbies.modal.sports.title': 'Urheilu - Kuntosalista koirailuun',
    'hobbies.modal.sports.p1': 'En ole koskaan ymmärtänyt pallopelejä. Jalkapallo, koripallo, jääkiekko - kaikki tuntui sekavalta ja en saanut otetta siitä, miten pelata tai seurata niitä. Yritin kyllä osallistua koulun liikuntatunneilla, mutta en koskaan innostunut joukkuepeleistä.',
    'hobbies.modal.sports.p2': 'Voimailu vei minut kuitenkin mukanaan. Aloitin kuntosalilla käymisen nuorena aikuisena, kun ymmärsin että voin hallita omaa kehitystäni. Painojen nostaminen tuntui loogiselta - enemmän painoa, enemmän toistoja, paremmat tulokset. Rakastan sitä, miten voin nähdä edistymisen peilistä ja mittarista.',
    'hobbies.modal.sports.p3': 'Nykyään säännöllinen liikunta koostuu pääosin kuntosalilla käynnistä 3-4 kertaa viikossa, keskittyen voimaharjoitteluun ja kehonpainoharjoituksiin. Lisäksi päivittäiset koiralenkit pitävät liikkeessä ja tuovat vaihtelua ulkoilmassa. Liikunta auttaa pitämään mielen kirkkaana koodausta varten ja antaa energiaa päivittäisiin haasteisiin. Vaikka kilpailu-urheilu ei kiinnosta, säännöllinen harjoittelu on tärkeä osa elämäntapaa.',
    
    'hobbies.modal.reading.title': 'Lukeminen - Matka lastenklassikoista teknisiin kirjoihin',
    'hobbies.modal.reading.p1': 'Aloin lukea paksuja, kovakantisia kirjoja heti kun osasin lukea. Ensimmäisenä luin Viisikko-sarjan kaikki kirjat - ne olivat jännittäviä seikkailuja, joissa lapset ratkoivat mysteerejä. Sitten siirryin Kolme etsivään -sarjaan, joka jatkoi samalla linjalla mutta hieman vanhemmille lukijoille.',
    'hobbies.modal.reading.p2': 'Tarzan-kirjasarjan kaikki kirjat olivat myös tärkeitä. Edgar Rice Burroughs\'in luomat tarinat viidakosta, eläimistä ja ihmisistä veivät minut täysin toiseen maailmaan.',
    'hobbies.modal.reading.p3': 'Nykyään luen enemmän teknisiä kirjoja ja artikkeleita. Oppiminen on jatkuva prosessi ja pidän itseni ajan tasalla uusimmista trendeistä ohjelmoinnissa, teknologioissa ja muissa kiinnostavissa aiheissa. Lukeminen auttaa myös rentoutumaan ja inspiroitumaan uusista ideoista.',
    
    // Projektit
    'projects.title': 'Projektit',
    'projects.technologies': 'Teknologiat',
    'projects.details': 'Tarkemmat tiedot',
    'projects.github': 'GitHub',
    'projects.liveDemo': 'Avaa projekti',

    'projects.regionb.name': 'Regionb',
    'projects.regionb.desc': 'Moderni verkkosovellus, joka tarjoaa yhteisölähtöisen alustan tapahtumille ja verkostoitumiselle.',
    'projects.regionb.detail1': 'Toteutettu Reactilla ja Firebase-taustalla',
    'projects.regionb.detail2': 'Painotus käyttäjäystävälliseen käyttöliittymään ja yhteisön tarpeiden huomioimiseen',
    
    'projects.riff.name': 'RiffGenerator',
    'projects.riff.desc': 'Työkalu musiikintekijöille. Sovellus on vielä työn alla. Toteutetaan ensin selainversiona, sen jälkeen mobiiliversiona. Ajatuksena on että kuka tahansa voisi esim. ihan hyräilemällä tuottaa ääntä, jonka sovellus muuntaa midiksi ja leikkeen voi toistaa haluamallaan instrumentilla. Hyräilemällä voi siis periaatteessa tuottaa kokonaisen kappaleen.',
    'projects.riff.detail1': 'Selainversio toimii web-selaimessa, mobiiliversio toteutetaan React Nativella',
    'projects.riff.detail2': 'Tarkoitus julkaista expo(eas)-pilveen',
    'projects.riff.detail3': 'Projektissa yhdistyy luovuus, ohjelmointi ja musiikin harrastus',
    'projects.riff.detail4': 'Sovellus on kehitysvaiheessa',
    
    'projects.epq.name': 'EPQ',
    'projects.epq.desc': 'EPQ on mobiilisovellus jolla eri aloilla työskentelevät ammattilaiset voivat jakaa osaamistaan. kohdeyleisönä on vanhemmat jotka etsivät lapsilleen tukiopetusta terapiaa ym.',
    'projects.epq.detail1': 'Mobiilisovellus Android ja iOS alustoille',
    'projects.epq.detail2': 'Kehitetty ammattilaisten osaamisen jakamiseen',
    'projects.epq.detail3': 'Rakennettu React Native ja Expo-teknologioilla',

    'projects.mydays.name': 'My Days App',
    'projects.mydays.desc': 'Moderni päiväkirjasovellus, jolla tallennat päivän tapahtumat, kuvat ja muistot helposti.',
    'projects.mydays.detail1': 'Aikajana- ja kalenterinäkymät merkintöjen selaamiseen',
    'projects.mydays.detail2': 'Kuvien lisääminen kamerasta ja galleriasta',
    'projects.mydays.detail3': 'Firebase-integraatio merkintöjen, kuvien ja autentikoinnin tueksi',
    
    'projects.cvsite.name': 'CV-website',
    'projects.cvsite.desc': 'Moderni CV-sivusto, joka esittelee minun taustaa, harrastuksia ja projekteja. Toteutettu Reactilla ja TypeScriptillä responsiivisella designilla.',
    'projects.cvsite.detail1': 'Responsiivinen design joka toimii kaikilla laitteilla',
    'projects.cvsite.detail2': 'Modaalit harrastuksien yksityiskohtaisille kuvauksille',
    'projects.cvsite.detail3': 'Interaktiivinen projektikokoelma GitHub-linkeillä',
    'projects.cvsite.detail4': 'Modernia CSS-tyylitystä ja käyttäjäystävällistä käyttöliittymää',
  },
  en: {
    // Header
    'nav.cv': 'CV',
    'nav.bio': 'Biography',
    'nav.hobbies': 'Hobbies',
    'nav.projects': 'Projects',
    'btn.downloadCV': '📄 Download CV',
    'btn.generating': 'Creating PDF...',
    
    // CV Page
    'cv.personalInfo': 'Personal Information',
    'cv.name': 'Name',
    'cv.phone': 'Phone',
    'cv.email': 'Email',
    
    'cv.interests': 'Interests',
    'cv.interest.music': 'Music: Composing and playing various instruments',
    'cv.interest.gym': 'Gym',
    
    'cv.projects': 'Projects',
    'cv.githubProjects': 'GitHub Projects',
    
    'cv.profile': 'Profile',
    'cv.profileText' : 'I am a versatile professional with extensive work experience in industry, process manufacturing, logistics, construction, and technical roles. I have worked in a variety of environments where precision, responsibility, safety, and the ability to work effectively as part of a team are essential, even under demanding and changing conditions. My strongest experience is in the process industry, including silicon wafer manufacturing, oil refining, and zinc production. In addition, I have experience in materials handling, logistics, technical maintenance, and construction work. I have also trained as a software developer and possess skills in modern web and mobile application development, including React, React Native, Firebase, and several programming languages such as Python, Java, and C#. I combine technical expertise with practical hands-on experience, providing a strong foundation for both physical and digital work environments. I am seeking opportunities where I can apply my broad range of experience while continuing to develop my skills in technical and software development roles. ',    
    'cv.skills': 'Skills',
    'cv.references': 'References',
    'cv.referencesText': 'Available upon request by phone',
    
    'cv.education': 'Education and Qualifications',
    'cv.edu1.title': 'Software Developer',
    'cv.edu1.school': 'Careeria, Porvoo',
    'cv.edu1.period': 'January 2023 - December 2025 (Graduated)',
    'cv.edu1.desc': 'Education enables working as a software developer either as an employee or as a private entrepreneur. Particularly focuses on software development in React Native and Google Firebase environments.',
    
    'cv.edu2.title': 'Information and Communication Technology Qualification (coding module, 45 credits)',
    'cv.edu2.school': 'Forssa Vocational Institute, Forssa',
    'cv.edu2.period': 'March 2022 - July 2022',
    'cv.edu2.studies': 'Studies: Python, C#, C++, Java, JavaScript, HTML, CSS',
    'cv.edu2.thesis': 'Final projects: React web application and a game implemented in Python.',
    'cv.edu2.desc': 'Education provided a basic understanding of different programming languages.',
    
    'cv.edu3.title': 'Process Operator Qualification',
    'cv.edu3.school': 'Edupoli, Porvoo',
    'cv.edu3.period': 'September 2013 - May 2016',
    'cv.edu3.desc': 'Process operator qualification, oil refining',
    
    'cv.edu4.title': 'Matriculation Examination',
    'cv.edu4.school': 'Toholampi High School, Toholampi',
    'cv.edu4.period': 'August 2000 - December 2003',
    
    'cv.workExperience': 'Work Experience',
    'cv.work1.title': 'Material Handler',
    'cv.work1.company': 'Adecco, Hamina',
    'cv.work1.experiencelines': 'I worked at GXO Logistics Services Finland Oy on a fixed-term contract. My responsibilities included receiving and processing material deliveries as well as placing orders with the central warehouse.',
    'cv.work1.period' : '27.10.2020-31.12.2021',
    'cv.work2.title': 'Process Operator',
    'cv.work2.company': 'Neste Oyj, Porvoo',
    'cv.work2.experiencelines':
    'I was employed by Neste Oyj as a Field Operator on a fixed-term contract. My duties included carrying out field inspections, collecting process samples, analyzing and processing samples in the laboratory, and performing and overseeing minor maintenance and repair work.',
    'cv.work2.period' : '01.09.2016 - 30.08.2018',

    'cv.work3.title': 'Process Operator',
    'cv.work3.company': 'Boliden Oy, Kokkola',
    'cv.work3.experiencelines':
    'At the beginning of my process operator studies, I worked for one summer at Boliden Oy in zinc production. My duties included operating separation machines, monitoring the production process, and troubleshooting possible disturbance situations.',
    'cv.work3.period' : '28.04.2015 - 31.08.2016',

    'cv.work4.title': 'Process Operator',
    'cv.work4.company': 'Okmetic Oy',
    'cv.work4.experiencelines':
    'At Okmetic Oy, I worked in silicon wafer production as a process operator. My duties included scanning, analyzing, and processing silicon wafers using various machines and robots designed for wafer manufacturing. The work required precision and attention to detail, and maintaining strict hygiene standards was an essential part of the job.',
    'cv.work4.period' : '12.05.2014-25.08.2014',

    'cv.work5.title': 'Assistant driller',
    'cv.work5.company': 'Oy Kati Ab, Kalajoki',
    'cv.work5.experiencelines':
    'I worked as an assistant driller in deep drilling operations at Oy Kati Ab. My duties included emptying drill rods, collecting samples into boxes, and transporting them by snowmobile or ATV to a designated location. I also assisted in relocating the drilling rig.',
    'cv.work5.period' : '04.02.2013 - 30.04.2013',

    'cv.work6.title': 'Technical Insulator',
    'cv.work6.company': 'Keski-Pohjanmaan Lämpöeristys Oy, Kokkola',
    'cv.work6.experiencelines':
    'I worked as a technical insulator in renovation and new construction projects. My main duties included insulating pipes with both thermal and cold insulation materials.',
    'cv.work6.period' : '12.9.2011-11.12.2011',

    'cv.work7.title': 'Renovation and Carpentry Work',
    'cv.work7.company': 'Global Wheel Partners (GWP) Oy, Espoo',
    'cv.work7.experiencelines':
    'My duties included demolition of bathrooms, maintenance painting of windows and doors, drilling access openings for crawl spaces, water damage demolition and reconstruction work, as well as assisting in a detached house extension project. In addition, I performed both interior and exterior painting work.',
    'cv.work7.period' : '01.10.2008-15.07.2009',

    'cv.work8.title': 'Taxidriver',
    'cv.work8.company': 'Taksijets Oy, Espoo',
    'cv.work8.experiencelines':
    'My duties included transporting customers in Helsinki. The clients were mainly Kela transportation passengers. In addition, I drove supplementary stand-by shifts as well as rides booked through a dispatch system.',
    'cv.work8.period' : '01.10.2008-15.07.2009',

    'cv.work9.title': 'Industrial Moving and Heavy Lifting',
    'cv.work9.company': 'Teollisuusmuutot Oy, Helsinki',
    'cv.work9.experiencelines':
    'I worked on various moving and heavy lifting projects at Teollisuusmuutot Oy, ranging from small office relocations to large industrial plant moves lasting several months. The work required safe working practices and the use of advanced equipment such as forklifts, telehandlers, and various lifting aids including jacks, moving rollers, and cranes.',
    'cv.work9.period' : '12.02.2007-28.08.2008',

        
    'cv.work10.title': 'Warehouse work and order picking',
    'cv.work10.company': 'Inex Partners Oy',
    'cv.work10.experiencelines':
    'I worked in the picking and handling of fresh products using voice-directed picking systems.',
    'cv.work10.period' : '01.10.2005 - 30.09.2006',


    'cv.work11.title': 'Industrial Moving and Heavy Lifting',
    'cv.work11.company': 'Pekka Niska Oy',
    'cv.work11.experiencelines':
    'At Pekka Niska, I worked as an aerial lift operator and also gained experience in heavy lifting operations. My responsibilities also included maintenance and repair of lifting equipment.',
    'cv.work11.period' : '15.04.2005 - 30.06.2005',

    'cv.work12.title': 'Food production worker',
    'cv.work12.company': 'Valio',
    'cv.work12.experiencelines':
    'At Valio, I worked in various stages of cheese production, ranging from handling and unloading cheese curd vats (“curd pushing operator”) to packaging and storing cheese products.',
    'cv.work12.period' : '25.08.2004 - 03.04.2005',

    'cv.work13.title': 'Renovation and Carpentry Work',
    'cv.work13.company': 'Major Byggteknikk as',
    'cv.work13.experiencelines':
    'While working at Major Byggteknik, I installed gypsum partition walls and performed wall insulation on a piecework basis.',
    'cv.work13.period' : '14.10.2003-21.11.2003 and 05.04.2004 - 13.08.2004',

    'cv.work14.title': 'Renovation and Carpentry Work',
    'cv.work14.company': 'Rivning spesialisten A/b',
    'cv.work14.experiencelines':
    'At Rivnings Spesialisten A/S, I worked on demolition work related to the renovation of the Oslo Public Library.',
    'cv.work14.period' : '16.01.2004 - 15.04.2004',

    'cv.work15.title': 'Furniture component manufacturing',
    'cv.work15.company': 'Puukon ky',
    'cv.work15.experiencelines':
    'At Puukon Ky, I worked as a production worker in the serial manufacturing of furniture components, including drilling and assembly tasks.',
    'cv.work15.period' : '09.04.2003 - 08.08.2003',










    'cv.jobTitle': 'Software Developer',
    'cv.motto': 'Progress can be measured in percentages, life in moments lived',
    
    // Biografia
    'bio.background': 'My Background',
    'bio.backgroundText': 'After graduating from high school, I ended up in the construction industry, including drywall contracting in Norway. From there, youthful adventure and interest in band activities and playing took me to Helsinki. I lived in the Helsinki metropolitan area for 8 years doing whatever jobs I happened to get, until I applied for process operator training in Porvoo. I studied to become a process operator and worked as a process operator until 2018.',
    'bio.path': 'My Path to Development',
    'bio.pathText1': 'While working as a process operator, I became interested in various operating systems used in oil refining control rooms. Gradually I got acquainted with coding and finally applied to a coding school. I founded my own startup called DreamButton Oy. I developed my own business around an application called Featsy, which ultimately proved to be an unprofitable business. However, this gave me good provisions for continuing studies and nowadays I am capable of developing almost any web or mobile application.',
    'bio.pathText2': 'I applied for labor training in coding at Forssa Vocational Institute in 2022. After studying the basic pillars of the coding/software development field for 4 months and completing the course, I noticed that my interest in the coding field had grown to such an extent that I decided to apply for further studies and I applied and was accepted to Careeria\'s software developer program. I studied at Careeria to become a Full-stack developer and graduated in December 2025 with top grades.',
    'bio.philosophy': 'My Philosophy',
    'bio.philosophyText': 'I believe that good code is clear, maintainable, and tested. I always strive to write code that other developers can easily understand and further develop. Clean code and good practices are important to me. I also use AI to assist with coding, but only for clarifying code and fixing bugs. I keep application architecture and related practices firmly in my own hands.',
    'bio.future': 'Future',
    'bio.futureText': 'My goal is to continue developing as a full stack developer and learn more modern technologies. I would also like to share my expertise with others and help others learn programming.',
    
    // Harrastukset
    'hobbies.title': 'Hobbies',
    'hobbies.coding': 'Coding',
    'hobbies.codingDesc': 'In my free time, I like to try new technologies and develop my own projects. When not otherwise occupied, I study coding through platforms like Udemy. Open source projects are of particular interest.',
    'hobbies.gaming': 'Gaming',
    'hobbies.gamingDesc': 'I enjoy playing various games, especially shooters, sports games and racing games. Games are also a source of inspiration for my own projects.',
    'hobbies.sports': 'Sports',
    'hobbies.sportsDesc': 'Utility exerciser: berry picking in autumn, year-round dog walks and gym 1-3 times per week. Exercise helps keep the mind clear for coding.',
    'hobbies.reading': 'Reading',
    'hobbies.readingDesc': 'I read a lot of technical books and articles. Learning is a continuous process and I keep myself up to date with the latest trends.',
    'hobbies.music': 'Music',    'hobbies.musicDesc': 'Passionate music enthusiast. I play multiple instruments, sing and compose my own songs. I listen to music almost constantly, and original music is available on YouTube.',
    
    // Hobbies - modals
    'hobbies.modal.coding.title': 'Coding - The Journey Started as a Child',
    'hobbies.modal.coding.p1': 'Coding has interested me since I was a little boy. When I was 6 years old, we got an old Amstrad CPC464 computer with a cassette drive. The computer came with a few basic games that we eagerly tried to play. I also tried programming to see and learn how to "command" the computer to do what I wanted. It also came with a manual that explained everything about Basic 1.0 programming.',
    'hobbies.modal.coding.p2': 'I didn\'t get very far because I wasn\'t literate yet, but I remember learning to write words like "paper: RED, Background BLUE" as my first words. I\'m not entirely sure about the spelling, but I copied the letters from the manual one at a time.',
    'hobbies.modal.coding.p3': 'I remember that a particularly interesting game didn\'t work and it annoyed me a lot. I tried it numerous times, I don\'t remember everything I tried but because I had become aware that computers are commanded, I thought the same would work elsewhere. So I tried to "COMMAND" the game to work, for example by banging the cassette drive with my fist just as the game started loading.',
    'hobbies.modal.coding.p4': 'My next computer was a Pentium 486, 33Mhz. I was about 11 years old at the time. I was the first one in our class to have a computer at home. And in fact, our first computer was light years ahead of others - the good old AMSTRAD which was now abandoned in the back of a closet. The 486 ran Windows 95. I remember the neighbor had a 386 with a folder-based interface, might have been one of the earliest Windows versions.',
    
    'hobbies.modal.music.title': 'Music - Original Music on YouTube',
    'hobbies.modal.music.p1': 'I became interested in playing drums from a very young age. When I was 6 years old and my mother recorded our speech on a C-cassette, you can hear me loudly saying: "I\'M PLAYING ROCK!" followed by drumming sounds with my mouth.',
    'hobbies.modal.music.p2': 'Dreams of playing music had to be forgotten for religious reasons, but general interest in music led to the need to play some instrument, and so I became a violinist for a while. A violin was acquired for me when I was about 12 years old. At the same time, I started taking lessons once a week.',
    'hobbies.modal.music.p3': 'From a young age, I was especially interested in drums and drum playing was part of my early adulthood for about 8 years as I played in different bands. At around 28 years old, I got my first electric guitar and started learning to play even though many claim you can\'t learn at that age anymore. Nowadays I play all instruments and compose music. Here\'s a link to my YouTube channel that I recently founded. I have about 16 songs waiting to be published.',
    'hobbies.modal.music.youtube': 'My YouTube Channel',
    
    'hobbies.modal.gaming.title': 'Gaming - Journey from Amstrad Player to Current PS5 Enthusiast',
    'hobbies.modal.gaming.p1': 'Gaming started from a young age, with the first computer which was an Amstrad CPC464. I played whatever games came with the computer and what we got. Those games were primitive and didn\'t always work: I remember how excitedly we waited to see if the game would start at all, and unfortunately it often crashed with a syntax error:ready text.',
    'hobbies.modal.gaming.p2': 'The next leap came when we got a Pentium 486 in the mid-90s. That machine was a huge improvement! I played much bigger and technically demanding games like NHL-94, Doom 1-2, and some arcade games like Jack Jazzrabbit, etc. These games completely defined the mid-90s for me, as they did for others my age.',
    'hobbies.modal.gaming.p3': 'Nowadays gaming focuses on PS5. I play WRC rally, Skyrim, Ghost of Tsushima. With my son, NHL, FIFA and other two-player games, and occasionally we play games on the Roblox platform. It brings us together and makes gaming a shared hobby. Gaming is no longer just my thing, but also a way to spend time with family and create memories.',
    
    'hobbies.modal.sports.title': 'Sports - From Gym to Dog Walking',
    'hobbies.modal.sports.p1': 'I\'ve never understood ball games. Football, basketball, ice hockey - everything seemed confusing and I couldn\'t grasp how to play or follow them. I did try to participate in school PE classes, but I never got excited about team sports.',
    'hobbies.modal.sports.p2': 'Powerlifting took me along though. I started going to the gym as a young adult when I realized I could control my own development. Lifting weights felt logical - more weight, more reps, better results. I love how I can see progress in the mirror and on the scale.',
    'hobbies.modal.sports.p3': 'Nowadays regular exercise consists mainly of gym visits 3-4 times a week, focusing on strength training and bodyweight exercises. Additionally, daily dog walks keep me active and provide variety in fresh air. Exercise helps keep the mind clear for coding and provides energy for daily challenges. Although competitive sports aren\'t of interest, regular training is an important part of lifestyle.',
    
    'hobbies.modal.reading.title': 'Reading - Journey from Children\'s Classics to Technical Books',
    'hobbies.modal.reading.p1': 'I started reading thick, hardcover books as soon as I could read. First I read all the Famous Five books - they were exciting adventures where children solved mysteries. Then I moved on to The Three Investigators series, which continued in the same vein but for slightly older readers.',
    'hobbies.modal.reading.p2': 'All the Tarzan book series were also important. Edgar Rice Burroughs\' stories about the jungle, animals and people took me to a completely different world. ',
    'hobbies.modal.reading.p3': 'Nowadays I read more technical books and articles. Learning is a continuous process and I keep myself up to date with the latest trends in programming, technologies and other interesting topics. Reading also helps me relax and get inspired by new ideas.',    
    // Projektit
    'projects.title': 'Projects',
    'projects.technologies': 'Technologies',
    'projects.details': 'Details',
    'projects.github': 'GitHub',
    'projects.liveDemo': 'Open Project',

    'projects.regionb.name': 'Regionb',
    'projects.regionb.desc': 'A modern web application that provides a community-driven platform for events and networking.',
    'projects.regionb.detail1': 'Implemented with React and Firebase backend',
    'projects.regionb.detail2': 'Focus on user-friendly interface and community needs',
    
    'projects.riff.name': 'RiffGenerator',
    'projects.riff.desc': 'A tool for music creators. The application is still under development. First implemented as a browser version, then as a mobile version. The idea is that anyone could produce sound by humming, which the application converts to MIDI and the clip can be played with any desired instrument. So by humming, you can essentially produce an entire song.',
    'projects.riff.detail1': 'Browser version works in web browser, mobile version will be implemented with React Native',
    'projects.riff.detail2': 'Intended to be published to expo(eas) cloud',
    'projects.riff.detail3': 'The project combines creativity, programming and music hobby',
    'projects.riff.detail4': 'Application is in development',
    
    'projects.epq.name': 'EPQ',
    'projects.epq.desc': 'EPQ is a mobile application where professionals working in different fields can share their expertise. The target audience is parents looking for tutoring, therapy, etc. for their children.',
    'projects.epq.detail1': 'Mobile application for Android and iOS platforms',
    'projects.epq.detail2': 'Developed for sharing professional expertise',
    'projects.epq.detail3': 'Built with React Native and Expo technologies',

    'projects.mydays.name': 'My Days App',
    'projects.mydays.desc': 'A modern diary app to easily capture daily moments, photos and memories.',
    'projects.mydays.detail1': 'Timeline and calendar views for browsing entries',
    'projects.mydays.detail2': 'Add photos from camera or gallery',
    'projects.mydays.detail3': 'Firebase integration for entries, images and authentication',
    
    'projects.cvsite.name': 'CV-website',
    'projects.cvsite.desc': 'A modern CV website that showcases my background, hobbies and projects. Built with React and TypeScript with responsive design.',
    'projects.cvsite.detail1': 'Responsive design that works on all devices',
    'projects.cvsite.detail2': 'Modals for detailed hobby descriptions',
    'projects.cvsite.detail3': 'Interactive project collection with GitHub links',
    'projects.cvsite.detail4': 'Modern CSS styling and user-friendly interface',
  }
};
