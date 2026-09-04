const ions = [
  {f:'H⁺',name:'Hydrogen ion (hydron)',cat:'monatomic',charge:'+1',kind:'Cation',compound:'Hydrochloric acid, HCl',water:'Exists hydrated in water, commonly represented as H₃O⁺.',note:'Hydrogen ions are responsible for the acidic properties of aqueous solutions.'},
  {f:'Li⁺',name:'Lithium ion',cat:'monatomic',charge:'+1',kind:'Cation',compound:'Lithium chloride, LiCl',water:'Colourless aqueous ion.',note:'Formed when a lithium atom loses one electron.'},
  {f:'Na⁺',name:'Sodium ion',cat:'monatomic',charge:'+1',kind:'Cation',compound:'Sodium chloride, NaCl',water:'Colourless aqueous ion.',note:'Gives an intense yellow flame in a flame test.'},
  {f:'K⁺',name:'Potassium ion',cat:'monatomic',charge:'+1',kind:'Cation',compound:'Potassium nitrate, KNO₃',water:'Colourless aqueous ion.',note:'Gives a lilac flame in a flame test.'},
  {f:'Ag⁺',name:'Silver ion',cat:'monatomic',charge:'+1',kind:'Cation',compound:'Silver nitrate, AgNO₃',water:'Colourless aqueous ion.',note:'Forms a white precipitate of AgCl with chloride ions.'},
  {f:'Mg²⁺',name:'Magnesium ion',cat:'monatomic',charge:'+2',kind:'Cation',compound:'Magnesium sulfate, MgSO₄',water:'Colourless aqueous ion.',note:'Forms when magnesium loses its two outer-shell electrons.'},
  {f:'Ca²⁺',name:'Calcium ion',cat:'monatomic',charge:'+2',kind:'Cation',compound:'Calcium carbonate, CaCO₃',water:'Colourless aqueous ion.',note:'Gives a brick-red or orange-red flame in a flame test.'},
  {f:'Ba²⁺',name:'Barium ion',cat:'monatomic',charge:'+2',kind:'Cation',compound:'Barium chloride, BaCl₂',water:'Colourless aqueous ion.',note:'Forms insoluble white barium sulfate with sulfate ions.'},
  {f:'Zn²⁺',name:'Zinc ion',cat:'monatomic',charge:'+2',kind:'Cation',compound:'Zinc sulfate, ZnSO₄',water:'Colourless aqueous ion.',note:'Forms a white hydroxide precipitate that dissolves in excess sodium hydroxide.'},
  {f:'Al³⁺',name:'Aluminium ion',cat:'monatomic',charge:'+3',kind:'Cation',compound:'Aluminium oxide, Al₂O₃',water:'Colourless hydrated ion in acidic solution.',note:'Forms a white hydroxide precipitate that dissolves in excess sodium hydroxide.'},
  {f:'F⁻',name:'Fluoride ion',cat:'monatomic',charge:'−1',kind:'Anion',compound:'Sodium fluoride, NaF',water:'Colourless aqueous ion.',note:'Formed when fluorine gains one electron.'},
  {f:'Cl⁻',name:'Chloride ion',cat:'monatomic',charge:'−1',kind:'Anion',compound:'Sodium chloride, NaCl',water:'Colourless aqueous ion.',note:'Gives a white AgCl precipitate with acidified silver nitrate.'},
  {f:'Br⁻',name:'Bromide ion',cat:'monatomic',charge:'−1',kind:'Anion',compound:'Potassium bromide, KBr',water:'Colourless aqueous ion.',note:'Gives a cream AgBr precipitate with acidified silver nitrate.'},
  {f:'I⁻',name:'Iodide ion',cat:'monatomic',charge:'−1',kind:'Anion',compound:'Potassium iodide, KI',water:'Colourless aqueous ion.',note:'Gives a yellow AgI precipitate with acidified silver nitrate.'},
  {f:'O²⁻',name:'Oxide ion',cat:'monatomic',charge:'−2',kind:'Anion',compound:'Magnesium oxide, MgO',water:'Does not remain as a free ion in water; it forms OH⁻.',note:'Common in ionic metal oxides.'},
  {f:'S²⁻',name:'Sulfide ion',cat:'monatomic',charge:'−2',kind:'Anion',compound:'Iron(II) sulfide, FeS',water:'Present mainly in alkaline solutions; linked to H₂S equilibria.',note:'Many transition-metal sulfides are insoluble.'},
  {f:'N³⁻',name:'Nitride ion',cat:'monatomic',charge:'−3',kind:'Anion',compound:'Magnesium nitride, Mg₃N₂',water:'Reacts with water and is not present as a stable free aqueous ion.',note:'Found in ionic nitrides of reactive metals.'},
  {f:'P³⁻',name:'Phosphide ion',cat:'monatomic',charge:'−3',kind:'Anion',compound:'Calcium phosphide, Ca₃P₂',water:'Reacts with water and is not a stable free aqueous ion.',note:'Do not confuse phosphide, P³⁻, with phosphate, PO₄³⁻.'},

  {f:'Ti³⁺',name:'Titanium(III) ion',cat:'transition',charge:'+3',kind:'Cation',compound:'Titanium(III) chloride, TiCl₃',water:'Usually violet in aqueous solution.',note:'The Roman numeral III states the +3 oxidation state.'},
  {f:'Ti⁴⁺',name:'Titanium(IV) ion',cat:'transition',charge:'+4',kind:'Cation',compound:'Titanium(IV) oxide, TiO₂',water:'Strongly hydrated and hydrolysed; usually colourless in acidic solution.',note:'Titanium commonly shows +3 and +4 oxidation states.'},
  {f:'V²⁺',name:'Vanadium(II) ion',cat:'transition',charge:'+2',kind:'Cation',compound:'Vanadium(II) chloride, VCl₂',water:'Violet aqueous ion.',note:'Vanadium has several oxidation states with characteristic colours.'},
  {f:'V³⁺',name:'Vanadium(III) ion',cat:'transition',charge:'+3',kind:'Cation',compound:'Vanadium(III) chloride, VCl₃',water:'Green aqueous ion.',note:'The colour differs from V²⁺ because its electron arrangement is different.'},
  {f:'Cr³⁺',name:'Chromium(III) ion',cat:'transition',charge:'+3',kind:'Cation',compound:'Chromium(III) chloride, CrCl₃',water:'Often green or violet depending on the surrounding ligands.',note:'Forms a grey-green Cr(OH)₃ precipitate.'},
  {f:'Mn²⁺',name:'Manganese(II) ion',cat:'transition',charge:'+2',kind:'Cation',compound:'Manganese(II) sulfate, MnSO₄',water:'Very pale pink aqueous ion.',note:'Do not confuse Mn²⁺ with the purple permanganate ion, MnO₄⁻.'},
  {f:'Fe²⁺',name:'Iron(II) ion',cat:'transition',charge:'+2',kind:'Cation',compound:'Iron(II) sulfate, FeSO₄',water:'Pale green aqueous ion.',note:'Forms a green Fe(OH)₂ precipitate that browns on standing.'},
  {f:'Fe³⁺',name:'Iron(III) ion',cat:'transition',charge:'+3',kind:'Cation',compound:'Iron(III) chloride, FeCl₃',water:'Yellow to yellow-brown aqueous ion.',note:'Forms a red-brown Fe(OH)₃ precipitate.'},
  {f:'Co²⁺',name:'Cobalt(II) ion',cat:'transition',charge:'+2',kind:'Cation',compound:'Cobalt(II) chloride, CoCl₂',water:'Usually pink when hydrated.',note:'Cobalt compounds can change colour with hydration and ligand changes.'},
  {f:'Ni²⁺',name:'Nickel(II) ion',cat:'transition',charge:'+2',kind:'Cation',compound:'Nickel(II) sulfate, NiSO₄',water:'Green aqueous ion.',note:'Forms a green nickel(II) hydroxide precipitate.'},
  {f:'Cu⁺',name:'Copper(I) ion',cat:'transition',charge:'+1',kind:'Cation',compound:'Copper(I) oxide, Cu₂O',water:'Unstable in ordinary aqueous solution.',note:'Copper(I) compounds are often white or red; Cu₂O is red.'},
  {f:'Cu²⁺',name:'Copper(II) ion',cat:'transition',charge:'+2',kind:'Cation',compound:'Copper(II) sulfate, CuSO₄',water:'Blue hydrated aqueous ion.',note:'Forms a light-blue Cu(OH)₂ precipitate.'},

  {f:'NH₄⁺',name:'Ammonium ion',cat:'polyatomic',charge:'+1',kind:'Cation',compound:'Ammonium chloride, NH₄Cl',water:'Colourless aqueous ion.',note:'Warming an ammonium salt with an alkali releases ammonia gas.',shape:'tetra',center:'N',outer:['H','H','H','H']},
  {f:'H₃O⁺',name:'Hydronium ion',cat:'polyatomic',charge:'+1',kind:'Cation',compound:'Present in aqueous acids',water:'Represents a proton bonded to a water molecule.',note:'Often simplified to H⁺(aq) in school equations.',shape:'trigonal',center:'O',outer:['H','H','H']},
  {f:'OH⁻',name:'Hydroxide ion',cat:'polyatomic',charge:'−1',kind:'Anion',compound:'Sodium hydroxide, NaOH',water:'Makes aqueous solutions alkaline.',note:'Turns red litmus blue and reacts with H⁺ to form water.',shape:'linear',outer:['O','H']},
  {f:'NO₃⁻',name:'Nitrate ion',cat:'polyatomic',charge:'−1',kind:'Anion',compound:'Potassium nitrate, KNO₃',water:'Usually colourless in solution; all common nitrates are soluble.',note:'Its three N–O bonds are equivalent because the charge is delocalised.',shape:'trigonal',center:'N',outer:['O','O','O']},
  {f:'NO₂⁻',name:'Nitrite ion',cat:'polyatomic',charge:'−1',kind:'Anion',compound:'Sodium nitrite, NaNO₂',water:'Colourless to pale-yellow aqueous ion.',note:'Nitrite contains one fewer oxygen atom than nitrate.',shape:'bent',center:'N',outer:['O','O']},
  {f:'SO₄²⁻',name:'Sulfate ion',cat:'polyatomic',charge:'−2',kind:'Anion',compound:'Copper(II) sulfate, CuSO₄',water:'Usually colourless in solution.',note:'Forms a white BaSO₄ precipitate with acidified barium ions.',shape:'tetra',center:'S',outer:['O','O','O','O']},
  {f:'SO₃²⁻',name:'Sulfite ion',cat:'polyatomic',charge:'−2',kind:'Anion',compound:'Sodium sulfite, Na₂SO₃',water:'Colourless aqueous ion.',note:'Acidification releases sulfur dioxide gas.',shape:'trigonal',center:'S',outer:['O','O','O']},
  {f:'CO₃²⁻',name:'Carbonate ion',cat:'polyatomic',charge:'−2',kind:'Anion',compound:'Calcium carbonate, CaCO₃',water:'Solubility depends on the cation.',note:'Acidification releases carbon dioxide; its C–O bonding is delocalised.',shape:'trigonal',center:'C',outer:['O','O','O']},
  {f:'HCO₃⁻',name:'Hydrogencarbonate ion',cat:'polyatomic',charge:'−1',kind:'Anion',compound:'Sodium hydrogencarbonate, NaHCO₃',water:'Colourless aqueous ion.',note:'Also called bicarbonate; reacts with acids to release CO₂.',shape:'chain',outer:['HO','C','O','O']},
  {f:'PO₄³⁻',name:'Phosphate ion',cat:'polyatomic',charge:'−3',kind:'Anion',compound:'Calcium phosphate, Ca₃(PO₄)₂',water:'Many phosphates are insoluble except those of Group 1 and ammonium.',note:'Has a tetrahedral arrangement around phosphorus.',shape:'tetra',center:'P',outer:['O','O','O','O']},
  {f:'HSO₄⁻',name:'Hydrogensulfate ion',cat:'polyatomic',charge:'−1',kind:'Anion',compound:'Sodium hydrogensulfate, NaHSO₄',water:'Can donate H⁺ and make a solution acidic.',note:'Also called bisulfate.',shape:'tetra',center:'S',outer:['OH','O','O','O']},
  {f:'MnO₄⁻',name:'Permanganate ion',cat:'polyatomic',charge:'−1',kind:'Anion',compound:'Potassium permanganate, KMnO₄',water:'Intensely purple aqueous ion.',note:'A strong oxidising agent; its products depend on reaction conditions.',shape:'tetra',center:'Mn',outer:['O','O','O','O']},
  {f:'CrO₄²⁻',name:'Chromate ion',cat:'polyatomic',charge:'−2',kind:'Anion',compound:'Potassium chromate, K₂CrO₄',water:'Yellow aqueous ion.',note:'Chromate and dichromate are linked by a pH-dependent equilibrium.',shape:'tetra',center:'Cr',outer:['O','O','O','O']},
  {f:'Cr₂O₇²⁻',name:'Dichromate ion',cat:'polyatomic',charge:'−2',kind:'Anion',compound:'Potassium dichromate, K₂Cr₂O₇',water:'Orange aqueous ion.',note:'An oxidising agent; two chromium centres are joined by a bridging oxygen.',shape:'chain',outer:['O₃Cr','O','CrO₃']},
  {f:'CN⁻',name:'Cyanide ion',cat:'polyatomic',charge:'−1',kind:'Anion',compound:'Sodium cyanide, NaCN',water:'Colourless but highly toxic; acids may release HCN.',note:'Included as a reference only—cyanide compounds require specialist safety controls.',shape:'linear',outer:['C','N']},
  {f:'SCN⁻',name:'Thiocyanate ion',cat:'polyatomic',charge:'−1',kind:'Anion',compound:'Potassium thiocyanate, KSCN',water:'Colourless aqueous ion.',note:'Forms a blood-red complex with Fe³⁺ ions.',shape:'linear',outer:['S','C','N']},
  {f:'S₂O₃²⁻',name:'Thiosulfate ion',cat:'polyatomic',charge:'−2',kind:'Anion',compound:'Sodium thiosulfate, Na₂S₂O₃',water:'Colourless aqueous ion.',note:'Used in iodine titrations; acidification gives sulfur and sulfur dioxide.',shape:'tetra',center:'S',outer:['S','O','O','O']},
  {f:'O₂²⁻',name:'Peroxide ion',cat:'polyatomic',charge:'−2',kind:'Anion',compound:'Sodium peroxide, Na₂O₂',water:'Reacts with water; peroxide chemistry is strongly oxidising.',note:'Each oxygen has oxidation state −1, unlike oxide where it is −2.',shape:'linear',outer:['O','O']},

  {f:'HCOO⁻',name:'Methanoate ion',cat:'organic',charge:'−1',kind:'Anion',compound:'Sodium methanoate, HCOONa',water:'Colourless aqueous ion.',note:'The conjugate base of methanoic acid.',shape:'text',structure:'H–C(=O)–O⁻'},
  {f:'CH₃COO⁻',name:'Ethanoate ion',cat:'organic',charge:'−1',kind:'Anion',compound:'Sodium ethanoate, CH₃COONa',water:'Colourless aqueous ion.',note:'Also called acetate; the negative charge is delocalised over two oxygen atoms.',shape:'text',structure:'CH₃–C(=O)–O⁻'},
  {f:'C₂H₅COO⁻',name:'Propanoate ion',cat:'organic',charge:'−1',kind:'Anion',compound:'Sodium propanoate, C₂H₅COONa',water:'Colourless aqueous ion.',note:'The conjugate base of propanoic acid.',shape:'text',structure:'CH₃CH₂–C(=O)–O⁻'},
  {f:'C₂O₄²⁻',name:'Ethanedioate (oxalate) ion',cat:'organic',charge:'−2',kind:'Anion',compound:'Calcium ethanedioate, CaC₂O₄',water:'Can form insoluble salts with some metal ions.',note:'Also called oxalate; it contains two linked carboxylate groups.',shape:'text',structure:'⁻OOC–COO⁻'},
  {f:'C₆H₅COO⁻',name:'Benzoate ion',cat:'organic',charge:'−1',kind:'Anion',compound:'Sodium benzoate, C₆H₅COONa',water:'Sodium benzoate dissolves in water.',note:'Sodium benzoate is widely used as a food preservative.',shape:'text',structure:'C₆H₅–C(=O)–O⁻'}
];

const categoryDetails = {
  monatomic:{label:'Monatomic ions',title:'One atom with an electrical charge'},
  transition:{label:'Transition-metal ions',title:'Variable charges and characteristic colours'},
  polyatomic:{label:'Polyatomic ions',title:'Groups of bonded atoms with an overall charge'},
  organic:{label:'Organic & special ions',title:'Carbon-containing ions worth recognising'}
};

const grid=document.querySelector('#ions-grid');
const search=document.querySelector('#ion-search');
const tabs=[...document.querySelectorAll('.ion-tab')];
const kicker=document.querySelector('#category-kicker');
const title=document.querySelector('#category-title');
const count=document.querySelector('#result-count');
const empty=document.querySelector('#ions-empty');
const dialog=document.querySelector('#ion-dialog');
const detail=document.querySelector('#ion-detail');
const closeButton=document.querySelector('#ion-dialog-close');
let activeCategory='monatomic';

function element(tag,className,text){
  const node=document.createElement(tag);
  if(className) node.className=className;
  if(text!==undefined) node.textContent=text;
  return node;
}

function normalise(value){
  const conversions={'₀':'0','₁':'1','₂':'2','₃':'3','₄':'4','₅':'5','₆':'6','₇':'7','₈':'8','₉':'9','⁰':'0','¹':'1','²':'2','³':'3','⁴':'4','⁵':'5','⁶':'6','⁷':'7','⁸':'8','⁹':'9','⁺':'+','⁻':'-'};
  return value.toLowerCase().replace(/[₀-₉⁰-⁹⁺⁻]/g,(character)=>conversions[character]||character).replace(/[^a-z0-9+-]/g,'');
}

function cardClass(ion){
  if(ion.cat==='transition') return 'transition-ion';
  if(ion.cat==='organic') return 'organic-ion';
  return ion.charge.startsWith('+') ? 'positive' : 'negative';
}

function render(){
  const query=search.value.trim();
  const queryKey=normalise(query);
  const visible=ions.filter((ion)=>{
    const inCategory=query ? true : ion.cat===activeCategory;
    const haystack=normalise([ion.f,ion.name,ion.compound,ion.note].join(' '));
    return inCategory && (!queryKey || haystack.includes(queryKey));
  });

  if(query){
    kicker.textContent='Search results';
    title.textContent='Matching ions from every section';
  }else{
    kicker.textContent=categoryDetails[activeCategory].label;
    title.textContent=categoryDetails[activeCategory].title;
  }
  count.textContent=visible.length+' ion'+(visible.length===1?'':'s');
  grid.replaceChildren();
  visible.forEach((ion)=>{
    const card=element('button','ion-card '+cardClass(ion));
    card.type='button';
    card.setAttribute('role','listitem');
    card.setAttribute('aria-label','Open '+ion.name+', '+ion.f);
    const top=element('span');
    top.append(element('span','ion-formula',ion.f),element('span','ion-name',ion.name));
    const meta=element('span','ion-meta');
    meta.append(element('span','',ion.cat==='transition'?'Transition metal':ion.cat==='organic'?'Organic ion':ion.kind),element('span','charge-pill',ion.charge));
    card.append(top,meta);
    card.addEventListener('click',()=>openIon(ion));
    grid.append(card);
  });
  empty.hidden=visible.length!==0;
}

function svgNode(name,attributes={}){
  const node=document.createElementNS('http://www.w3.org/2000/svg',name);
  Object.entries(attributes).forEach(([key,value])=>node.setAttribute(key,String(value)));
  return node;
}

function positionsFor(ion){
  if(ion.shape==='linear'){
    const length=ion.outer.length;
    return ion.outer.map((label,index)=>({label,x:45+(150*index/Math.max(1,length-1)),y:95}));
  }
  if(ion.shape==='bent'){
    return [{label:ion.center,x:120,y:66},{label:ion.outer[0],x:65,y:132},{label:ion.outer[1],x:175,y:132}];
  }
  if(ion.shape==='trigonal'){
    return [{label:ion.center,x:120,y:100},{label:ion.outer[0],x:120,y:35},{label:ion.outer[1],x:58,y:145},{label:ion.outer[2],x:182,y:145}];
  }
  if(ion.shape==='tetra'){
    return [{label:ion.center,x:120,y:96},{label:ion.outer[0],x:120,y:28},{label:ion.outer[1],x:48,y:96},{label:ion.outer[2],x:192,y:96},{label:ion.outer[3],x:120,y:164}];
  }
  if(ion.shape==='chain'){
    const length=ion.outer.length;
    return ion.outer.map((label,index)=>({label,x:32+(176*index/Math.max(1,length-1)),y:index%2?105:82}));
  }
  return [{label:ion.f.replace(/[⁺⁻²³⁴]/g,''),x:120,y:95}];
}

function structureDiagram(ion){
  const wrap=element('div','ion-structure');
  const svg=svgNode('svg',{viewBox:'0 0 240 190',role:'img','aria-label':'Simplified structural representation of '+ion.name});
  if(ion.shape==='text'){
    const text=svgNode('text',{x:120,y:92});
    text.textContent=ion.structure;
    text.setAttribute('style','font-size:21px');
    svg.append(text);
  }else{
    const positions=positionsFor(ion);
    for(let index=0;index<positions.length-1;index+=1){
      const from=(ion.shape==='trigonal'||ion.shape==='tetra'||ion.shape==='bent')?positions[0]:positions[index];
      const to=(ion.shape==='trigonal'||ion.shape==='tetra'||ion.shape==='bent')?positions[index+1]:positions[index+1];
      svg.append(svgNode('line',{x1:from.x,y1:from.y,x2:to.x,y2:to.y}));
      if(ion.shape==='trigonal'||ion.shape==='tetra'||ion.shape==='bent') continue;
    }
    positions.forEach((position)=>{
      svg.append(svgNode('circle',{cx:position.x,cy:position.y,r:24}));
      const atom=svgNode('text',{x:position.x,y:position.y});
      atom.textContent=position.label;
      svg.append(atom);
    });
    const charge=svgNode('text',{x:214,y:24,class:'diagram-charge'});
    charge.textContent=ion.charge;
    svg.append(charge);
  }
  wrap.append(svg);
  return wrap;
}

function fact(label,value){
  const box=element('div');
  box.append(element('dt','',label),element('dd','',value));
  return box;
}

function openIon(ion){
  const colorClass=cardClass(ion);
  const color=colorClass==='transition-ion'?'#86a5ff':colorClass==='organic-ion'?'#f09dcc':colorClass==='positive'?'#79e2da':'#ffd66e';
  const head=element('div','ion-detail-head');
  head.style.setProperty('--detail-color',color);
  const formula=element('div','ion-detail-formula',ion.f);
  const copy=element('div');
  const heading=element('h2','',ion.name);
  heading.id='ion-detail-title';
  copy.append(heading,element('p','',ion.kind+' · '+ion.charge+' charge'));
  head.append(formula,copy);

  const structure=element('div','structure-panel');
  structure.style.setProperty('--detail-color',color);
  structure.append(element('span','','Simplified structure'),structureDiagram(ion));

  const facts=element('dl','ion-facts');
  facts.append(
    fact('Formula',ion.f),
    fact('Overall charge',ion.charge),
    fact('Type',ion.kind),
    fact('Source',ion.cat==='monatomic'?'Monatomic':ion.cat==='transition'?'Transition-metal ion':ion.cat==='organic'?'Organic polyatomic ion':'Polyatomic ion'),
    fact('Example compound',ion.compound),
    fact('In water',ion.water)
  );
  const layout=element('div','ion-detail-layout');
  layout.append(structure,facts);
  const note=element('p','ion-detail-note',ion.note);
  const source=element('p','ion-source-note','School-level summary. Structural drawings show connectivity and may simplify resonance, bond order, hydration and three-dimensional shape.');
  detail.replaceChildren(head,layout,note,source);
  dialog.showModal();
}

tabs.forEach((tab,index)=>{
  tab.addEventListener('click',()=>{
    activeCategory=tab.dataset.category;
    search.value='';
    tabs.forEach((item)=>{
      const selected=item===tab;
      item.classList.toggle('is-active',selected);
      item.setAttribute('aria-selected',String(selected));
    });
    render();
  });
  tab.addEventListener('keydown',(event)=>{
    if(!['ArrowLeft','ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    const next=(index+(event.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;
    tabs[next].focus();
    tabs[next].click();
  });
});
search.addEventListener('input',render);
closeButton.addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',(event)=>{if(event.target===dialog)dialog.close();});
render();
