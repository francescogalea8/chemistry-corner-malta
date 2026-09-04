const elements = [{"n":1,"s":"H","name":"Hydrogen","ram":1.008,"period":1,"group":1,"x":1,"y":1,"category":"diatomic nonmetal","shells":[1]},{"n":2,"s":"He","name":"Helium","ram":4.0026022,"period":1,"group":18,"x":18,"y":1,"category":"noble gas","shells":[2]},{"n":3,"s":"Li","name":"Lithium","ram":6.94,"period":2,"group":1,"x":1,"y":2,"category":"alkali metal","shells":[2,1]},{"n":4,"s":"Be","name":"Beryllium","ram":9.01218315,"period":2,"group":2,"x":2,"y":2,"category":"alkaline earth metal","shells":[2,2]},{"n":5,"s":"B","name":"Boron","ram":10.81,"period":2,"group":13,"x":13,"y":2,"category":"metalloid","shells":[2,3]},{"n":6,"s":"C","name":"Carbon","ram":12.011,"period":2,"group":14,"x":14,"y":2,"category":"polyatomic nonmetal","shells":[2,4]},{"n":7,"s":"N","name":"Nitrogen","ram":14.007,"period":2,"group":15,"x":15,"y":2,"category":"diatomic nonmetal","shells":[2,5]},{"n":8,"s":"O","name":"Oxygen","ram":15.999,"period":2,"group":16,"x":16,"y":2,"category":"diatomic nonmetal","shells":[2,6]},{"n":9,"s":"F","name":"Fluorine","ram":18.9984031636,"period":2,"group":17,"x":17,"y":2,"category":"diatomic nonmetal","shells":[2,7]},{"n":10,"s":"Ne","name":"Neon","ram":20.17976,"period":2,"group":18,"x":18,"y":2,"category":"noble gas","shells":[2,8]},{"n":11,"s":"Na","name":"Sodium","ram":22.989769282,"period":3,"group":1,"x":1,"y":3,"category":"alkali metal","shells":[2,8,1]},{"n":12,"s":"Mg","name":"Magnesium","ram":24.305,"period":3,"group":2,"x":2,"y":3,"category":"alkaline earth metal","shells":[2,8,2]},{"n":13,"s":"Al","name":"Aluminium","ram":26.98153857,"period":3,"group":13,"x":13,"y":3,"category":"post-transition metal","shells":[2,8,3]},{"n":14,"s":"Si","name":"Silicon","ram":28.085,"period":3,"group":14,"x":14,"y":3,"category":"metalloid","shells":[2,8,4]},{"n":15,"s":"P","name":"Phosphorus","ram":30.9737619985,"period":3,"group":15,"x":15,"y":3,"category":"polyatomic nonmetal","shells":[2,8,5]},{"n":16,"s":"S","name":"Sulfur","ram":32.06,"period":3,"group":16,"x":16,"y":3,"category":"polyatomic nonmetal","shells":[2,8,6]},{"n":17,"s":"Cl","name":"Chlorine","ram":35.45,"period":3,"group":17,"x":17,"y":3,"category":"diatomic nonmetal","shells":[2,8,7]},{"n":18,"s":"Ar","name":"Argon","ram":39.9481,"period":3,"group":18,"x":18,"y":3,"category":"noble gas","shells":[2,8,8]},{"n":19,"s":"K","name":"Potassium","ram":39.09831,"period":4,"group":1,"x":1,"y":4,"category":"alkali metal","shells":[2,8,8,1]},{"n":20,"s":"Ca","name":"Calcium","ram":40.0784,"period":4,"group":2,"x":2,"y":4,"category":"alkaline earth metal","shells":[2,8,8,2]},{"n":21,"s":"Sc","name":"Scandium","ram":44.9559085,"period":4,"group":3,"x":3,"y":4,"category":"transition metal","shells":[2,8,9,2]},{"n":22,"s":"Ti","name":"Titanium","ram":47.8671,"period":4,"group":4,"x":4,"y":4,"category":"transition metal","shells":[2,8,10,2]},{"n":23,"s":"V","name":"Vanadium","ram":50.94151,"period":4,"group":5,"x":5,"y":4,"category":"transition metal","shells":[2,8,11,2]},{"n":24,"s":"Cr","name":"Chromium","ram":51.99616,"period":4,"group":6,"x":6,"y":4,"category":"transition metal","shells":[2,8,13,1]},{"n":25,"s":"Mn","name":"Manganese","ram":54.9380443,"period":4,"group":7,"x":7,"y":4,"category":"transition metal","shells":[2,8,13,2]},{"n":26,"s":"Fe","name":"Iron","ram":55.8452,"period":4,"group":8,"x":8,"y":4,"category":"transition metal","shells":[2,8,14,2]},{"n":27,"s":"Co","name":"Cobalt","ram":58.9331944,"period":4,"group":9,"x":9,"y":4,"category":"transition metal","shells":[2,8,15,2]},{"n":28,"s":"Ni","name":"Nickel","ram":58.69344,"period":4,"group":10,"x":10,"y":4,"category":"transition metal","shells":[2,8,16,2]},{"n":29,"s":"Cu","name":"Copper","ram":63.5463,"period":4,"group":11,"x":11,"y":4,"category":"transition metal","shells":[2,8,18,1]},{"n":30,"s":"Zn","name":"Zinc","ram":65.382,"period":4,"group":12,"x":12,"y":4,"category":"transition metal","shells":[2,8,18,2]},{"n":31,"s":"Ga","name":"Gallium","ram":69.7231,"period":4,"group":13,"x":13,"y":4,"category":"post-transition metal","shells":[2,8,18,3]},{"n":32,"s":"Ge","name":"Germanium","ram":72.6308,"period":4,"group":14,"x":14,"y":4,"category":"metalloid","shells":[2,8,18,4]},{"n":33,"s":"As","name":"Arsenic","ram":74.9215956,"period":4,"group":15,"x":15,"y":4,"category":"metalloid","shells":[2,8,18,5]},{"n":34,"s":"Se","name":"Selenium","ram":78.9718,"period":4,"group":16,"x":16,"y":4,"category":"polyatomic nonmetal","shells":[2,8,18,6]},{"n":35,"s":"Br","name":"Bromine","ram":79.904,"period":4,"group":17,"x":17,"y":4,"category":"diatomic nonmetal","shells":[2,8,18,7]},{"n":36,"s":"Kr","name":"Krypton","ram":83.7982,"period":4,"group":18,"x":18,"y":4,"category":"noble gas","shells":[2,8,18,8]},{"n":37,"s":"Rb","name":"Rubidium","ram":85.46783,"period":5,"group":1,"x":1,"y":5,"category":"alkali metal","shells":[2,8,18,8,1]},{"n":38,"s":"Sr","name":"Strontium","ram":87.621,"period":5,"group":2,"x":2,"y":5,"category":"alkaline earth metal","shells":[2,8,18,8,2]},{"n":39,"s":"Y","name":"Yttrium","ram":88.905842,"period":5,"group":3,"x":3,"y":5,"category":"transition metal","shells":[2,8,18,9,2]},{"n":40,"s":"Zr","name":"Zirconium","ram":91.2242,"period":5,"group":4,"x":4,"y":5,"category":"transition metal","shells":[2,8,18,10,2]},{"n":41,"s":"Nb","name":"Niobium","ram":92.906372,"period":5,"group":5,"x":5,"y":5,"category":"transition metal","shells":[2,8,18,12,1]},{"n":42,"s":"Mo","name":"Molybdenum","ram":95.951,"period":5,"group":6,"x":6,"y":5,"category":"transition metal","shells":[2,8,18,13,1]},{"n":43,"s":"Tc","name":"Technetium","ram":98,"period":5,"group":7,"x":7,"y":5,"category":"transition metal","shells":[2,8,18,13,2]},{"n":44,"s":"Ru","name":"Ruthenium","ram":101.072,"period":5,"group":8,"x":8,"y":5,"category":"transition metal","shells":[2,8,18,15,1]},{"n":45,"s":"Rh","name":"Rhodium","ram":102.905502,"period":5,"group":9,"x":9,"y":5,"category":"transition metal","shells":[2,8,18,16,1]},{"n":46,"s":"Pd","name":"Palladium","ram":106.421,"period":5,"group":10,"x":10,"y":5,"category":"transition metal","shells":[2,8,18,18]},{"n":47,"s":"Ag","name":"Silver","ram":107.86822,"period":5,"group":11,"x":11,"y":5,"category":"transition metal","shells":[2,8,18,18,1]},{"n":48,"s":"Cd","name":"Cadmium","ram":112.4144,"period":5,"group":12,"x":12,"y":5,"category":"transition metal","shells":[2,8,18,18,2]},{"n":49,"s":"In","name":"Indium","ram":114.8181,"period":5,"group":13,"x":13,"y":5,"category":"post-transition metal","shells":[2,8,18,18,3]},{"n":50,"s":"Sn","name":"Tin","ram":118.7107,"period":5,"group":14,"x":14,"y":5,"category":"post-transition metal","shells":[2,8,18,18,4]},{"n":51,"s":"Sb","name":"Antimony","ram":121.7601,"period":5,"group":15,"x":15,"y":5,"category":"metalloid","shells":[2,8,18,18,5]},{"n":52,"s":"Te","name":"Tellurium","ram":127.603,"period":5,"group":16,"x":16,"y":5,"category":"metalloid","shells":[2,8,18,18,6]},{"n":53,"s":"I","name":"Iodine","ram":126.904473,"period":5,"group":17,"x":17,"y":5,"category":"diatomic nonmetal","shells":[2,8,18,18,7]},{"n":54,"s":"Xe","name":"Xenon","ram":131.2936,"period":5,"group":18,"x":18,"y":5,"category":"noble gas","shells":[2,8,18,18,8]},{"n":55,"s":"Cs","name":"Caesium","ram":132.905451966,"period":6,"group":1,"x":1,"y":6,"category":"alkali metal","shells":[2,8,18,18,8,1]},{"n":56,"s":"Ba","name":"Barium","ram":137.3277,"period":6,"group":2,"x":2,"y":6,"category":"alkaline earth metal","shells":[2,8,18,18,8,2]},{"n":57,"s":"La","name":"Lanthanum","ram":138.905477,"period":6,"group":3,"x":3,"y":9,"category":"lanthanide","shells":[2,8,18,18,9,2]},{"n":58,"s":"Ce","name":"Cerium","ram":140.1161,"period":6,"group":3,"x":4,"y":9,"category":"lanthanide","shells":[2,8,18,19,9,2]},{"n":59,"s":"Pr","name":"Praseodymium","ram":140.907662,"period":6,"group":3,"x":5,"y":9,"category":"lanthanide","shells":[2,8,18,21,8,2]},{"n":60,"s":"Nd","name":"Neodymium","ram":144.2423,"period":6,"group":3,"x":6,"y":9,"category":"lanthanide","shells":[2,8,18,22,8,2]},{"n":61,"s":"Pm","name":"Promethium","ram":145,"period":6,"group":3,"x":7,"y":9,"category":"lanthanide","shells":[2,8,18,23,8,2]},{"n":62,"s":"Sm","name":"Samarium","ram":150.362,"period":6,"group":3,"x":8,"y":9,"category":"lanthanide","shells":[2,8,18,24,8,2]},{"n":63,"s":"Eu","name":"Europium","ram":151.9641,"period":6,"group":3,"x":9,"y":9,"category":"lanthanide","shells":[2,8,18,25,8,2]},{"n":64,"s":"Gd","name":"Gadolinium","ram":157.253,"period":6,"group":3,"x":10,"y":9,"category":"lanthanide","shells":[2,8,18,25,9,2]},{"n":65,"s":"Tb","name":"Terbium","ram":158.925352,"period":6,"group":3,"x":11,"y":9,"category":"lanthanide","shells":[2,8,18,27,8,2]},{"n":66,"s":"Dy","name":"Dysprosium","ram":162.5001,"period":6,"group":3,"x":12,"y":9,"category":"lanthanide","shells":[2,8,18,28,8,2]},{"n":67,"s":"Ho","name":"Holmium","ram":164.930332,"period":6,"group":3,"x":13,"y":9,"category":"lanthanide","shells":[2,8,18,29,8,2]},{"n":68,"s":"Er","name":"Erbium","ram":167.2593,"period":6,"group":3,"x":14,"y":9,"category":"lanthanide","shells":[2,8,18,30,8,2]},{"n":69,"s":"Tm","name":"Thulium","ram":168.934222,"period":6,"group":3,"x":15,"y":9,"category":"lanthanide","shells":[2,8,18,31,8,2]},{"n":70,"s":"Yb","name":"Ytterbium","ram":173.0451,"period":6,"group":3,"x":16,"y":9,"category":"lanthanide","shells":[2,8,18,32,8,2]},{"n":71,"s":"Lu","name":"Lutetium","ram":174.96681,"period":6,"group":3,"x":17,"y":9,"category":"lanthanide","shells":[2,8,18,32,9,2]},{"n":72,"s":"Hf","name":"Hafnium","ram":178.492,"period":6,"group":4,"x":4,"y":6,"category":"transition metal","shells":[2,8,18,32,10,2]},{"n":73,"s":"Ta","name":"Tantalum","ram":180.947882,"period":6,"group":5,"x":5,"y":6,"category":"transition metal","shells":[2,8,18,32,11,2]},{"n":74,"s":"W","name":"Tungsten","ram":183.841,"period":6,"group":6,"x":6,"y":6,"category":"transition metal","shells":[2,8,18,32,12,2]},{"n":75,"s":"Re","name":"Rhenium","ram":186.2071,"period":6,"group":7,"x":7,"y":6,"category":"transition metal","shells":[2,8,18,32,13,2]},{"n":76,"s":"Os","name":"Osmium","ram":190.233,"period":6,"group":8,"x":8,"y":6,"category":"transition metal","shells":[2,8,18,32,14,2]},{"n":77,"s":"Ir","name":"Iridium","ram":192.2173,"period":6,"group":9,"x":9,"y":6,"category":"transition metal","shells":[2,8,18,32,15,2]},{"n":78,"s":"Pt","name":"Platinum","ram":195.0849,"period":6,"group":10,"x":10,"y":6,"category":"transition metal","shells":[2,8,18,32,17,1]},{"n":79,"s":"Au","name":"Gold","ram":196.9665695,"period":6,"group":11,"x":11,"y":6,"category":"transition metal","shells":[2,8,18,32,18,1]},{"n":80,"s":"Hg","name":"Mercury","ram":200.5923,"period":6,"group":12,"x":12,"y":6,"category":"transition metal","shells":[2,8,18,32,18,2]},{"n":81,"s":"Tl","name":"Thallium","ram":204.38,"period":6,"group":13,"x":13,"y":6,"category":"post-transition metal","shells":[2,8,18,32,18,3]},{"n":82,"s":"Pb","name":"Lead","ram":207.21,"period":6,"group":14,"x":14,"y":6,"category":"post-transition metal","shells":[2,8,18,32,18,4]},{"n":83,"s":"Bi","name":"Bismuth","ram":208.980401,"period":6,"group":15,"x":15,"y":6,"category":"post-transition metal","shells":[2,8,18,32,18,5]},{"n":84,"s":"Po","name":"Polonium","ram":209,"period":6,"group":16,"x":16,"y":6,"category":"post-transition metal","shells":[2,8,18,32,18,6]},{"n":85,"s":"At","name":"Astatine","ram":210,"period":6,"group":17,"x":17,"y":6,"category":"metalloid","shells":[2,8,18,32,18,7]},{"n":86,"s":"Rn","name":"Radon","ram":222,"period":6,"group":18,"x":18,"y":6,"category":"noble gas","shells":[2,8,18,32,18,8]},{"n":87,"s":"Fr","name":"Francium","ram":223,"period":7,"group":1,"x":1,"y":7,"category":"alkali metal","shells":[2,8,18,32,18,8,1]},{"n":88,"s":"Ra","name":"Radium","ram":226,"period":7,"group":2,"x":2,"y":7,"category":"alkaline earth metal","shells":[2,8,18,32,18,8,2]},{"n":89,"s":"Ac","name":"Actinium","ram":227,"period":7,"group":3,"x":3,"y":10,"category":"actinide","shells":[2,8,18,32,18,9,2]},{"n":90,"s":"Th","name":"Thorium","ram":232.03774,"period":7,"group":3,"x":4,"y":10,"category":"actinide","shells":[2,8,18,32,18,10,2]},{"n":91,"s":"Pa","name":"Protactinium","ram":231.035882,"period":7,"group":3,"x":5,"y":10,"category":"actinide","shells":[2,8,18,32,20,9,2]},{"n":92,"s":"U","name":"Uranium","ram":238.028913,"period":7,"group":3,"x":6,"y":10,"category":"actinide","shells":[2,8,18,32,21,9,2]},{"n":93,"s":"Np","name":"Neptunium","ram":237,"period":7,"group":3,"x":7,"y":10,"category":"actinide","shells":[2,8,18,32,22,9,2]},{"n":94,"s":"Pu","name":"Plutonium","ram":244,"period":7,"group":3,"x":8,"y":10,"category":"actinide","shells":[2,8,18,32,24,8,2]},{"n":95,"s":"Am","name":"Americium","ram":243,"period":7,"group":3,"x":9,"y":10,"category":"actinide","shells":[2,8,18,32,25,8,2]},{"n":96,"s":"Cm","name":"Curium","ram":247,"period":7,"group":3,"x":10,"y":10,"category":"actinide","shells":[2,8,18,32,25,9,2]},{"n":97,"s":"Bk","name":"Berkelium","ram":247,"period":7,"group":3,"x":11,"y":10,"category":"actinide","shells":[2,8,18,32,27,8,2]},{"n":98,"s":"Cf","name":"Californium","ram":251,"period":7,"group":3,"x":12,"y":10,"category":"actinide","shells":[2,8,18,32,28,8,2]},{"n":99,"s":"Es","name":"Einsteinium","ram":252,"period":7,"group":3,"x":13,"y":10,"category":"actinide","shells":[2,8,18,32,29,8,2]},{"n":100,"s":"Fm","name":"Fermium","ram":257,"period":7,"group":3,"x":14,"y":10,"category":"actinide","shells":[2,8,18,32,30,8,2]},{"n":101,"s":"Md","name":"Mendelevium","ram":258,"period":7,"group":3,"x":15,"y":10,"category":"actinide","shells":[2,8,18,32,31,8,2]},{"n":102,"s":"No","name":"Nobelium","ram":259,"period":7,"group":3,"x":16,"y":10,"category":"actinide","shells":[2,8,18,32,32,8,2]},{"n":103,"s":"Lr","name":"Lawrencium","ram":266,"period":7,"group":3,"x":17,"y":10,"category":"actinide","shells":[2,8,18,32,32,8,3]},{"n":104,"s":"Rf","name":"Rutherfordium","ram":267,"period":7,"group":4,"x":4,"y":7,"category":"transition metal","shells":[2,8,18,32,32,10,2]},{"n":105,"s":"Db","name":"Dubnium","ram":268,"period":7,"group":5,"x":5,"y":7,"category":"transition metal","shells":[2,8,18,32,32,11,2]},{"n":106,"s":"Sg","name":"Seaborgium","ram":269,"period":7,"group":6,"x":6,"y":7,"category":"transition metal","shells":[2,8,18,32,32,12,2]},{"n":107,"s":"Bh","name":"Bohrium","ram":270,"period":7,"group":7,"x":7,"y":7,"category":"transition metal","shells":[2,8,18,32,32,13,2]},{"n":108,"s":"Hs","name":"Hassium","ram":269,"period":7,"group":8,"x":8,"y":7,"category":"transition metal","shells":[2,8,18,32,32,14,2]},{"n":109,"s":"Mt","name":"Meitnerium","ram":278,"period":7,"group":9,"x":9,"y":7,"category":"unknown, probably transition metal","shells":[2,8,18,32,32,15,2]},{"n":110,"s":"Ds","name":"Darmstadtium","ram":281,"period":7,"group":10,"x":10,"y":7,"category":"unknown, probably transition metal","shells":[2,8,18,32,32,16,2]},{"n":111,"s":"Rg","name":"Roentgenium","ram":282,"period":7,"group":11,"x":11,"y":7,"category":"unknown, probably transition metal","shells":[2,8,18,32,32,17,2]},{"n":112,"s":"Cn","name":"Copernicium","ram":285,"period":7,"group":12,"x":12,"y":7,"category":"transition metal","shells":[2,8,18,32,32,18,2]},{"n":113,"s":"Nh","name":"Nihonium","ram":286,"period":7,"group":13,"x":13,"y":7,"category":"unknown, probably transition metal","shells":[2,8,18,32,32,18,3]},{"n":114,"s":"Fl","name":"Flerovium","ram":289,"period":7,"group":14,"x":14,"y":7,"category":"post-transition metal","shells":[2,8,18,32,32,18,4]},{"n":115,"s":"Mc","name":"Moscovium","ram":289,"period":7,"group":15,"x":15,"y":7,"category":"unknown, probably post-transition metal","shells":[2,8,18,32,32,18,5]},{"n":116,"s":"Lv","name":"Livermorium","ram":293,"period":7,"group":16,"x":16,"y":7,"category":"unknown, probably post-transition metal","shells":[2,8,18,32,32,18,6]},{"n":117,"s":"Ts","name":"Tennessine","ram":294,"period":7,"group":17,"x":17,"y":7,"category":"unknown, probably metalloid","shells":[2,8,18,32,32,18,7]},{"n":118,"s":"Og","name":"Oganesson","ram":294,"period":7,"group":18,"x":18,"y":7,"category":"unknown, predicted to be noble gas","shells":[2,8,18,32,32,18,8]}];

const families = Object.freeze({
  'alkali-metal': { label: 'Alkali metals' },
  'alkaline-earth': { label: 'Alkaline earth metals' },
  'transition-metal': { label: 'Transition metals' },
  'post-transition-metal': { label: 'Post-transition metals' },
  'metalloid': { label: 'Metalloids' },
  'nonmetal': { label: 'Other non-metals' },
  'halogen': { label: 'Halogens' },
  'noble-gas': { label: 'Noble gases' },
  'lanthanide': { label: 'Lanthanides' },
  'actinide': { label: 'Actinides' }
});

function familyFor(element) {
  if (element.n >= 57 && element.n <= 71) return 'lanthanide';
  if (element.n >= 89 && element.n <= 103) return 'actinide';
  if (element.group === 17) return 'halogen';
  if (element.group === 18) return 'noble-gas';
  if (element.group === 1 && element.n !== 1) return 'alkali-metal';
  if (element.group === 2) return 'alkaline-earth';
  const category = element.category.toLowerCase();
  if (category.includes('post-transition')) return 'post-transition-metal';
  if (category.includes('transition metal')) return 'transition-metal';
  if (category.includes('metalloid')) return 'metalloid';
  return 'nonmetal';
}

const valencyOverrides = Object.freeze({
  H:'1', B:'3', C:'4', N:'3, 5', O:'2', F:'1',
  Al:'3', Si:'4', P:'3, 5', S:'2, 4, 6', Cl:'1, 3, 5, 7',
  Sc:'3', Ti:'2, 3, 4', V:'2, 3, 4, 5', Cr:'2, 3, 6', Mn:'2, 3, 4, 6, 7',
  Fe:'2, 3', Co:'2, 3', Ni:'2, 3', Cu:'1, 2', Zn:'2',
  Ga:'3', Ge:'2, 4', As:'3, 5', Se:'2, 4, 6', Br:'1, 3, 5, 7',
  Y:'3', Zr:'4', Nb:'3, 5', Mo:'2, 3, 4, 5, 6', Tc:'4, 7', Ru:'2, 3, 4, 8',
  Rh:'1, 3', Pd:'2, 4', Ag:'1', Cd:'2', In:'1, 3', Sn:'2, 4', Sb:'3, 5',
  Te:'2, 4, 6', I:'1, 3, 5, 7', Hf:'4', Ta:'5', W:'2, 3, 4, 5, 6',
  Re:'2, 4, 6, 7', Os:'2, 3, 4, 6, 8', Ir:'3, 4', Pt:'2, 4',
  Au:'1, 3', Hg:'1, 2', Tl:'1, 3', Pb:'2, 4', Bi:'3, 5', Po:'2, 4, 6'
});

const ionOverrides = Object.freeze({
  H:'H⁺, H⁻', B:'No common simple ion', C:'No common simple ion', N:'N³⁻', O:'O²⁻', F:'F⁻',
  Al:'Al³⁺', Si:'No common simple ion', P:'P³⁻', S:'S²⁻', Cl:'Cl⁻',
  Sc:'Sc³⁺', Ti:'Ti²⁺, Ti³⁺, Ti⁴⁺', V:'V²⁺, V³⁺, V⁴⁺, V⁵⁺',
  Cr:'Cr²⁺, Cr³⁺', Mn:'Mn²⁺, Mn³⁺', Fe:'Fe²⁺, Fe³⁺', Co:'Co²⁺, Co³⁺',
  Ni:'Ni²⁺', Cu:'Cu⁺, Cu²⁺', Zn:'Zn²⁺',
  Ga:'Ga³⁺', Ge:'Ge²⁺, Ge⁴⁺', As:'As³⁻', Se:'Se²⁻', Br:'Br⁻',
  Y:'Y³⁺', Zr:'Zr⁴⁺', Nb:'Nb³⁺, Nb⁵⁺', Mo:'Mo³⁺, Mo⁶⁺', Tc:'Tc⁴⁺, Tc⁷⁺',
  Ru:'Ru³⁺, Ru⁴⁺', Rh:'Rh³⁺', Pd:'Pd²⁺, Pd⁴⁺', Ag:'Ag⁺', Cd:'Cd²⁺',
  In:'In⁺, In³⁺', Sn:'Sn²⁺, Sn⁴⁺', Sb:'Sb³⁺, Sb⁵⁺', Te:'Te²⁻', I:'I⁻',
  Hf:'Hf⁴⁺', Ta:'Ta⁵⁺', W:'W⁴⁺, W⁶⁺', Re:'Re⁴⁺, Re⁷⁺',
  Os:'Os⁴⁺, Os⁸⁺', Ir:'Ir³⁺, Ir⁴⁺', Pt:'Pt²⁺, Pt⁴⁺', Au:'Au⁺, Au³⁺',
  Hg:'Hg₂²⁺, Hg²⁺', Tl:'Tl⁺, Tl³⁺', Pb:'Pb²⁺, Pb⁴⁺', Bi:'Bi³⁺', Po:'Po²⁺, Po⁴⁺'
});

function valenciesFor(element, family) {
  if (element.n >= 104) return 'Predicted / uncertain';
  if (valencyOverrides[element.s]) return valencyOverrides[element.s];
  if (family === 'noble-gas') return '0';
  if (family === 'alkali-metal') return '1';
  if (family === 'alkaline-earth') return '2';
  if (family === 'halogen') return '1, 3, 5, 7';
  if (family === 'lanthanide') {
    if (['Ce','Pr','Tb'].includes(element.s)) return '3, 4';
    if (['Sm','Eu','Tm','Yb'].includes(element.s)) return '2, 3';
    return '3';
  }
  if (family === 'actinide') {
    const values = {Ac:'3',Th:'4',Pa:'4, 5',U:'3, 4, 5, 6',Np:'3, 4, 5, 6, 7',Pu:'3, 4, 5, 6',Am:'2, 3, 4, 5, 6',Cm:'3, 4',Bk:'3, 4',Cf:'2, 3, 4',Es:'2, 3',Fm:'2, 3',Md:'2, 3',No:'2, 3',Lr:'3'};
    return values[element.s] || 'Variable';
  }
  if (element.group === 13) return '3';
  if (element.group === 14) return '2, 4';
  if (element.group === 15) return '3, 5';
  if (element.group === 16) return '2, 4, 6';
  return 'Variable';
}

function ionsFor(element, family) {
  if (element.n >= 104) return 'Not established; predicted only';
  if (ionOverrides[element.s]) return ionOverrides[element.s];
  if (family === 'noble-gas') return 'No common simple ion';
  if (family === 'alkali-metal') return element.s + '⁺';
  if (family === 'alkaline-earth') return element.s + '²⁺';
  if (family === 'halogen') return element.s + '⁻';
  if (family === 'lanthanide') {
    if (['Sm','Eu','Tm','Yb'].includes(element.s)) return element.s + '²⁺, ' + element.s + '³⁺';
    if (['Ce','Pr','Tb'].includes(element.s)) return element.s + '³⁺, ' + element.s + '⁴⁺';
    return element.s + '³⁺';
  }
  if (family === 'actinide') {
    const ions = {Ac:'Ac³⁺',Th:'Th⁴⁺',Pa:'Pa⁴⁺, Pa⁵⁺',U:'U³⁺, U⁴⁺, U⁶⁺',Np:'Np³⁺ to Np⁷⁺',Pu:'Pu³⁺ to Pu⁶⁺',Am:'Am³⁺',Cm:'Cm³⁺',Bk:'Bk³⁺, Bk⁴⁺',Cf:'Cf³⁺',Es:'Es³⁺',Fm:'Fm³⁺',Md:'Md²⁺, Md³⁺',No:'No²⁺, No³⁺',Lr:'Lr³⁺'};
    return ions[element.s] || 'Variable';
  }
  return 'No common simple ion';
}

const bracketedAtomicNumbers = new Set([43,61,84,85,86,87,88,89,...Array.from({length:26},(_,i)=>i+93)]);
function ramFor(element) {
  const value = Number(element.ram.toPrecision(6)).toString();
  return bracketedAtomicNumbers.has(element.n) ? '[' + Math.round(element.ram) + ']' : value;
}

const gasElements = new Set(['H','He','N','O','F','Ne','Cl','Ar','Kr','Xe','Rn']);
const liquidElements = new Set(['Br','Hg']);
function phaseFor(element) {
  if (element.n >= 104) return element.n === 118 ? 'Predicted gas' : 'Predicted solid';
  if (gasElements.has(element.s)) return 'Gas';
  if (liquidElements.has(element.s)) return 'Liquid';
  return 'Solid';
}

function createText(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  node.textContent = text;
  return node;
}

const table = document.querySelector('#periodic-table');
const legend = document.querySelector('#family-legend');
const dialog = document.querySelector('#element-dialog');
const detail = document.querySelector('#element-detail');
const closeButton = document.querySelector('#dialog-close');

Object.entries(families).forEach(([key, info]) => {
  const item = createText('button','legend-item','');
  item.type = 'button';
  item.classList.add('family-' + key);
  item.dataset.family = key;
  item.setAttribute('aria-label', 'Highlight ' + info.label);
  item.append(createText('span','legend-dot',''), document.createTextNode(info.label));
  legend.append(item);
});

const groupLabels = [
  { column: '2', label: '1' },
  { column: '3', label: '2' },
  { column: '4 / span 10', label: 'Transition metals', wide: true },
  { column: '14', label: '3', modern: '13' },
  { column: '15', label: '4', modern: '14' },
  { column: '16', label: '5', modern: '15' },
  { column: '17', label: '6', modern: '16' },
  { column: '18', label: '7', modern: '17' },
  { column: '19', label: '0', modern: '18' }
];
groupLabels.forEach((group) => {
  const label = document.createElement('span');
  label.className = 'group-label' + (group.wide ? ' transition-heading' : '');
  label.style.gridColumn = group.column;
  if (group.wide) {
    label.textContent = group.label;
  } else {
    label.append(createText('strong','',group.label));
    if (group.modern) label.append(createText('small','','IUPAC ' + group.modern));
  }
  table.append(label);
});
for (let period = 1; period <= 7; period += 1) {
  const label = createText('span','period-label',String(period));
  label.style.gridRow = String(period + 1);
  table.append(label);
}
const lanthanideLabel = createText('span','series-label','Lanthanides');
lanthanideLabel.style.gridRow = '9';
const actinideLabel = createText('span','series-label','Actinides');
actinideLabel.style.gridRow = '10';
table.append(lanthanideLabel, actinideLabel);

function addSeriesPlaceholder(text, row) {
  const placeholder = createText('span','series-placeholder',text);
  placeholder.style.gridColumn = '4';
  placeholder.style.gridRow = String(row);
  table.append(placeholder);
}
addSeriesPlaceholder('57–71',7);
addSeriesPlaceholder('89–103',8);

function highlightFamily(family) {
  legend.classList.add('has-active-filter');
  table.classList.add('has-active-family');
  legend.querySelectorAll('.legend-item').forEach((item) => {
    item.classList.toggle('is-active', item.dataset.family === family);
  });
  table.querySelectorAll('.element-tile').forEach((tile) => {
    tile.classList.toggle('is-family-active', tile.dataset.family === family);
  });
}

function clearFamilyHighlight() {
  legend.classList.remove('has-active-filter');
  table.classList.remove('has-active-family');
  legend.querySelectorAll('.legend-item').forEach((item) => item.classList.remove('is-active'));
  table.querySelectorAll('.element-tile').forEach((tile) => tile.classList.remove('is-family-active'));
}

legend.addEventListener('pointerover', (event) => {
  const item = event.target.closest('.legend-item');
  if (item) highlightFamily(item.dataset.family);
});
legend.addEventListener('pointerleave', clearFamilyHighlight);
legend.addEventListener('focusin', (event) => {
  const item = event.target.closest('.legend-item');
  if (item) highlightFamily(item.dataset.family);
});
legend.addEventListener('focusout', (event) => {
  if (!legend.contains(event.relatedTarget)) clearFamilyHighlight();
});

elements.forEach((element) => {
  const family = familyFor(element);
  const tile = document.createElement('button');
  tile.type = 'button';
  tile.className = 'element-tile family-' + family;
  tile.dataset.family = family;
  if (element.n === 1) {
    tile.classList.add('hydrogen-special');
    tile.title = 'Hydrogen is shown separately because it is a unique non-metal.';
  }
  tile.style.gridColumn = element.n === 1 ? '10' : String(element.x + 1);
  tile.style.gridRow = String(element.y >= 9 ? element.y : element.y + 1);
  tile.setAttribute('aria-label', element.name + ', atomic number ' + element.n);
  tile.append(
    createText('span','element-ram',ramFor(element)),
    createText('strong','element-symbol',element.s),
    createText('span','element-name',element.name),
    createText('span','element-number',String(element.n))
  );
  tile.addEventListener('click', () => openElement(element, family));
  table.append(tile);
});

function addStat(container, label, value, wide = false) {
  const stat = document.createElement('div');
  stat.className = 'detail-stat' + (wide ? ' wide' : '');
  stat.append(createText('span','',label), createText('strong','',value));
  container.append(stat);
}

function openElement(element, family) {
  const identity = document.createElement('div');
  identity.className = 'detail-identity family-' + family;
  const identityTile = document.createElement('div');
  identityTile.className = 'detail-tile';
  identityTile.append(createText('small','',ramFor(element)), createText('strong','',element.s), createText('small','',String(element.n)));
  const identityCopy = document.createElement('div');
  const title = createText('h2','',element.name);
  title.id = 'detail-title';
  identityCopy.append(title, createText('p','',families[family].label));

  const stats = document.createElement('div');
  stats.className = 'detail-grid';
  addStat(stats,'Atomic number',String(element.n));
  addStat(stats,'Protons',String(element.n));
  addStat(stats,'Electrons (neutral atom)',String(element.n));
  addStat(stats,'RAM',ramFor(element));
  addStat(stats,'Mass number','Isotope-specific');
  addStat(stats,'Phase at RTP',phaseFor(element));
  addStat(stats,'Group',element.n >= 57 && element.n <= 103 && (element.n <= 71 || element.n >= 89) ? 'f-block; associated with Group 3' : String(element.group));
  addStat(stats,'Period',String(element.period));
  addStat(stats,'Section / family',families[family].label);
  addStat(stats,'Electron shells',element.shells.join(', '),true);
  addStat(stats,'Common valencies',valenciesFor(element,family),true);
  addStat(stats,'Common simple ion(s)',ionsFor(element,family),true);

  const isotopeNote = createText('p','isotope-note','Mass number is the total number of protons and neutrons in one particular isotope. Because an element may have several isotopes, it does not have one universal mass number.');
  const source = document.createElement('p');
  source.className = 'detail-source';
  source.append(document.createTextNode('Reference values: '));
  const pubchem = createText('a','','PubChem Periodic Table');
  pubchem.href = 'https://pubchem.ncbi.nlm.nih.gov/periodic-table/';
  pubchem.target = '_blank';
  pubchem.rel = 'noopener';
  const ciaaw = createText('a','','CIAAW standard atomic weights');
  ciaaw.href = 'https://ciaaw.org/atomic-weights.htm';
  ciaaw.target = '_blank';
  ciaaw.rel = 'noopener';
  source.append(pubchem, document.createTextNode(' and '), ciaaw, document.createTextNode('. Common valencies and ions are simplified for secondary-school study.'));

  identity.append(identityTile, identityCopy);
  detail.replaceChildren(identity, stats, isotopeNote, source);
  dialog.showModal();
}

closeButton.addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});
