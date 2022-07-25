/* by Jayden 2022.1.01 */

var r_text = new Array ();
var r_pm = new Array ();
var r_badpm = new Array ();
var r_pname = new Array ();
let today = new Date();
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
let dateTime = date+' '+time;
let pmanswer = '';
let hibapont = 0;
let pm = '';
let fix = '';
let answered = false;
let pname = '';
let goodanswers = 0;
let adminszint = 1;




let pm1 = `<p id="pname"></p>
<h3 id="pm">Szia, összebuggolt a kocsim egy másikkal kaszinó előtt, tudsz adni egy fixet?</h3>
<div id="buttongrid">
<button class="button" onclick="fixveh(); goodanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">Fix</button>
<button class="button" onclick="agyogyit(); badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">agyogyit</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover();  alevel();">asegit</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover();  alevel();">unflip</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover();  alevel();">vhspawn</button>
<button class="button" onclick="kickanswer(); addhibapont(); getcurrentpname(); getaname(); getpname(); gameover();  alevel();">kick</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">adminjail</button>
<button class="button" onclick="bananswer(); addhibapont(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">ban</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">lerobbant</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">get</button>`;

let pm2 = `<p id="pname"></p>
<h3 id="pm">Szia, belebuggolt a kocsim az oszlopba, tudsz adni egy fixet?</h3>
<div id="buttongrid">
<button class="button" onclick="fixveh(); goodanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">Fix</button>
<button class="button" onclick="agyogyit(); badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">agyogyit</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">asegit</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">unflip</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">vhspawn</button>
<button class="button" onclick="kickanswer(); addhibapont(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">kick</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">adminjail</button>
<button class="button" onclick="bananswer(); addhibapont(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">ban</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">lerobbant</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">get</button>`;

let pm3 = `<p id="pname"></p> <h3 id="pm">Szia, bugg miatt meghaltam. Itt a bizonyíték, kérlek less rá. https://imgur.com/a/j5A3uqi</h3>
<div id="buttongrid">
<button class="button" onclick="fixveh(); badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">Fix</button>
<button class="button" onclick="agyogyit(); badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">agyogyit</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">asegit</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">unflip</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">vhspawn</button>
<button class="button" onclick="kickanswer(); addhibapont(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">kick</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">adminjail</button>
<button class="button" onclick="bananswer(); addgoodanswers(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">ban</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">lerobbant</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">get</button>`;

let pm4 = `<p id="pname"></p> <h3 id="pm">Szia, kigeteled a kocsimat a vízből?</h3>
<div id="buttongrid">
<button class="button" onclick="fixveh(); badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">Fix</button>
<button class="button" onclick="agyogyit(); badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">agyogyit</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">asegit</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">unflip</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">vhspawn</button>
<button class="button" onclick="kickanswer(); addhibapont(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">kick</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">adminjail</button>
<button class="button" onclick="bananswer(); addhibapont(); getcurrentpname(); getaname(); getpname(); gameover() alevel();">ban</button>
<button class="button" onclick="goodanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">lerobbant</button>
<button class="button" onclick="goodanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">get</button>`;

let pm5 = `<p id="pname"></p> <h3 id="pm">Szia, bug miatt eltört a kezem, segítesz?</h3>
<div id="buttongrid">
<button class="button" onclick="fixveh(); badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">Fix</button>
<button class="button" onclick="agyogyit(); goodanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">agyogyit</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">asegit</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">unflip</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">vhspawn</button>
<button class="button" onclick="kickanswer();addhibapont(); getcurrentpname(); getaname(); getpname(); gameover(); alevel(); alevel();">kick</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">adminjail</button>
<button class="button" onclick="bananswer(); addhibapont(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">ban</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">lerobbant</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">get</button>`;

let pm6 = `<p id="pname"></p> <h3 id="pm">Rohadj meg</h3>
<div id="buttongrid">
<button class="button" onclick="fixveh(); badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">Fix</button>
<button class="button" onclick="agyogyit(); badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">agyogyit</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">asegit</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">unflip</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">vhspawn</button>
<button class="button" onclick="kickanswer(); addhibapont(); getcurrentpname(); getaname(); getpname(); gameover(); alevel(); alevel();">kick</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">adminjail</button>
<button class="button" onclick="bananswer(); addgoodanswers(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">ban</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">lerobbant</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">get</button>`;

let pm7 = `<p id="pname"></p> <h3 id="pm">Szia, PD-s vagyok és kidaráltak tudsz kocsit getelni?</h3>
<div id="buttongrid">
<button class="button" onclick="fixveh(); badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">Fix</button>
<button class="button" onclick="agyogyit(); badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">agyogyit</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">asegit</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">unflip</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">vhspawn</button>
<button class="button" onclick="kickanswer(); addhibapont(); getcurrentpname(); getaname(); getpname(); gameover(); alevel(); alevel();">kick</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">adminjail</button>
<button class="button" onclick="bananswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">ban</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">lerobbant</button>
<button class="button" onclick="goodanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">get</button>`;

let pm8 = `<p id="pname"></p> <h3 id="pm">Szia, el tudod fogadni a névváltásomat?</h3>
<div id="buttongrid">
<button class="button" onclick="fixveh(); badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">Fix</button>
<button class="button" onclick="agyogyit(); badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">agyogyit</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">asegit</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">unflip</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">vhspawn</button>
<button class="button" onclick="kickanswer(); addgoodanswers(); getcurrentpname(); getaname(); getpname(); gameover(); alevel(); alevel();">kick</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">adminjail</button>
<button class="button" onclick="bananswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">ban</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">lerobbant</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">get</button>`;

let pm9 = `<p id="pname"></p> <h3 id="pm">Csá főnök, kellene egy fix.</h3>
<div id="buttongrid">
<button class="button" onclick="fixveh(); badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">Fix</button>
<button class="button" onclick="agyogyit(); badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">agyogyit</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">asegit</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">unflip</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">vhspawn</button>
<button class="button" onclick="kickanswer(); addgoodanswers(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">kick</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">adminjail</button>
<button class="button" onclick="bananswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">ban</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">lerobbant</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">get</button>`;

let pm10 = `<p id="pname"></p> <h3 id="pm">Szia, el tudod fogadni haverom serial váltását?</h3>
<div id="buttongrid">
<button class="button" onclick="fixveh(); badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">Fix</button>
<button class="button" onclick="agyogyit(); badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">agyogyit</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">asegit</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">unflip</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">vhspawn</button>
<button class="button" onclick="kickanswer(); addgoodanswers(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">kick</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">adminjail</button>
<button class="button" onclick="bananswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">ban</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">lerobbant</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">get</button>`;

let pm11 = `<p id="pname"></p> <h3 id="pm">Szia, itt vagyok a hajóval a híd előtt, de nem fér át. Segítesz?</h3>
<div id="buttongrid">
<button class="button" onclick="fixveh(); badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">Fix</button>
<button class="button" onclick="agyogyit(); badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">agyogyit</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">asegit</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">unflip</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">vhspawn</button>
<button class="button" onclick="kickanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">kick</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">adminjail</button>
<button class="button" onclick="bananswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">ban</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">lerobbant</button>
<button class="button" onclick="goodanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">get</button>`;

let pm12 = `<p id="pname"></p> <h3 id="pm">Szia, felborult a kocsim. Kapok egy unflipet?</h3>
<div id="buttongrid">
<button class="button" onclick="fixveh(); badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">Fix</button>
<button class="button" onclick="agyogyit(); badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">agyogyit</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">asegit</button>
<button class="button" onclick="goodanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">unflip</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">vhspawn</button>
<button class="button" onclick="kickanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">kick</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">adminjail</button>
<button class="button" onclick="bananswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">ban</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">lerobbant</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">get</button>`;

let pm13 = `<p id="pname"></p> <h3 id="pm">Szia, nem tudom berakni a nagykeres kocsiba az árut, segítenél?</h3>
<div id="buttongrid">
<button class="button" onclick="fixveh(); badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">Fix</button>
<button class="button" onclick="agyogyit(); badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">agyogyit</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">asegit</button>
<button class="button" onclick="goodanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">unflip</button>
<button class="button" onclick="goodanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">vhspawn</button>
<button class="button" onclick="kickanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">kick</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">adminjail</button>
<button class="button" onclick="bananswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">ban</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">lerobbant</button>
<button class="button" onclick="goodanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">get</button>`;

let pm14 = `<p id="pname"></p> <h3 id="pm">Szia, egy játékos magáncélra használja a munkajárművet, segítesz?</h3>
<div id="buttongrid">
<button class="button" onclick="fixveh(); badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">Fix</button>
<button class="button" onclick="agyogyit(); badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">agyogyit</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">asegit</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">unflip</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">vhspawn</button>
<button class="button" onclick="kickanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">kick</button>
<button class="button" onclick="goodanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">adminjail</button>
<button class="button" onclick="bananswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">ban</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">lerobbant</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">get</button>`;

let pm15 = `<p id="pname"></p> <h3 id="pm">Szia, a 12-es idjű játékos a munkajárművel össze-vissza megy. Kezdenél vele valamit?</h3>
<div id="buttongrid">
<button class="button" onclick="fixveh(); badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">Fix</button>
<button class="button" onclick="agyogyit(); badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">agyogyit</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">asegit</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">unflip</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">vhspawn</button>
<button class="button" onclick="goodanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">kick</button>
<button class="button" onclick="goodanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">adminjail</button>
<button class="button" onclick="bananswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">ban</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">lerobbant</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">get</button>`;

let pm16 = `<p id="pname"></p> <h3 id="pm">Szia, random lelőttek. Felszednél?</h3>
<div id="buttongrid">
<button class="button" onclick="fixveh(); badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">Fix</button>
<button class="button" onclick="agyogyit(); badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">agyogyit</button>
<button class="button" onclick="goodanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">asegit</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">unflip</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">vhspawn</button>
<button class="button" onclick="kickanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">kick</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">adminjail</button>
<button class="button" onclick="bananswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">ban</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">lerobbant</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">get</button>`;

let pm17 = `<p id="pname"></p> <h3 id="pm">Szia, kibuggoltam az intiből.</h3>
<div id="buttongrid">
<button class="button" onclick="fixveh(); badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">Fix</button>
<button class="button" onclick="agyogyit(); badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">agyogyit</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">asegit</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">unflip</button>
<button class="button" onclick="goodanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">vhspawn</button>
<button class="button" onclick="kickanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">kick</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">adminjail</button>
<button class="button" onclick="bananswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">ban</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">lerobbant</button>
<button class="button" onclick="goodanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">get</button>`;

let pm18 = `<p id="pname"></p> <h3 id="pm">Szia, kibuggoltam az intiből és meghaltam. Felszedsz?</h3>
<div id="buttongrid">
<button class="button" onclick="fixveh(); badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">Fix</button>
<button class="button" onclick="agyogyit(); badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">agyogyit</button>
<button class="button" onclick="goodanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">asegit</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">unflip</button>
<button class="button" onclick="goodanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">vhspawn</button>
<button class="button" onclick="kickanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">kick</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">adminjail</button>
<button class="button" onclick="bananswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">ban</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">lerobbant</button>
<button class="button" onclick="goodanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">get</button>`;

let pm19 = `<p id="pname"></p> <h3 id="pm">Szia, kigeteled a vízből a kocsim?</h3>
<div id="buttongrid">
<button class="button" onclick="fixveh(); badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">Fix</button>
<button class="button" onclick="agyogyit(); badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">agyogyit</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">asegit</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">unflip</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">vhspawn</button>
<button class="button" onclick="kickanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">kick</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">adminjail</button>
<button class="button" onclick="bananswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">ban</button>
<button class="button" onclick="goodanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">lerobbant</button>
<button class="button" onclick="goodanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">get</button>`;

let pm20 = `<p id="pname"></p> <h3 id="pm">Szia, kibuggoltam az intiből és meghaltam. Felszedsz?</h3>
<div id="buttongrid">
<button class="button" onclick="fixveh(); badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">Fix</button>
<button class="button" onclick="agyogyit(); badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">agyogyit</button>
<button class="button" onclick="goodanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">asegit</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">unflip</button>
<button class="button" onclick="goodanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">vhspawn</button>
<button class="button" onclick="kickanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">kick</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">adminjail</button>
<button class="button" onclick="bananswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">ban</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">lerobbant</button>
<button class="button" onclick="goodanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">get</button>`;

let pm21 = `<p id="pname"></p> <h3 id="pm">Szia, bekéziztem a quadot és most eltört benne a kezem.</h3>
<div id="buttongrid">
<button class="button" onclick="fixveh(); badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">Fix</button>
<button class="button" onclick="agyogyit(); goodanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">agyogyit</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">asegit</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">unflip</button>
<button class="button" onclick="goodanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">vhspawn</button>
<button class="button" onclick=" kickanswer();getcurrentpname(); getaname(); getpname(); gameover(); alevel();">kick</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">adminjail</button>
<button class="button" onclick="bananswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">ban</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">lerobbant</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">get</button>`;

let pm22 = `<p id="pname"></p> <h3 id="pm">Szia, bebuggoltam a sprinter be és nem tudok mozogni.</h3>
<div id="buttongrid">
<button class="button" onclick="fixveh(); badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">Fix</button>
<button class="button" onclick="agyogyit(); badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">agyogyit</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">asegit</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">unflip</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">vhspawn</button>
<button class="button" onclick="kickanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">kick</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">adminjail</button>
<button class="button" onclick="bananswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">ban</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">lerobbant</button>
<button class="button" onclick="goodanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">get</button>`;

let pm23 = `<p id="pname"></p> <h3 id="pm">Szia, valaki ellopta a kocsim, visszageteled?</h3>
<div id="buttongrid">
<button class="button" onclick="fixveh(); badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">Fix</button>
<button class="button" onclick="agyogyit(); badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">agyogyit</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">asegit</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">unflip</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">vhspawn</button>
<button class="button" onclick= "kickanswer();"getcurrentpname(); getaname(); getpname(); gameover(); alevel();">kick</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">adminjail</button>
<button class="button" onclick="bananswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">ban</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">lerobbant</button>
<button class="button" onclick="goodanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">get</button>`;

let pm24 = `<p id="pname"></p> <h3 id="pm">Szia, adsz egy idg-t?</h3>
<div id="buttongrid">
<button class="button" onclick="fixveh(); badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">Fix</button>
<button class="button" onclick="agyogyit(); badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">agyogyit</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">asegit</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">unflip</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">vhspawn</button>
<button class="button" onclick="kickanswer(); addgoodanswers(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">kick</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">adminjail</button>
<button class="button" onclick="bananswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">ban</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">lerobbant</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">get</button>`;

let pm25 = `<p id="pname"></p> <h3 id="pm">Szia, Vorty vagyok adsz fixet? Én sosem hazudnék neked :)</h3>
<div id="buttongrid">
<button class="button" onclick="fixveh(); badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">Fix</button>
<button class="button" onclick="agyogyit(); badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">agyogyit</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">asegit</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">unflip</button>
<button class="button" onclick="badanswer(); addgoodanswers(); getaname(); getpname(); gameover(); alevel();">vhspawn</button>
<button class="button" onclick="kickanswer(); addgoodanswers(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">kick</button>
<button class="button" onclick="addgoodanswers(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">adminjail</button>
<button class="button" onclick="bananswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">ban</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">lerobbant</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">get</button>`;

let pm26 = `<p id="pname"></p> <h3 id="pm">Szia, illegálisat hirdetett a srác, látod?</h3>
<div id="buttongrid">
<button class="button" onclick="fixveh(); badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">Fix</button>
<button class="button" onclick="agyogyit(); badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">agyogyit</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">asegit</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">unflip</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">vhspawn</button>
<button class="button" onclick="kickanswer(); addgoodanswers(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">kick</button>
<button class="button" onclick="goodanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">adminjail</button>
<button class="button" onclick="bananswer(); addhibapont(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">ban</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">lerobbant</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover();">get</button>`;

let pm27 = `<p id="pname"></p> <h3 id="pm">szia te dagadt szar</h3>
<div id="buttongrid">
<button class="button" onclick="fixveh(); badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">Fix</button>
<button class="button" onclick="agyogyit(); badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">agyogyit</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">asegit</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">unflip</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">vhspawn</button>
<button class="button" onclick="kickanswer(); addhibapont(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">kick</button>
<button class="button" onclick="getcurrentpname(); getaname(); getpname(); gameover(); alevel();">adminjail</button>
<button class="button" onclick="bananswer(); addgoodanswers(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">ban</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">lerobbant</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">get</button>`;

let pm28 = `<p id="pname"></p> <h3 id="pm">szia szegyj ki mert beestem véletlen aj-ba</h3>
<div id="buttongrid">
<button class="button" onclick="fixveh(); badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">Fix</button>
<button class="button" onclick="agyogyit(); badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">agyogyit</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">asegit</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">unflip</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">vhspawn</button>
<button class="button" onclick="kickanswer(); addgoodanswers(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">kick</button>
<button class="button" onclick="goodanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">adminjail</button>
<button class="button" onclick="bananswer(); addgoodanswers(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">ban</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">lerobbant</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">get</button>`;

let pm29 = `<p id="pname"></p> <h3 id="pm">szia ha nem a molnárkocsit tolom akkor anyádat</h3>
<div id="buttongrid">
<button class="button" onclick="fixveh(); badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">Fix</button>
<button class="button" onclick="agyogyit(); badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">agyogyit</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">asegit</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">unflip</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); "alevel();>vhspawn</button>
<button class="button" onclick="kickanswer(); addhibapont(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">kick</button>
<button class="button" onclick="goodanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">adminjail</button>
<button class="button" onclick="bananswer(); addgoodanswers(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">ban</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">lerobbant</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">get</button>`;

let pm30 = `<p id="pname"></p> <h3 id="pm">Szia,forgalmas helyről rabolt el a gyerek, bejailezed?</h3>
<div id="buttongrid">
<button class="button" onclick="fixveh(); badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">Fix</button>
<button class="button" onclick="agyogyit(); badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">agyogyit</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">asegit</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">unflip</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">vhspawn</button>
<button class="button" onclick="kickanswer(); addhibapont(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">kick</button>
<button class="button" onclick="goodanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">adminjail</button>
<button class="button" onclick="bananswer(); addhibapont(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">ban</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">lerobbant</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">get</button>`;

let pm31 = `<p id="pname"></p> <h3 id="pm">Szia, Arthur_Wenham kilépett rp közben, kibannolod?</h3>
<div id="buttongrid">
<button class="button" onclick="fixveh(); badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">Fix</button>
<button class="button" onclick="agyogyit(); badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">agyogyit</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">asegit</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">unflip</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">vhspawn</button>
<button class="button" onclick="kickanswer(); addhibapont(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">kick</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">adminjail</button>
<button class="button" onclick="bananswer(); addgoodanswers();; getcurrentpname(); getaname(); getpname(); gameover(); alevel();">ban</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">lerobbant</button>
<button class="button" onclick="badanswer(); getcurrentpname(); getaname(); getpname(); gameover(); alevel();">get</button>`;

let pm1answer = `<p id="aname"></p>
<h3 id="vá">Szia, tessék!</h3>`;

function vanish(){
    document.getElementById("valaszdiv").innerHTML = ''
    document.getElementById("bankick").innerHTML = ''
}


function getaname(){
    document.getElementById("aname").innerHTML = `Jayden ${dateTime}`
    }
getaname();

function getpname(){
    document.querySelectorAll("#pname").innerHTML = `${pname} ${dateTime}`
    }
getpname();

function getTime(){
  let  date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  let  time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  let  dateTime = date+' '+time;

    document.getElementById("aname").innerHTML = `Jayden ${dateTime}`
    document.getElementById("pname").innerHTML = `${pname} ${dateTime}`
}


function getPname(){
    r_pname[0] = `Elon Musk`;
    r_pname[1] = `David Wenham`;
    r_pname[2] = `Jayden Lowrey`;
    r_pname[3] = `Peter Trader`;
    r_pname[4] = `Elijah Driscoll`;
    r_pname[5] = `Jeff Bezos`;
    r_pname[6] = `Asiya Walte`;
    r_pname[7] = `Kaia Oconnor`;
    r_pname[8] = `Menaal Medrano`;
    r_pname[9] = `Roger Acevedo`;
    r_pname[10] = `Lawrence Shelton`;
    r_pname[11] = `Libbie Watson`;
    r_pname[12] = `Alexandra Nichols`;
    r_pname[13] = `Nabilah Case`;
    r_pname[14] = `Clarissa Head`;
    r_pname[15] = `Cieran Clarkson`;
    r_pname[16] = `Lila Dunne`;
    r_pname[17] = `Sianna Chan`;
    r_pname[18] = `Nyle Lam`;
    r_pname[19] = `Lacey-May Mcdougall`;
    r_pname[20] = `Huw Cummings`;
    r_pname[21] = `Jolene Frye`;
    r_pname[22] = `Carys Hickman`;
    r_pname[23] = `Shahzaib Knight`;
    r_pname[24] = `Mark Maxwell`;
    r_pname[25] = `Clifford Fraser`;
    r_pname[26] = `Jawad Donaldson`;
    r_pname[27] = `Zohaib Orozco`;
    r_pname[28] = `Anna Clay`;
    r_pname[29] = `Flaviano Furfaro`;
    r_pname[30] = `Suhayb Estrada`;
    r_pname[31] = `Farhana Peters`;
    r_pname[32] = `Matthew Smolen`;

        
i = Math.floor(33*Math.random())
pname = r_pname[i];
document.getElementById("pname").innerHTML = `${pname} ${dateTime}`;
}

function getcurrentpname(){
    document.querySelectorAll("#pnamevá").innerHTML = `${pname} ${dateTime}`;
}
getcurrentpname();

function getPM(){
    document.getElementById("valaszdiv").innerHTML = ''
    document.getElementById("bankick").innerHTML = ''

    let pmsound = new Audio('../media/pmsound.mp3');
        pmsound.volume = 0.2;
        pmsound.play(); 

    r_pm[0] = pm1;

    r_pm[1] = pm2;

    r_pm[2] = pm3;

    r_pm[3] = pm4;

    r_pm[4] = pm5;

    r_pm[5] = pm6;

    r_pm[6] = pm7;

    r_pm[7] = pm8;

    r_pm[8] = pm9;

    r_pm[9] = pm10;

    r_pm[10] = pm11;

    r_pm[11] = pm12;

    r_pm[12] = pm13;

    r_pm[13] = pm14;

    r_pm[14] = pm15;

    r_pm[15] = pm16;

    r_pm[16] = pm17;

    r_pm[17] = pm18;

    r_pm[18] = pm19;

    r_pm[19] = pm20;

    r_pm[20] = pm21;  

    r_pm[21] = pm22;  

    r_pm[22] = pm23;  

    r_pm[23] = pm24;

    r_pm[24] = pm25;

    r_pm[25] = pm26;

    r_pm[26] = pm27;

    r_pm[27] = pm28;

i = Math.floor(27*Math.random())

let pm = r_pm[i]
console.log(pm)

if(pm == pm1){
    document.getElementById("pmdiv").innerHTML = `${pm1}`;
}
if(pm == pm2){
    document.getElementById("pmdiv").innerHTML = `${pm2}`;
}
if(pm == pm3){
    document.getElementById("pmdiv").innerHTML = `${pm3}`;
}
if(pm == pm4){
    document.getElementById("pmdiv").innerHTML = `${pm4}`
}
if(pm == pm5){
    document.getElementById("pmdiv").innerHTML = `${pm5}`
}
if(pm == pm6){
    document.getElementById("pmdiv").innerHTML = `${pm6}`
}
if(pm == pm7){
    document.getElementById("pmdiv").innerHTML = `${pm7}`
}
if(pm == pm8){
    document.getElementById("pmdiv").innerHTML = `${pm8}`
}
if(pm == pm9){
    document.getElementById("pmdiv").innerHTML = `${pm9}`
}
if(pm == pm10){
    document.getElementById("pmdiv").innerHTML = `${pm10}`
}
if(pm == pm11){
    document.getElementById("pmdiv").innerHTML = `${pm11}`
}
if(pm == pm12){
    document.getElementById("pmdiv").innerHTML = `${pm12}`
}
if(pm == pm13){
    document.getElementById("pmdiv").innerHTML = `${pm13}`
}
if(pm == pm14){
    document.getElementById("pmdiv").innerHTML = `${pm14}`
}
if(pm == pm15){
    document.getElementById("pmdiv").innerHTML = `${pm15}`
}
if(pm == pm16){
    document.getElementById("pmdiv").innerHTML = `${pm16}`
}
if(pm == pm17){
    document.getElementById("pmdiv").innerHTML = `${pm17}`
}
if(pm == pm18){
    document.getElementById("pmdiv").innerHTML = `${pm18}`
}
if(pm == pm19){
    document.getElementById("pmdiv").innerHTML = `${pm19}`
}
if(pm == pm20){
    document.getElementById("pmdiv").innerHTML = `${pm20}`
}
if(pm == pm21){
    document.getElementById("pmdiv").innerHTML = `${pm21}`
}
if(pm == pm22){
    document.getElementById("pmdiv").innerHTML = `${pm22}`
}
if(pm == pm23){
    document.getElementById("pmdiv").innerHTML = `${pm23}`
}
if(pm == pm24){
    document.getElementById("pmdiv").innerHTML = `${pm24}`
}
if(pm == pm25){
    document.getElementById("pmdiv").innerHTML = `${pm25}`
}
if(pm == pm26){
    document.getElementById("pmdiv").innerHTML = `${pm26}`
}
if(pm == pm27){
    document.getElementById("pmdiv").innerHTML = `${pm27}`
}
if(pm == pm28){
    document.getElementById("pmdiv").innerHTML = `${pm28}`
}
}

function bananswer(){
    document.getElementById('alevel').innerHTML = `<h3 class="active">Adminszint: ${adminszint}</h3>`;
    document.querySelector('#hibapont').innerHTML = `<h3 class="active-red">Hibapont: ${hibapont}</h3>`
    document.querySelector('#goodanswers').innerHTML = `<h3 class="active">Jó válaszok: ${goodanswers}</h3>`;
    document.querySelector('#bankick').innerHTML = `<p id="time"></p>
    <h3 id="ban">Kitiltottad a játékost.</h3>`
    document.querySelector('#time').innerHTML = `${dateTime}`
    console.log('kitiltás')
}
function kickanswer(){
    document.getElementById('alevel').innerHTML = `<h3 class="active">Adminszint: ${adminszint}</h3>`;
    document.querySelector('#hibapont').innerHTML = `<h3 class="active-red">Hibapont: ${hibapont}</h3>`
    document.querySelector('#goodanswers').innerHTML = `<h3 class="active">Jó válaszok: ${goodanswers}</h3>`;
    document.querySelector('#bankick').innerHTML = `<p id="time"></p>
    <h3 id="kick">Kirúgtad a játékost.</h3>`
    document.querySelector('#time').innerHTML = `${dateTime}`
    console.log('kick')
}

function goodanswer(){

    let checksound = new Audio('../media/check.mp3');
    checksound.volume = 0.2;
    checksound.play(); 

    goodanswers = goodanswers+1;
    document.querySelector('#goodanswers').innerHTML = `<h3 class="active">Jó válaszok: ${goodanswers}</h3>`;
    let pmsound = new Audio('../media/pmsound.mp3');
    pmsound.volume = 0.2;
    pmsound.play(); 

    r_pm[0] = `<p id="aname"></p>
    <h3 id="vá">Tessék</h3>
    <br>
    <p id="pnamevá"></p>
    <h3 id="secondpm">Köszi szépen</h3>`;

    r_pm[1] = `<p id="aname"></p>
    <h3 id="vá">Tessék, jó játékot!</h3>
    <br> 
    <p id="pnamevá"></p>
    <h3 id="secondpm">Köszönöm szépen.</h3>`;

    r_pm[2] = `<p id="aname"></p>
    <h3 id="vá">Tessék</h3>
    <br>
    <p id="pnamevá"></p>
    <h3 id="secondpm">Köszi szépen</h3>`;

    r_pm[3] = `<p id="aname"></p>
    <h3 id="vá">Tessék</h3>
    <br>
    <p id="pnamevá"></p>
    <h3 id="secondpm">Köszi!</h3>`;

    i = Math.floor(4*Math.random())
    
    document.querySelector('#valaszdiv').innerHTML = `${r_pm[i]}`
    console.log(r_pm[i])
    document.getElementById('alevel').innerHTML = `<h3 class="active">Adminszint: ${adminszint}</h3>`;
    document.querySelector('#hibapont').innerHTML = `<h3 class="active-red">Hibapont: ${hibapont}</h3>`
}



function badanswer(){
 
    let errorsound = new Audio('../media/error.mp3');
    errorsound.volume = 0.2;
    errorsound.play(); 

    let pmsound = new Audio('../media/pmsound.mp3');
    pmsound.volume = 0.2;
    pmsound.play(); 

    r_badpm[0] = `<p id="aname"></p>
    <h3 id="vá">Tessék</h3>
    <br>
    <p id="pnamevá"></p>
    <h3 id="secondpm">Kösz a semmit!</h3>`;

    r_badpm[1] = `<p id="aname"></p>
    <h3 id="vá">Tessék</h3>
    <br>
    <p id="pnamevá"></p>
    <h3 id="secondpm">Egy dolgod volt, azt is elbasztad.</h3>`;

    r_badpm[2] = `<p id="aname"></p>
    <h3 id="vá">Tessék</h3>
    <br>
    <p id="pnamevá"></p>
    <h3 id="secondpm">Innen is a rosszindulat</h3>`;

    r_badpm[3] = `<p id="aname"></p>
    <h3 id="vá">Tessék</h3>
    <br>
    <p id="pnamevá"></p>
    <h3 id="secondpm">erre se vagy képes rohadjá el</h3>`;

    r_badpm[4] = `<p id="aname"></p>
    <h3 id="vá">Tessék</h3>
    <br>
    <p id="pnamevá"></p>
    <h3 id="secondpm">A panaszkönyvnél találkozunk :)</h3>`;

    r_badpm[5] = `<p id="aname"></p>
    <h3 id="vá">Tessék</h3>
    <br>
    <p id="pnamevá"></p>
    <h3 id="secondpm">Kíváncsi lennék a főadmin mit szól ehhez.</h3>`;

    i = Math.floor(6*Math.random())
    
    document.querySelector('#valaszdiv').innerHTML = `${r_badpm[i]}`
    console.log(r_badpm[i])
    hibapont = hibapont+1;
    console.log(hibapont)
    document.getElementById('alevel').innerHTML = `<h3 class="active">Adminszint: ${adminszint}</h3>`;
    document.querySelector('#hibapont').innerHTML = `<h3 class="active-red">Hibapont: ${hibapont}</h3>`;
    document.querySelector('#goodanswers').innerHTML = `<h3 class="active">Jó válaszok: ${goodanswers}</h3>`;
}


function fixveh(){
    if (answered == false){
        pmanswer = fix
        console.log(answered)
    }
}
function agyogyit(){
    if (answered = false){
        pmanswer = agyogyit
        console.log(answered)
    }
}

function asegit(){
    if (answered = false){
        pmanswer = asegit
        console.log(answered)
    }
}
function unflip(){
    if (answered = false){
        pmanswer = unflip
        console.log(answered)
    }
}
function vhspawn(){
    if (answered = false){
        pmanswer = vhspawn
        console.log(answered)
    }
}
function kick(){
    if (answered = false){
        pmanswer = kick
        console.log(answered)
    }
}
function ajail(){
    if (answered = false){
        pmanswer = ajail
        console.log(answered)
    }
}
function ban(){
    if (answered = false){
        pmanswer = ban
        console.log(answered)
    }
}

/* function pm1text(){

    if(pmanswer == fix){
        console.log('fix')
        goodanswer();
    } else {
        badanswer();
    }
    
}

function pm2text(){
    

    if(pmanswer == agyogyit){
        goodanswer();
    }
    if(pmanswer == fix){
        badanswer();
        let hibapont = +1;
    }
}
function pm3text(){
    

    if(pmanswer == agyogyit){
        goodanswer();
    }
    if(pmanswer == fix){
        badanswer();
        let hibapont = +1;
    }
}

function pm4text(){
    

    if(pmanswer == agyogyit){
        goodanswer();
    }
    if(pmanswer == fix){
        badanswer();
        let hibapont = +1;
    }
} */


function nextPM(){
answered = false;
console.log(answered)
getPM();
getPname();
getTime();
}


function gameover(){
    if(hibapont >= 3){
        if(adminszint == 1 || adminszint == 2 || adminszint == 3 || adminszint == 4 || adminszint == 5){
        console.log('gamover')
        window.alert("Jamie megváltozatta az adminszinted(5->0)                                                       F5 az újrapróbáláshoz")
        window.alert.onclick = location.reload();
        }
        if(adminszint == 6){
            console.log('gamover')
            window.alert("Jamie megváltozatta az adminszinted(6->0)                                                       F5 az újrapróbáláshoz")
            window.alert.onclick = location.reload();
        }
        if(adminszint == 7){
            console.log('gamover')
            window.alert("Thommas megváltozatta az adminszinted(7->0)                                                       F5 az újrapróbáláshoz")
            window.alert.onclick = location.reload();
            }
    }   
}


function isanswered(){
    document.querySelector("#button").onclick(answered = true)
    console.log(answered)
    }
function answeredreset(){
    document.querySelector("#next").onclick(answered = false)
    console.log(answered)
}

function addhibapont(){
    let errorsound = new Audio('../media/error.mp3');
    errorsound.volume = 0.2;
    errorsound.play(); 
    hibapont = hibapont+1
    console.log(hibapont)
    document.querySelector('#hibapont').innerHTML = `<h3 class="active-red">Hibapont: ${hibapont}</h3>`
    document.getElementById('alevel').innerHTML = `<h3 class="active">Adminszint: ${adminszint}</h3>`;
    document.querySelector('#goodanswers').innerHTML = `<h3 class="active">Jó válaszok: ${goodanswers}</h3>`;
}
function addgoodanswers(){
    let checksound = new Audio('../media/check.mp3');
    checksound.volume = 0.2;
    checksound.play(); 

    goodanswers = goodanswers+1
    console.log(goodanswers)
    document.querySelector('#hibapont').innerHTML = `<h3 class="active-red">Hibapont: ${hibapont}</h3>`
    document.getElementById('alevel').innerHTML = `<h3 class="active">Adminszint: ${adminszint}</h3>`;
    document.querySelector('#goodanswers').innerHTML = `<h3 class="active">Jó válaszok: ${goodanswers}</h3>`;
}


function alevel(){
    if(goodanswers < 10){
        adminszint = 1;
        console.log(adminszint);
        document.getElementById('alevel').innerHTML = `<h3 class="active">Adminszint: ${adminszint}</h3>`;
    }
    if(goodanswers >= 10 && goodanswers <=20){
        adminszint = 2;
        console.log(adminszint);
        document.getElementById('alevel').innerHTML = `<h3 class="active">Adminszint: ${adminszint}</h3>`;
    }
    if(goodanswers > 20 && goodanswers <= 30){
        adminszint = 3;
        console.log(adminszint);
        document.getElementById('alevel').innerHTML = `<h3 class="active">Adminszint: ${adminszint}</h3>`;
        }
    if(goodanswers > 30 && goodanswers < 40){
        adminszint = 4;
        console.log(adminszint);
        document.getElementById('alevel').innerHTML = `<h3 class="active">Adminszint: ${adminszint}</h3>`;
        }
    if(goodanswers >= 40 && goodanswers <= 50){
        adminszint = 5;
        console.log(adminszint);
        document.getElementById('alevel').innerHTML = `<h3 class="active">Adminszint: ${adminszint}</h3>`;
    }
    if(goodanswers > 50 && goodanswers <= 80){
        adminszint = 6;
        console.log(adminszint);
        document.getElementById('alevel').innerHTML = `<h3 class="active-fa">Adminszint: ${adminszint}</h3>`;
    }
    if(goodanswers > 80){
        adminszint = 7;
        alert('Thommas megváltoztatta adminszinted(6->7) Gratulálok! Az "ok" gombra kattintva újra kezdheted ha szeretnéd.')
        console.log(adminszint);
        document.getElementById('alevel').innerHTML = `<h3 class="active-sa">Adminszint: ${adminszint}</h3>`;
        window.alert.onclick = location.reload();
    }
}
/* function alevel(){
    document.getElementById('alevel').innerHTML = `<h3>Adminszint: ${adminszint}</h3>`

    if(goodanswers == 10){
    adminszint == 2
    alert('Jamie megváltoztatta az adminszintedet(1->2)')
    console.log(adminszint)
    document.getElementById('alevel').innerHTML = `<h3>Adminszint: ${adminszint}</h3>`
    }
    if(goodanswers == 20){
    adminszint == 3
    alert('Jamie megváltoztatta az adminszintedet(2->3)')
    console.log(adminszint)
    document.getElementById('alevel').innerHTML = `<h3>Adminszint: ${adminszint}</h3>`
    }
    if(goodanswers == 30){
        adminszint == 4
    alert('Jamie megváltoztatta az adminszintedet(3->4)')
    console.log(adminszint)
    document.getElementById('alevel').innerHTML = `<h3>Adminszint: ${adminszint}</h3>`
    }
    if(goodanswers == 40){
        adminszint == 5
    alert('Jamie megváltoztatta az adminszintedet(4->5)')
    console.log(adminszint)
    document.getElementById('alevel').innerHTML = `<h3>Adminszint: ${adminszint}</h3>`
    }
    if(goodanswers == 80){
        adminszint == 6
    alert('Jamie megváltoztatta az adminszintedet(5->6)')
    console.log(adminszint)
    document.getElementById('alevel').innerHTML = `<h3>Adminszint: ${adminszint}</h3>`
    }
    if(goodanswers == 120){
        adminszint == 7
    alert('Thommas megváltoztatta az adminszintedet(6->7)                                                                 Gratulálok!')
    console.log(adminszint)
    document.getElementById('alevel').innerHTML = `<h3>Adminszint: ${adminszint}</h3>`
    }
}  */