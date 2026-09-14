const MASS_QUESTION_COUNT = 15;

const massPracticeBank = {
  easy: [
    ['RAM','H'],['RAM','C'],['RAM','N'],['RAM','O'],['RAM','Na'],['RAM','Mg'],['RAM','Al'],['RAM','S'],['RAM','Cl'],['RAM','K'],['RAM','Ca'],['RAM','Fe'],['RAM','Cu'],['RAM','Zn'],['RAM','Br'],['RAM','I'],
    ['RMM','H2'],['RMM','O2'],['RMM','N2'],['RMM','Cl2'],['RMM','H2O'],['RMM','CO2'],['RMM','NH3'],['RMM','CH4'],
    ['RFM','NaCl'],['RFM','MgO'],['RFM','CaO'],['RFM','KCl'],['RFM','Na2O'],['RFM','MgCl2'],['RFM','CaCl2'],['RFM','Al2O3']
  ],
  medium: [
    ['RMM','H2SO4'],['RMM','HNO3'],['RMM','C2H6'],['RMM','C3H8'],['RMM','C2H5OH'],['RMM','CH3COOH'],['RMM','P2O5'],['RMM','N2O5'],['RMM','C4H10'],['RMM','H2O2'],
    ['RFM','Ca(OH)2'],['RFM','Na2CO3'],['RFM','Mg(NO3)2'],['RFM','Al2(SO4)3'],['RFM','NH4Cl'],['RFM','(NH4)2SO4'],['RFM','Fe2O3'],['RFM','CuSO4'],['RFM','Ca3(PO4)2'],['RFM','Pb(NO3)2'],['RFM','Fe(OH)3'],['RFM','Na3PO4']
  ],
  hard: [
    ['RMM','C6H12O6'],['RMM','C12H22O11'],['RMM','C8H18'],['RMM','C7H6O3'],['RMM','C6H6'],['RMM','C2H4Cl2'],['RMM','P4O10'],['RMM','C6H5COOH'],
    ['RFM','CuSO4·5H2O'],['RFM','MgSO4·7H2O'],['RFM','Na2CO3·10H2O'],['RFM','FeSO4·7H2O'],['RFM','Al2(SO4)3·18H2O'],['RFM','K4Fe(CN)6'],['RFM','Ca10(PO4)6(OH)2'],['RFM','(NH4)2Fe(SO4)2·6H2O'],['RFM','KAl(SO4)2·12H2O'],['RFM','Fe2(SO4)3'],['RFM','Cu(NO3)2·3H2O'],['RFM','Ba(OH)2·8H2O']
  ]
};

const massPracticeList = document.querySelector('#mass-practice-list');
const massPracticeForm = document.querySelector('#mass-practice-form');
const massPracticeSubmit = document.querySelector('#mass-practice-submit');
const massPracticeProgress = document.querySelector('#mass-practice-progress');
const massPracticeBar = document.querySelector('#mass-practice-bar');
const massPracticeScore = document.querySelector('#mass-practice-score');
const massPracticeNew = document.querySelector('#mass-practice-new');
const massPracticePrint = document.querySelector('#mass-practice-print');
const massDifficultyButtons = [...document.querySelectorAll('[data-mass-difficulty]')];

let massPracticeDifficulty = 'mixed';
let massWorksheet = [];
let massWorksheetSubmitted = false;

function shuffledMassQuestions(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swap]] = [copy[swap], copy[index]];
  }
  return copy;
}

function questionFromTuple(tuple, level) {
  const [type, formula] = tuple;
  const calculation = calculateRelativeMass(formula, type);
  return { type, formula, level, calculation, answer: calculation.total };
}

function generateMassWorksheet(level) {
  if (level === 'mixed') {
    return [
      ...shuffledMassQuestions(massPracticeBank.easy).slice(0, 5).map(item => questionFromTuple(item, 'Easy')),
      ...shuffledMassQuestions(massPracticeBank.medium).slice(0, 5).map(item => questionFromTuple(item, 'Medium')),
      ...shuffledMassQuestions(massPracticeBank.hard).slice(0, 5).map(item => questionFromTuple(item, 'Hard'))
    ];
  }
  const label = level[0].toUpperCase() + level.slice(1);
  return shuffledMassQuestions(massPracticeBank[level]).slice(0, MASS_QUESTION_COUNT).map(item => questionFromTuple(item, label));
}

function massWorking(question) {
  const parts = question.calculation.rows.map(row => `${row.count} × ${formatMass(row.atomicMass)}`);
  return `${parts.join(' + ')} = ${formatMass(question.answer)}`;
}

function renderMassWorksheet() {
  massWorksheet = generateMassWorksheet(massPracticeDifficulty);
  massWorksheetSubmitted = false;
  massPracticeScore.hidden = true;
  massPracticeScore.innerHTML = '';
  massPracticeList.innerHTML = massWorksheet.map((question, index) => `
    <li class="mass-practice-question" data-mass-question="${index}">
      <span class="mass-question-number">${index + 1}</span>
      <div class="mass-question-copy">
        <span class="mass-question-type">${question.type}</span>
        <strong>Calculate the ${question.type} of <span class="question-formula">${displayFormula(question.formula)}</span></strong>
        <small>${question.level}</small>
      </div>
      <label class="mass-answer-label">
        <span class="sr-only">Answer for question ${index + 1}</span>
        <input class="mass-practice-answer" type="number" inputmode="decimal" min="0" step="0.1" data-mass-answer="${index}" aria-label="Answer for question ${index + 1}">
      </label>
    </li>
  `).join('');
  massPracticeList.querySelectorAll('.mass-practice-answer').forEach(input => input.addEventListener('input', updateMassPracticeProgress));
  updateMassPracticeProgress();
}

function updateMassPracticeProgress() {
  const answers = [...massPracticeList.querySelectorAll('.mass-practice-answer')];
  const completed = answers.filter(input => input.value.trim() !== '' && Number.isFinite(Number(input.value))).length;
  massPracticeProgress.textContent = `${completed} of ${MASS_QUESTION_COUNT} completed`;
  massPracticeBar.style.width = `${(completed / MASS_QUESTION_COUNT) * 100}%`;
  massPracticeSubmit.disabled = completed !== MASS_QUESTION_COUNT || massWorksheetSubmitted;
}

function markMassWorksheet() {
  if (massWorksheetSubmitted) return;
  massWorksheetSubmitted = true;
  let score = 0;

  massWorksheet.forEach((question, index) => {
    const card = massPracticeList.querySelector(`[data-mass-question="${index}"]`);
    const input = card.querySelector('.mass-practice-answer');
    const answer = Number(input.value);
    const correct = Math.abs(answer - question.answer) < 0.05;
    input.disabled = true;
    card.classList.add(correct ? 'is-correct' : 'is-incorrect');
    if (correct) score += 1;
    card.insertAdjacentHTML('beforeend', `
      <div class="mass-answer-reveal">
        <strong>${correct ? 'Correct' : `Correct answer: ${formatMass(question.answer)}`}</strong>
        <span>${massWorking(question)}</span>
      </div>
    `);
  });

  const percentage = Math.round((score / MASS_QUESTION_COUNT) * 100);
  const message = percentage === 100
    ? 'Excellent—every relative mass is correct.'
    : percentage >= 73
      ? 'Strong work. Review the calculations you missed.'
      : percentage >= 47
        ? 'Good progress. Follow each revealed working carefully.'
        : 'Keep practising: multiply each RAM by the number of atoms, then add the contributions.';

  massPracticeScore.innerHTML = `
    <div>
      <span>Practice complete</span>
      <h3>Your score: ${score} / ${MASS_QUESTION_COUNT}</h3>
      <p>${message}</p>
    </div>
    <strong class="mass-score-percent">${percentage}%</strong>
  `;
  massPracticeScore.hidden = false;
  massPracticeSubmit.disabled = true;
  massPracticeScore.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

massDifficultyButtons.forEach(button => {
  button.addEventListener('click', () => {
    massPracticeDifficulty = button.dataset.massDifficulty;
    massDifficultyButtons.forEach(item => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    renderMassWorksheet();
  });
});

massPracticeForm?.addEventListener('submit', event => {
  event.preventDefault();
  markMassWorksheet();
});
massPracticeNew?.addEventListener('click', renderMassWorksheet);
massPracticePrint?.addEventListener('click', () => window.print());

if (massPracticeList) renderMassWorksheet();
