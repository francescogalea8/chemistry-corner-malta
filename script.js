const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');

toggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();

const enquiryForm = document.querySelector('#enquiry-form');
const formStatus = document.querySelector('#form-status');

enquiryForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  const data = new FormData(enquiryForm);
  const firstName = data.get('firstName').trim();
  const surname = data.get('surname').trim();
  const schoolYear = data.get('schoolYear');
  const question = data.get('question').trim();

  const message = [
    'Hello Chemistry Corner Malta!',
    '',
    `My name is ${firstName} ${surname}.`,
    `Student year/pathway: ${schoolYear}`,
    '',
    `Enquiry: ${question}`
  ].join('\n');

  const url = `https://wa.me/35679637563?text=${encodeURIComponent(message)}`;
  formStatus.textContent = 'Opening WhatsApp with your enquiry…';
  window.open(url, '_blank', 'noopener,noreferrer');
});

const atomicMasses = Object.freeze({
  H: { name: 'Hydrogen', mass: 1 }, He: { name: 'Helium', mass: 4 },
  Li: { name: 'Lithium', mass: 7 }, Be: { name: 'Beryllium', mass: 9 },
  B: { name: 'Boron', mass: 11 }, C: { name: 'Carbon', mass: 12 },
  N: { name: 'Nitrogen', mass: 14 }, O: { name: 'Oxygen', mass: 16 },
  F: { name: 'Fluorine', mass: 19 }, Ne: { name: 'Neon', mass: 20 },
  Na: { name: 'Sodium', mass: 23 }, Mg: { name: 'Magnesium', mass: 24 },
  Al: { name: 'Aluminium', mass: 27 }, Si: { name: 'Silicon', mass: 28 },
  P: { name: 'Phosphorus', mass: 31 }, S: { name: 'Sulfur', mass: 32 },
  Cl: { name: 'Chlorine', mass: 35.5 }, Ar: { name: 'Argon', mass: 40 },
  K: { name: 'Potassium', mass: 39 }, Ca: { name: 'Calcium', mass: 40 },
  Sc: { name: 'Scandium', mass: 45 }, Ti: { name: 'Titanium', mass: 48 },
  V: { name: 'Vanadium', mass: 51 }, Cr: { name: 'Chromium', mass: 52 },
  Mn: { name: 'Manganese', mass: 55 }, Fe: { name: 'Iron', mass: 56 },
  Co: { name: 'Cobalt', mass: 59 }, Ni: { name: 'Nickel', mass: 59 },
  Cu: { name: 'Copper', mass: 63.5 }, Zn: { name: 'Zinc', mass: 65 },
  Ga: { name: 'Gallium', mass: 70 }, Ge: { name: 'Germanium', mass: 73 },
  As: { name: 'Arsenic', mass: 75 }, Se: { name: 'Selenium', mass: 79 },
  Br: { name: 'Bromine', mass: 80 }, Kr: { name: 'Krypton', mass: 84 },
  Rb: { name: 'Rubidium', mass: 85.5 }, Sr: { name: 'Strontium', mass: 88 },
  Zr: { name: 'Zirconium', mass: 91 }, Mo: { name: 'Molybdenum', mass: 96 },
  Ag: { name: 'Silver', mass: 108 }, Cd: { name: 'Cadmium', mass: 112 },
  Sn: { name: 'Tin', mass: 119 }, I: { name: 'Iodine', mass: 127 },
  Xe: { name: 'Xenon', mass: 131 }, Cs: { name: 'Caesium', mass: 133 },
  Ba: { name: 'Barium', mass: 137 }, W: { name: 'Tungsten', mass: 184 },
  Pt: { name: 'Platinum', mass: 195 }, Au: { name: 'Gold', mass: 197 },
  Hg: { name: 'Mercury', mass: 201 }, Pb: { name: 'Lead', mass: 207 },
  Ra: { name: 'Radium', mass: 226 }, U: { name: 'Uranium', mass: 238 }
});

const massTypeDetails = Object.freeze({
  RAM: {
    name: 'Relative atomic mass',
    placeholder: 'For example: Fe',
    examples: ['Fe', 'Cl', 'Mg'],
    explanation: 'Relative atomic mass is the weighted mean mass of an atom of an element. Enter one element symbol, such as Fe, Cl or Mg.'
  },
  RMM: {
    name: 'Relative molecular mass',
    placeholder: 'For example: H2O',
    examples: ['H2O', 'CO2', 'H2SO4', 'C6H12O6'],
    explanation: 'Relative molecular mass is the total of the RAM values in one molecule. Use it for molecular covalent substances such as H2O and CO2.'
  },
  RFM: {
    name: 'Relative formula mass',
    placeholder: 'For example: NaCl',
    examples: ['NaCl', 'Ca(OH)2', 'Al2(SO4)3', 'CuSO4·5H2O'],
    explanation: 'Relative formula mass is the total of the RAM values in one formula unit. Use it for ionic compounds: the formula unit shows the simplest ratio of oppositely charged ions.'
  }
});

const metalSymbols = new Set([
  'Li', 'Be', 'Na', 'Mg', 'Al', 'K', 'Ca', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn',
  'Ga', 'Rb', 'Sr', 'Zr', 'Mo', 'Ag', 'Cd', 'Sn', 'Cs', 'Ba', 'W', 'Pt', 'Au', 'Hg', 'Pb', 'Ra', 'U'
]);

class FormulaTypeError extends Error {
  constructor(expectedType, message) {
    super(message);
    this.expectedType = expectedType;
  }
}

const subscriptToNumber = Object.freeze({ '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4', '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9' });
const numberToSubscript = Object.freeze({ '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄', '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉' });

function normaliseFormula(value) {
  return value.trim().replace(/\s+/g, '').replace(/[₀-₉]/g, (digit) => subscriptToNumber[digit]);
}

function displayFormula(value) {
  return value.replace(/\d/g, (digit) => numberToSubscript[digit]);
}

function readNumber(formula, state) {
  const start = state.index;
  while (state.index < formula.length && /\d/.test(formula[state.index])) state.index += 1;
  if (start === state.index) return 1;
  const value = Number.parseInt(formula.slice(start, state.index), 10);
  if (!Number.isInteger(value) || value < 1) throw new Error('Every subscript must be a positive whole number.');
  return value;
}

function addElementCounts(target, source, multiplier = 1) {
  source.forEach((count, symbol) => target.set(symbol, (target.get(symbol) || 0) + count * multiplier));
}

function parseFormulaGroup(formula, state, closingBracket = null) {
  const counts = new Map();

  while (state.index < formula.length) {
    const character = formula[state.index];

    if (character === '(' || character === '[') {
      const expectedClosing = character === '(' ? ')' : ']';
      state.index += 1;
      const innerCounts = parseFormulaGroup(formula, state, expectedClosing);
      if (formula[state.index] !== expectedClosing) throw new Error(`A ${character} bracket has not been closed.`);
      state.index += 1;
      addElementCounts(counts, innerCounts, readNumber(formula, state));
      continue;
    }

    if (character === ')' || character === ']') {
      if (character === closingBracket) return counts;
      throw new Error('The brackets in this formula do not match.');
    }

    if (/[A-Z]/.test(character)) {
      let symbol = character;
      state.index += 1;
      if (state.index < formula.length && /[a-z]/.test(formula[state.index])) {
        symbol += formula[state.index];
        state.index += 1;
      }
      if (!Object.prototype.hasOwnProperty.call(atomicMasses, symbol)) {
        throw new Error(`${symbol} is not recognised. Check the capital letters or try a common O Level element.`);
      }
      const count = readNumber(formula, state);
      counts.set(symbol, (counts.get(symbol) || 0) + count);
      continue;
    }

    throw new Error(`“${character}” is not valid here. Use element symbols, numbers and brackets only.`);
  }

  if (closingBracket) throw new Error(`A ${closingBracket === ')' ? '(' : '['} bracket has not been closed.`);
  return counts;
}

function parseFormulaPart(part) {
  if (!part) throw new Error('There is an empty section in this formula.');
  const leadingMatch = part.match(/^(\d+)(?=[A-Z[(])/);
  const leadingMultiplier = leadingMatch ? Number.parseInt(leadingMatch[1], 10) : 1;
  const formula = leadingMatch ? part.slice(leadingMatch[1].length) : part;
  const state = { index: 0 };
  const counts = parseFormulaGroup(formula, state);
  if (state.index !== formula.length) throw new Error('Please check the formula and its brackets.');
  if (counts.size === 0) throw new Error('Enter at least one element symbol.');
  const multipliedCounts = new Map();
  addElementCounts(multipliedCounts, counts, leadingMultiplier);
  return multipliedCounts;
}

function classifyFormula(formula, counts) {
  const entries = [...counts.entries()];
  const networkCovalentFormulae = new Set(['SiO2', 'SiC', 'BN', 'B2O3']);
  if (networkCovalentFormulae.has(formula)) return 'network-covalent';

  if (entries.length === 1) {
    const [symbol, count] = entries[0];
    if (!metalSymbols.has(symbol) && count > 1) return 'molecular-covalent';
    return 'atomic';
  }

  if (formula.includes('NH4')) return 'ionic';
  if (entries.some(([symbol]) => metalSymbols.has(symbol))) return 'ionic';
  return 'molecular-covalent';
}

function calculateRelativeMass(rawFormula, massType) {
  const formula = normaliseFormula(rawFormula);
  if (!formula) throw new Error('Enter an element symbol or chemical formula first.');
  if (!massTypeDetails[massType]) throw new Error('Choose RAM, RMM or RFM.');

  const counts = new Map();
  formula.split(/[·.]/).forEach((part) => addElementCounts(counts, parseFormulaPart(part)));

  if (massType === 'RAM') {
    const singleEntry = [...counts.entries()];
    if (singleEntry.length !== 1 || singleEntry[0][1] !== 1 || !/^[A-Z][a-z]?$/.test(formula)) {
      throw new Error('For RAM, enter one element symbol only, such as Fe, Cl or Mg.');
    }
  } else {
    const formulaType = classifyFormula(formula, counts);
    const shownFormula = displayFormula(formula);

    if (formulaType === 'atomic') {
      throw new FormulaTypeError('RAM', `${shownFormula} is being treated as an element rather than a compound. Use RAM, which describes the relative mass of an atom of an element.`);
    }
    if (formulaType === 'network-covalent') {
      throw new FormulaTypeError(null, `${shownFormula} is a giant covalent substance and does not consist of separate molecules or oppositely charged ions. This calculator currently checks RMM for molecular covalent substances and RFM for ionic compounds.`);
    }
    if (massType === 'RFM' && formulaType === 'molecular-covalent') {
      throw new FormulaTypeError('RMM', `${shownFormula} contains only non-metals, so it is treated as a molecular covalent substance. Use RMM: relative molecular mass is the total of the RAM values in one molecule.`);
    }
    if (massType === 'RMM' && formulaType === 'ionic') {
      throw new FormulaTypeError('RFM', `${shownFormula} is treated as an ionic compound because it contains a metal or the ammonium ion. Use RFM: relative formula mass is the total of the RAM values in one formula unit. That formula unit shows the simplest ratio of oppositely charged ions.`);
    }
  }

  const rows = [...counts.entries()].map(([symbol, count]) => {
    const element = atomicMasses[symbol];
    return { symbol, name: element.name, count, atomicMass: element.mass, subtotal: count * element.mass };
  });
  const total = rows.reduce((sum, row) => sum + row.subtotal, 0);
  return { formula, rows, total };
}

function formatMass(value) {
  return Number.isInteger(value) ? String(value) : value.toFixed(1).replace(/\.0$/, '');
}

function makeElement(tagName, className, text) {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function renderMassResult(result, massType, target) {
  const heading = makeElement('div', 'result-heading');
  const headingCopy = makeElement('div');
  headingCopy.append(makeElement('span', '', massTypeDetails[massType].name));
  headingCopy.append(makeElement('h3', '', `${massType} of ${displayFormula(result.formula)}`));
  heading.append(headingCopy, makeElement('div', 'result-badge', massType));

  const table = makeElement('table', 'mass-breakdown');
  const caption = makeElement('caption', 'sr-only', `Calculation of the ${massType} of ${displayFormula(result.formula)}`);
  const tableHead = document.createElement('thead');
  const headRow = document.createElement('tr');
  ['Element', 'Number', 'Working', 'Total'].forEach((label) => headRow.append(makeElement('th', '', label)));
  tableHead.append(headRow);

  const tableBody = document.createElement('tbody');
  result.rows.forEach((row) => {
    const tr = document.createElement('tr');
    const elementCell = document.createElement('td');
    elementCell.append(makeElement('span', 'element-chip', row.symbol));
    elementCell.append(document.createTextNode(` ${row.name}`));
    tr.append(elementCell);
    tr.append(makeElement('td', '', String(row.count)));
    tr.append(makeElement('td', '', `${row.count} × ${formatMass(row.atomicMass)}`));
    tr.append(makeElement('td', '', formatMass(row.subtotal)));
    tableBody.append(tr);
  });
  table.append(caption, tableHead, tableBody);

  const total = makeElement('div', 'mass-total');
  total.append(makeElement('span', '', `${massType} = sum of all contributions`));
  total.append(makeElement('strong', '', formatMass(result.total)));
  target.replaceChildren(heading, table, total);
}

function renderMassError(message, target, expectedType = null) {
  const error = makeElement('div', 'calculator-error');
  error.append(makeElement('strong', '', expectedType || '!'));
  error.append(makeElement('h3', '', expectedType ? `Use ${expectedType} instead` : 'Check the formula'));
  error.append(makeElement('p', '', message));
  target.replaceChildren(error);
}

const massCalculator = document.querySelector('#mass-calculator');
const massType = document.querySelector('#mass-type');
const formulaInput = document.querySelector('#chemical-formula');
const massResult = document.querySelector('#mass-result');
const exampleButton = document.querySelector('#mass-example');
const massTypeGuide = document.querySelector('#mass-type-guide');
const examplePositions = { RAM: 0, RMM: 0, RFM: 0 };

function updateMassTypeGuide() {
  const selectedType = massType.value;
  const typeBadge = makeElement('span', '', selectedType);
  const explanation = makeElement('p');
  explanation.append(makeElement('strong', '', massTypeDetails[selectedType].name));
  explanation.append(document.createTextNode(` ${massTypeDetails[selectedType].explanation.replace(`${massTypeDetails[selectedType].name} `, '')}`));
  massTypeGuide.replaceChildren(typeBadge, explanation);
}

massCalculator?.addEventListener('submit', (event) => {
  event.preventDefault();
  try {
    const result = calculateRelativeMass(formulaInput.value, massType.value);
    renderMassResult(result, massType.value, massResult);
  } catch (error) {
    renderMassError(error.message, massResult, error.expectedType || null);
  }
});

massType?.addEventListener('change', () => {
  formulaInput.placeholder = massTypeDetails[massType.value].placeholder;
  formulaInput.value = '';
  updateMassTypeGuide();
  formulaInput.focus();
});

exampleButton?.addEventListener('click', () => {
  const selectedType = massType.value;
  const examples = massTypeDetails[selectedType].examples;
  const position = examplePositions[selectedType] % examples.length;
  formulaInput.value = examples[position];
  examplePositions[selectedType] += 1;
  massCalculator.requestSubmit();
});
