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
  control.addEventListener("click", () => showScreen(control.dataset.goTo));
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

    copy.textContent =
      "Il target di un business plan rappresenta il gruppo di persone a cui il progetto si rivolge. In questa slide puoi specificare chi sono gli utenti principali, quali bisogni hanno e perché la proposta risponde in modo concreto al loro contesto.";
    copy.classList.add("is-expanded");
    button.classList.add("is-applied");
    button.textContent = "Testo espanso";
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
    showScreen(devJump.value);
    history.replaceState(null, "", `#${devJump.value}`);
  });
}

if (window.location.hash) {
  showScreen(window.location.hash.slice(1));
}

window.addEventListener("hashchange", () => {
  showScreen(window.location.hash.slice(1));
});
