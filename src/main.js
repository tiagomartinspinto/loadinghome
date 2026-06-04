import "./styles.css";

const phrases = [
  "Loading home record...",
  "Verifying residence claim...",
  "Converting statement to file...",
  "Checking belonging: not confirmed.",
  "Home requires confirmation.",
  "Origin record reopened.",
  "Almost complete is the decision.",
  "Address validated. Status unchanged.",
  "Residence entered. Recognition withheld.",
  "Field content exceeds accepted category.",
  "Application remains open."
];

const dictionary = {
  home: ["Home", "Casa", "Koti", "Dom", "Kodu", "Bayt", "Dim", "Guri", "Khane"],
  name: ["Name", "Nome", "Nimi", "Imya", "Nimi", "Ism", "Imya", "Magac", "Nam"],
  address: ["Address", "Morada", "Osoite", "Adres", "Aadress", "Unwan", "Adresa", "Cinwaan", "Adres"],
  loading: [
    "Loading",
    "A carregar",
    "Ladataan",
    "Zagruzka",
    "Laadimine",
    "Tahmil",
    "Zavantazhennia",
    "Soo rarid",
    "Dar hale bargozari"
  ],
  continue: ["Continue", "Continuar", "Jatka", "Prodolzhit", "Jatka", "Istamir", "Prodovzhyty", "Sii wad", "Edame bedeh"],
  reason: ["Reason", "Razao", "Syy", "Prichina", "Pohjus", "Sabab", "Prychyna", "Sabab", "Dalil"],
  pending: ["Pending", "Pendente", "Odottaa", "V ozhidanii", "Ootel", "Qayd al-intizar", "Ochikuie", "Sugaya", "Dar entezar"]
};

const verificationStates = [
  {
    status: "Verification result: unresolved",
    address: "valid",
    presence: "detected",
    duration: "insufficient evidence",
    result: "unresolved",
    previous: "still active in file"
  },
  {
    status: "Address valid. Status withheld.",
    address: "valid",
    presence: "detected",
    duration: "does not establish status",
    result: "reopened",
    previous: "higher weight retained"
  },
  {
    status: "Physical presence detected. Person not confirmed.",
    address: "serviceable",
    presence: "detected",
    duration: "under review",
    result: "additional review",
    previous: "not closed"
  },
  {
    status: "Residence duration is not sufficient evidence.",
    address: "valid",
    presence: "detected",
    duration: "insufficient evidence",
    result: "not issued",
    previous: "retained"
  },
  {
    status: "Address accepted as location, not as home.",
    address: "accepted",
    presence: "logged",
    duration: "not decisive",
    result: "pending",
    previous: "still active"
  }
];

const rejectionMessages = [
  "Birthplace is not accepted as current proof.",
  "Enter an origin the file can use.",
  "Birthplace does not match present records.",
  "Origin must be expressed as current relevance.",
  "Previous jurisdiction archived.",
  "Birth record found, belonging unresolved.",
  "Origin accepted. Arrival still pending."
];

const addressMessages = [
  "Address valid. Person status withheld.",
  "Current location requires more proof.",
  "Temporary address recorded as permanent liability.",
  "Administrative region unresolved.",
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
  "Home, not confirmed",
  "Nearest accepted location",
  "Previous record, archived",
  "Current record, pending",
  "No longer applicable",
  "Approximation accepted by file",
  "Temporary address with permanent consequences",
  "Former home, still counted",
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
  ["Review stage 5 of 5", "The process may retain the case."]
];

const officeVoices = [
  ["Internal comment", "The file requires a smaller account."],
  ["Eligibility note", "Almost complete is the decision."],
  ["Origin check", "Field content exceeds accepted category."],
  ["Former address archive", "Former address carries higher weight."],
  ["Witness record", "Memory is not accepted as evidence."],
  ["Translation review", "Meaning adjusted to fit the field."],
  ["Document request", "Every answer creates another requirement."],
  ["Queue status", "Residence may remain in process."],
  ["Stamp status", "Approval withheld. Labor retained."],
  ["Boundary rule", "Residence entered. Recognition withheld."],
  ["Pending case group", "Pending cases consolidated."]
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
  "Identity check: record located, person not confirmed.",
  "Classification required: economic / compliant / invisible / integrated",
  "Field check: name must fit the field.",
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

const caseRegisterStates = [
  {
    customer: "PERSON PENDING",
    decision: "not issued",
    labor: "accepted",
    belonging: "not accepted",
    caseStatus: "STATUS: PENDING"
  },
  {
    customer: "PERSON REDUCED",
    decision: "not issued",
    labor: "accepted",
    belonging: "not accepted",
    caseStatus: "STATUS: INCOMPLETE"
  },
  {
    customer: "PERSON UNCONFIRMED",
    decision: "withheld",
    labor: "accepted",
    belonging: "not accepted",
    caseStatus: "STATUS: REOPENED"
  },
  {
    customer: "PERSON CONDITIONAL",
    decision: "not issued",
    labor: "accepted",
    belonging: "not accepted",
    caseStatus: "STATUS: REOPENED"
  },
  {
    customer: "PERSON PENDING",
    decision: "not issued",
    labor: "accepted",
    belonging: "not accepted",
    caseStatus: "STATUS: REOPENED"
  }
];

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
    "labor record unconfirmed",
    "integration evidence insufficient"
  ],
  [
    "format rejected",
    "scan cropped",
    "attachment expired",
    "witness not processed",
    "format outside policy",
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
  "Automatic review opened another requirement.",
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
const verificationStatus = document.querySelector("#verificationStatus");
const addressRecord = document.querySelector("#addressRecord");
const physicalPresence = document.querySelector("#physicalPresence");
const residenceDuration = document.querySelector("#residenceDuration");
const verificationResult = document.querySelector("#verificationResult");
const previousAddress = document.querySelector("#previousAddress");
const form = document.querySelector("#residenceForm");
const formStatus = document.querySelector("#formStatus");
const requirementRecord = document.querySelector("#requirementRecord");
const submitButton = document.querySelector("#submitButton");
const resetButton = document.querySelector("#resetButton");
const eventLog = document.querySelector("#eventLog");
const caseCode = document.querySelector("#caseCode");
const birthPlace = document.querySelector("#birthPlace");
const birthPlaceMessage = document.querySelector("#birthPlaceMessage");
const currentAddress = document.querySelector("#currentAddress");
const currentAddressMessage = document.querySelector("#currentAddressMessage");
const reasonForStaying = document.querySelector("#reasonForStaying");
const reasonConstraint = document.querySelector("#reasonConstraint");
const protocolStatus = document.querySelector("#protocolStatus");
const customerRecord = document.querySelector("#customerRecord");
const decisionStatus = document.querySelector("#decisionStatus");
const laborStatus = document.querySelector("#laborStatus");
const belongingStatus = document.querySelector("#belongingStatus");
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
let verificationIndex = -1;
let attempts = 0;
let progressTarget = 96.4;
let voiceIndex = 0;
let requirementCount = 0;
let resetCount = 0;
let birthReviewStep = -1;
let addressReviewStep = -1;

function pick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function pressurePick(list, offset = 0) {
  return list[(attempts + requirementCount + offset) % list.length];
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
    progressTarget = 93.2 + Math.random() * 2.8;
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

function updateVerification() {
  verificationIndex = (verificationIndex + 1) % verificationStates.length;
  const state = verificationStates[verificationIndex];

  verificationStatus.textContent = state.status;
  addressRecord.textContent = state.address;
  physicalPresence.textContent = state.presence;
  residenceDuration.textContent = state.duration;
  verificationResult.textContent = state.result;
  previousAddress.textContent = state.previous;
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
  reasonConstraint.textContent = `field limit: ${limit} / remaining: ${remaining}`;
}

function renderPressureState() {
  const level = stageIndex();
  const labels = fieldLabelSets[level];
  const captions = evidenceCaptionSets[level];
  const caseState = caseRegisterStates[level];

  fieldLabels.name.textContent = labels.name;
  fieldLabels.birth.textContent = labels.birth;
  fieldLabels.address.textContent = labels.address;
  fieldLabels.language.textContent = labels.language;
  fieldLabels.reason.textContent = labels.reason;
  caseCode.textContent = caseState.caseStatus;
  customerRecord.textContent = caseState.customer;
  decisionStatus.textContent = caseState.decision;
  laborStatus.textContent = caseState.labor;
  belongingStatus.textContent = caseState.belonging;

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
  const question = inspectionQuestions[(attempts + Math.max(verificationIndex, 0)) % inspectionQuestions.length];

  applicantRole.textContent = `${role} / recognition withheld.`;
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
    addLog(pressurePick(institutionalLogs[stageIndex()]));
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
        birthPlaceMessage.textContent = "Origin recorded as liability.";
        requirementCount += 1;
        nudge("Previous jurisdiction archived. Current record reduced.");
      } else {
        currentAddressMessage.textContent = "Address accepted. Status withheld.";
        requirementCount += 1;
        nudge("Address accepted. Status withheld.");
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
  const message = pressurePick(rejectionMessages);
  birthPlaceMessage.textContent = message;
  birthPlace.classList.remove("field-questioned");
  void birthPlace.offsetWidth;
  birthPlace.classList.add("field-questioned");
  nudge(message);
}

function questionAddress() {
  const message = pressurePick(addressMessages, 1);
  currentAddressMessage.textContent = message;
  nudge(message);
}

function resetExperience() {
  form.reset();
  resetCount += 1;
  requirementCount += 1;
  birthReviewStep = -1;
  addressReviewStep = -1;
  attempts = Math.max(attempts + 1, 1);
  progress = clamp(progress - 1.1, 84.2, 96.9);
  progressTarget = Math.min(progressTarget, 94.8);
  root.style.setProperty("--pressure", String(Math.min(attempts, 12)));
  loadingPhrase.textContent = "Application remains open.";
  protocolStatus.textContent = `POST /case/restart -> 202 PENDING / restart ${resetCount}`;
  formStatus.textContent = "Start again. The condition remains.";
  birthPlaceMessage.textContent = "origin cleared; review retained";
  currentAddressMessage.textContent = "address cleared; status unchanged";
  hideSuggestions(birthPlace);
  hideSuggestions(currentAddress);
  renderScene();
  renderPressureState();
  renderProgress();
  updateVerification();
  addLog("Start again. Pending condition retained.");
  addLog("Case HOME-00097 remains open.");
}

birthPlace.addEventListener("focus", () => showSuggestions(birthPlace));
currentAddress.addEventListener("focus", () => showSuggestions(currentAddress));

birthPlace.addEventListener("input", () => {
  showSuggestions(birthPlace);
  const reviewStep = Math.floor(birthPlace.value.trim().length / 6);
  if (birthPlace.value.trim().length > 2 && reviewStep > birthReviewStep) {
    birthReviewStep = reviewStep;
    questionBirthplace();
  }
});

currentAddress.addEventListener("input", () => {
  showSuggestions(currentAddress);
  const reviewStep = Math.floor(currentAddress.value.trim().length / 7);
  if (currentAddress.value.trim().length > 3 && reviewStep > addressReviewStep) {
    addressReviewStep = reviewStep;
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
  addLog(pressurePick(institutionalLogs[stageIndex()], 1));
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
  protocolStatus.textContent = `AUTO /case-review -> 202 PENDING / requirement ${requirementCount}`;
  nudge(exhibitionMessages[(requirementCount - 1) % exhibitionMessages.length]);
  updateVerification();
  if (Math.random() < 0.5) {
    updatePhrase();
  }
}

renderProgress();
renderScene();
renderPressureState();
updateVerification();

window.setInterval(updateProgress, reducedMotion ? 6500 : 1800);
window.setInterval(updatePhrase, reducedMotion ? 11000 : 6200);
window.setInterval(updateVerification, reducedMotion ? 12000 : 9000);
window.setInterval(shiftLanguage, reducedMotion ? 14000 : 11000);

if (exhibitionMode) {
  addLog("Automatic review active. Completion unavailable.");
  protocolStatus.textContent = "AUTO /exhibition-mode -> 202 PENDING";

  if (reducedMotion) {
    addLog("Automatic review paused. Pending condition retained.");
  } else {
    window.setInterval(runExhibitionStep, 14000);
  }
}
