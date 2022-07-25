let money = 0;
let moneyvalue = money;
let glassesbought = false;
let glockbought = false;
let kesbought = false;
let m5e60bought = false;
let amgonebought = false;
let dogbought = false;
let garazsbought = false;
let lifebought = false;
let gnihazbought = false;
let allbought = false


function clicked(){
    let  rewardSound = new Audio('../media/reward.mp3');
    rewardSound.volume = 0.2;
    rewardSound.play(); 
    money = money+25000;
    document.getElementById("yourmoney").innerHTML = `<h3 style="color: white;">Pénzed: ${money}</h3>`
    console.log(money)
}

function szemuveg(){
    if(money >= 100000 && glassesbought == false){
        let  purchaseSound = new Audio('../media/purchase.mp3');
        purchaseSound.volume = 0.2;
        purchaseSound.play(); 
        money = money-100000
        glassesbought = true
        document.getElementById("yourmoney").innerHTML = `<h3>Pénzed: ${money}</h3>`
        document.getElementById("szemuveg").classList.remove("szemuvegbg");
        document.getElementById("szemuveg").classList.add("background2");
        localStorage.setItem(money, money);
    } else{
        money = money
        
    }
}

function glock(){
    if(money >= 300000 && glockbought == false){
        let  purchaseSound = new Audio('../media/purchase.mp3');
        purchaseSound.volume = 0.2;
        purchaseSound.play();
        money = money-300000
        glockbought = true
        document.getElementById("yourmoney").innerHTML = `<h3>Pénzed: ${money}</h3>`
        document.getElementById("glock").classList.remove("glockbg")  
        document.getElementById("glock").classList.add("background2")
        localStorage.setItem(money, money);
    } else{
        money = money
        
    }
}

function kes(){
    if(money >= 200000 && kesbought == false){
        let  purchaseSound = new Audio('../media/purchase.mp3');
        purchaseSound.volume = 0.2;
        purchaseSound.play();
        money = money-200000
        kesbought = true
        document.getElementById("yourmoney").innerHTML = `<h3>Pénzed: ${money}</h3>`
        document.getElementById("kes").classList.remove("kesbg")  
        document.getElementById("kes").classList.add("background2")
        localStorage.setItem(money, money);
    } else{
        money = money
    }
}

function m5e60(){
    if(money >= 2200000 && m5e60bought == false){
        let  purchaseSound = new Audio('../media/purchase.mp3');
        purchaseSound.volume = 0.2;
        purchaseSound.play();
        money = money-2200000
        m5e60bought = true
        document.getElementById("yourmoney").innerHTML = `<h3>Pénzed: ${money}</h3>`
        document.getElementById("m5e60").classList.remove("m5e60bg")  
        document.getElementById("m5e60").classList.add("background2")
        localStorage.setItem(money, money);
    } else{
        money = money
    }
}

function amgone(){
    if(money >= 5000000 && amgonebought == false){
        let  purchaseSound = new Audio('../media/purchase.mp3');
        purchaseSound.volume = 0.2;
        purchaseSound.play();
        money = money-5000000
        amgonebought = true
        document.getElementById("yourmoney").innerHTML = `<h3>Pénzed: ${money}</h3>`
        document.getElementById("amgone").classList.remove("amgonebg")  
        document.getElementById("amgone").classList.add("background2")
        localStorage.setItem(money, money);
    } else{
        money = money
    }
}

function dog(){
    if(money >= 1000000 && dogbought == false){
        let  purchaseSound = new Audio('../media/purchase.mp3');
        purchaseSound.volume = 0.2;
        purchaseSound.play();
        money = money-1000000
        dogbought = true
        document.getElementById("yourmoney").innerHTML = `<h3>Pénzed: ${money}</h3>`
        document.getElementById("dog").classList.remove("dogbg")  
        document.getElementById("dog").classList.add("background2")
        localStorage.setItem(money, money);
    } else{
        money = money
    }
}

function garazs(){
    if(money >= 1500000 && garazsbought == false){
        let  purchaseSound = new Audio('../media/purchase.mp3');
        purchaseSound.volume = 0.2;
        purchaseSound.play();
        money = money-1500000
        garazsbought = true
        document.getElementById("yourmoney").innerHTML = `<h3>Pénzed: ${money}</h3>`
        document.getElementById("garazs").classList.remove("garazsbg")  
        document.getElementById("garazs").classList.add("background2")
        localStorage.setItem(money, money);
    } else{
        money = money
    }
}

function life(){
    if(money >= 10000000 && lifebought == false){
        let  purchaseSound = new Audio('../media/purchase.mp3');
        purchaseSound.volume = 0.2;
        purchaseSound.play();
        money = money-10000000
        lifebought = true
        document.getElementById("yourmoney").innerHTML = `<h3>Pénzed: ${money}</h3>`
        document.getElementById("life").classList.remove("lifebg")  
        document.getElementById("life").classList.add("background2")
        localStorage.setItem(money, money);
    } else{
        money = money
    }
}

function gnihaz(){
    if(money >= 6000000 && gnihazbought == false){
        let  purchaseSound = new Audio('../media/purchase.mp3');
        purchaseSound.volume = 0.2;
        purchaseSound.play();
        money = money-6000000
        gnihazbought = true
        document.getElementById("yourmoney").innerHTML = `<h3>Pénzed: ${money}</h3>`
        document.getElementById("gnihaz").classList.remove("gnihazbg")  
        document.getElementById("gnihaz").classList.add("gnihazchecked")
        localStorage.setItem(money, money);
    } else{
        money = money
    }
}

function bought(){
    if(glassesbought == true && glockbought == true && kesbought == true && m5e60bought == true && amgonebought == true && dogbought == true && garazsbought == true && lifebought == true && gnihazbought == true){
       allbought = true
       console.log(allbought)
    }
}

function win(){
    if(allbought == true){
        console.log('win')
        window.alert("Ejj te, neked kajakra kéne szerezned egy életet. Minden esetre gratulálok, mostmár elég menő vagy, hogy beszélhess velem!")
    }
}


