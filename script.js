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

setupForm(document.querySelector('[data-form="login"]'), "onboarding-intro");
setupForm(document.querySelector('[data-form="register"]'), "onboarding-intro");

const range = document.querySelector(".scale-range");
const rangeLabels = {
  1: "Sicuro di sé",
  2: "Abbastanza sicuro",
  3: "Sicuro, con qualche esitazione",
  4: "Leggermente incerto",
  5: "Neutrale",
  6: "Un po' in difficoltà",
  7: "In difficoltà",
  8: "Molto agitato",
  9: "Panico totale",
};

function updateRangeState() {
  range.setAttribute("aria-valuetext", rangeLabels[range.value]);
}

range.addEventListener("input", updateRangeState);
updateRangeState();

const devJump = document.querySelector("[data-dev-jump]");

devJump.addEventListener("change", () => {
  showScreen(devJump.value);
  history.replaceState(null, "", `#${devJump.value}`);
});

if (window.location.hash) {
  showScreen(window.location.hash.slice(1));
}
