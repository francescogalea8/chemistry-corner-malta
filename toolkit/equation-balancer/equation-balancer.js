const QUESTION_COUNT = 15;

const ELEMENT_SYMBOLS = new Set(
  "H He Li Be B C N O F Ne Na Mg Al Si P S Cl Ar K Ca Sc Ti V Cr Mn Fe Co Ni Cu Zn Ga Ge As Se Br Kr Rb Sr Y Zr Nb Mo Tc Ru Rh Pd Ag Cd In Sn Sb Te I Xe Cs Ba La Ce Pr Nd Pm Sm Eu Gd Tb Dy Ho Er Tm Yb Lu Hf Ta W Re Os Ir Pt Au Hg Tl Pb Bi Po At Rn Fr Ra Ac Th Pa U Np Pu Am Cm Bk Cf Es Fm Md No Lr Rf Db Sg Bh Hs Mt Ds Rg Cn Nh Fl Mc Lv Ts Og".split(" ")
);
const SUBSCRIPT_DIGITS = { "₀":"0", "₁":"1", "₂":"2", "₃":"3", "₄":"4", "₅":"5", "₆":"6", "₇":"7", "₈":"8", "₉":"9" };

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
const autoForm = document.querySelector("#auto-balance-form");
const reactantsInput = document.querySelector("#reactants-input");
const productsInput = document.querySelector("#products-input");
const autoResult = document.querySelector("#auto-balance-result");
const clearAutoButton = document.querySelector("#clear-auto-balance");
const balanceVisual = document.querySelector("#balance-visual");

let difficulty = "mixed";
let worksheet = [];
let submitted = false;

function q(left, right, coefficients, type, condition = "") {
  return { left, right, coefficients, type, condition };
}

function bigintAbs(value) {
  return value < 0n ? -value : value;
}

function bigintGcd(a, b) {
  let x = bigintAbs(a);
  let y = bigintAbs(b);
  while (y) [x, y] = [y, x % y];
  return x || 1n;
}

function bigintLcm(a, b) {
  return bigintAbs(a * b) / bigintGcd(a, b);
}

function fraction(numerator, denominator = 1n) {
  if (denominator === 0n) throw new Error("Cannot divide by zero.");
  let n = numerator;
  let d = denominator;
  if (d < 0n) { n = -n; d = -d; }
  const divisor = bigintGcd(n, d);
  return { n: n / divisor, d: d / divisor };
}

function fAdd(a, b) { return fraction(a.n * b.d + b.n * a.d, a.d * b.d); }
function fSub(a, b) { return fraction(a.n * b.d - b.n * a.d, a.d * b.d); }
function fMul(a, b) { return fraction(a.n * b.n, a.d * b.d); }
function fDiv(a, b) { return fraction(a.n * b.d, a.d * b.n); }
function fNeg(a) { return { n: -a.n, d: a.d }; }
function fZero(a) { return a.n === 0n; }

function normaliseFormula(text) {
  return text.replace(/[₀-₉]/g, digit => SUBSCRIPT_DIGITS[digit]);
}

function parsePlainFormula(formula) {
  let position = 0;

  function readNumber() {
    const start = position;
    while (/\d/.test(formula[position] || "")) position += 1;
    if (start === position) return 1;
    const value = Number(formula.slice(start, position));
    if (!Number.isSafeInteger(value) || value < 1) throw new Error("Subscripts must be positive whole numbers.");
    return value;
  }

  function readGroup(closing = "") {
    const counts = {};
    while (position < formula.length) {
      const character = formula[position];
      if (closing && character === closing) break;
      if (character === "(" || character === "[") {
        position += 1;
        const expected = character === "(" ? ")" : "]";
        const nested = readGroup(expected);
        if (formula[position] !== expected) throw new Error("Check that every bracket is closed.");
        position += 1;
        const multiplier = readNumber();
        Object.entries(nested).forEach(([element, count]) => {
          counts[element] = (counts[element] || 0) + count * multiplier;
        });
        continue;
      }
      const match = formula.slice(position).match(/^[A-Z][a-z]?/);
      if (!match) throw new Error(`I could not read “${formula}”. Use element symbols with capital letters, such as NaCl or H2SO4.`);
      const element = match[0];
      if (!ELEMENT_SYMBOLS.has(element)) throw new Error(`“${element}” is not a recognised element symbol.`);
      position += element.length;
      counts[element] = (counts[element] || 0) + readNumber();
    }
    return counts;
  }

  const result = readGroup();
  if (position !== formula.length) throw new Error("Check the brackets in the formula.");
  return result;
}

function parseFormula(rawFormula) {
  const formula = normaliseFormula(rawFormula);
  const total = {};
  formula.split(/[·.]/).forEach(part => {
    if (!part) throw new Error("Check the hydrate dot in the formula.");
    const multiplierMatch = part.match(/^\d+(?=[A-Z([])/);
    const multiplier = multiplierMatch ? Number(multiplierMatch[0]) : 1;
    const core = multiplierMatch ? part.slice(multiplierMatch[0].length) : part;
    const counts = parsePlainFormula(core);
    Object.entries(counts).forEach(([element, count]) => {
      total[element] = (total[element] || 0) + count * multiplier;
    });
  });
  return total;
}

function splitEquationSide(value, sideName) {
  if (!value.trim()) throw new Error(`Enter the ${sideName}.`);
  return value.split("+").map(item => item.trim()).filter(Boolean).map(item => {
    let compact = normaliseFormula(item).replace(/\s+/g, "");
    const coefficientMatch = compact.match(/^(\d+)(?=[A-Z(\[])/);
    const enteredCoefficient = coefficientMatch ? Number(coefficientMatch[1]) : 1;
    const stateMatch = compact.match(/\((aq|s|l|g)\)$/i);
    const state = stateMatch ? stateMatch[0].toLowerCase() : "";
    if (stateMatch) compact = compact.slice(0, -stateMatch[0].length);
    compact = compact.replace(/^\d+/, "");
    if (!compact) throw new Error(`Check the ${sideName}: one formula is missing.`);
    return { formula: compact, state, atoms: parseFormula(compact), enteredCoefficient };
  });
}

function sideAtomCounts(compounds, useBalancedCoefficients = null, coefficientOffset = 0) {
  const counts = {};
  compounds.forEach((compound, index) => {
    const multiplier = useBalancedCoefficients
      ? Number(useBalancedCoefficients[index + coefficientOffset])
      : compound.enteredCoefficient;
    Object.entries(compound.atoms).forEach(([element, count]) => {
      counts[element] = (counts[element] || 0) + count * multiplier;
    });
  });
  return counts;
}

function totalAtoms(counts) {
  return Object.values(counts).reduce((total, count) => total + count, 0);
}

function setScaleState(state, leftCount = "", rightCount = "", message = "") {
  const leftPan = balanceVisual.querySelector(".scale-pan-left");
  const rightPan = balanceVisual.querySelector(".scale-pan-right");
  const scaleMessage = balanceVisual.querySelector(".scale-message");
  balanceVisual.className = `balance-visual${state ? ` ${state}` : ""}`;
  balanceVisual.style.removeProperty("--beam-tilt");
  leftPan.dataset.count = leftCount === "" ? "" : `${leftCount} atoms`;
  rightPan.dataset.count = rightCount === "" ? "" : `${rightCount} atoms`;
  scaleMessage.textContent = message || "Atoms must match on both sides";
}

function updateLiveScale() {
  autoResult.className = "auto-result";
  autoResult.innerHTML = "<p>When ready, select <strong>Auto balance</strong> to calculate the coefficients.</p>";
  if (!reactantsInput.value.trim() || !productsInput.value.trim()) {
    setScaleState("", "", "", "Enter both sides to test the balance");
    return;
  }

  try {
    const reactants = splitEquationSide(reactantsInput.value, "reactants");
    const products = splitEquationSide(productsInput.value, "products");
    const leftCounts = sideAtomCounts(reactants);
    const rightCounts = sideAtomCounts(products);
    const elements = new Set([...Object.keys(leftCounts), ...Object.keys(rightCounts)]);
    let leftExcess = 0;
    let rightExcess = 0;
    let matches = true;
    elements.forEach(element => {
      const difference = (leftCounts[element] || 0) - (rightCounts[element] || 0);
      if (difference !== 0) matches = false;
      if (difference > 0) leftExcess += difference;
      if (difference < 0) rightExcess += -difference;
    });
    const leftTotal = totalAtoms(leftCounts);
    const rightTotal = totalAtoms(rightCounts);

    if (matches) {
      setScaleState("is-balanced", leftTotal, rightTotal, "Every element matches — balanced!");
    } else if (leftExcess > rightExcess) {
      const tilt = Math.min(9, 3 + (leftExcess - rightExcess));
      setScaleState("is-unbalanced leans-left", leftTotal, rightTotal, "Reactant side has the greater atom excess");
      balanceVisual.style.setProperty("--beam-tilt", `-${tilt}deg`);
    } else if (rightExcess > leftExcess) {
      const tilt = Math.min(9, 3 + (rightExcess - leftExcess));
      setScaleState("is-unbalanced leans-right", leftTotal, rightTotal, "Product side has the greater atom excess");
      balanceVisual.style.setProperty("--beam-tilt", `${tilt}deg`);
    } else {
      setScaleState("has-error equal-but-different", leftTotal, rightTotal, "Equal total atoms, but individual elements do not match");
    }
  } catch {
    setScaleState("", "", "", "Finish entering valid formulae to test the balance");
  }
}

function rref(matrix) {
  const result = matrix.map(row => row.map(value => fraction(BigInt(value))));
  const pivotColumns = [];
  let pivotRow = 0;
  for (let column = 0; column < result[0].length && pivotRow < result.length; column += 1) {
    const candidate = result.findIndex((row, index) => index >= pivotRow && !fZero(row[column]));
    if (candidate === -1) continue;
    [result[pivotRow], result[candidate]] = [result[candidate], result[pivotRow]];
    const pivot = result[pivotRow][column];
    result[pivotRow] = result[pivotRow].map(value => fDiv(value, pivot));
    result.forEach((row, index) => {
      if (index === pivotRow || fZero(row[column])) return;
      const factor = row[column];
      result[index] = row.map((value, cell) => fSub(value, fMul(factor, result[pivotRow][cell])));
    });
    pivotColumns.push(column);
    pivotRow += 1;
  }
  return { matrix: result, pivotColumns };
}

function integerNullVector(matrix) {
  const { matrix: reduced, pivotColumns } = rref(matrix);
  const columnCount = matrix[0].length;
  const freeColumns = Array.from({ length: columnCount }, (_, index) => index).filter(index => !pivotColumns.includes(index));
  if (!freeColumns.length || freeColumns.length > 3) throw new Error("This equation does not have one clear balancing solution.");

  let best = null;
  const limit = freeColumns.length === 1 ? 1 : 12;

  function testAssignment(assignments) {
    const vector = Array.from({ length: columnCount }, () => fraction(0n));
    freeColumns.forEach((column, index) => { vector[column] = fraction(BigInt(assignments[index])); });
    for (let row = pivotColumns.length - 1; row >= 0; row -= 1) {
      const pivotColumn = pivotColumns[row];
      let sum = fraction(0n);
      for (let column = pivotColumn + 1; column < columnCount; column += 1) {
        sum = fAdd(sum, fMul(reduced[row][column], vector[column]));
      }
      vector[pivotColumn] = fNeg(sum);
    }

    const commonDenominator = vector.reduce((current, value) => bigintLcm(current, value.d), 1n);
    let integers = vector.map(value => value.n * (commonDenominator / value.d));
    if (integers.every(value => value < 0n)) integers = integers.map(value => -value);
    if (!integers.every(value => value > 0n)) return;
    const commonDivisor = integers.reduce((current, value) => bigintGcd(current, value));
    integers = integers.map(value => value / commonDivisor);
    if (integers.some(value => value > 999n)) return;
    const score = integers.reduce((total, value) => total + value, 0n);
    if (!best || score < best.score) best = { values: integers, score };
  }

  function search(assignments = []) {
    if (assignments.length === freeColumns.length) {
      testAssignment(assignments);
      return;
    }
    for (let value = 1; value <= limit; value += 1) search([...assignments, value]);
  }

  search();
  if (!best) throw new Error("I could not find positive whole-number coefficients for this equation.");
  return best.values;
}

function formatFormula(formula, state = "") {
  return formula.replace(/(\d+)/g, "<sub>$1</sub>") + (state ? ` <span class="state-symbol">${state}</span>` : "");
}

function createBalancedEquation(reactants, products, coefficients) {
  const compounds = [...reactants, ...products];
  const formatted = compounds.map((compound, index) => {
    const coefficient = coefficients[index] === 1n ? "" : coefficients[index].toString();
    return `${coefficient}${formatFormula(compound.formula, compound.state)}`;
  });
  return `${formatted.slice(0, reactants.length).join(' <span class="result-plus">+</span> ')} <span class="result-arrow">→</span> ${formatted.slice(reactants.length).join(' <span class="result-plus">+</span> ')}`;
}

function balanceTypedEquation() {
  try {
    const reactants = splitEquationSide(reactantsInput.value, "reactants");
    const products = splitEquationSide(productsInput.value, "products");
    if (reactants.length + products.length < 3) throw new Error("Enter at least two reactants or two products.");

    const reactantElements = new Set(reactants.flatMap(compound => Object.keys(compound.atoms)));
    const productElements = new Set(products.flatMap(compound => Object.keys(compound.atoms)));
    const missingFromProducts = [...reactantElements].filter(element => !productElements.has(element));
    const missingFromReactants = [...productElements].filter(element => !reactantElements.has(element));
    if (missingFromProducts.length || missingFromReactants.length) {
      const details = [
        missingFromProducts.length ? `missing from products: ${missingFromProducts.join(", ")}` : "",
        missingFromReactants.length ? `missing from reactants: ${missingFromReactants.join(", ")}` : ""
      ].filter(Boolean).join("; ");
      throw new Error(`The same elements must appear on both sides (${details}).`);
    }

    const elements = [...reactantElements].sort();
    const allCompounds = [...reactants, ...products];
    const matrix = elements.map(element => allCompounds.map((compound, index) => {
      const count = compound.atoms[element] || 0;
      return index < reactants.length ? count : -count;
    }));
    const coefficients = integerNullVector(matrix);
    const atomRows = elements.map(element => {
      const leftTotal = reactants.reduce((sum, compound, index) => sum + BigInt(compound.atoms[element] || 0) * coefficients[index], 0n);
      const rightTotal = products.reduce((sum, compound, index) => sum + BigInt(compound.atoms[element] || 0) * coefficients[index + reactants.length], 0n);
      return `<span><b>${element}</b> ${leftTotal.toString()} = ${rightTotal.toString()}</span>`;
    }).join("");

    const balancedLeftCounts = sideAtomCounts(reactants, coefficients, 0);
    const balancedRightCounts = sideAtomCounts(products, coefficients, reactants.length);
    autoResult.className = "auto-result is-success";
    autoResult.innerHTML = `<span class="auto-result-label">Balanced equation</span><div class="balanced-output">${createBalancedEquation(reactants, products, coefficients)}</div><div class="atom-checks" aria-label="Atom counts on each side">${atomRows}</div><p>These are the smallest possible whole-number coefficients.</p>`;
    setScaleState("is-balanced", totalAtoms(balancedLeftCounts), totalAtoms(balancedRightCounts), "Every element matches — balanced!");
  } catch (error) {
    autoResult.className = "auto-result is-error";
    autoResult.innerHTML = `<strong>Check the equation</strong><p>${error.message}</p>`;
    setScaleState("has-error", "", "", "The equation cannot be balanced as entered");
  }
}

function clearTypedEquation() {
  autoForm.reset();
  autoResult.className = "auto-result";
  autoResult.innerHTML = "<p>Enter both sides of an equation, then select <strong>Auto balance</strong>.</p>";
  setScaleState("", "", "", "Enter both sides to test the balance");
  reactantsInput.focus();
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
autoForm.addEventListener("submit", event => {
  event.preventDefault();
  balanceTypedEquation();
});
clearAutoButton.addEventListener("click", clearTypedEquation);
reactantsInput.addEventListener("input", updateLiveScale);
productsInput.addEventListener("input", updateLiveScale);
document.querySelectorAll("[data-reactants][data-products]").forEach(button => {
  button.addEventListener("click", () => {
    reactantsInput.value = button.dataset.reactants;
    productsInput.value = button.dataset.products;
    updateLiveScale();
  });
});

renderWorksheet();
