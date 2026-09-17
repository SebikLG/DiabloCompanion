const skillsData=[
["Szkieletowy Mag","15/15",[["Coven","Maksymalna liczba przywołanych Szkieletowych Magów zostaje zwiększona o <strong>2</strong>."],["Duration Damage Bonus","Szkieletowi Magowie zadają o <strong>15%[x]</strong> więcej obrażeń. Premia rośnie o <strong>1% na sekundę</strong>, przez którą Mag pozostaje przy życiu, maksymalnie do <strong>25%[x]</strong>."],["Crowd Control Damage Bonus","Szkieletowi Magowie zadają o <strong>30%[x]</strong> więcej obrażeń przeciwnikom znajdującym się pod wpływem efektów kontroli tłumu."]]],
["Szkieletowy Wojownik","15/15",[["Litany of Death","Jeśli wszyscy Szkieletowi Wojownicy są już przywołani, umiejętność na krótko przywołuje zamiast nich Szkieletowego Kapłana. Kapłan wzmacnia stronników przez <strong>8 sek.</strong>, zwiększa ich szansę na trafienie krytyczne o <strong>15%[+]</strong> i w tym czasie leczy ich łącznie za <strong>100% maksymalnego zdrowia</strong>."],["Damage Bonus","Wydanie rozkazu Szkieletowym Wojownikom sprawia, że przez <strong>10 sek.</strong> zadają o <strong>25%[x]</strong> więcej obrażeń."],["Resolve","Wydanie rozkazu Szkieletowym Wojownikom zapewnia <strong>3 kumulacje Resolve</strong>."]]],
["Golem","15/15",[["Gargantua","Przywołujesz większego Golema z aurą dowodzenia, która zwiększa szybkość używania umiejętności i szybkość ruchu pozostałych stronników o <strong>20%[x]</strong>."],["Resolve, Overpower, or Ferocity","Wydanie rozkazu Golemowi zapewnia <strong>3 kumulacje</strong> Resolve, Overpower albo Ferocity — zależnie od tego, czy używasz odpowiednio Golema Kościanego, Krwawego czy Żelaznego."],["Unstoppable","Wydanie rozkazu Golemowi zapewnia ci również efekt <strong>Unstoppable na 3 sek.</strong>."]]],
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
{n:1,slot:"Pierścień 1",name:"Aspekt Smugi Cienia",source:"Podziemia: Ul · Scosglen",dungeon:true},
{n:4,slot:"Pierścień 2",name:"Aspekt Oszalałej Agresji",source:"Losowy łup",dungeon:false},
{n:2,slot:"Broń",name:"Aspekt Reanimacji",source:"Podziemia: Knieja Aldura · Scosglen",dungeon:true}
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
