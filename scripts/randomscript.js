function selection(value) {
    console.log(value);
    if (value == "e38") {
    document.getElementById('text').classList.remove("vanish")
      oktext();
    }
    if (value == "e65") {
        goodtext();
      }
    if (value == "e46") {
      goodtext();
    }
    if (value == "e92") {
      oktext();
    }
    if (value == "e34") {
      bmwtext();
    }
    if (value == "e39") {
      bmwtext();
    }
    if (value == "e34") {
      bmwtext();
    }
    if (value == "e60") {
        bmwtext();
      }
    if (value == "e24") {
        goodtext();
    }
    if (value == "m8") {
        bmwtext();
    }
    if (value == "m4") {
        bmwtext();
    }
    if (value == "gremlin") {
        goodtext();
    }
    if (value == "camper") {
        goodtext();
    }
    if (value == "chiron") {
        goodtext();
    }
    if (value == "regal") {
        goodtext();
    }
    if (value == "escalade") {
        oktext();
    }
    if (value == "belair") {
        shittext();
    }
    if (value == "biscayne") {
        shittext();
    }
    if (value == "c1500") {
        oktext();
    }
    if (value == "fleetwood") {
        shittext();
    }
    if (value == "camaro") {
        goodtext();
    }
    if (value == "caprice") {
        shittext();
    }
    if (value == "chevelle67") {
        oktext();
    }
    if (value == "chevelle70") {
        shittext();
    }
    if (value == "impala") {
        goodtext();
    }
    if (value == "challenger") {
        shittext();
    }
    if (value == "charger69") {
        oktext();
    }
    if (value == "polara") {
        shittext();
    }
    if (value == "ram") {
        shittext();
    }
    if (value == "charger14") {
        goodtext();
    }
    if (value == "demon") {
        goodtext();
    }
    if (value == "viper") {
        goodtext();
    }
    if (value == "gto") {
        oktext();
    }
    if (value == "pista") {
        goodtext();
    }
    if (value == "f40") {
        goodtext();
    }
    if (value == "country") {
        shittext();
    }
    if (value == "victoria") {
        goodtext();
    }
    if (value == "f40") {
        goodtext();
    }
    if (value == "e150") {
        shittext();
    }
    if (value == "f100") {
        goodtext();
    }
    if (value == "f150") {
        shittext();
    }
    if (value == "raptor") {
        nicetext();
    }
    if (value == "ratrod") {
        oktext();
    }
    if (value == "shelbygt500") {
        goodtext();
    }
    if (value == "shelbygt50067") {
        oktext();
    }
    if (value == "thunderbird") {
        shittext();
    }
    if (value == "savanna") {
        goodtext();
    }
    if (value == "nsxr") {
        goodtext();
    }
    if (value == "jeepsrt8") {
        goodtext();
    }
    if (value == "wrangler") {
        oktext();
    }
    if (value == "aventador") {
        goodtext();
    }
    if (value == "limousine") {
        goodtext();
    }
    if (value == "p1") {
        goodtext();
    }
    if (value == "amgone") {
        goodtext();
    }
    if (value == "560sec") {
        oktext();
    }
    if (value == "a45amg") {
        goodtext();
    }
    if (value == "amggt") {
        goodtext();
    }
    if (value == "e250") {
        goodtext();
    }
    if (value == "e420") {
        goodtext();
    }
    if (value == "e500") {
        goodtext();
    }
    if (value == "sprinter") {
        oktext();
    }
    if (value == "amgone") {
        goodtext();
    }
    if (value == "evo") {
        goodtext();
    }
    if (value == "galant") {
        goodtext();
    }
    if (value == "240sx") {
        oktext();
    }
    if (value == "gtr") {
        oktext();
    }
    if (value == "silvia") {
        goodtext();
    }
    if (value == "skyline") {
        goodtext();
    }
    if (value == "belvedere") {
        shittext();
    }
    if (value == "superbird") {
        goodtext();
    }
    if (value == "fierro") {
        oktext();
    }
    if (value == "thejudge") {
        oktext();
    }
    if (value == "911") {
        goodtext();
    }
    if (value == "wrx") {
        goodtext();
    }
    if (value == "brz") {
        goodtext();
    }
    if (value == "supra") {
        goodtext();
    }
    if (value == "corrado") {
        oktext();
    }
    if (value == "golf") {
        oktext();
    }
    if (value == "scirocco") {
        oktext();
    }
    if (value == "aerox") {
        goodtext();
    }
    if (value == "fcr900") {
        oktext();
    }
    if (value == "hayabusa") { 
        goodtext();
    }
    if (value == "rs4") { 
        goodtext();
    }
    if (value == "rs7") { 
        goodtext();
    }
    if (value == "r8") { 
        goodtext();
    }
    if (value == "s8") { 
        goodtext();
    }
}


var r_text = new Array ();

function oktext() {

    r_text[0] = `<center><h6 class="jaydentext footer">"Figyi, nem rossz ez egy százasba elviszem"</h6></center>`;
    r_text[1] = `<center><h6 class="jaydentext footer">"Aha-aha..nem rossz-nem rossz. 200 innen."</h6></center>`;
    r_text[2] = `<center><h6 class="jaydentext footer">Egész patika kocsi, ezért még fizetnék is. 250 ezer innen!</h6></center>`;
    r_text[3] = `<center><h6 class="jaydentext footer">Figyelj tesóm, kétszáz kp.</h6></center>`;


        
i = Math.floor(4*Math.random())
/* document.write(r_text[i]); */
document.getElementById("text").innerHTML = r_text[i];
};


function shittext() {

    r_text[0] = `<center><h6 class="jaydentext footer">"Figyi, én kereskedő vagyok nem bontó! Az a következő sarkon van!"</h6></center>`;
    r_text[1] = `<center><h6 class="jaydentext footer">"Mi a faszom ez? Hogy-hogy nem aksis?"</h6></center>`;
    r_text[2] = `<center><h6 class="jaydentext footer">"Há ebben több a műanyag mint a nemesfém!"</h6></center>`;
    r_text[3] = `<center><h6 class="jaydentext footer">"Ezt te sem gondoltad komolyan, ennél még egy Multipla is jobban néz ki!"</h6></center>`;
    r_text[4] = `<center><h6 class="jaydentext footer">"Őszinte leszek veled, ez egy darab szar. Bontóba vigyed ne hozzám!"</h6></center>`;
    r_text[5] = `<center><h6 class="jaydentext footer">"Ezért a kocsiért lecsukatnálak."</h6></center>`;
    r_text[6] = `<center><h6 class="jaydentext footer">"Hát, téged sem az ízlésedért szeretnek..."</h6></center>`;
    r_text[7] = `<center><h6 class="jaydentext footer">"Van egy AMC-m, csere?"</h6></center>`;
    r_text[8] = `<center><h6 class="jaydentext footer">"Nem vagyok olajfüggő, de ez az autó igen."</h6></center>`;

        
i = Math.floor(9*Math.random())
/* document.write(r_text[i]); */
document.getElementById("text").innerHTML = r_text[i];
};


function goodtext() {

    r_text[0] = `<center><h6 class="jaydentext footer">"Fasza járgány! Ja, hogy ennek az ára 7 számjegyű? Azért egy körre odaadhatnád!"</h6></center>`;
    r_text[1] = `<center><h6 class="jaydentext footer">"Nagyon gizda! Mondd mennyit kérsz érte? Ne legyél szégyellős"</h6></center>`;
    r_text[2] = `<center><h6 class="jaydentext footer">"Ez már nekem is drága!"</h6></center>`;
    r_text[3] = `<center><h6 class="jaydentext footer">"Adok érte egy huszast, de RL!"</h6></center>`;
    r_text[4] = `<center><h6 class="jaydentext footer">"Ez nem csak egy autó. Ez valaki más álma."</h6></center>`;


i = Math.floor(4*Math.random())
/* document.write(r_text[i]); */
document.getElementById("text").innerHTML = r_text[i];
};

function bmwtext() {

    r_text[0] = `<center><h6 class="jaydentext footer">"Nem te szorítottál le az útról múltkor? Takarodj."</h6></center>`;
    r_text[1] = `<center><h6 class="jaydentext footer">"Aztán index van-e rajta?"</h6></center>`;
    r_text[2] = `<center><h6 class="jaydentext footer">"Ez már nekem is drága!"</h6></center>`;
    r_text[3] = `<center><h6 class="jaydentext footer">"Adok érte egy huszast, de RL!"</h6></center>`;
    r_text[4] = `<center><h6 class="jaydentext footer">"Ez nem csak egy autó. Ez valaki más álma."</h6></center>`;
    r_text[5] = `<center><h6 class="jaydentext footer">"Fasza járgány! Ja, hogy ennek az ára 7 számjegyű? Azért egy körre odaadhatnád!"</h6></center>`;
    r_text[6] = `<center><h6 class="jaydentext footer">"Nagyon gizda! Mondd mennyit kérsz érte? Ne légy szégyellős""</h6></center>`;

        
i = Math.floor(7*Math.random())
/* document.write(r_text[i]); */
document.getElementById("text").innerHTML = r_text[i];
};