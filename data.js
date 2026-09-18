const skillsData=[
["Szkieletowy Mag","15/15",[["Coven","Maksymalna liczba przywołanych Szkieletowych Magów zostaje zwiększona o <strong>2</strong>."],["Duration Damage Bonus","Szkieletowi Magowie zadają o <strong>15%[x]</strong> więcej obrażeń. Premia rośnie o <strong>1% na sekundę</strong>, przez którą Mag pozostaje przy życiu, maksymalnie do <strong>25%[x]</strong>."] ,["Crowd Control Damage Bonus","Szkieletowi Magowie zadają o <strong>30%[x]</strong> więcej obrażeń przeciwnikom znajdującym się pod wpływem efektów kontroli tłumu."]]],
["Szkieletowy Wojownik","15/15",[["Litany of Death","Jeśli wszyscy Szkieletowi Wojownicy są już przywołani, umiejętność na krótko przywołuje zamiast nich Szkieletowego Kapłana. Kapłan wzmacnia stronników przez <strong>8 sek.</strong>, zwiększa ich szansę na trafienie krytyczne o <strong>15%[+]</strong> i w tym czasie leczy ich łącznie za <strong>100% maksymalnego zdrowia</strong>."],["Damage Bonus","Wydanie rozkazu Szkieletowym Wojownikom sprawia, że przez <strong>10 sek.</strong> zadają o <strong>25%[x]</strong> więcej obrażeń."],["Resolve","Wydanie rozkazu Szkieletowym Wojownikom zapewnia <strong>3 kumulacje Resolve</strong>."]]],
["Golem","15/15",[["Gargantua","Przywołujesz większego Golema z aurą dowodzenia, która zwiększa szybkość używania umiejętności i szybkość ruchu pozostałych stronników o <strong>20%[x]</strong>."] ,["Resolve, Overpower, or Ferocity","Wydanie rozkazu Golemowi zapewnia <strong>3 kumulacje</strong> Resolve, Overpower albo Ferocity — zależnie od tego, czy używasz odpowiednio Golema Kościanego, Krwawego czy Żelaznego."],["Unstoppable","Wydanie rozkazu Golemowi zapewnia ci również efekt <strong>Unstoppable na 3 sek.</strong>."]]],
["Zniedołężnienie","12/15",[["Life Tap","Zniedołężnienie staje się również umiejętnością Krwi. Trafienie przeciwnika objętego Zniedołężnieniem leczy cię za <strong>10% maksymalnego zdrowia</strong>, najwyżej raz na sekundę. Przeciwnicy umierający pod jego wpływem mają <strong>20%</strong> szans na utworzenie Kuli Krwi."],["Cooldown Reduction","<strong>Szczęśliwy Traf:</strong> trafienie przeciwnika objętego Zniedołężnieniem ma do <strong>15%</strong> szans na skrócenie losowego aktywnego czasu odnowienia o <strong>1 sek.</strong>."],["Movement Speed","Każdy przeciwnik objęty Zniedołężnieniem zwiększa twoją szybkość ruchu o <strong>2%[x]</strong>."]]],
["Żelazna Dziewica","1/15",[["Execute and Fortify","Przeciwnicy objęci Żelazną Dziewicą mogą zostać <strong>straceni</strong>. Gdy przeciwnik objęty Żelazną Dziewicą umiera, zyskujesz Fortyfikację równą <strong>5% maksymalnego zdrowia</strong>."],["Vulnerable","Przeciwnicy objęci Żelazną Dziewicą stają się <strong>Vulnerable</strong>."],["Blood Maiden","Żelazna Dziewica staje się również umiejętnością Krwi. Przeciwnicy otrzymujący od niej obrażenia mają <strong>5%</strong> szans na utworzenie Kuli Krwi. Użycie Żelaznej Dziewicy zbiera do <strong>4 Kul Krwi</strong> z obszaru działania i powoduje ich eksplozję za <strong>150% obrażeń</strong>."]]],
["Fala Krwi","1/15",[["Hematolagnia","Fala Krwi staje się umiejętnością Główną i nie ma czasu odnowienia, ale kosztuje <strong>70 Esencji</strong>. Przywołuje krótszą falę zadającą <strong>300% obrażeń</strong> i nie odrzuca już przeciwników."],["Overpower","Normalnie użycie Fali Krwi przepełnia Overpower o <strong>2</strong>. Przy wariancie Hematolagnia zamiast tego Fala Krwi zapewnia <strong>1 kumulację Overpower</strong> i zwiększa maksymalną liczbę kumulacji Overpower o <strong>2</strong>."],["Damage Reduction","Użycie Fali Krwi zapewnia <strong>10% redukcji obrażeń</strong> na <strong>10 sek.</strong>."]]],
["Rozdarcie","1/15",[["Inexorable Reaper","Rozdarcie staje się również umiejętnością Mobilności i zamiast zwykłego użycia wykonujesz <strong>doskok do przodu, aby zaatakować</strong>."],["Cost Reduction","Koszt Esencji Rozdarcia zostaje zmniejszony o <strong>4</strong>."]]],
["Wybuch Zwłok","1/15",[["Essence Generation","Użycie Wybuchu Zwłok generuje <strong>15 Esencji</strong>."],["Corpse Efficiency","Zwłoki zużyte przez Wybuch Zwłok mogą zostać zużyte <strong>1 dodatkowy raz</strong>."]]]
];
const itemsData=[
{n:7,name:"Hełm",aff:["Maksymalne zdrowie","Pancerz","Inteligencja","Esencja na sekundę"],ga:[],mw:[],temper:"Maksymalna liczba kumulacji Animuszu",socket:"2× Topaz"},
{n:8,name:"Napierśnik",aff:["Maksymalne zdrowie","Inteligencja","Odporność na wszystkie żywioły","Pancerz"],ga:[0],mw:[],temper:"Maksymalna liczba kumulacji Animuszu",socket:"Runy: Nagu + Wat"},
{n:5,name:"Rękawice",aff:["Szybkość ataku","Szansa na trafienie krytyczne","Mnożnik obrażeń od trafień krytycznych","Mnożnik obrażeń zadawanych odsłoniętym celom"],ga:[2],mw:[],temper:"Obrażenia za każdą kumulację przytłoczenia",socket:""},
{n:6,name:"Spodnie",aff:["Maksymalne zdrowie","Inteligencja","Pancerz","Odporność na wszystkie żywioły"],ga:[],mw:[],temper:"Maksymalna liczba kumulacji Animuszu",socket:"Runy: Igni + Teb"},
{n:9,name:"Buty",aff:["Inteligencja","Szybkość ruchu","Pancerz","Esencja na sekundę"],ga:[1],mw:[],temper:"Szybkość ruchu",socket:""},
{n:3,name:"Amulet",aff:["Mnożnik obrażeń zadawanych odsłoniętym celom","Mnożnik obrażeń od trafień krytycznych","Mnożnik obrażeń Cienia","Inteligencja"],ga:[],mw:[],temper:"Maksymalna liczba kumulacji Animuszu",socket:"Diament"},
{n:1,name:"Pierścień 1",aff:["Szansa na trafienie krytyczne","Mnożnik obrażeń zadawanych odsłoniętym celom","Mnożnik obrażeń Cienia","Maksymalne zdrowie"],ga:[0],mw:[0],temper:"Obrażenia od umiejętności Przywołania",socket:"Diament"},
{n:4,name:"Pierścień 2",aff:["Szansa na trafienie krytyczne","Mnożnik obrażeń zadawanych odsłoniętym celom","Mnożnik obrażeń Cienia","Maksymalne zdrowie"],ga:[0],mw:[0],temper:"Obrażenia od umiejętności Przywołania",socket:"Diament"},
{n:2,name:"Broń",aff:["Minimalne obrażenia broni","Inteligencja","Mnożnik obrażeń Cienia","Mnożnik obrażeń od trafień krytycznych"],ga:[0],mw:[0],temper:"Szansa na trafienie krytyczne",socket:"2× Ametyst"}
];
const aspectsData=[
{n:7,slot:"Hełm",name:"Aspekt Niebiańskiej Siły",source:"Losowy łup",dungeon:false},
{n:8,slot:"Napierśnik",name:"Aspekt Wzmocnionych Kości",source:"Losowy łup",dungeon:false},
{n:5,slot:"Rękawice",name:"Aspekt Amplifikacji Obrażeń",source:"Losowy łup",dungeon:false},
{n:6,slot:"Spodnie",name:"Aspekt Kowadła Glynna",source:"Losowy łup",dungeon:false},
{n:9,slot:"Buty",name:"Aspekt Okrawanego Mięsa",source:"Losowy łup",dungeon:false},
{n:3,slot:"Amulet",name:"Piekielnie Dowódczy Aspekt",source:"Losowy łup",dungeon:false},
{n:1,slot:"Pierścień 1",name:"Aspekt Smugi Cienia",source:"Losowy łup",dungeon:false},
{n:4,slot:"Pierścień 2",name:"Aspekt Oszalałej Agresji",source:"Losowy łup",dungeon:false},
{n:2,slot:"Broń",name:"Aspekt Reanimacji",source:"Losowy łup",dungeon:false}
];
const earlyAspectsView=document.querySelector('[data-profile-panel="kasia-early"] [data-tab-view="aspects"]');
if(earlyAspectsView){earlyAspectsView.querySelectorAll('.build-meta,.aspect-note').forEach(el=>el.remove());}
const aspectUiStyle=document.createElement('style');
aspectUiStyle.textContent='.aspect-num{display:none!important}.aspect-head{display:block!important}';
document.head.appendChild(aspectUiStyle);

const talismansData=[
{name:"Zestaw Czarnego Całunu",bonus:"Premia do rang umiejętności Ciemności"},
{name:"Legendarna Pieczęć Horadrimów",bonus:"Liczba miejsc na Talizmany"}
];
const earlyTalismansView=document.querySelector('[data-profile-panel="kasia-early"] [data-tab-view="extras"]');
if(earlyTalismansView){
  earlyTalismansView.innerHTML='<div class="talisman-tree">'+talismansData.map(it=>`<article class="talisman-card"><div class="talisman-head"><div class="talisman-name">${it.name}</div></div><div class="talisman-bonus">${it.bonus}</div></article>`).join('')+'</div>';
}
const extrasNav=document.querySelector('.navbtn[data-tab="extras"]');
if(extrasNav){extrasNav.innerHTML='<b>✧</b>Talizmany';}
const mercNav=document.querySelector('.navbtn[data-tab="merc"]');
if(mercNav){mercNav.innerHTML='<b>♜</b>Paragony';}
const talismanUiStyle=document.createElement('style');
talismanUiStyle.textContent='.talisman-tree{max-width:760px;margin:0 auto;display:grid;gap:14px}.talisman-card{background:#151310;border:1px solid #51483d;border-radius:16px;overflow:hidden;box-shadow:0 4px 14px rgba(0,0,0,.28)}.talisman-head{display:block;padding:13px 14px;background:#ffe8b5;border-bottom:1px solid #d8b873;color:#2a2118}.talisman-name{font-size:.96rem;font-weight:950;line-height:1.25}.talisman-bonus{padding:13px 14px;color:#efe7df;font-size:.88rem;font-weight:800;line-height:1.35}';
document.head.appendChild(talismanUiStyle);

const earlyParagonView=document.querySelector('[data-profile-panel="kasia-early"] [data-tab-view="merc"]');
const paragonBoards=[
{name:"Tablica startowa",glyph:"Wojownik",src:"assets/paragony/Tablica01.jpg"},
{name:"Przywódca Kultu",glyph:"Odrodzicielstwo",src:"assets/paragony/Tablica02.jpg"}
];
if(earlyParagonView){
  earlyParagonView.innerHTML='<div class="paragon-tree">'+paragonBoards.map(it=>`<article class="paragon-card"><div class="paragon-head"><div class="paragon-title">${it.name}</div><div class="paragon-glyph">Glif: ${it.glyph}</div></div><button class="paragon-image-button" type="button" data-src="${it.src}" data-alt="${it.name} — glif ${it.glyph}" aria-label="Otwórz ${it.name} na pełnym ekranie"><img class="paragon-image" src="${it.src}" alt="${it.name} — glif ${it.glyph}"></button></article>`).join('')+'</div>';
}
const paragonStyle=document.createElement('style');
paragonStyle.textContent='.paragon-tree{max-width:760px;margin:0 auto;display:grid;gap:18px}.paragon-card{background:#151310;border:1px solid #51483d;border-radius:18px;overflow:hidden;box-shadow:0 4px 14px rgba(0,0,0,.28)}.paragon-head{padding:13px 14px;background:#ffe8b5;border-bottom:1px solid #d8b873;color:#2a2118}.paragon-title{font-size:1rem;font-weight:950;line-height:1.25}.paragon-glyph{margin-top:4px;font-size:.82rem;font-weight:850;color:#5b4634}.paragon-image-button{display:block;width:100%;padding:0;border:0;background:#0b0a0a;cursor:zoom-in}.paragon-image{display:block;width:100%;height:auto}.paragon-lightbox{position:fixed;inset:0;z-index:9999;background:#050505;display:none;overflow:hidden;touch-action:none}.paragon-lightbox.open{display:block}.paragon-lightbox-viewport{position:absolute;inset:0;overflow:hidden;touch-action:none}.paragon-lightbox-img{position:absolute;left:50%;top:50%;width:min(96vw,934px);height:auto;max-width:none;max-height:none;transform-origin:center center;will-change:transform;user-select:none;-webkit-user-drag:none}.paragon-close{position:absolute;right:14px;top:max(14px,env(safe-area-inset-top));z-index:3;width:44px;height:44px;border:1px solid #75624f;border-radius:50%;background:rgba(20,18,16,.9);color:#fff;font-size:1.55rem;font-weight:800;line-height:1;display:grid;place-items:center}.paragon-zoom-hint{position:absolute;left:50%;bottom:max(18px,env(safe-area-inset-bottom));transform:translateX(-50%);z-index:3;background:rgba(20,18,16,.82);border:1px solid #5b5046;color:#e7ddd5;border-radius:999px;padding:7px 11px;font-size:.72rem;font-weight:800;white-space:nowrap;pointer-events:none}';
document.head.appendChild(paragonStyle);

if(earlyParagonView){
  const overlay=document.createElement('div');
  overlay.className='paragon-lightbox';
  overlay.innerHTML='<div class="paragon-lightbox-viewport"><img class="paragon-lightbox-img" src="assets/paragony/Tablica01.jpg" alt="Tablica startowa — glif Wojownik"></div><button class="paragon-close" type="button" aria-label="Zamknij">×</button><div class="paragon-zoom-hint">Przybliż dwoma palcami · przeciągnij, aby przesunąć</div>';
  document.body.appendChild(overlay);
  const thumbs=earlyParagonView.querySelectorAll('.paragon-image-button');
  const viewport=overlay.querySelector('.paragon-lightbox-viewport');
  const img=overlay.querySelector('.paragon-lightbox-img');
  const close=overlay.querySelector('.paragon-close');
  const pointers=new Map();
  let scale=1,tx=0,ty=0,startScale=1,startTx=0,startTy=0,startDist=0,startMid={x:0,y:0},singleStart={x:0,y:0};
  const clamp=(v,min,max)=>Math.max(min,Math.min(max,v));
  const render=()=>{img.style.transform=`translate(-50%,-50%) translate(${tx}px,${ty}px) scale(${scale})`;};
  const midpoint=(a,b)=>({x:(a.x+b.x)/2,y:(a.y+b.y)/2});
  const distance=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);
  const reset=()=>{scale=1;tx=0;ty=0;pointers.clear();render();};
  const open=button=>{img.src=button.dataset.src;img.alt=button.dataset.alt;reset();overlay.classList.add('open');};
  const shut=()=>{overlay.classList.remove('open');reset();};
  thumbs.forEach(button=>button.addEventListener('click',()=>open(button)));
  close.addEventListener('click',shut);
  overlay.addEventListener('click',e=>{if(e.target===overlay)shut();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&overlay.classList.contains('open'))shut();});
  viewport.addEventListener('pointerdown',e=>{
    viewport.setPointerCapture(e.pointerId);
    pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});
    if(pointers.size===1){singleStart={x:e.clientX,y:e.clientY};startTx=tx;startTy=ty;}
    if(pointers.size===2){const [a,b]=[...pointers.values()];startDist=distance(a,b);startMid=midpoint(a,b);startScale=scale;startTx=tx;startTy=ty;}
  });
  viewport.addEventListener('pointermove',e=>{
    if(!pointers.has(e.pointerId))return;
    pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});
    if(pointers.size===2){const [a,b]=[...pointers.values()];const d=distance(a,b);const m=midpoint(a,b);scale=clamp(startScale*(d/startDist),1,5);tx=startTx+(m.x-startMid.x);ty=startTy+(m.y-startMid.y);render();}
    else if(pointers.size===1&&scale>1){tx=startTx+(e.clientX-singleStart.x);ty=startTy+(e.clientY-singleStart.y);render();}
  });
  const endPointer=e=>{pointers.delete(e.pointerId);if(pointers.size===1){const p=[...pointers.values()][0];singleStart={x:p.x,y:p.y};startTx=tx;startTy=ty;}if(scale===1){tx=0;ty=0;render();}};
  viewport.addEventListener('pointerup',endPointer);
  viewport.addEventListener('pointercancel',endPointer);
  let lastTap=0;
  viewport.addEventListener('pointerup',()=>{const now=Date.now();if(now-lastTap<280&&pointers.size===0){scale=scale>1?1:2.5;tx=0;ty=0;render();}lastTap=now;});
}

const earlyEndgameView=document.querySelector('[data-profile-panel="kasia-early"] [data-tab-view="transition"]');
const endgameNav=document.querySelector('.navbtn[data-tab="transition"]');
const infoNav=document.querySelector('.navbtn[data-tab="sources"]');
if(endgameNav){endgameNav.innerHTML='<b>◆</b>Endgame';}
if(infoNav){infoNav.innerHTML='<b>✦</b>Odpryski';}
if(earlyEndgameView){
  const endgameUniques=["Podkorona","Bryczesy Krwawego Księżyca","Sanguivor, Ostrze Zira"];
  const endgameAspects=[
    {name:"Aspekt Niebiańskiej Siły",desc:"Źródło: Losowy łup"},
    {name:"Crushing Aspect",desc:"Kiedy jesteś ufortyfikowany, zadajesz o 65%[x] więcej obrażeń. Źródło: Losowy łup"},
    {name:"Aspekt Okrawanego Mięsa",desc:"Źródło: Losowy łup"},
    {name:"Trupożerczy Aspekt",desc:"Źródło: Losowy łup"},
    {name:"Aspekt Decyzyjnego Postanowienia",desc:"Źródło: Losowy łup"},
    {name:"Piekielnie Dowódczy Aspekt",desc:"Źródło: Losowy łup"}
  ];
  earlyEndgameView.innerHTML=`<div class="endgame-wrap">
    <article class="endgame-intro"><div class="endgame-intro-head">Kiedy przejść na build Endgame?</div><div class="endgame-intro-body">Przejdź na build Endgame dopiero wtedy, gdy masz <strong>wszystkie 3 wymagane unikaty</strong> oraz <strong>komplet poniższych aspektów</strong>. Do tego momentu graj obecnym buildem Early Endgame i odkładaj potrzebne przedmioty do skrytki.</div></article>
    <div class="endgame-section-title">3 wymagane unikaty</div>
    <div class="endgame-grid">${endgameUniques.map(name=>`<article class="endgame-card"><div class="endgame-card-head unique">Unikat</div><div class="endgame-card-name">${name}</div></article>`).join('')}</div>
    <div class="endgame-section-title">Wymagane aspekty</div>
    <div class="endgame-grid">${endgameAspects.map(it=>`<article class="endgame-card"><div class="endgame-card-head aspect">Aspekt</div><div class="endgame-card-name">${it.name}</div><div class="endgame-card-desc">${it.desc}</div></article>`).join('')}</div>
    <article class="endgame-ready">Masz wszystkie 3 unikaty i wszystkie aspekty? <strong>Możesz przełączyć się na Kasia Unique Endgame.</strong></article>
  </div>`;
}
const endgameStyle=document.createElement('style');
endgameStyle.textContent='.endgame-wrap{max-width:760px;margin:0 auto;display:grid;gap:14px}.endgame-intro,.endgame-card,.endgame-ready{background:#151310;border:1px solid #51483d;border-radius:16px;overflow:hidden;box-shadow:0 4px 14px rgba(0,0,0,.28)}.endgame-intro-head{padding:13px 14px;background:#ffe8b5;border-bottom:1px solid #d8b873;color:#2a2118;font-size:.98rem;font-weight:950}.endgame-intro-body{padding:13px 14px;color:#e8dfd8;font-size:.86rem;line-height:1.45}.endgame-intro-body strong{color:#ffd7b6}.endgame-section-title{margin-top:4px;padding:0 2px;color:#f1e8e1;font-size:.92rem;font-weight:950}.endgame-grid{display:grid;gap:10px}.endgame-card{padding:0}.endgame-card-head{padding:7px 12px;border-bottom:1px solid #40382f;font-size:.69rem;font-weight:950;letter-spacing:.06em;text-transform:uppercase}.endgame-card-head.unique{background:#211b14;color:#e4c892}.endgame-card-head.aspect{background:#21160f;color:#ef9b54}.endgame-card-name{padding:11px 13px 6px;color:#f3eee9;font-size:.91rem;font-weight:950;line-height:1.3}.endgame-card-desc{padding:0 13px 12px;color:#b7aba1;font-size:.8rem;line-height:1.4}.endgame-ready{padding:13px 14px;border-color:#725036;color:#dfd4ca;font-size:.86rem;line-height:1.4}.endgame-ready strong{color:#ffd0aa}';
document.head.appendChild(endgameStyle);


const sebaGearView=document.querySelector('[data-profile-panel="seba-endgame"] [data-tab-view="gear"]');
if(sebaGearView){
  const sebaStarterGear=[
    {slot:"Hełm",aspect:"Aspect of Arcane Ward",effect:"Umiejętności Mistrzostwa zapewniają 30% redukcji obrażeń, gdy ich efekt jest aktywny.",why:"Piorun Kulisty jest umiejętnością Mistrzostwa, więc defensywa działa naturalnie podczas walki.",affixes:[]},
    {slot:"Napierśnik",aspect:"Aspect of Concentration",effect:"Użycie umiejętności Przywołania zapewnia 30% redukcji obrażeń na 5 sek.",why:"To nasz legendarny zamiennik za Stealth. Hydra i Familiar pozwalają regularnie odświeżać efekt.",affixes:["Regeneracja many","Inteligencja","Maksymalne zdrowie","Pancerz"]},
    {slot:"Rękawice",aspect:"Aspect of Splintering Energy",effect:"Umiejętności Porażenia zyskują 180%[x] obrażeń; premia maleje przy kolejnych trafieniach.",why:"Zostawiamy aspekt Lurkina — bezpośrednio wzmacnia główne źródło obrażeń.",affixes:[]},
    {slot:"Spodnie",aspect:"Mage-Lord's Aspect",effect:"Trafienie umiejętnością Porażenia przeciwnika z bliska zapewnia 45% redukcji obrażeń na 6 sek.",why:"Ball Lightning gra blisko przeciwników, więc warunek łatwo utrzymać.",affixes:[]},
    {slot:"Buty",aspect:"Aspect of Shredding Blades",effect:"Obrażenia umiejętności Przywołania nakładają Vulnerable na 4 sek., a obrażenia przeciw Vulnerable rosną o 20%[x].",why:"Hydra i Familiar nakładają Vulnerable bez dokładania osobnej akcji do rotacji.",affixes:[]},
    {slot:"Amulet",aspect:"Lingering Aspect",effect:"Umiejętności Mistrzostwa zyskują 40%[x] obrażeń za każdą sekundę aktywności.",why:"Krążące Pioruny Kuliste pozostają aktywne, więc aspekt skaluje dokładnie naszą główną umiejętność.",affixes:[]},
    {slot:"Pierścień 1",aspect:"Prodigy's Aspect",effect:"Użycie umiejętności z czasem odnowienia zapewnia 30 regeneracji many na 4 sek.",why:"Jeden z głównych silników many — build regularnie używa Teleportu, Pancerza Lodu i innych cooldownów.",affixes:[]},
    {slot:"Pierścień 2",aspect:"Vulpine's Aspect",effect:"Podczas działania Bariery zyskujesz 25 podstawowego zasobu na sekundę.",why:"Pancerz Lodu zapewnia Barierę, więc dostajemy drugi mocny filar pod spamowanie Pioruna Kulistego.",affixes:[]},
    {slot:"Laska 2H",aspect:"Storm Splitter's Aspect",effect:"Niekanalizowane umiejętności Porażenia zadają 45%[x] więcej obrażeń i mają 15% szansy na ponowne uruchomienie przy rzuceniu.",why:"To nasz legendarny zamiennik za Insight — bezpośrednio wzmacnia Ball Lightning bez zmiany sposobu gry.",affixes:["Mnożnik obrażeń od trafień krytycznych","Mnożnik wszystkich obrażeń","Inteligencja","Maksymalne zdrowie"]}
  ];
  const renderSebaStarter=()=>'<div class="seba-gear-list">'+sebaStarterGear.map(it=>`<article class="seba-gear-card"><div class="seba-gear-head"><div class="seba-gear-slot">${it.slot}</div><div class="seba-gear-aspect">${it.aspect}</div></div><div class="seba-gear-body"><div class="seba-gear-effect">${it.effect}</div><div class="seba-gear-why"><strong>Dlaczego:</strong> ${it.why}</div>${it.affixes.length?`<div class="seba-affix-title">Afiksy</div><div class="seba-affixes">${it.affixes.map((a,i)=>`<div class="seba-affix"><span>${i+1}</span>${a}</div>`).join('')}</div>`:'<div class="seba-affix-pending">Afiksy uzupełnimy w kroku 2 z Mobalytics.</div>'}</div></article>`).join('')+'</div>';
  sebaGearView.innerHTML=`<div class="seba-gear-wrap">
    <div class="build-meta">Seba Endgame · Ball Lightning Zeus S15 · baza: Lurkin</div>
    <div class="seba-gear-tabs" role="tablist" aria-label="Wariant ekwipunku">
      <button class="seba-gear-tab active" type="button" data-seba-gear="starter">Starter</button>
      <button class="seba-gear-tab" type="button" data-seba-gear="ancestral">Ancestral</button>
      <button class="seba-gear-tab" type="button" data-seba-gear="mythic">Mythic</button>
    </div>
    <div class="seba-gear-panel active" data-seba-gear-panel="starter">${renderSebaStarter()}</div>
    <div class="seba-gear-panel" data-seba-gear-panel="ancestral"><article class="seba-empty"><strong>Ancestral</strong><br>Uzupełnimy w następnym kroku na podstawie wariantu Lurkina.</article></div>
    <div class="seba-gear-panel" data-seba-gear-panel="mythic"><article class="seba-empty"><strong>Mythic</strong><br>Uzupełnimy później jako finalny wariant buildu.</article></div>
  </div>`;
  const tabs=sebaGearView.querySelectorAll('.seba-gear-tab');
  const panels=sebaGearView.querySelectorAll('.seba-gear-panel');
  const openSebaGear=name=>{
    tabs.forEach(b=>b.classList.toggle('active',b.dataset.sebaGear===name));
    panels.forEach(p=>p.classList.toggle('active',p.dataset.sebaGearPanel===name));
    try{localStorage.setItem('diablo-seba-gear-variant',name)}catch(e){}
  };
  tabs.forEach(b=>b.addEventListener('click',()=>openSebaGear(b.dataset.sebaGear)));
  try{const saved=localStorage.getItem('diablo-seba-gear-variant');if(['starter','ancestral','mythic'].includes(saved))openSebaGear(saved)}catch(e){}
}
const sebaGearStyle=document.createElement('style');
sebaGearStyle.textContent='.seba-gear-wrap{max-width:760px;margin:0 auto}.seba-gear-tabs{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;margin:0 0 14px}.seba-gear-tab{border:1px solid #51483d;background:#171511;color:#b9ada4;border-radius:13px;padding:11px 8px;font-size:.82rem;font-weight:950;cursor:pointer}.seba-gear-tab.active{border-color:#c96e35;background:#2b1e17;color:#ffd0aa;box-shadow:0 0 0 1px rgba(217,121,53,.18) inset}.seba-gear-panel{display:none}.seba-gear-panel.active{display:block}.seba-gear-list{display:grid;gap:16px}.seba-gear-card{background:#151310;border:1px solid #51483d;border-radius:18px;overflow:hidden;box-shadow:0 4px 14px rgba(0,0,0,.28)}.seba-gear-head{padding:13px 14px;background:#ffe8b5;border-bottom:1px solid #d8b873;color:#2a2118}.seba-gear-slot{font-size:1rem;font-weight:950}.seba-gear-aspect{margin-top:4px;font-size:.82rem;font-weight:900;color:#65472f}.seba-gear-body{padding:13px 14px}.seba-gear-effect{color:#efe7df;font-size:.86rem;font-weight:800;line-height:1.4}.seba-gear-why{margin-top:8px;color:#b8aca3;font-size:.8rem;line-height:1.42}.seba-gear-why strong{color:#d9c7b8}.seba-affix-title{margin-top:13px;color:#d97935;font-size:.69rem;letter-spacing:.06em;text-transform:uppercase;font-weight:950}.seba-affixes{display:grid;gap:7px;margin-top:7px}.seba-affix{display:grid;grid-template-columns:25px minmax(0,1fr);gap:9px;align-items:center;background:#171511;border:1px solid #403a33;border-radius:11px;padding:9px 10px;color:#efe7df;font-size:.84rem;font-weight:800}.seba-affix span{width:24px;height:24px;border-radius:7px;background:#2a211b;border:1px solid #654833;color:#e8b58e;display:grid;place-items:center;font-size:.7rem;font-weight:900}.seba-affix-pending{margin-top:12px;color:#887d75;font-size:.76rem;font-style:italic}.seba-empty{background:#151310;border:1px solid #51483d;border-radius:16px;padding:16px;color:#b7aba1;font-size:.86rem;line-height:1.45}.seba-empty strong{color:#f1e8e1}';
document.head.appendChild(sebaGearStyle);


const sebaGearOnlyView=document.querySelector('[data-profile-panel="seba-endgame"] [data-tab-view="gear"]');
if(sebaGearOnlyView){
  const starterGearOnly=[
    {slot:"Hełm",affixes:["Redukcja czasu odnowienia","Inteligencja","Maksymalne zdrowie","Regeneracja many"]},
    {slot:"Napierśnik",affixes:["Regeneracja many","Inteligencja","Maksymalne zdrowie","Pancerz"]},
    {slot:"Rękawice",affixes:["Mnożnik obrażeń od trafień krytycznych","Mnożnik obrażeń zadawanych odsłoniętym celom","Mnożnik obrażeń od Błyskawic","Inteligencja"]},
    {slot:"Spodnie",affixes:["Inteligencja","Maksymalne zdrowie","Pancerz","Regeneracja many"]},
    {slot:"Buty",affixes:["Inteligencja","Szybkość ruchu","Rangi Pioruna Kulistego"]},
    {slot:"Amulet",affixes:["Mnożnik obrażeń zadawanych odsłoniętym celom","Mnożnik obrażeń od trafień krytycznych","Mnożnik obrażeń od Błyskawic","Inteligencja"]},
    {slot:"Pierścień 1",affixes:["Mnożnik obrażeń zadawanych odsłoniętym celom","Mnożnik obrażeń od Błyskawic","Mnożnik obrażeń od trafień krytycznych","Inteligencja"]},
    {slot:"Pierścień 2",affixes:["Mnożnik obrażeń zadawanych odsłoniętym celom","Mnożnik obrażeń od Błyskawic","Mnożnik obrażeń od trafień krytycznych","Inteligencja"]},
    {slot:"Laska 2H",affixes:["Mnożnik obrażeń od trafień krytycznych","Mnożnik wszystkich obrażeń","Inteligencja","Maksymalne zdrowie"]}
  ];
  const starterPanel=sebaGearOnlyView.querySelector('[data-seba-gear-panel="starter"]');
  if(starterPanel){
    starterPanel.innerHTML='<div class="seba-gear-list">'+starterGearOnly.map(it=>`<article class="seba-gear-card"><div class="seba-gear-head"><div class="seba-gear-slot">${it.slot}</div></div><div class="seba-gear-body">${it.affixes.length?`<div class="seba-affix-title">Afiksy</div><div class="seba-affixes">${it.affixes.map((a,i)=>`<div class="seba-affix"><span>${i+1}</span>${a}</div>`).join('')}</div>`:'<div class="seba-affix-pending">Afiksy uzupełnimy w kroku 2 z Mobalytics.</div>'}</div></article>`).join('')+'</div>';
  }
}

const sebaAspectsView=document.querySelector('[data-profile-panel="seba-endgame"] [data-tab-view="aspects"]');
if(sebaAspectsView){
  const sebaStarterAspects=[
    {slot:"Hełm",name:"Aspect of Arcane Ward",effect:"Umiejętności Mistrzostwa zapewniają 30% redukcji obrażeń, gdy ich efekt jest aktywny.",why:"Piorun Kulisty jest umiejętnością Mistrzostwa, więc defensywa działa naturalnie podczas walki."},
    {slot:"Napierśnik",name:"Aspect of Concentration",effect:"Użycie umiejętności Przywołania zapewnia 30% redukcji obrażeń na 5 sek.",why:"Nasz legendarny zamiennik za Stealth. Hydra i Familiar pozwalają regularnie odświeżać efekt."},
    {slot:"Rękawice",name:"Aspect of Splintering Energy",effect:"Umiejętności Porażenia zyskują 180%[x] obrażeń; premia maleje przy kolejnych trafieniach.",why:"Aspekt z buildu Lurkina — bezpośrednio wzmacnia główne źródło obrażeń."},
    {slot:"Spodnie",name:"Mage-Lord's Aspect",effect:"Trafienie umiejętnością Porażenia przeciwnika z bliska zapewnia 45% redukcji obrażeń na 6 sek.",why:"Ball Lightning gra blisko przeciwników, więc warunek łatwo utrzymać."},
    {slot:"Buty",name:"Aspect of Shredding Blades",effect:"Obrażenia umiejętności Przywołania nakładają Vulnerable na 4 sek., a obrażenia przeciw Vulnerable rosną o 20%[x].",why:"Hydra i Familiar nakładają Vulnerable bez dokładania osobnej akcji do rotacji."},
    {slot:"Amulet",name:"Lingering Aspect",effect:"Umiejętności Mistrzostwa zyskują 40%[x] obrażeń za każdą sekundę aktywności.",why:"Krążące Pioruny Kuliste pozostają aktywne, więc aspekt skaluje główną umiejętność."},
    {slot:"Pierścień 1",name:"Prodigy's Aspect",effect:"Użycie umiejętności z czasem odnowienia zapewnia 30 regeneracji many na 4 sek.",why:"Jeden z głównych silników many — build regularnie używa cooldownów."},
    {slot:"Pierścień 2",name:"Vulpine's Aspect",effect:"Podczas działania Bariery zyskujesz 25 podstawowego zasobu na sekundę.",why:"Pancerz Lodu zapewnia Barierę, więc to drugi mocny filar pod spamowanie Pioruna Kulistego."},
    {slot:"Laska 2H",name:"Storm Splitter's Aspect",effect:"Niekanalizowane umiejętności Porażenia zadają 45%[x] więcej obrażeń i mają 15% szansy na ponowne uruchomienie przy rzuceniu.",why:"Nasz legendarny zamiennik za Insight — wzmacnia Ball Lightning bez zmiany sposobu gry."}
  ];
  sebaAspectsView.innerHTML='<div class="build-meta">Seba Endgame · Starter 0 unikatów</div><div class="aspect-tree">'+sebaStarterAspects.map(it=>`<article class="aspect-card"><div class="aspect-head"><div class="aspect-slot">${it.slot}</div></div><div class="aspect-body"><div class="aspect-name">${it.name}</div><div class="seba-aspect-effect">${it.effect}</div><div class="seba-aspect-why"><strong>Dlaczego:</strong> ${it.why}</div></div></article>`).join('')+'</div>';
}
const sebaAspectStyle=document.createElement('style');
sebaAspectStyle.textContent='.seba-aspect-effect{margin-top:7px;color:#d7cdc5;font-size:.83rem;font-weight:800;line-height:1.42}.seba-aspect-why{margin-top:7px;color:#a99d95;font-size:.79rem;line-height:1.4}.seba-aspect-why strong{color:#d9c7b8}';
document.head.appendChild(sebaAspectStyle);


const sebaAquaStyle=document.createElement('style');
sebaAquaStyle.textContent='[data-profile-panel="seba-endgame"] .seba-gear-head,[data-profile-panel="seba-endgame"] .aspect-head,[data-profile-panel="seba-endgame"] .skill-card-head,[data-profile-panel="seba-endgame"] .talisman-head,[data-profile-panel="seba-endgame"] .paragon-head,[data-profile-panel="seba-endgame"] .endgame-intro-head{background:#1d4648!important;border-bottom-color:#2f6f72!important;color:#d8f4f2!important}[data-profile-panel="seba-endgame"] .seba-gear-slot,[data-profile-panel="seba-endgame"] .aspect-slot,[data-profile-panel="seba-endgame"] .skill-card-title,[data-profile-panel="seba-endgame"] .talisman-name,[data-profile-panel="seba-endgame"] .paragon-title,[data-profile-panel="seba-endgame"] .paragon-glyph{color:#d8f4f2!important;font-weight:600!important}[data-profile-panel="seba-endgame"] .seba-gear-aspect{color:#8fc9c7}[data-profile-panel="seba-endgame"] .seba-gear-tab.active{border-color:#397f82;background:#162c2e;color:#bfe7e5;box-shadow:0 0 0 1px rgba(57,127,130,.16) inset}[data-profile-panel="seba-endgame"] .seba-affix-title{color:#6fb8b5;font-weight:600!important}[data-profile-panel="seba-endgame"] .seba-affix{font-weight:400!important}[data-profile-panel="seba-endgame"] .seba-affix span{border-color:#356a6c;color:#9fd2cf;background:#142729;font-weight:600!important}.profilebtn[data-profile="seba-endgame"].active{border-color:#397f82;background:#162c2e;color:#bfe7e5;box-shadow:0 0 0 1px rgba(57,127,130,.16) inset}';
document.head.appendChild(sebaAquaStyle);


const earlySoulSplintersView=document.querySelector('[data-profile-panel="kasia-early"] [data-tab-view="sources"]');
if(earlySoulSplintersView){
  const soulSplinters=[
    {
      name:"Odprysk Piekielnego Ognia",
      note:"Wczesny zestaw po 70. poziomie",
      effect:"+35 pkt. odporności na wszystkie żywioły. Zadajesz o 20%[x] więcej obrażeń, ale tracisz 100% szansy na trafienie krytyczne.",
      why:"Daje duży, prosty mnożnik obrażeń bez kary do Esencji, ruchu ani odporności."
    },
    {
      name:"Odprysk Czarnego Kamienia Dusz",
      note:"Wczesny zestaw po 70. poziomie",
      effect:"+7 do wszystkich współczynników. Zabijanie wrogów pochłania duszę na 10 sek. Każda dusza zwiększa zadawane obrażenia o 1,0%, ale także zwiększa otrzymywane obrażenia o 1%. Efekt kumuluje się do 200 razy i nie odświeża czasu trwania.",
      why:"Skaluje obrażenia podczas czyszczenia grup bez zwiększania kosztu Esencji ani spowalniania postaci."
    },
    {
      name:"Odprysk Potępienia",
      note:"Używaj najlepszej posiadanej jakości",
      effect:"Zabicie zgrai elitarnych wrogów zwiększa Potworną Siłę o 1 oraz zdobywane doświadczenie o 25%. Czas działania rośnie wraz z jakością odprysku.",
      why:"Po 70. poziomie nadal przyspiesza rozwój Paragonów, a nie nakłada kary do Esencji, szybkości ruchu ani odporności."
    }
  ];
  earlySoulSplintersView.innerHTML='<div class="soul-wrap"><div class="build-meta">Kasia Early Endgame · Odpryski Duszy do biżuterii</div><div class="soul-note">Stały zestaw po 70. poziomie. Nie pokazujemy tutaj Odprysku Zła z Planów Wojennych.</div><div class="soul-grid">'+soulSplinters.map(it=>`<article class="soul-card"><div class="soul-head"><div class="soul-name">${it.name}</div><div class="soul-sub">${it.note}</div></div><div class="soul-body"><div class="soul-effect">${it.effect}</div><div class="soul-why"><strong>Dlaczego:</strong> ${it.why}</div></div></article>`).join('')+'</div></div>';
}
const soulStyle=document.createElement('style');
soulStyle.textContent='.soul-wrap{max-width:760px;margin:0 auto}.soul-note{margin:0 2px 13px;color:#9f948c;font-size:.77rem;line-height:1.4}.soul-grid{display:grid;gap:14px}.soul-card{background:#151310;border:1px solid #51483d;border-radius:16px;overflow:hidden;box-shadow:0 4px 14px rgba(0,0,0,.28)}.soul-head{padding:13px 14px;background:#ffe8b5;border-bottom:1px solid #d8b873;color:#2a2118}.soul-name{font-size:.96rem;font-weight:600;line-height:1.25}.soul-sub{margin-top:4px;font-size:.75rem;font-weight:600;color:#6c5642}.soul-body{padding:13px 14px}.soul-effect{color:#e8dfd8;font-size:.84rem;line-height:1.45}.soul-why{margin-top:8px;color:#a99d95;font-size:.79rem;line-height:1.42}.soul-why strong{color:#d9c7b8;font-weight:600}';
document.head.appendChild(soulStyle);
