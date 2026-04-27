# Aura - Piano D'Azione Del Prototipo

## Obiettivo

Costruire un prototipo web funzionante e ad alta fedeltà di Aura a partire dal design Figma esistente, usando HTML/CSS/JS vanilla, con un livello di interattività e polish sufficiente a massimizzare il punteggio del touchpoint nel brief, preservando la direzione visiva approvata dal team.

## Criteri Di Successo Dal Brief

- La commissione deve capire cosa fa Aura, a chi si rivolge e come funziona senza spiegazioni aggiuntive.
- Il touchpoint deve sembrare rifinito: spacing, tipografia, comportamento responsive, micro-interazioni, validazione e navigazione devono essere curati.
- L'identità visiva deve essere coerente tra le schermate: nome Aura, gradienti pastello, card arrotondate, CTA gialle, tipografia Lexend/Advent Pro, tono calmo e concreto.
- La demo deve rendere chiaro che l'AI è un coach e un partner, non un sostituto del lavoro dell'utente.
- Il prototipo web finale deve funzionare in locale senza backend, build step, servizi a pagamento o permessi microfono.

## Vincoli

- Preservare la fedeltà al Figma il più possibile.
- Partire dal login. Non aggiungere una landing/intro prima del login.
- Qualsiasi cambiamento non approvato a copy, layout, flusso o numero di schermate deve essere approvato dal team prima dell'implementazione.
- Usare HTML/CSS/JS vanilla.
- Usare un layout mobile-first da 700px, centrato su desktop e con feel da app.
- Lo scope è il prototipo. Process book e pitch non vengono gestiti ora.

## Modifiche Approvate

- Rendere interattivi e validati gli elementi dei form.
- Aggiungere stati selezionati/attivi ai controlli di onboarding e alle scelte piano.
- Mantenere la schermata piano con `Prova gratuita` preselezionata e non bloccante.
- Correggere refusi evidenti e label incoerenti.
- Rendere libero il campo prompt, guidando però qualsiasi input verso la demo Business Plan.
- Simulare la generazione AI con stati di caricamento/scrittura.
- Fare in modo che `Sistema Slide` ed `Espandi Testo` cambino visibilmente lo stato della slide/testo.
- Simulare la registrazione vocale con timer/waveform invece di usare il microfono reale.
- Mantenere le categorie feedback del Figma e migliorare leggibilità/correttezza copy.
- Usare i menu account/impostazioni esistenti in Figma come menu contestuali.

## Respinto O Non Approvato

- Nessuna landing/intro prima del login.
- Nessuna personalizzazione successiva basata sulle risposte di onboarding.
- Nessun permesso microfono reale.
- Nessuna autenticazione backend.
- Nessun pagamento reale.
- Nessuna integrazione AI reale.
- Nessun redesign importante.

## Gate Di Approvazione Proposto

Prima dell'implementazione, creare una lista sintetica di tutte le deviazioni dal Figma. Usare questo modello di stato:

- Approvato: già confermato dal team.
- Da approvare: miglioramento utile ma non ancora confermato.
- Respinto: esplicitamente escluso.

Nessun elemento `Da approvare` deve essere implementato finché il team non lo approva.

## Piano Giorno 1: Struttura E Flusso Principale

1. Preparare i file del prototipo.
   - Creare `index.html`, `styles.css` e `script.js`.
   - Aggiungere shell locale dell'app con canvas mobile da 700px centrato.
   - Aggiungere variabili CSS per colori, tipografia, raggi, spacing e ombre.

2. Costruire i componenti UI condivisi.
   - Sfondi gradienti.
   - Card bianche arrotondate.
   - Bottoni: primario giallo, annulla/negativo rosa, bottoni icona.
   - Input testuali e textarea.
   - Controlli di selezione tipo checkbox/radio.
   - Topbar con icone account/impostazioni e menu contestuali.

3. Implementare le schermate della Fase 1.
   - Login.
   - Registrazione.
   - Introduzione onboarding.
   - Domanda 1 con scelta su scala.
   - Domanda 2 con checkbox.
   - Domanda 3 con scelta su scala.
   - Selezione piano con prova gratuita preselezionata.
   - Home con card Business Plan e New Project.

4. Aggiungere validazione e navigazione principali.
   - Messaggi per campi obbligatori.
   - Controllo formato email.
   - Comportamento del campo password.
   - Bottoni disabilitati/abilitati o errori inline dove opportuno.
   - Navigazione fluida tra gli step.

5. Implementare le schermate principali della Fase 2.
   - Nuova presentazione / saluto di Aura.
   - Chat prompt.
   - Stato di caricamento/scrittura AI.
   - Bozza generata da 8 slide.
   - Focus slide 4.
   - Conferma presentazione.

## Piano Giorno 2: Simulazione, Polish E QA

1. Completare il flusso di simulazione.
   - Schermata Avvia Presentazione.
   - Schermata di registrazione vocale simulata con timer e waveform animata.
   - Conferma fine presentazione.
   - Report feedback.
   - Azione di riavvio presentazione.

2. Aggiungere polish alle interazioni.
   - Stati hover/pressed dei bottoni.
   - Focus outline e accessibilità da tastiera per i form.
   - Puntini di scrittura o indicatori di caricamento.
   - Transizioni fluide tra schermate.
   - Stati selezionati chiari per piano e controlli onboarding.
   - Microcopy di successo/errore.

3. Applicare le correzioni copy approvate.
   - Correggere refusi e accenti.
   - Rendere coerenti le label di registrazione/login.
   - Mantenere il tono di Aura calmo e concreto.

4. Passaggio responsive.
   - Verificare layout centrato su desktop.
   - Verificare comportamento su larghezza mobile.
   - Assicurarsi che nessun contenuto importante venga tagliato.
   - Assicurarsi che la schermata lunga del feedback scorra correttamente.

5. Passaggio affidabilità demo.
   - Navigare tutto il percorso da login a feedback senza interventi manuali.
   - Testare stati dei form vuoti.
   - Testare che un prompt personalizzato entri comunque nel flusso guidato Business Plan.
   - Testare menu account/impostazioni.
   - Testare riavvio presentazione.

6. Passaggio punteggio rispetto al brief.
   - 2a, comunica il servizio: verificare che il flusso renda chiaro lo scopo di Aura anche partendo dal login.
   - 2b, qualità/impatto: verificare polish, spacing, interazioni e assenza di stati rotti.
   - 2c, identità: verificare coerenza di naming, colori, tipografia e tono.
   - 4, coerenza: verificare che il linguaggio del prototipo corrisponda a mission e identità Figma.

## Checklist Implementazione Schermate

- Login: email/password interattivi, validazione, `Accedi`, link `Registrati`.
- Registrazione: nome/cognome/email/password, CTA coerente, validazione.
- Introduzione onboarding: `Prosegui`.
- Domanda 1: scala selezionabile, puntini di avanzamento.
- Domanda 2: checkbox selezionabili, puntini di avanzamento.
- Domanda 3: scala selezionabile, `Prosegui`.
- Piano: prova gratuita selezionata di default, piani alternativi selezionabili, bottone continua.
- Home: il progetto Business Plan apre la demo; New Project può avviare lo stesso prompt o mostrare uno stato vuoto/fittizio se approvato.
- Menu account: usare le voci del menu Figma.
- Menu impostazioni: usare le voci del menu Figma.
- Saluto Aura: intro statica e campo prompt.
- Prompt: appare il messaggio dell'utente, poi parte lo stato di caricamento.
- Bozza: 8 card slide con slide 4 cliccabile.
- Slide 4: `Sistema Slide` ed `Espandi Testo` cambiano stato visibilmente.
- Conferma: `Annulla` torna a modifica/bozza, `Conferma` avvia la prova.
- Avvio prova: CTA play/start.
- Registrazione: waveform e timer simulati.
- Fine presentazione: `No` torna a registrazione/avvio, `Sì` apre feedback.
- Feedback: punteggio, quattro categorie, azione di riavvio.

## Checklist Correzioni Copy

- `preparae` -> `preparare`.
- `raprresenta` -> `rappresenta`.
- `Princing` -> `Pricing`.
- `Si` -> `Sì`.
- CTA e copy secondaria della registrazione non devono ripetere erroneamente il testo del login.
- Usare `sicuro di sé` con accento dove necessario.
- Mantenere tutta la copy concisa e concreta.

## Rischi

- Partire dal login può rendere meno immediato il valore del servizio per chi naviga autonomamente. Mitigazione: usare onboarding, Home, saluto Aura e flusso prompt per spiegare rapidamente lo scopo.
- L'alta fedeltà al Figma può mantenere debolezze UX. Mitigazione: implementare solo correzioni approvate e polish delle interazioni.
- Costruire troppi percorsi alternativi può ridurre l'affidabilità. Mitigazione: un solo percorso guidato Business Plan.
- Le API reali del browser possono fallire durante la demo. Mitigazione: AI, pagamento e microfono fittizi.

## Elementi Aperti Da Approvare

Questi elementi non sono ancora approvati e vanno chiesti solo se diventano necessari:

- Se `New Project` debba avere una schermata propria o instradare semplicemente alla demo prompt esistente.
- Se aggiungere una piccola frase esplicativa nella schermata login, dato che il team ha respinto una intro separata.
- Se aggiungere un breve hint "modalità demo" per la commissione.
- Se riscrivere i testi lunghi del feedback per leggibilità oltre le correzioni di refusi.
- Se aggiungere una schermata riepilogo finale dopo il riavvio o mantenere il finale Figma sul feedback.

## Ordine Di Sviluppo Raccomandato

1. Costruire tutte le schermate statiche con layout accurato.
2. Collegare la navigazione lineare.
3. Aggiungere validazione form e stati selezionati.
4. Aggiungere simulazioni AI/registrazione.
5. Applicare le correzioni copy approvate.
6. Aggiungere polish responsive e accessibilità.
7. Eseguire QA completa dal primo schermo al feedback.

## Definizione Di Completato

- Un revisore può completare tutto il prototipo da login/registrazione a feedback senza aiuto.
- Nessun bottone del percorso principale sembra inattivo o inspiegato.
- Campi form e controlli selezionabili rispondono visibilmente.
- Il prototipo resta visivamente vicino al Figma.
- Tutti i refusi e le incoerenze di label approvati sono corretti.
- Non è stata implementata nessuna modifica strutturale non approvata.
- L'app funziona aprendo `index.html` o tramite un semplice server statico locale.
