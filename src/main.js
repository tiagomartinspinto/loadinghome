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
  "Elsewhere"
];

const applicantRoles = [
  "Applicant record",
  "Arrival record",
  "Pending person record",
  "Case HOME-00097",
  "Residence recognition record"
];

const acts = [
  ["Review stage 1 of 5", "Identity fields accepted. Recognition unresolved."],
  ["Review stage 2 of 5", "Language accepted after intention is corrected."],
  ["Review stage 3 of 5", "Supporting evidence present. Testimony exceeds format."],
  ["Review stage 4 of 5", "Labor recorded. Usefulness and integration remain under review."],
  ["Review stage 5 of 5", "Application remains open. Waiting is retained as procedure."]
];

const officeVoices = [
  ["Internal comment", "The form asks for a smaller version of the record."],
  ["Eligibility note", "Almost is accepted as proof of effort, not as arrival."],
  ["Origin check", "The previous address is still responding."],
  ["Former address archive", "A former home remains active in the file."],
  ["Witness record", "The witness is present but not processed."],
  ["Translation review", "The sentence is corrected until intent no longer belongs to it."],
  ["Document request", "One request opens into another request."],
  ["Queue status", "Previous hesitation retained."],
  ["Stamp status", "Authorization not applied."],
  ["Boundary rule", "Rule not visible. Delay active."],
  ["Pending case group", "pending, pending, pending."]
];

const translationScenes = [
  ["Statement: I live here", "Recorded as: temporary presence detected."],
  ["Statement: I work here", "Recorded as: economic usefulness pending."],
  ["Statement: I belong here", "Recorded as: unsupported claim."],
  ["Statement: I remember home", "Recorded as: memory must match accepted format."],
  ["Statement: I am here", "Recorded as: arrival detected, belonging pending."],
  ["Statement: I will stay", "Recorded as: future presence requires review."]
];

const inspectionQuestions = [
  "Internal query: how many winters until arrival becomes residence?",
  "Required selection: useful / grateful / invisible / integrated",
  "Field check: confirm that the name fits the field.",
  "Translation check: confirm that memory has been translated correctly.",
  "Silence check: confirm that silence is voluntary.",
  "Routing check: one document request opens another document request."
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
    reason: "Stated reason"
  },
  {
    name: "Name as processed",
    birth: "Origin record",
    address: "Traceable residence",
    language: "Language requiring review",
    reason: "Reason, accepted format only"
  },
  {
    name: "Administrative identity",
    birth: "Former location marker",
    address: "Temporary/permanent address",
    language: "Corrected language field",
    reason: "Usefulness and integration statement"
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
    "Case opened. Pending.",
    "Identity entered. Recognition unresolved.",
    "Review remains active."
  ],
  [
    "Language corrected. Intent pending.",
    "Statement converted to administrative format.",
    "Translation accepted with loss."
  ],
  [
    "Supporting evidence incomplete.",
    "Unofficial memory rejected as format.",
    "Testimony exceeds field length."
  ],
  [
    "Labor registered. Usefulness pending.",
    "Gratitude not measurable.",
    "Integration claim requires further proof."
  ],
  [
    "Completion reopened.",
    "Pending condition retained.",
    "Case remains almost processed."
  ]
];

const evidenceCaptionSets = [
  [
    "statement unavailable",
    "record incomplete",
    "statement not attached",
    "experience outside accepted format",
    "harm requires official translation",
    "testimony exceeds field length"
  ],
  [
    "origin file missing",
    "current file incomplete",
    "language note detached",
    "unofficial memory",
    "labor trace unconfirmed",
    "gratitude field blank"
  ],
  [
    "format rejected",
    "scan cropped",
    "attachment expired",
    "witness not processed",
    "proof too personal",
    "document unavailable"
  ],
  [
    "usefulness pending",
    "integration checkbox unresolved",
    "contradiction retained",
    "work recorded, home pending",
    "agency noted, status unchanged",
    "explanation too long"
  ],
  [
    "case still open",
    "confirmation missing",
    "near home is not home",
    "waiting accepted",
    "arrival detected",
    "belonging pending"
  ]
];

const exhibitionMessages = [
  "Automated review opened another requirement.",
  "Case almost complete. Confirmation unavailable.",
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

function stageIndex() {
  return Math.min(Math.floor(attempts / 2), acts.length - 1);
}

function updateReasonConstraint() {
  const limit = Number(reasonForStaying.maxLength);
  const remaining = Math.max(0, limit - reasonForStaying.value.length);
  reasonConstraint.textContent = `maximum explanation: ${limit} characters / remaining: ${remaining}`;
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

  applicantRole.textContent = `${role} / recognition unresolved.`;
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
  formStatus.textContent = "Restart accepted. Pending condition retained.";
  birthPlaceMessage.textContent = "origin cleared; review retained";
  currentAddressMessage.textContent = "address cleared; trace retained";
  hideSuggestions(birthPlace);
  hideSuggestions(currentAddress);
  renderScene();
  renderPressureState();
  renderProgress();
  updateMap();
  addLog("Restart accepted. Pending condition retained.");
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
    nudge("Document unavailable. Requirement retained.");
    addLog("404: document unavailable / pending retained.");
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
  addLog("Exhibition mode: automatic review pending.");
  protocolStatus.textContent = "AUTO /exhibition-mode -> 202 PENDING";

  if (reducedMotion) {
    addLog("Automatic review paused by reduced motion preference.");
  } else {
    window.setInterval(runExhibitionStep, 6800);
  }
}
