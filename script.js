const screens = Array.from(document.querySelectorAll("[data-screen]"));

function showScreen(name) {
  if (!screens.some((screen) => screen.dataset.screen === name)) {
    return;
  }

  screens.forEach((screen) => {
    screen.classList.toggle("is-active", screen.dataset.screen === name);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });

  const devJump = document.querySelector("[data-dev-jump]");
  if (devJump) {
    devJump.value = name;
  }

  closeMenus();
  syncScreenState(name);
}

function getErrorMessage(input) {
  if (input.validity.valueMissing) {
    return "Campo obbligatorio";
  }

  if (input.type === "email" && input.validity.typeMismatch) {
    return "Inserisci un'email valida";
  }

  if (input.validity.tooShort) {
    return `Minimo ${input.minLength} caratteri`;
  }

  return "";
}

function setFieldState(input) {
  const field = input.closest(".field");
  const error = field.querySelector(`[data-error-for="${input.name}"]`);
  const message = getErrorMessage(input);

  input.classList.toggle("is-invalid", Boolean(message));
  input.setAttribute("aria-invalid", message ? "true" : "false");
  error.textContent = message;
  return !message;
}

function setupForm(form, nextScreen) {
  const inputs = Array.from(form.querySelectorAll("input"));

  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      if (input.classList.contains("is-invalid")) {
        setFieldState(input);
      }
    });

    input.addEventListener("blur", () => {
      if (input.value.trim()) {
        setFieldState(input);
      }
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const validFields = inputs.map(setFieldState);

    if (validFields.every(Boolean)) {
      showScreen(nextScreen);
      return;
    }

    const firstInvalid = form.querySelector(".is-invalid");
    firstInvalid?.focus();
  });
}

document.querySelectorAll("[data-go-to]").forEach((control) => {
  control.addEventListener("click", () => {
    if (control.dataset.focusSlide) {
      setFocusSlide(Number(control.dataset.focusSlide));
    }

    showScreen(control.dataset.goTo);
  });
});

setupForm(document.querySelector('[data-form="login"]'), "home");
setupForm(document.querySelector('[data-form="register"]'), "onboarding-intro");

const defaultBusinessPrompt =
  "Sono uno studente di economia all'università e devo preparare una presentazione sul business plan in 8 slide e da esporre in 10/15 minuti.";

function setPromptPreview(text) {
  document.querySelectorAll("[data-user-prompt]").forEach((target) => {
    target.textContent = text;
  });
}

const menuLayer = document.querySelector("[data-menu-layer]");
const menuPanels = Array.from(document.querySelectorAll("[data-menu-panel]"));
const menuTriggers = Array.from(document.querySelectorAll(".home-icon")).filter((button) =>
  ["Account", "Impostazioni"].includes(button.getAttribute("aria-label")),
);
const menuStatus = document.querySelector("[data-menu-status]");

let activeMenuTrigger = null;

function getMenuNameFromTrigger(trigger) {
  return trigger.getAttribute("aria-label") === "Account" ? "account" : "settings";
}

function setMenuTriggerState(menuName, expanded) {
  menuTriggers.forEach((trigger) => {
    if (getMenuNameFromTrigger(trigger) === menuName) {
      trigger.setAttribute("aria-expanded", expanded ? "true" : "false");
    } else {
      trigger.setAttribute("aria-expanded", "false");
    }
  });
}

function closeMenus() {
  if (!menuLayer) {
    return;
  }

  menuLayer.hidden = true;
  menuPanels.forEach((panel) => {
    panel.hidden = true;
  });
  menuTriggers.forEach((trigger) => {
    trigger.setAttribute("aria-expanded", "false");
  });
  activeMenuTrigger = null;
}

function openMenu(menuName, trigger) {
  const panel = menuPanels.find((menuPanel) => menuPanel.dataset.menuPanel === menuName);

  if (!menuLayer || !panel) {
    return;
  }

  menuLayer.hidden = false;
  menuPanels.forEach((menuPanel) => {
    menuPanel.hidden = menuPanel !== panel;
  });
  setMenuTriggerState(menuName, true);
  activeMenuTrigger = trigger;
}

function toggleMenu(menuName, trigger) {
  const isOpen =
    !menuLayer?.hidden &&
    menuPanels.some((panel) => panel.dataset.menuPanel === menuName && !panel.hidden);

  if (isOpen) {
    closeMenus();
    return;
  }

  openMenu(menuName, trigger);
}

function handleMenuAction(action, label) {
  const routes = {
    home: "home",
    pricing: "pricing",
    logout: "login",
  };

  if (routes[action]) {
    showScreen(routes[action]);
    return;
  }

  if (menuStatus) {
    menuStatus.textContent = `${label} selezionato`;
  }
  closeMenus();
}

menuTriggers.forEach((trigger) => {
  const menuName = getMenuNameFromTrigger(trigger);

  trigger.dataset.menuTrigger = menuName;
  trigger.setAttribute("aria-haspopup", "menu");
  trigger.setAttribute("aria-expanded", "false");

  trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleMenu(menuName, trigger);
  });
});

menuLayer?.addEventListener("click", (event) => {
  event.stopPropagation();
});

document.querySelectorAll("[data-menu-action]").forEach((item) => {
  item.addEventListener("click", () => {
    handleMenuAction(item.dataset.menuAction, item.textContent.trim());
  });
});

document.addEventListener("click", () => {
  closeMenus();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && activeMenuTrigger) {
    const triggerToFocus = activeMenuTrigger;
    closeMenus();
    triggerToFocus.focus();
  }
});

const focusSlides = {
  3: {
    title: "Focus sulla slide 3 - Business Name",
    heading: "Business Name",
    description: "Nome del progetto, tono del brand e promessa principale da ricordare.",
    note: "Obiettivo: essere chiari e riconoscibili",
    copy:
      "La slide sul business name introduce il nome del progetto e aiuta il pubblico a ricordare subito identità, tono e promessa della proposta.",
    expandedCopy:
      "La slide sul business name presenta il nome del progetto e spiega perché è coerente con il servizio. Deve aiutare il pubblico a collegare subito identità, tono di voce e valore della proposta.",
  },
  4: {
    title: "Focus sulla slide 4 - Target",
    heading: "Target",
    description: "Studenti universitari che devono presentare un progetto con chiarezza e sicurezza.",
    note: "Bisogno: provare in uno spazio sicuro",
    copy:
      "Il target di un business plan rappresenta un ipotetico gruppo di persone che potrebbero essere in linea con il prodotto o servizio che vuoi proporre.",
    expandedCopy:
      "Il target di un business plan rappresenta il gruppo di persone a cui il progetto si rivolge. In questa slide puoi specificare chi sono gli utenti principali, quali bisogni hanno e perché la proposta risponde in modo concreto al loro contesto.",
  },
  5: {
    title: "Focus sulla slide 5 - Marketing",
    heading: "Marketing",
    description: "Canali, messaggi e azioni per raggiungere il pubblico giusto.",
    note: "Obiettivo: spiegare come il progetto arriva al target",
    copy:
      "La slide marketing mostra quali canali e messaggi userai per far conoscere il progetto alle persone più interessate.",
    expandedCopy:
      "La slide marketing chiarisce come il progetto raggiunge il suo pubblico. Puoi citare i canali principali, il messaggio da comunicare e le prime azioni concrete per far arrivare la proposta al target.",
  },
};

let currentFocusSlide = 4;
let recordingSeconds = 0;
let recordingInterval = null;
let recordingPaused = false;

function formatRecordingTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
}

function updateRecordingTimer() {
  const timer = document.querySelector("[data-recording-timer]");

  if (timer) {
    timer.textContent = formatRecordingTime(recordingSeconds);
  }
}

function stopRecordingTimer() {
  window.clearInterval(recordingInterval);
  recordingInterval = null;
}

function startRecordingTimer() {
  const screen = document.querySelector('[data-screen="voice-track"]');
  const toggle = document.querySelector("[data-record-toggle]");

  stopRecordingTimer();
  recordingSeconds = 0;
  recordingPaused = false;
  screen?.classList.remove("is-paused");
  toggle?.setAttribute("aria-pressed", "true");
  updateRecordingTimer();

  recordingInterval = window.setInterval(() => {
    if (!recordingPaused) {
      recordingSeconds += 1;
      updateRecordingTimer();
    }
  }, 1000);
}

function syncScreenState(screenName) {
  if (screenName === "voice-track") {
    startRecordingTimer();
    return;
  }

  stopRecordingTimer();
}

function resetFocusActions(screen, slide) {
  const copy = screen.querySelector("[data-focus-copy]");
  const systemizeButton = screen.querySelector("[data-systemize-slide]");
  const expandButton = screen.querySelector("[data-expand-text]");

  copy.textContent = slide.copy;
  copy.classList.remove("is-expanded");

  systemizeButton.classList.remove("is-applied");
  systemizeButton.textContent = "Sistema Slide";
  expandButton.classList.remove("is-applied");
  expandButton.textContent = "Espandi Testo";
}

function setFocusSlide(slideNumber) {
  const normalizedSlide = focusSlides[slideNumber] ? Number(slideNumber) : 4;
  const slide = focusSlides[normalizedSlide];
  const screen = document.querySelector('[data-screen="slide-focus"]');

  if (!screen) {
    return;
  }

  currentFocusSlide = normalizedSlide;
  screen.dataset.currentSlide = String(currentFocusSlide);
  screen.querySelector("#slide-focus-title").textContent = slide.title;
  screen.querySelector(".target-layout h2").textContent = slide.heading;
  screen.querySelector(".target-layout p").textContent = slide.description;
  screen.querySelector(".target-layout span").textContent = slide.note;

  const preview = screen.querySelector("[data-slide-preview]");
  preview.classList.remove("is-systemized", "is-text-slide");
  preview.classList.toggle("is-text-slide", currentFocusSlide !== 4);
  resetFocusActions(screen, slide);
}

document.querySelectorAll("[data-prompt-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const input = form.querySelector("[data-prompt-input]");
    const prompt = input.value.trim() || defaultBusinessPrompt;
    input.value = prompt;
    setPromptPreview(prompt);
    showScreen("prompt");
  });
});

document.querySelectorAll("[data-systemize-slide]").forEach((button) => {
  button.addEventListener("click", () => {
    const screen = button.closest("[data-screen]");
    const preview = screen.querySelector("[data-slide-preview]");

    preview.classList.add("is-systemized");
    button.classList.add("is-applied");
    button.textContent = "Slide sistemata";
  });
});

document.querySelectorAll("[data-expand-text]").forEach((button) => {
  button.addEventListener("click", () => {
    const screen = button.closest("[data-screen]");
    const copy = screen.querySelector("[data-focus-copy]");
    const slide = focusSlides[currentFocusSlide] || focusSlides[4];

    copy.textContent = slide.expandedCopy;
    copy.classList.add("is-expanded");
    button.classList.add("is-applied");
    button.textContent = "Testo espanso";
  });
});

document.querySelectorAll("[data-focus-step]").forEach((button) => {
  button.addEventListener("click", () => {
    const nextSlide = Math.min(5, Math.max(3, currentFocusSlide + Number(button.dataset.focusStep)));
    setFocusSlide(nextSlide);
  });
});

document.querySelectorAll("[data-record-toggle]").forEach((button) => {
  button.addEventListener("click", () => {
    const screen = button.closest("[data-screen]");

    recordingPaused = !recordingPaused;
    screen.classList.toggle("is-paused", recordingPaused);
    button.setAttribute("aria-pressed", recordingPaused ? "false" : "true");
  });
});

const rangeLabels = {
  confidence: {
    1: "Sicuro di sé",
    2: "Abbastanza sicuro",
    3: "Sicuro, con qualche esitazione",
    4: "Leggermente incerto",
    5: "Neutrale",
    6: "Un po' in difficoltà",
    7: "In difficoltà",
    8: "Molto agitato",
    9: "Panico totale",
  },
  improvement: {
    1: "Moltissimo",
    2: "Molto",
    3: "Abbastanza",
    4: "Un po'",
    5: "Neutrale",
    6: "Poco",
    7: "Molto poco",
    8: "Quasi per niente",
    9: "Pochissimo",
  },
};

function updateRangeState(range) {
  const labels = rangeLabels[range.dataset.rangeKind];
  range.setAttribute("aria-valuetext", labels[range.value]);
}

document.querySelectorAll(".scale-range").forEach((range) => {
  range.addEventListener("input", () => updateRangeState(range));
  updateRangeState(range);
});

document.querySelectorAll("[data-checkbox-group]").forEach((group) => {
  group.addEventListener("change", () => {
    group.querySelectorAll(".choice-row").forEach((row) => {
      row.classList.toggle("is-selected", row.querySelector("input").checked);
    });
  });
});

document.querySelectorAll("[data-plan-group]").forEach((group) => {
  group.addEventListener("change", () => {
    group.querySelectorAll(".plan-row").forEach((row) => {
      row.classList.toggle("is-selected", row.querySelector("input").checked);
    });
  });
});

const devJump = document.querySelector("[data-dev-jump]");

if (devJump) {
  devJump.addEventListener("change", () => {
    if (devJump.value === "slide-focus") {
      setFocusSlide(4);
    }

    showScreen(devJump.value);
    history.replaceState(null, "", `#${devJump.value}`);
  });
}

if (window.location.hash) {
  const hashScreen = window.location.hash.slice(1);

  if (hashScreen === "slide-focus") {
    setFocusSlide(4);
  }

  showScreen(hashScreen);
}

window.addEventListener("hashchange", () => {
  const hashScreen = window.location.hash.slice(1);

  if (hashScreen === "slide-focus") {
    setFocusSlide(4);
  }

  showScreen(hashScreen);
});
