# Aura - Base di Conoscenza del Progetto

## Contesto Del Progetto

- Area del team: Area 3 - TECH, "Intelligenza artificiale come coach dal vivo".
- Fonte del brief: `brief.md`, Fondazione Hermes Rocca, Pi.Ca.Ci.U 2026, servizi digitali a impatto sociale.
- Deliverable digitale richiesto: touchpoint web funzionante realizzato con HTML/CSS/JS.
- Focus di valutazione del touchpoint: comprensione autonoma del servizio, qualità/polish, identità coerente.
- Vincolo importante di presentazione: la commissione naviga il touchpoint autonomamente dopo il pitch.

## Identità Del Servizio

- Nome del servizio: Aura.
- Mission fornita dal team: "La tua performance è il tuo biglietto da visita: un'occasione unica per aprire porte inaspettate. Ci impegniamo a trasformare la tua insicurezza in una comunicazione chiara, coerente e capace di coinvolgere, perché ogni presentazione sia il trampolino di lancio per il tuo successo."
- Posizionamento: Aura supporta persone con ansia da prestazione in contesti di public speaking, aiutandole a organizzare i contenuti, provare l'esposizione e migliorare la performance dal vivo.
- Principio chiave del brief: l'AI è un partner e un coach, non un sostituto che svolge il lavoro al posto dell'utente.
- Tono di voce: calmo, concreto, incoraggiante, specifico. Evitare linguaggio generico da chatbot e toni motivazionali eccessivi.

## Target E Ricerca

- Target primario del prototipo: studenti, con demo web focalizzata su uno studente universitario che prepara una presentazione di Business Plan.
- Mercato più ampio indicato dal team: persone che devono affrontare un pubblico, da piccoli gruppi a contesti congressuali.
- Ricerca già condotta: 4-5 interviste con studenti.
- Insight principale di ricerca: gli utenti hanno bisogno di uno spazio sicuro in cui provare prima di affrontare un pubblico reale, perché paura del giudizio e ansia da prestazione compromettono chiarezza, sicurezza, memoria e coinvolgimento.
- Pain point identificati dal team:
  - Paura del giudizio sulle prestazioni lavorative da parte di superiori o colleghi.
  - Paura del giudizio da parte del pubblico.
  - Mancanza di sicurezza ed eloquenza.
  - Ansia da prestazione, inclusi blocchi e dimenticanze dei punti chiave.

## Problem Statement

Statement fornito dal team:

"Le persone insicure che si trovano a dover affrontare un pubblico di persone, siano esse un gruppo ristretto o una platea da congresso, non riescono a parlare in modo tale da risultare convincenti e sicuri di sé, fallendo nel coinvolgere la platea nel discorso che stanno presentando, perché l'ansia li blocca, e si affidano ad altri supporti più generici che non risolvono quel problema specifico."

Riformulazione operativa per coerenza nella copy del prototipo:

"Aura aiuta chi deve presentare davanti a un pubblico a trasformare insicurezza e ansia da prestazione in una comunicazione chiara, coerente e coinvolgente, attraverso preparazione guidata, simulazione e feedback mirato."

## Concept Statement

Statement fornito dal team:

"Il nostro servizio nasce per supportare chi soffre di ansia da prestazione nell'affrontare discorsi in pubblico. Sfruttando l'intelligenza artificiale, offriamo uno strumento concreto per l'organizzazione e la gestione dei contenuti, sia in ambito scolastico che professionale. A differenza dei comuni chatbot, il nostro valore aggiunto risiede nell'ottimizzazione della performance espositiva, elemento determinante per il successo di ogni presentazione."

Interpretazione per il prototipo:

- Aura aiuta l'utente a preparare una presentazione, strutturare i contenuti, provare l'esposizione e ricevere feedback.
- Il prototipo non deve presentare Aura come un semplice generatore di slide.
- Il valore più importante è il passaggio dal contenuto preparato a una performance dal vivo più sicura.

## Fonti Figma

- Figma file key: `zzfPGBN2hwBlOOj7d3MEau`.
- Fase 1, registrazione/login: sezione `546:837`, "Fase di Registrazione/ Login".
- Fase 2, prompt/simulazione: sezione `566:664`, "Fase Prompt/ Simulazione".
- Font individuati tramite variabili Figma:
  - Titolo: Advent Pro, regular, 36px.
  - Bottoni: Lexend, regular, 24px.
  - Testi: Lexend, light, 16px.
  - Voce menu: Lexend, light, 24px.
- Linguaggio visivo principale:
  - Gradienti pastello morbidi.
  - Card e pannelli bianchi arrotondati.
  - Bottoni CTA gialli `#ffe45e`.
  - Bottoni negativi/annulla rosa `#f694c1`.
  - Accenti azzurri `#acdcff`.
  - Accenti secondari viola/rosa, incluso `#e4a5ff`.

## Analisi Figma Fase 1: Registrazione/Login

Schermate principali identificate:

- `546:974` Open/Login: email/password, `Accedi`, link a `Registrati`.
- `555:443` Registrazione: campi nome, cognome, email, password.
- `555:530` Domande: introduzione alle domande di onboarding.
- `555:627` Domanda1: domanda con controllo tipo slider sulla sicurezza nel rivolgersi a un gruppo.
- `555:817` Domanda2: domanda con checkbox sulla paura del pubblico.
- `555:841` Domanda3: domanda con controllo tipo slider sul desiderio di migliorare le capacità espositive.
- `555:1080` Pagamento: selezione piano.
- `554:340` Home: lista progetti con Business Plan e New Project.
- `555:1341` Menu account: menu contestuale account già esistente.
- `555:1359` Menu impostazioni: menu contestuale impostazioni già esistente.

Problemi e opportunità della Fase 1:

- Alcune label/copy devono essere corrette per polish e coerenza.
- La schermata di registrazione presenta attualmente un pattern incoerente di bottone/testo secondario copiato dal login.
- I controlli di onboarding devono diventare interattivi, anche se le risposte non personalizzano le schermate successive.
- La schermata piano deve essere fittizia, non bloccante e gestita in modo pulito.
- I menu esistono già in Figma e devono essere riutilizzati invece di essere ridisegnati.

## Analisi Figma Fase 2: Prompt/Simulazione

Schermate principali identificate:

- `556:362` Nuova presentazione: Aura saluta l'utente e chiede cosa fare.
- `554:384` Prompt: prompt dell'utente per una presentazione Business Plan.
- `566:752` Presentazione-bozza: Aura genera 8 topic di slide e placeholder per il testo di esposizione.
- `556:497` Presentazione-bozza-slide4: focus sulla slide 4, Target, con azioni `Sistema Slide` ed `Espandi Testo`.
- `652:1956` Presentazione ok?: conferma prima della prova.
- `556:811` Avvia Presentazione: schermata di avvio della presentazione Business Plan.
- `652:2006` Traccia Vocale: stato di registrazione vocale.
- `566:1276` Fine Presentazione: conferma dopo che l'utente termina la prova.
- `556:919` Feedback: punteggio finale e categorie di feedback.

Problemi e opportunità della Fase 2:

- Il campo prompt deve essere interattivo ma guidare comunque alla demo Business Plan.
- Il momento di generazione della bozza deve sembrare lavoro dell'AI tramite stati di caricamento/scrittura.
- I bottoni di modifica slide devono cambiare visibilmente contenuto/layout.
- La prova vocale deve essere simulata per evitare rischi legati ai permessi del microfono.
- Il feedback deve preservare le quattro categorie Figma ma migliorare testi, gerarchia e leggibilità.

## Decisioni Approvate

- Usare Aura come nome definitivo del servizio.
- Target primario della demo: contesto studenti/università.
- Scenario primario della demo: presentazione Business Plan in 8 slide.
- Journey: flusso lineare guidato.
- Stack: HTML/CSS/JS vanilla.
- Formato: prototipo mobile-first centrato su desktop, preservando il feel app da 700px del Figma.
- Fedeltà Figma: più alta possibile.
- Miglioramenti consentiti, solo se già approvati:
  - Correzioni evidenti di refusi e label come pacchetto approvato.
  - Layout più coerente dove necessario.
  - Interazioni più curate.
  - Schermate aggiuntive solo se approvate prima dell'implementazione.
- Intro/landing prima del login: respinta. Si parte dalla schermata di login.
- Schermata piano: mantenerla, con prova gratuita preselezionata e non bloccante.
- Risposte onboarding: nessuna personalizzazione successiva. Fanno solo parte del flusso.
- Campo prompt: input libero consentito, ma guidato verso la demo Business Plan.
- Prova vocale: registrazione simulata, nessun permesso microfono reale.
- Azioni sulla slide focus: `Sistema Slide` ed `Espandi Testo` devono generare cambiamenti visibili.
- Categorie feedback: mantenere le quattro categorie Figma.
- Menu: usare i menu contestuali esistenti in Figma da `555:1341` e `555:1359`.
- Altri deliverable: process book e pitch non sono in scope ora, salvo consapevolezza dei rischi di coerenza.
- Tempo disponibile: 2 giorni pieni.

## Regola Di Approvazione

- Non implementare cambiamenti visuali, strutturali, di copy o di flusso oltre la lista approvata senza chiedere prima al team.
- La traduzione Figma ad alta fedeltà è l'impostazione predefinita.
- Se una modifica migliora i criteri di valutazione ma differisce dal Figma, presentarla come proposta con razionale e attendere approvazione.
- Mantenere una distinzione tra:
  - Correzioni approvate.
  - Miglioramenti proposti ma non approvati.
  - Modifiche respinte.

## Regola Git E Checkpoint

- Il progetto usa una repository Git locale nella cartella `/Users/utente10/Desktop/Silvia`.
- A ogni nuova conversazione e prima di iniziare un nuovo checkpoint operativo, verificare lo stato Git.
- Se esistono modifiche non committate dal checkpoint precedente, creare automaticamente un commit prima di iniziare il checkpoint successivo.
- Ogni commit di checkpoint deve avere un messaggio breve e descrittivo in italiano, coerente con il contenuto delle modifiche.
- Non creare commit vuoti se il worktree è pulito.
- Non committare file che potrebbero contenere segreti o credenziali.
- Non usare comandi Git distruttivi, amend o force push salvo richiesta esplicita del team.
- Alla fine di ogni checkpoint importante, lasciare il progetto in uno stato committabile e preferibilmente già committato, così il checkpoint successivo può partire da una base pulita.

## Pacchetto Approvato Di Correzioni Copy

Il team ha approvato un pacchetto per refusi evidenti e label incoerenti. Esempi:

- `preparae` -> `preparare`.
- `raprresenta` -> `rappresenta`.
- `Princing` -> `Pricing`.
- `Si` -> `Sì`.
- Il bottone di registrazione deve usare una copy coerente con la registrazione invece della copy copiata dal login.

Questa approvazione copre solo correzioni chiare, non riscritture strategiche.

## Requisiti Di Esperienza Del Prototipo

- Il prototipo deve sembrare un'app funzionante, anche se fittizia.
- Ogni elemento appartenente a form deve essere interattivo:
  - Gli input accettano testo.
  - Il campo password si comporta come password.
  - I campi obbligatori mostrano validazione.
  - Checkbox e scelte di piano attivano stati selezionati.
  - Slider o scale hanno stati selezionabili.
- La navigazione deve essere logicamente fluida e comprensibile senza spiegazione del team.
- La demo non deve dipendere da un backend.
- Usare stato locale o `localStorage` solo se utile per la demo.
- Evitare pagamento reale, chiamate AI reali e permessi microfono reali.

## Flusso Demo Raccomandato

1. Login o registrazione.
2. Introduzione onboarding.
3. Tre domande di onboarding.
4. Selezione piano con `Prova gratuita` preselezionata.
5. Home con progetto Business Plan e card New Project.
6. Apertura Business Plan o avvio prompt guidato.
7. Chat Aura con richiesta Business Plan.
8. Stato di caricamento/scrittura mentre Aura prepara la bozza da 8 slide.
9. Lista generata di 8 slide.
10. Apertura slide 4, Target.
11. Uso di `Sistema Slide` ed `Espandi Testo` per migliorare visibilmente slide/testo.
12. Conferma che la presentazione è pronta.
13. Avvio prova.
14. Registrazione vocale simulata con timer/waveform.
15. Conferma fine presentazione.
16. Report feedback con punteggio 75% e quattro categorie.
17. Azione opzionale di riavvio presentazione.

## Soglia Di Qualità

- Il touchpoint deve sembrare più curato di un'esportazione statica da Figma.
- Preservare l'identità Figma, evitando però di mantenere errori che riducono la qualità percepita.
- Dare priorità a interazioni ad alta affidabilità invece che a ramificazioni ampie ma superficiali.
- Rendere l'esperienza autoesplicativa, perché la navigazione autonoma fa parte del brief.
- La maggiore opportunità di punteggio nel touchpoint è la cura percepita: micro-interazioni, validazione, stati di caricamento, copy coerente e navigazione affidabile.

## Fuori Scope Per Ora

- Costruzione o riscrittura del process book.
- Costruzione o riscrittura del pitch deck.
- Autenticazione backend.
- Pagamento reale.
- Integrazione AI reale.
- Registrazione microfono reale.
- Nuova landing page prima del login.
- Redesign importante lontano dal Figma.
