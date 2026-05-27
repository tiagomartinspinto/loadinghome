const phrases = [
  "Loading home...",
  "Verifying residence...",
  "Translating memory...",
  "Checking belonging...",
  "Waiting for confirmation...",
  "Recalculating origin...",
  "Almost there...",
  "Address accepted, belonging pending.",
  "Your home is being prepared.",
  "Some documents are still missing.",
  "Application remains open."
];

const dictionary = {
  home: ["Home", "Casa", "Koti", "Maison"],
  name: ["Name", "Nome", "Nimi", "Nom"],
  address: ["Address", "Morada", "Osoite", "Adresse"],
  loading: ["Loading", "A carregar", "Ladataan", "Chargement"],
  continue: ["Continue", "Continuar", "Jatka", "Continuer"],
  reason: ["Reason", "Razao", "Syy", "Raison"],
  pending: ["Pending", "Pendente", "Odottaa", "En attente"]
};

const mapStates = [
  ["Locating...", "Previous address found", "checking records", "Home not confirmed", "translate(54%, 62%)"],
  ["Origin country?", "Birth record visible", "Departure point archived", "Home not confirmed", "translate(22%, 70%)"],
  ["Current country?", "Current address uncertain", "Arrival point pending", "Near home", "translate(68%, 34%)"],
  ["Previous address found", "Previous address found", "Former home responding", "Home not confirmed", "translate(38%, 50%)"],
  ["Host city unresolved", "Temporary home", "Administrative region unknown", "belonging pending", "translate(72%, 58%)"],
  ["Elsewhere detected", "Unverified location", "Not here", "Not there", "translate(44%, 38%)"],
  ["Near home", "near home", "close enough", "almost accepted", "translate(60%, 46%)"]
];

const rejectionMessages = [
  "This location is not recognized as current.",
  "Please enter a more relevant origin.",
  "Birthplace does not match present records.",
  "Did you mean somewhere closer?",
  "Previous country archived.",
  "Birth record found, belonging unresolved.",
  "Origin accepted, arrival pending."
];

const addressMessages = [
  "Address accepted, belonging pending.",
  "Current location requires further verification.",
  "Temporary address recorded as permanent.",
  "Host city unresolved.",
  "Residence detected, home not confirmed."
];

const submitStates = [
  "Checking...",
  "Almost accepted...",
  "More information required.",
  "Address accepted, belonging pending.",
  "Application remains open.",
  "Verification incomplete.",
  "Continue later."
];

const suggestions = [
  "Home, approximately",
  "Nearest accepted location",
  "Previous country, archived",
  "Current country, pending",
  "No longer applicable",
  "Close enough",
  "Temporary address with permanent consequences",
  "Former home",
  "Administrative region unknown",
  "Elsewhere"
];

const applicantRoles = [
  "The Applicant",
  "The Arriving One",
  "The Pending Person",
  "Case 97",
  "The One Who Is Almost Here"
];

const acts = [
  ["Act I - The Form", "The form accepts the data but not the person."],
  ["Act II - The Translation", "The interface translates the answer, then edits the intention."],
  ["Act III - The Witness", "The record is present, but the witness is not processed."],
  ["Act IV - The Inspection", "The rules change while the question is being answered."],
  ["Act V - The Almost", "Application remains open. Belonging pending. Waiting may continue."]
];

const officeVoices = [
  ["The Clerk of Belonging", "The Clerk enters without entering."],
  ["The Minister of Almost", "Almost is accepted as proof of effort, not as arrival."],
  ["The Inspector of Origin", "The Form asks for a smaller version of you."],
  ["The Archivist of Former Addresses", "The previous address is still responding."],
  ["The Witness of Silence", "The Witness is present but not processed."],
  ["The Translator Who Corrects Too Much", "The Translator improves your sentence until it no longer belongs to you."],
  ["The Door That Requests More Documents", "The Door opens into another door."],
  ["The Queue", "The Queue remembers your previous hesitation."],
  ["The Stamp", "The Stamp refuses to fall."],
  ["The Border Without a Wall", "The border is not drawn. It still decides."],
  ["The Chorus of Pending Cases", "pending, pending, pending."]
];

const translationScenes = [
  ["I live here", "temporary presence detected."],
  ["I work here", "economic usefulness pending."],
  ["I belong here", "unsupported claim."],
  ["I remember home", "memory must match accepted format."],
  ["I am here", "arrival detected, belonging pending."],
  ["I will stay", "future presence requires review."]
];

const inspectionQuestions = [
  "How many winters until arrival becomes residence?",
  "Select one: useful / grateful / invisible / integrated",
  "Confirm that your name fits the field.",
  "Confirm that your memory has been translated correctly.",
  "Confirm that your silence is voluntary.",
  "Choose one door. Each door opens into another door."
];

const witnessRecords = [
  "statement unavailable",
  "record incomplete",
  "witness not heard",
  "experience outside accepted format",
  "pain requires official translation",
  "testimony too complex"
];

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const root = document.documentElement;
const progressFill = document.querySelector("#progressFill");
const progressOutput = document.querySelector("#progressOutput");
const progressBar = document.querySelector("#homeProgress");
const loadingPhrase = document.querySelector("#loadingPhrase");
const mapStatus = document.querySelector("#mapStatus");
const addressRecord = document.querySelector("#addressRecord");
const originRecord = document.querySelector("#originRecord");
const homeRecord = document.querySelector("#homeRecord");
const mapDot = document.querySelector("#mapDot");
const form = document.querySelector("#residenceForm");
const formStatus = document.querySelector("#formStatus");
const submitButton = document.querySelector("#submitButton");
const resetButton = document.querySelector("#resetButton");
const eventLog = document.querySelector("#eventLog");
const birthPlace = document.querySelector("#birthPlace");
const birthPlaceMessage = document.querySelector("#birthPlaceMessage");
const currentAddress = document.querySelector("#currentAddress");
const currentAddressMessage = document.querySelector("#currentAddressMessage");
const termNodes = Array.from(document.querySelectorAll("[data-term]"));
const applicantRole = document.querySelector("#applicantRole");
const actTitle = document.querySelector("#actTitle");
const actDescription = document.querySelector("#actDescription");
const voiceSpeaker = document.querySelector("#voiceSpeaker");
const voiceText = document.querySelector("#voiceText");
const inspectionQuestion = document.querySelector("#inspectionQuestion");
const translationInput = document.querySelector("#translationInput");
const translationOutput = document.querySelector("#translationOutput");
const recordCaptions = Array.from(document.querySelectorAll("[data-record-caption]"));

let progress = 91.4;
let phraseIndex = 0;
let mapIndex = -1;
let attempts = 0;
let progressTarget = 96.4;
let voiceIndex = 0;

function pick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function renderProgress() {
  const visibleProgress = clamp(progress, 84, 97).toFixed(1);
  progressFill.style.width = `${visibleProgress}%`;
  progressOutput.textContent = `${visibleProgress}%`;
  progressBar.setAttribute("aria-valuenow", String(Math.floor(progress)));
  progressBar.setAttribute("aria-valuetext", `${loadingPhrase.textContent}, ${visibleProgress} percent`);
}

function updateProgress() {
  const shouldFallBack = Math.random() < 0.18 || progress > 96.7;

  if (shouldFallBack) {
    progress -= 0.25 + Math.random() * (0.85 + attempts * 0.08);
    progressTarget = 93.5 + Math.random() * 3.1;
  } else {
    progress += (progressTarget - progress) * 0.045 + Math.random() * 0.05;
  }

  progress = clamp(progress, 84.2, 96.9);
  renderProgress();
}

function updatePhrase() {
  phraseIndex = (phraseIndex + 1) % phrases.length;
  voiceIndex = (voiceIndex + 1) % officeVoices.length;
  loadingPhrase.textContent = phrases[phraseIndex];
  progressBar.setAttribute("aria-valuetext", `${loadingPhrase.textContent}, ${progress.toFixed(1)} percent`);
  renderScene();
}

function updateMap() {
  mapIndex = (mapIndex + 1) % mapStates.length;
  const [status, address, origin, result, dotPosition] = mapStates[mapIndex];

  mapStatus.textContent = status;
  addressRecord.textContent = address;
  originRecord.textContent = origin;
  homeRecord.textContent = result;
  mapDot.style.transform = dotPosition;
}

function shiftLanguage() {
  const node = pick(termNodes);
  const key = node.dataset.term;
  node.textContent = pick(dictionary[key]);
  node.classList.remove("term-change");
  void node.offsetWidth;
  node.classList.add("term-change");

  if (Math.random() < 0.25) {
    addLog("Language preference changed automatically.");
  }
}

function addLog(message) {
  if (eventLog.firstElementChild?.textContent === message) {
    return;
  }

  const item = document.createElement("li");
  item.textContent = message;
  eventLog.prepend(item);

  while (eventLog.children.length > 5) {
    eventLog.removeChild(eventLog.lastElementChild);
  }
}

function renderScene() {
  const act = acts[Math.min(Math.floor(attempts / 2), acts.length - 1)];
  const role = applicantRoles[attempts % applicantRoles.length];
  const voice = officeVoices[(voiceIndex + attempts) % officeVoices.length];
  const translation = translationScenes[attempts % translationScenes.length];
  const question = inspectionQuestions[(attempts + Math.max(mapIndex, 0)) % inspectionQuestions.length];

  applicantRole.textContent = `${role} is almost here.`;
  actTitle.textContent = act[0];
  actDescription.textContent = act[1];
  voiceSpeaker.textContent = voice[0];
  voiceText.textContent = voice[1];
  inspectionQuestion.textContent = question;
  translationInput.textContent = translation[0];
  translationOutput.textContent = translation[1];

  recordCaptions.forEach((caption, index) => {
    caption.textContent = witnessRecords[(index + attempts) % witnessRecords.length];
  });
}

function nudge(message) {
  attempts += 1;
  root.style.setProperty("--pressure", String(Math.min(attempts, 8)));
  progress = clamp(progress - (0.18 + Math.random() * 0.6), 84.2, 96.9);
  renderProgress();
  renderScene();

  if (message) {
    formStatus.textContent = message;
    addLog(message);
  }
}

function suggestionListFor(input) {
  return document.querySelector(`#${input.id}Suggestions`);
}

function showSuggestions(input) {
  const list = suggestionListFor(input);
  list.innerHTML = "";

  suggestions.forEach((suggestion) => {
    const item = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.setAttribute("role", "option");
    button.textContent = suggestion;
    button.addEventListener("click", () => {
      input.value = suggestion;
      list.hidden = true;

      if (input === birthPlace) {
        birthPlaceMessage.textContent = "Did you mean somewhere closer?";
        nudge("Previous country archived.");
      } else {
        currentAddressMessage.textContent = "Address accepted, belonging pending.";
        nudge("Address accepted, belonging pending.");
      }
    });
    item.append(button);
    list.append(item);
  });

  list.hidden = false;
}

function hideSuggestions(input) {
  suggestionListFor(input).hidden = true;
}

function questionBirthplace() {
  const message = pick(rejectionMessages);
  birthPlaceMessage.textContent = message;
  birthPlace.classList.remove("field-questioned");
  void birthPlace.offsetWidth;
  birthPlace.classList.add("field-questioned");
  nudge(message);
}

function questionAddress() {
  const message = pick(addressMessages);
  currentAddressMessage.textContent = message;
  nudge(message);
}

function resetExperience() {
  form.reset();
  attempts = 0;
  progress = 91.4;
  progressTarget = 96.4;
  phraseIndex = 0;
  mapIndex = -1;
  voiceIndex = 0;
  root.style.setProperty("--pressure", "0");
  loadingPhrase.textContent = phrases[0];
  formStatus.textContent = "The system found several versions of you.";
  birthPlaceMessage.textContent = "waiting for origin";
  currentAddressMessage.textContent = "current address uncertain";
  submitButton.textContent = "Continue";
  eventLog.replaceChildren();
  ["Language preference changed automatically.", "You are almost there."].forEach(addLog);
  hideSuggestions(birthPlace);
  hideSuggestions(currentAddress);
  renderScene();
  renderProgress();
  updateMap();
}

birthPlace.addEventListener("focus", () => showSuggestions(birthPlace));
currentAddress.addEventListener("focus", () => showSuggestions(currentAddress));

birthPlace.addEventListener("input", () => {
  showSuggestions(birthPlace);
  if (birthPlace.value.trim().length > 2) {
    questionBirthplace();
  }
});

currentAddress.addEventListener("input", () => {
  showSuggestions(currentAddress);
  if (currentAddress.value.trim().length > 3) {
    questionAddress();
  }
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".autocomplete-field")) {
    hideSuggestions(birthPlace);
    hideSuggestions(currentAddress);
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const status = pick(submitStates);
  submitButton.textContent = status;
  nudge(status);
});

resetButton.addEventListener("click", resetExperience);

renderProgress();
renderScene();
updateMap();

window.setInterval(updateProgress, reducedMotion ? 5200 : 1400);
window.setInterval(updatePhrase, reducedMotion ? 7200 : 4300);
window.setInterval(updateMap, reducedMotion ? 8200 : 5200);
window.setInterval(shiftLanguage, reducedMotion ? 9800 : 7200);
