export const site = {
  name: 'Medisinsk SimulatorSenter',
  short: 'MSS',
  tagline: 'Trening – Trygghet – Erfaring',
  phone: '+47 728 28 036',
  phoneHref: 'tel:+4772828036',
  email: 'simulatorsenteret@medisin.ntnu.no',
  visit: ['Medisinsk SimulatorSenter', 'St. Olavs hospital', 'Prinsesse Kristinas gt. 3', 'AHL-senteret Nord U1', '7006 Trondheim'],
  post: ['Medisinsk SimulatorSenter', 'St. Olavs hospital', 'Postboks 3250 Torgarden', '7006 Trondheim'],
  // Sett til f.eks. 'https://formspree.io/f/xxxx' for å sende skjema via Formspree. Tom = mailto.
  formEndpoint: '',
};

export const nav = [
  { href: '/', label: 'Forside', id: 'home' },
  { href: '/kurs-undervisning/', label: 'Kurs / undervisning', id: 'kurs' },
  { href: '/forskning-utvikling/', label: 'Forskning / utvikling', id: 'forskning' },
  { href: '/om-oss/', label: 'Om oss', id: 'om-oss' },
  { href: '/kontakt/', label: 'Kontakt', id: 'kontakt' },
];

export const partners = [
  { name: 'St. Olavs hospital', href: 'https://www.stolav.no/' },
  { name: 'NTNU', href: 'https://www.ntnu.no/' },
  { name: 'Helse Midt-Norge', href: 'https://www.helse-midt.no/' },
];

export const staff = [
  { name: 'Stine Gundrosen', role: 'Avdelingssjef, PhD', extra: ['Master i helsevitenskap (MSc)', 'Spesialsykepleier Intensiv'], email: 'stine.gundrosen@ntnu.no', img: '/images/ansatte/stine-gundrosen.jpg' },
  { name: 'Hilde Stuedahl Mohn', role: 'Seksjonsleder / universitetslektor', extra: ['Master i voksnes læring (MA)', 'Spesialsykepleier Intensiv'], email: 'hilde.stuedahl.mohn@stolav.no', img: '/images/ansatte/hilde-mohn.jpg' },
  { name: 'Hilde Berg', role: 'Administrasjonskonsulent', extra: [], email: 'hilde.berg4@stolav.no', img: '/images/ansatte/hilde-berg.jpg' },
  { name: 'Petter Aadahl', role: 'Professor anestesiologi, dr.med.', extra: [], email: 'petter.aadahl@stolav.no', img: '/images/ansatte/petter-aadahl.jpg' },
  { name: 'Alba Berglun Løvås', role: 'Spes.spl. kardiologi', extra: [], email: 'monica.lovas@stolav.no', img: '/images/ansatte/alba-lovas.jpg' },
  { name: 'Ingrid Nissen', role: 'Overlege pediatri', extra: [], email: 'ingrid.nissen@stolav.no', img: '/images/ansatte/ingrid-nissen.jpg' },
  { name: 'Siri Skarpnes', role: 'Spes.spl. akuttsykepleie', extra: [], email: 'siri.skarpnes@stolav.no', img: '' },
  { name: 'Dyveke Skevik Hatling', role: 'Overlege akutt- og mottaksmedisin', extra: [], email: 'dyveke.skevik.hatling@stolav.no', img: '' },
  { name: 'Kaja Flatøy', role: 'Akuttsykepleier og HLR-koordinator', extra: [], email: 'kaja.flatoy@stolav.no', img: '/images/ansatte/kaja-flatoy.png' },
  { name: 'Anne-Mette Bringedahl Uglem', role: 'Lege i spesialisering, nevrologi', extra: [], email: 'anne.mette.bringedal.uglem@stolav.no', img: '/images/ansatte/anne-mette-uglem.jpg' },
];

export const courses = [
  { title: 'Medisinsk mottaksteam', text: 'Teamet utløses ved melding om pasient med svikt i vitale funksjoner, der en medisinsk sykdom eller annen ikke-traumatisk hendelse er utgangspunktet for innleggelsen.', team: '2 akuttsykepleiere, 1 akuttlege, 1 indremedisiner, 1 anestesilege og 1 anestesisykepleier.' },
  { title: 'Hjertestansteam', text: 'Hjertestansteam utløses ved å bruke nødnettet fra sengeposter eller andre arealer. Det er et team for voksne og et team for barn.', team: 'Voksenteamet: primærvakt hjertemedisin, primærvakt anestesi, vakthavende anestesisykepleier, sløyfeholder (fra Akuttmottaket) og portør.' },
  { title: 'Akutt hjerneslag', text: 'Mottak av pasient aktuell for trombolyse/trombektomi. Ved trombektomi bidrar også intervensjonsradiologi og anestesi.', team: 'Akuttlege og akuttsykepleiere (2 stk.), radiolog og radiograf, primærvakt medisin/nevro/slag.' },
];

export const research = {
  phd: [
    { author: 'Gundrosen, Stine', year: '2019', title: 'Communication in Action. Talk-work relationship in knowledge-driven emergency team activities.', href: 'https://ntnuopen.ntnu.no/ntnu-xmlui/handle/11250/2606364' },
  ],
  master: [
    { author: 'Hilde Stuedahl', year: '2013', title: 'Læring gjennom refleksjon. En studie av debriefing etter simulatortrening', href: 'https://ntnuopen.ntnu.no/ntnu-xmlui/handle/11250/271805' },
    { author: 'Gundrosen, Stine', year: '2009', title: 'Medisinsk fullskala simulering som undervisningsmetode for sykepleiere som håndterer kritisk syke pasienter. En randomisert kontrollert studie', href: 'https://ntnuopen.ntnu.no/ntnu-xmlui/handle/11250/264668' },
  ],
  articles: [
    { authors: 'Gundrosen S, Thomassen G, Wisborg T, Aadahl P', title: 'Team talk and team decision processes: a qualitative discourse analytical approach to 10 real-life medical emergency team encounters', journal: 'BMJ Open (2018) vol. 8:e023749 (11)', year: '2018', href: 'https://pubmed.ncbi.nlm.nih.gov/30391920/' },
    { authors: 'Gundrosen S, Andenæs E, Aadahl P, Thomassen GM', title: 'Team talk and team activity in simulated medical emergencies: a discourse analytical approach', journal: 'Scandinavian Journal of Trauma, Resuscitation and Emergency Medicine (2016) vol. 24 (135)', year: '2016', href: 'https://sjtrem.biomedcentral.com/articles/10.1186/s13049-016-0325-1' },
    { authors: 'Thomassen G, Andenæs E, Gundrosen S, Sarangi S', title: 'Discourse types and (re)distribution of responsibility in simulated emergency team encounters', journal: 'Communication & Medicine (2016) vol. 13', year: '2016', href: 'https://pubmed.ncbi.nlm.nih.gov/29958352/' },
    { authors: 'Gundrosen S, Solligård E, Aadahl P', title: 'Team competence among nurses in an intensive care unit: The feasibility of in situ simulation and assessing non-technical skills', journal: 'Intensive and Critical Care Nursing (2014) 30, 312–317', year: '2014', href: 'https://pubmed.ncbi.nlm.nih.gov/25059105/' },
    { authors: 'Husby M, Einvik S, Gundrosen S, Tanemsmo TG, Aadahl P', title: 'Medical simulation – A useful tool for Cardiac Life Support Instructors at Coronary Care Units to improve competence and motivation to instruct others', journal: 'European Journal of Cardiovascular Nursing (2006) vol. 5S1', year: '2006', href: '' },
  ],
  posters: [
    { event: 'IMSH, Phoenix', year: '2010', title: 'Designing Scenarios for Medical Simulation – Implementing Clinical Experience' },
    { event: 'SESAM, Granada', year: '2011', title: 'A 3-step model for training difficult airway management' },
    { event: 'DAS, London', year: '2014', title: 'Introducing videolaryngoscopy in the anesthesia department using simulation' },
  ],
};
