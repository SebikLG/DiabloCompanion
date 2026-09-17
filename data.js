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
{n:1,name:"Berú Czarnego Całunu",bonus:"Premia do rang umiejętności Ciemności"},
{n:2,name:"Fer Czarnego Całunu",bonus:"Premia do rang umiejętności Ciemności"},
{n:3,name:"Linta Czarnego Całunu",bonus:"Premia do rang umiejętności Ciemności"},
{n:4,name:"Mlor Czarnego Całunu",bonus:"Premia do rang umiejętności Ciemności"},
{n:5,name:"Phoba Czarnego Całunu",bonus:"Premia do rang umiejętności Ciemności"},
{n:6,name:"Legendarna Pieczęć Horadrimów",bonus:"Liczba miejsc na Talizmany"}
];
const earlyTalismansView=document.querySelector('[data-profile-panel="kasia-early"] [data-tab-view="extras"]');
if(earlyTalismansView){
  earlyTalismansView.innerHTML='<div class="talisman-tree">'+talismansData.map(it=>`<article class="talisman-card"><div class="talisman-head"><span class="talisman-num">${it.n}</span><div class="talisman-name">${it.name}</div></div><div class="talisman-bonus">${it.bonus}</div></article>`).join('')+'</div>';
}
const extrasNav=document.querySelector('.navbtn[data-tab="extras"]');
if(extrasNav){extrasNav.innerHTML='<b>✧</b>Talizmany';}
const talismanUiStyle=document.createElement('style');
talismanUiStyle.textContent='.talisman-tree{max-width:760px;margin:0 auto;display:grid;gap:14px}.talisman-card{background:#151310;border:1px solid #51483d;border-radius:16px;overflow:hidden;box-shadow:0 4px 14px rgba(0,0,0,.28)}.talisman-head{display:grid;grid-template-columns:34px minmax(0,1fr);gap:11px;align-items:center;padding:13px 14px;background:#ffe8b5;border-bottom:1px solid #d8b873;color:#2a2118}.talisman-num{width:30px;height:30px;border-radius:9px;background:#3b291d;color:#ffe8b5;display:grid;place-items:center;font-size:.8rem;font-weight:950}.talisman-name{font-size:.96rem;font-weight:950;line-height:1.25}.talisman-bonus{padding:13px 14px;color:#efe7df;font-size:.88rem;font-weight:800;line-height:1.35}';
document.head.appendChild(talismanUiStyle);
