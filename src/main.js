const viteBase = import.meta.env?.BASE_URL;

if (viteBase) {
  import("./styles.css");
} else {
  const stylesheet = document.createElement("link");
  stylesheet.rel = "stylesheet";
  stylesheet.href = import.meta.url.replace(/\/[^/]*$/, "/styles.css");
  document.head.append(stylesheet);
}

const phrases = [
  "Loading home record...",
  "Verifying residence claim...",
  "Converting life to file...",
  "Checking belonging: not confirmed.",
  "Home requires confirmation.",
  "Origin required again.",
  "Almost complete is the decision.",
  "Address accepted, belonging pending.",
  "You live here. The system disagrees.",
  "Your life does not fit the file.",
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
  ["Current country?", "Address valid", "Arrival point pending", "Person not confirmed", "translate(68%, 34%)"],
  ["Previous address found", "Previous address found", "Former home responding", "Home not confirmed", "translate(38%, 50%)"],
  ["Host city unresolved", "Temporary home", "Administrative region unknown", "presence accepted, belonging pending", "translate(72%, 58%)"],
  ["Elsewhere detected", "Unverified location", "Not here", "Not there", "translate(44%, 38%)"],
  ["Near home", "near home", "close enough", "not enough", "translate(60%, 46%)"]
];

const rejectionMessages = [
  "Birthplace is not accepted as current proof.",
  "Enter an origin the file can use.",
  "Birthplace does not match present records.",
  "The system prefers somewhere closer.",
  "Previous country archived.",
  "Birth record found, belonging unresolved.",
  "Origin accepted. Arrival still pending."
];

const addressMessages = [
  "The address is valid. You are not.",
  "Current location requires more proof.",
  "Temporary address recorded as permanent liability.",
  "Host city unresolved.",
  "Residence detected. Home not confirmed."
];

const submitStates = [
  "CHECK RECORD",
  "VERIFY LANGUAGE",
  "REQUEST EVIDENCE",
  "ASSESS USEFULNESS",
  "KEEP CASE OPEN",
  "REOPEN REQUIREMENT"
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
  "Valid address, invalid belonging"
];

const applicantRoles = [
  "Applicant record",
  "Arrival record",
  "Pending person record",
  "Case HOME-00097",
  "Residence recognition record"
];

const acts = [
  ["Review stage 1 of 5", "Identity accepted as data. Person not confirmed."],
  ["Review stage 2 of 5", "Language accepted. Meaning changed."],
  ["Review stage 3 of 5", "Evidence accepted as file. Memory rejected."],
  ["Review stage 4 of 5", "Work accepted. Belonging not accepted."],
  ["Review stage 5 of 5", "You can stay in the process."]
];

const officeVoices = [
  ["Internal comment", "The form needs a smaller version of you."],
  ["Eligibility note", "Almost complete is the decision."],
  ["Origin check", "Your life does not fit the file."],
  ["Former address archive", "The old address counts more than the current life."],
  ["Witness record", "Your memory is not accepted as evidence."],
  ["Translation review", "Your sentence is corrected until it is not yours."],
  ["Document request", "Every answer creates another requirement."],
  ["Queue status", "You can stay in the process."],
  ["Stamp status", "Approval withheld. Labor retained."],
  ["Boundary rule", "You live here. The system disagrees."],
  ["Pending case group", "pending, pending, pending."]
];

const translationScenes = [
  ["Statement: I live here", "Recorded as: address valid, person not confirmed."],
  ["Statement: I work here", "Recorded as: labor accepted before presence."],
  ["Statement: I belong here", "Recorded as: unsupported claim."],
  ["Statement: I remember home", "Recorded as: memory is not evidence."],
  ["Statement: I am here", "Recorded as: arrival detected, person pending."],
  ["Statement: I will stay", "Recorded as: process may continue."]
];

const inspectionQuestions = [
  "Identity check: the system found you, but not as a person.",
  "Required selection: useful / grateful / invisible / integrated",
  "Field check: your name must fit the field.",
  "Evidence check: memory is not accepted as evidence.",
  "Silence check: no objection has been processed.",
  "Routing check: every document request opens another request."
];

const fieldLabelSets = [
  {
    name: "Name",
    birth: "Place of birth",
    address: "Current address",
    language: "Native language",
    reason: "Reason for staying"
  },
  {
    name: "Recorded name",
    birth: "Birth record",
    address: "Residence claim",
    language: "Language declared",
    reason: "Reason, shortened"
  },
  {
    name: "Name as processed",
    birth: "Origin record",
    address: "Traceable residence",
    language: "Language requiring review",
    reason: "Reason too large for field"
  },
  {
    name: "Administrative identity",
    birth: "Former location marker",
    address: "Temporary/permanent address",
    language: "Corrected language field",
    reason: "Usefulness statement"
  },
  {
    name: "Case identity",
    birth: "Archived origin field",
    address: "Residence without confirmation",
    language: "Language evidence",
    reason: "Final explanation, non-final"
  }
];

const reasonLimits = [260, 220, 180, 140, 96];

const institutionalLogs = [
  [
    "Case opened. Person pending.",
    "Identity entered. Person not confirmed.",
    "Review active. Belonging inactive."
  ],
  [
    "Language corrected. Meaning changed.",
    "Statement converted. Person reduced.",
    "Translation accepted. Intent rejected."
  ],
  [
    "Supporting evidence incomplete.",
    "Unofficial memory rejected as format.",
    "Testimony exceeds field length."
  ],
  [
    "Labor registered. Belonging not registered.",
    "Usefulness accepted. Presence pending.",
    "Gratitude required. Proof insufficient."
  ],
  [
    "Completion reopened.",
    "Pending condition retained.",
    "Almost complete is the decision."
  ]
];

const evidenceCaptionSets = [
  [
    "statement too large",
    "record incomplete",
    "statement not attached",
    "life outside accepted format",
    "harm requires official translation",
    "testimony exceeds field length"
  ],
  [
    "origin file missing",
    "current file incomplete",
    "language note detached",
    "unofficial memory",
    "labor trace unconfirmed",
    "gratitude not proven"
  ],
  [
    "format rejected",
    "scan cropped",
    "attachment expired",
    "witness not processed",
    "proof too human",
    "document unavailable"
  ],
  [
    "usefulness pending",
    "integration checkbox unresolved",
    "contradiction retained",
    "work accepted, home pending",
    "agency noted, status unchanged",
    "explanation too long"
  ],
  [
    "case still open",
    "confirmation missing",
    "address valid, person invalid",
    "waiting accepted",
    "arrival detected",
    "belonging pending"
  ]
];

const exhibitionMessages = [
  "Automated review opened another requirement.",
  "Almost complete is the decision.",
  "Supporting evidence reclassified.",
  "Completed status reopened.",
  "Pending condition retained."
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
const requirementRecord = document.querySelector("#requirementRecord");
const submitButton = document.querySelector("#submitButton");
const resetButton = document.querySelector("#resetButton");
const eventLog = document.querySelector("#eventLog");
const birthPlace = document.querySelector("#birthPlace");
const birthPlaceMessage = document.querySelector("#birthPlaceMessage");
const currentAddress = document.querySelector("#currentAddress");
const currentAddressMessage = document.querySelector("#currentAddressMessage");
const reasonForStaying = document.querySelector("#reasonForStaying");
const reasonConstraint = document.querySelector("#reasonConstraint");
const protocolStatus = document.querySelector("#protocolStatus");
const deadLinks = Array.from(document.querySelectorAll("[data-dead-link]"));
const termNodes = Array.from(document.querySelectorAll("[data-term]"));
const fieldLabels = {
  name: document.querySelector("#personNameLabel"),
  birth: document.querySelector("#birthPlaceLabel"),
  address: document.querySelector("#currentAddressLabel"),
  language: document.querySelector("#nativeLanguageLabel"),
  reason: document.querySelector("#reasonForStayingLabel")
};
const applicantRole = document.querySelector("#applicantRole");
const actTitle = document.querySelector("#actTitle");
const actDescription = document.querySelector("#actDescription");
const voiceSpeaker = document.querySelector("#voiceSpeaker");
const voiceText = document.querySelector("#voiceText");
const inspectionQuestion = document.querySelector("#inspectionQuestion");
const translationInput = document.querySelector("#translationInput");
const translationOutput = document.querySelector("#translationOutput");
const recordCaptions = Array.from(document.querySelectorAll("[data-record-caption]"));
const params = new URLSearchParams(window.location.search);
const exhibitionMode = params.get("mode") === "exhibition";

let progress = 91.4;
let phraseIndex = 0;
let mapIndex = -1;
let attempts = 0;
let progressTarget = 96.4;
let voiceIndex = 0;
let requirementCount = 0;
let resetCount = 0;

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
    addLog("Language preference changed without consent.");
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

function stageIndex() {
  return Math.min(Math.floor(attempts / 2), acts.length - 1);
}

function updateReasonConstraint() {
  const limit = Number(reasonForStaying.maxLength);
  const remaining = Math.max(0, limit - reasonForStaying.value.length);
  reasonConstraint.textContent = `field limit: ${limit} characters / remaining: ${remaining}`;
}

function renderPressureState() {
  const level = stageIndex();
  const labels = fieldLabelSets[level];
  const captions = evidenceCaptionSets[level];

  fieldLabels.name.textContent = labels.name;
  fieldLabels.birth.textContent = labels.birth;
  fieldLabels.address.textContent = labels.address;
  fieldLabels.language.textContent = labels.language;
  fieldLabels.reason.textContent = labels.reason;

  reasonForStaying.maxLength = reasonLimits[level];
  if (reasonForStaying.value.length > reasonForStaying.maxLength) {
    reasonForStaying.value = reasonForStaying.value.slice(0, reasonForStaying.maxLength);
  }
  reasonForStaying.rows = Math.max(2, 4 - Math.min(level, 2));
  updateReasonConstraint();

  requirementRecord.textContent = `requirements opened: ${requirementCount}`;
  submitButton.textContent = attempts === 0 ? "Continue" : submitStates[Math.min(level, submitStates.length - 1)];

  recordCaptions.forEach((caption, index) => {
    caption.textContent = captions[(index + attempts) % captions.length];
  });
}

function renderScene() {
  const act = acts[stageIndex()];
  const role = applicantRoles[attempts % applicantRoles.length];
  const voice = officeVoices[(voiceIndex + attempts) % officeVoices.length];
  const translation = translationScenes[attempts % translationScenes.length];
  const question = inspectionQuestions[(attempts + Math.max(mapIndex, 0)) % inspectionQuestions.length];

  applicantRole.textContent = `${role} / person not accepted.`;
  actTitle.textContent = act[0];
  actDescription.textContent = act[1];
  voiceSpeaker.textContent = voice[0];
  voiceText.textContent = voice[1];
  inspectionQuestion.textContent = question;
  translationInput.textContent = translation[0];
  translationOutput.textContent = translation[1];
}

function nudge(message) {
  attempts += 1;
  root.style.setProperty("--pressure", String(Math.min(attempts, 12)));
  progress = clamp(progress - (0.18 + Math.random() * 0.6), 84.2, 96.9);
  renderProgress();
  renderScene();
  renderPressureState();

  if (message) {
    formStatus.textContent = message;
    addLog(message);
  } else {
    addLog(pick(institutionalLogs[stageIndex()]));
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
        requirementCount += 1;
        nudge("Previous country archived.");
      } else {
        currentAddressMessage.textContent = "Address accepted, belonging pending.";
        requirementCount += 1;
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
  resetCount += 1;
  requirementCount += 1;
  attempts = Math.max(attempts + 1, 1);
  progress = clamp(progress - 1.1, 84.2, 96.9);
  progressTarget = Math.min(progressTarget, 94.8);
  root.style.setProperty("--pressure", String(Math.min(attempts, 12)));
  loadingPhrase.textContent = "Application remains open.";
  protocolStatus.textContent = `POST /case/restart -> 202 PENDING / restart ${resetCount}`;
  formStatus.textContent = "Start again. The condition remains.";
  birthPlaceMessage.textContent = "origin cleared; suspicion retained";
  currentAddressMessage.textContent = "address cleared; status unchanged";
  hideSuggestions(birthPlace);
  hideSuggestions(currentAddress);
  renderScene();
  renderPressureState();
  renderProgress();
  updateMap();
  addLog("Start again. The condition remains.");
  addLog("Case HOME-00097 remains open.");
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

reasonForStaying.addEventListener("input", updateReasonConstraint);

document.addEventListener("click", (event) => {
  if (!event.target.closest(".autocomplete-field")) {
    hideSuggestions(birthPlace);
    hideSuggestions(currentAddress);
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  requirementCount += 1;
  const level = stageIndex();
  const status = submitStates[Math.min(level + 1, submitStates.length - 1)];
  protocolStatus.textContent = `POST /case/HOME-00097 -> 202 PENDING / requirement ${requirementCount}`;
  nudge(status);
  addLog(pick(institutionalLogs[stageIndex()]));
});

resetButton.addEventListener("click", resetExperience);

deadLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    requirementCount += 1;
    protocolStatus.textContent = `GET /${link.dataset.deadLink}.html -> 404 DOCUMENT UNAVAILABLE`;
    nudge("Document unavailable. Requirement still required.");
    addLog("404: document unavailable / requirement retained.");
  });
});

function runExhibitionStep() {
  requirementCount += 1;
  protocolStatus.textContent = `AUTO /gallery-review -> 202 PENDING / requirement ${requirementCount}`;
  nudge(pick(exhibitionMessages));
  updateMap();
  if (Math.random() < 0.5) {
    updatePhrase();
  }
}

renderProgress();
renderScene();
renderPressureState();
updateMap();

window.setInterval(updateProgress, reducedMotion ? 5200 : 1400);
window.setInterval(updatePhrase, reducedMotion ? 7200 : 4300);
window.setInterval(updateMap, reducedMotion ? 8200 : 5200);
window.setInterval(shiftLanguage, reducedMotion ? 9800 : 7200);

if (exhibitionMode) {
  addLog("Automatic review active. No completion available.");
  protocolStatus.textContent = "AUTO /exhibition-mode -> 202 PENDING";

  if (reducedMotion) {
    addLog("Automatic review paused. Pending condition retained.");
  } else {
    window.setInterval(runExhibitionStep, 6800);
  }
}
