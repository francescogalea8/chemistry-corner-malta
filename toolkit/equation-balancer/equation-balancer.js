const QUESTION_COUNT = 15;

const questionBank = {
  easy: [
    q(["H₂", "O₂"], ["H₂O"], [2, 1, 2], "Synthesis"),
    q(["N₂", "H₂"], ["NH₃"], [1, 3, 2], "Synthesis"),
    q(["Mg", "O₂"], ["MgO"], [2, 1, 2], "Synthesis"),
    q(["Na", "Cl₂"], ["NaCl"], [2, 1, 2], "Synthesis"),
    q(["Al", "O₂"], ["Al₂O₃"], [4, 3, 2], "Synthesis"),
    q(["Fe", "S"], ["FeS"], [1, 1, 1], "Synthesis"),
    q(["H₂O₂"], ["H₂O", "O₂"], [2, 2, 1], "Decomposition"),
    q(["CaCO₃"], ["CaO", "CO₂"], [1, 1, 1], "Decomposition"),
    q(["KClO₃"], ["KCl", "O₂"], [2, 2, 3], "Decomposition"),
    q(["Na₂O", "H₂O"], ["NaOH"], [1, 1, 2], "Synthesis"),
    q(["Ca", "H₂O"], ["Ca(OH)₂", "H₂"], [1, 2, 1, 1], "Displacement"),
    q(["Zn", "HCl"], ["ZnCl₂", "H₂"], [1, 2, 1, 1], "Displacement"),
    q(["CuO", "H₂"], ["Cu", "H₂O"], [1, 1, 1, 1], "Reduction"),
    q(["CH₄", "O₂"], ["CO₂", "H₂O"], [1, 2, 1, 2], "Combustion"),
    q(["P₄", "O₂"], ["P₂O₅"], [1, 5, 2], "Synthesis"),
    q(["SO₂", "O₂"], ["SO₃"], [2, 1, 2], "Synthesis"),
    q(["NH₃", "HCl"], ["NH₄Cl"], [1, 1, 1], "Synthesis"),
    q(["CO", "O₂"], ["CO₂"], [2, 1, 2], "Combustion")
  ],
  medium: [
    q(["Fe₂O₃", "CO"], ["Fe", "CO₂"], [1, 3, 2, 3], "Redox"),
    q(["C₃H₈", "O₂"], ["CO₂", "H₂O"], [1, 5, 3, 4], "Combustion"),
    q(["C₂H₆", "O₂"], ["CO₂", "H₂O"], [2, 7, 4, 6], "Combustion"),
    q(["NaOH", "H₂SO₄"], ["Na₂SO₄", "H₂O"], [2, 1, 1, 2], "Neutralisation"),
    q(["Al", "HCl"], ["AlCl₃", "H₂"], [2, 6, 2, 3], "Displacement"),
    q(["Ca₃(PO₄)₂", "H₂SO₄"], ["CaSO₄", "H₃PO₄"], [1, 3, 3, 2], "Double displacement"),
    q(["BaCl₂", "Na₂SO₄"], ["BaSO₄", "NaCl"], [1, 1, 1, 2], "Precipitation"),
    q(["AgNO₃", "NaCl"], ["AgCl", "NaNO₃"], [1, 1, 1, 1], "Precipitation"),
    q(["Pb(NO₃)₂", "KI"], ["PbI₂", "KNO₃"], [1, 2, 1, 2], "Precipitation"),
    q(["FeCl₃", "NaOH"], ["Fe(OH)₃", "NaCl"], [1, 3, 1, 3], "Precipitation"),
    q(["CuSO₄", "NaOH"], ["Cu(OH)₂", "Na₂SO₄"], [1, 2, 1, 1], "Precipitation"),
    q(["Na₂CO₃", "HCl"], ["NaCl", "H₂O", "CO₂"], [1, 2, 2, 1, 1], "Acid–carbonate"),
    q(["CaCO₃", "HCl"], ["CaCl₂", "H₂O", "CO₂"], [1, 2, 1, 1, 1], "Acid–carbonate"),
    q(["NH₃", "O₂"], ["NO", "H₂O"], [4, 5, 4, 6], "Oxidation"),
    q(["C₄H₁₀", "O₂"], ["CO₂", "H₂O"], [2, 13, 8, 10], "Combustion"),
    q(["K₂O", "H₂O"], ["KOH"], [1, 1, 2], "Synthesis"),
    q(["Al₂(SO₄)₃", "Ca(OH)₂"], ["Al(OH)₃", "CaSO₄"], [1, 3, 2, 3], "Double displacement"),
    q(["Na₃PO₄", "MgCl₂"], ["Mg₃(PO₄)₂", "NaCl"], [2, 3, 1, 6], "Precipitation")
  ],
  hard: [
    q(["KMnO₄", "HCl"], ["KCl", "MnCl₂", "H₂O", "Cl₂"], [2, 16, 2, 2, 8, 5], "Redox"),
    q(["K₂Cr₂O₇", "HCl"], ["KCl", "CrCl₃", "H₂O", "Cl₂"], [1, 14, 2, 2, 7, 3], "Redox"),
    q(["Cu", "HNO₃"], ["Cu(NO₃)₂", "NO₂", "H₂O"], [1, 4, 1, 2, 2], "Redox", "concentrated nitric acid"),
    q(["FeS₂", "O₂"], ["Fe₂O₃", "SO₂"], [4, 11, 2, 8], "Roasting / redox"),
    q(["Al", "Fe₃O₄"], ["Al₂O₃", "Fe"], [8, 3, 4, 9], "Thermite / redox"),
    q(["Na₂S₂O₃", "HCl"], ["NaCl", "SO₂", "S", "H₂O"], [1, 2, 2, 1, 1, 1], "Acid–thiosulfate"),
    q(["C₂H₅OH", "O₂"], ["CO₂", "H₂O"], [1, 3, 2, 3], "Combustion"),
    q(["KNO₃"], ["KNO₂", "O₂"], [2, 2, 1], "Thermal decomposition"),
    q(["Cl₂", "NaOH"], ["NaCl", "NaClO", "H₂O"], [1, 2, 1, 1, 1], "Disproportionation", "cold, dilute sodium hydroxide"),
    q(["Cl₂", "NaOH"], ["NaCl", "NaClO₃", "H₂O"], [3, 6, 5, 1, 3], "Disproportionation", "hot, concentrated sodium hydroxide"),
    q(["MnO₂", "HCl"], ["MnCl₂", "Cl₂", "H₂O"], [1, 4, 1, 1, 2], "Redox"),
    q(["Fe₂(SO₄)₃", "KOH"], ["Fe(OH)₃", "K₂SO₄"], [1, 6, 2, 3], "Precipitation"),
    q(["Cr₂O₃", "Al"], ["Al₂O₃", "Cr"], [1, 2, 1, 2], "Redox"),
    q(["P₄", "KOH", "H₂O"], ["PH₃", "KH₂PO₂"], [1, 3, 3, 1, 3], "Disproportionation"),
    q(["C₆H₁₂O₆", "O₂"], ["CO₂", "H₂O"], [1, 6, 6, 6], "Respiration"),
    q(["NH₄NO₃"], ["N₂O", "H₂O"], [1, 1, 2], "Thermal decomposition"),
    q(["Na₂O₂", "H₂O"], ["NaOH", "O₂"], [2, 2, 4, 1], "Redox"),
    q(["H₂S", "SO₂"], ["S", "H₂O"], [2, 1, 3, 2], "Redox")
  ]
};

const list = document.querySelector("#equation-list");
const worksheetForm = document.querySelector("#worksheet");
const checkButton = document.querySelector("#submit-worksheet");
const newButton = document.querySelector("#new-worksheet");
const printButton = document.querySelector("#print-worksheet");
const progressText = document.querySelector("#progress-text");
const progressBar = document.querySelector("#progress-bar");
const scorePanel = document.querySelector("#score-panel");
const difficultyButtons = [...document.querySelectorAll("[data-difficulty]")];

let difficulty = "mixed";
let worksheet = [];
let submitted = false;

function q(left, right, coefficients, type, condition = "") {
  return { left, right, coefficients, type, condition };
}

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapWith = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapWith]] = [copy[swapWith], copy[index]];
  }
  return copy;
}

function buildWorksheet(level) {
  if (level === "mixed") {
    return [
      ...shuffle(questionBank.easy).slice(0, 5).map(item => ({ ...item, level: "Easy" })),
      ...shuffle(questionBank.medium).slice(0, 5).map(item => ({ ...item, level: "Medium" })),
      ...shuffle(questionBank.hard).slice(0, 5).map(item => ({ ...item, level: "Hard" }))
    ].sort(() => Math.random() - 0.5);
  }
  return shuffle(questionBank[level]).slice(0, QUESTION_COUNT).map(item => ({
    ...item,
    level: level[0].toUpperCase() + level.slice(1)
  }));
}

function coefficientInput(questionIndex, coefficientIndex, formula) {
  return `<label class="compound"><span class="sr-only">Coefficient for ${formula}</span><input class="coefficient" type="number" inputmode="numeric" min="1" max="99" step="1" data-question="${questionIndex}" data-coefficient="${coefficientIndex}" aria-label="Coefficient for ${formula}"><span class="formula">${formula}</span></label>`;
}

function reactionMarkup(question, questionIndex) {
  let coefficientIndex = 0;
  const left = question.left.map(formula => coefficientInput(questionIndex, coefficientIndex++, formula)).join('<span class="operator" aria-hidden="true"> + </span>');
  const right = question.right.map(formula => coefficientInput(questionIndex, coefficientIndex++, formula)).join('<span class="operator" aria-hidden="true"> + </span>');
  const condition = question.condition ? `<small class="condition">(${question.condition})</small>` : "";
  return `<div class="equation-expression">${left}<span class="arrow" aria-label="reacts to form"> → </span>${right}${condition}</div>`;
}

function renderWorksheet() {
  worksheet = buildWorksheet(difficulty);
  submitted = false;
  scorePanel.hidden = true;
  scorePanel.innerHTML = "";
  list.innerHTML = worksheet.map((question, index) => `
    <li class="equation-question" data-card="${index}">
      ${reactionMarkup(question, index)}
      <span class="question-state" aria-live="polite">${question.level}</span>
    </li>
  `).join("");
  list.querySelectorAll("input").forEach(input => input.addEventListener("input", updateProgress));
  updateProgress();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function getInputs(questionIndex) {
  return [...list.querySelectorAll(`input[data-question="${questionIndex}"]`)];
}

function updateProgress() {
  const cards = [...list.querySelectorAll(".equation-question")];
  const completed = cards.filter((_, index) => getInputs(index).every(input => input.value !== "" && Number(input.value) >= 1)).length;
  progressText.textContent = `${completed} of ${QUESTION_COUNT} questions completed`;
  progressBar.style.width = `${(completed / QUESTION_COUNT) * 100}%`;
  progressBar.parentElement.setAttribute("aria-valuenow", String(completed));
  checkButton.disabled = completed !== QUESTION_COUNT || submitted;
}

function gcd(a, b) {
  return b === 0 ? Math.abs(a) : gcd(b, a % b);
}

function simplest(values) {
  return values.reduce((current, value) => gcd(current, value));
}

function correctEquation(question) {
  const parts = [...question.left, ...question.right];
  const leftCount = question.left.length;
  const formatted = parts.map((formula, index) => `${question.coefficients[index] === 1 ? "" : question.coefficients[index]}${formula}`);
  return `${formatted.slice(0, leftCount).join(" + ")} → ${formatted.slice(leftCount).join(" + ")}`;
}

function checkAnswers() {
  if (submitted) return;
  submitted = true;
  let score = 0;

  worksheet.forEach((question, index) => {
    const inputs = getInputs(index);
    const values = inputs.map(input => Number(input.value));
    const exact = values.every((value, coefficientIndex) => value === question.coefficients[coefficientIndex]);
    const sameRatio = values.every((value, coefficientIndex) => value * question.coefficients[0] === values[0] * question.coefficients[coefficientIndex]);
    const card = list.querySelector(`[data-card="${index}"]`);
    const state = card.querySelector(".question-state");

    inputs.forEach(input => { input.disabled = true; });
    if (exact) {
      score += 1;
      card.classList.add("is-correct");
      state.textContent = "Correct";
    } else {
      card.classList.add("is-incorrect");
      state.textContent = "Review";
      const reason = sameRatio && simplest(values) > 1
        ? "Your ratio is balanced, but it must be reduced to the smallest whole numbers."
        : "Check that every element has the same atom count on both sides.";
      card.insertAdjacentHTML("beforeend", `<p class="correction"><strong>Correct answer: ${correctEquation(question)}</strong><br>${reason} Reaction type: ${question.type}.</p>`);
    }
  });

  const percentage = Math.round((score / QUESTION_COUNT) * 100);
  const message = percentage === 100 ? "Excellent—every equation is balanced." : percentage >= 73 ? "Strong work. Review the corrections below." : percentage >= 47 ? "Good start. Use the revealed answers to spot your pattern." : "Keep practising—balance one element at a time and leave hydrogen and oxygen until later when possible.";
  scorePanel.innerHTML = `<div class="score-head"><div class="score-copy"><span>Worksheet complete</span><h2>Your score: ${score} / ${QUESTION_COUNT}</h2><p>${message}</p></div><div class="score-mark" aria-label="${percentage} percent">${percentage}%</div></div><div class="score-actions"><button class="new-score-button" type="button" id="score-new-sheet">Generate another worksheet</button></div>`;
  scorePanel.hidden = false;
  document.querySelector("#score-new-sheet").addEventListener("click", renderWorksheet);
  checkButton.disabled = true;
  scorePanel.scrollIntoView({ behavior: "smooth", block: "center" });
}

difficultyButtons.forEach(button => {
  button.addEventListener("click", () => {
    difficulty = button.dataset.difficulty;
    difficultyButtons.forEach(item => {
      const isActive = item === button;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });
    renderWorksheet();
  });
});

newButton.addEventListener("click", renderWorksheet);
printButton.addEventListener("click", () => window.print());
worksheetForm.addEventListener("submit", event => {
  event.preventDefault();
  checkAnswers();
});

renderWorksheet();
