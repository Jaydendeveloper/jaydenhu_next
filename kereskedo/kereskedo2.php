<?php Header("Cache-Control: max-age=0, must-revalidate"); ?>


<!-- By Jayden 2021.12.28. -->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kereskedő</title>
    <link rel="icon" type="image/png" href="https://forum.see-game.com/seeimg/favicon.ico" sizes="32x32">
    <link rel="stylesheet" href="style.css">
    <script src="../scripts/dropdown.js"></script>
</head>
<body>
<!--    <script>
      window.onload = function(){
        getBmwValue();
        getAudiValue();
        getDodgeValue();
        getAmcValue();
      }
   </script> -->
    <div>
        <ul>
            <li><a class="hoveranim" href="../kapcsolat/kapcsolat.html?version=6">Kapcsolat</a></li>
            <li><a class="active" href="karacsony.html?version=6">ingyen értékbecslés</a></li>           
            <li><a class="hoveranim" href="karacsony.html?version=6">Karácsonyi minigame</a></li>
            <li><a class="hoveranim" href="../index.html?version=6">Kezdőlap</a></li>
            <h1 class="seelogo" style="float: left;"><a href="../index.html"><img class="seelogo" src="../media/seelogo.png" alt="seelogo"></a></h1>  
        </ul>
    </div>
    
    <!-- MÁRKA VÁLASZTÓ -->
    <div class="branddiv">
        <label>
            <select  onclick="getBmwValue(); getAudiValue(); getDodgeValue(); getAmcValue(); getBruteValue(); getBugattiValue(); getBuickValue(); getCadillacValue(); getChevroletValue(); getFerrariValue(); getFordValue(); getGmcValue(); getHondaValue(); getHummerValue(); getJeepValue(); getLamborghiniValue(); getLincolnValue(); getMcLarenValue(); getMercedesValue(); getMitsubishiValue(); getNissanValue(); getPlymouthValue(); getPontiacValue(); getPorcheValue(); getSubaruValue(); getToyotaValue(); getVwValue(); getYamahaValue();">
                <option selected>Márka</option>
                <option id="amcoption">AMC</option>
                <option id="audioption">Audi</option>
                <option id="bmwoption">BMW</option>
                <option id="bruteoption">Brute</option>
                <option id="bugattioption">Bugatti</option>
                <option id="buickoption">Buick</option>
                <option id="cadillacoption">Cadillac</option>
                <option id="chevroletoption">Chevrolet</option>
                <option id="dodgeoption">Dodge</option>
                <option id="ferrarioption">Ferrari</option>
                <option id="fordoption">Ford</option>
                <option id="gmcoption">GMC</option>
                <option id="hondaoption">Honda</option>
                <option id="hummeroption">Hummer</option>
                <option id="jeepoption">Jeep</option>
                <option id="lamborghinioption">Lamborghini</option>
                <option id="lincolnoption">Lincoln</option>
                <option id="mclarenoption">McLaren</option>
                <option id="mercedesoption">Mercedes-Benz</option>
                <option id="mitsubishioption">Mitsubishi</option>
                <option id="nissanoption">Nissan</option>
                <option id="plymouthoption">Plymouth</option>  
                <option id="pontiacoption">Pontiac</option>
                <option id="porcheoption">Porche</option>
                <option id="subaruoption">Subaru</option>
                <option id="toyotaoption">Toyota</option>
                <option id="vwoption">Volkswagen</option>
                <option id="yamahaoption">Yamaha</option>

            </select>
        </label>
      </div>
    <!-- KOCSI VÁLASZTÓK -->
    <div id="amcdiv" class="vanish">
        <label>
            <select>
                <option selected>Típus</option>
                <option>Gremlin</option>
            </select>
        </label>
      </div>


    <div id="audidiv" class="vanish">
        <label>
            <select>
                <option selected>Típus</option>
                <option>S8</option>
                <option>RS4</option>
                <option>RS7</option>
                <option>R8</option>
            </select>
        </label>
      </div>


    <div id="bmwdiv" class="vanish">
        <label>
            <select>
                <option selected>Típus</option>
                <option>750 e38</option>
                <option>760 e65</option>
                <option>M3 e46</option>
                <option>M3 e92</option>
                <option>M4 2021</option>
                <option>M5 e34</option>
                <option>M5 e39</option>
                <option>M5 e60</option>
                <option>M635 CSi e24</option>
                <option>M8 Competition</option>
            </select>
        </label>
      </div>


      <div id="brutediv" class="vanish">
        <label>
            <select>
                <option selected>Típus</option>
                <option>Camper</option>
            </select>
        </label>
      </div>


      <div id="bugattidiv" class="vanish">
        <label>
            <select>
                <option selected>Típus</option>
                <option>Chiron</option>
            </select>
        </label>
      </div>


      <div id="buickdiv" class="vanish">
        <label>
            <select>
                <option selected>Típus</option>
                <option>Regal GNX '87</option>
            </select>
        </label>
      </div>


      <div id="cadillacdiv" class="vanish">
        <label>
            <select>
                <option selected>Típus</option>
                <option>Escalade</option>
                <option> Fleetwood '84</option>
            </select>
        </label>
      </div>


      <div id="chevroletdiv" class="vanish">
        <label>
            <select>
                <option selected>Típus</option>
                <option>BelAir '57</option>
                <option>Biscayne '59 </option>
                <option>C1500 454 SS</option>
                <option>Camaro ZL1 '10</option>
                <option> Caprice '87</option>
                <option>Chevelle 67</option>
                <option>Chevelle SS '70 (rozsdás)</option>
                <option>El Camino SS '71</option>
                <option>Impala '64</option>                
            </select>
        </label>
      </div>


       <div id="dodgediv" class="vanish">
        <label>
            <select>
                <option selected>Típus</option>
                <option>Challenger '70</option>
                <option>Charger R/T '69</option>
                <option>Polara '71</option>
                <option>RAM</option>
                <option>Charger SRT8 '14</option>
                <option>Demon SRT</option>
                <option>Viper SRT GTS 2013</option>
            </select>
        </label>
      </div>


      <div id="ferraridiv" class="vanish">
        <label>
            <select>
                <option selected>Típus</option>
                <option>250 GTO '62</option>
                <option>488 Pista</option>
                <option>F40 '87 </option>
            </select>
        </label>
      </div>


      <div id="forddiv" class="vanish">
        <label>
            <select>
                <option selected>Típus</option>
                <option>Country Squire '66</option>
                <option>Crown Victoria</option>
                <option>E-150</option>
                <option>F-100 '50</option>
                <option>F-150</option>
                <option>F-150 Raptor '17 </option>
                <option>Ratrod '34</option>
                <option>Shelby GT500</option>
                <option>Shelby GT500 '67</option>               
                <option>Thunderbird '64</option>
            </select>
        </label>
      </div>


      <div id="gmcdiv" class="vanish">
        <label>
            <select>
                <option selected>Típus</option>
                <option>Savanna</option>
            </select>
        </label>
      </div>


      <div id="hondadiv" class="vanish">
        <label>
            <select>
                <option selected>Típus</option>
                <option>NSX-R</option>
            </select>
        </label>
      </div>


      <div id="hummerdiv" class="vanish">
        <label>
            <select>
                <option selected>Típus</option>
                <option>H1 Alpha</option>
            </select>
        </label>
      </div>

      <div id="jeepdiv" class="vanish">
        <label>
            <select>
                <option selected>Típus</option>
                <option>Grand Cherokee SRT8</option>
                <option>Jeep Wrangler</option>
            </select>
        </label>
      </div>


      <div id="lamborghinidiv" class="vanish">
        <label>
            <select>
                <option selected>Típus</option>
                <option>Aventador</option>
            </select>
        </label>
      </div>


      <div id="lincolndiv" class="vanish">
        <label>
            <select>
                <option selected>Típus</option>
                <option>Town car Limousine</option>
            </select>
        </label>
      </div>


      <div id="mclarendiv" class="vanish">
        <label>
            <select>
                <option selected>Típus</option>
                <option>P1</option>
            </select>
        </label>
      </div>



      <div id="mercedesdiv" class="vanish">
        <label>
            <select>
                <option selected>Típus</option>
                <option>AMG One</option>
                <option>560 SEC</option>
                <option>A45 AMG</option>
                <option>AMG GT</option>
                <option>E250 Estate</option>
                <option>E420</option>
                <option>E500</option>
                <option>Sprinter</option>
            </select>
        </label>
      </div>


      
      <div id="mitsubishidiv" class="vanish">
        <label>
            <select>
                <option selected>Típus</option>
                <option>Evo X</option>
                <option>Galant</option>              
            </select>
        </label>
      </div>


      <div id="nissandiv" class="vanish">
        <label>
            <select>
                <option selected>Típus</option>
                <option>240SX SE</option>
                <option>GT-R</option>
                <option>Silvia S15</option>
                <option>Skyline R32</option>                                      
            </select>
        </label>
      </div>


      <div id="plymouthdiv" class="vanish">
        <label>
            <select>
                <option selected>Típus</option>
                <option>Belvedere</option> 
                <option>Superbird '70</option>                                 
            </select>
        </label>
      </div>


      <div id="pontiacdiv" class="vanish">
        <label>
            <select>
                <option selected>Típus</option>
                <option>Fierro GT G97 '85</option>
                <option>GTO The Judge '69</option>                               
            </select>
        </label>
      </div>


      <div id="porchediv" class="vanish">
        <label>
            <select>
                <option selected>Típus</option>
                <option>911 GT3 RS 4.0</option>                           
            </select>
        </label>
      </div>

      <div id="subarudiv" class="vanish">
        <label>
            <select>
                <option selected>Típus</option>
                <option>WRX STI</option>
                <option>BRZ</option>                           
                           
            </select>
        </label>
      </div>

      <div id="toyotadiv" class="vanish">
        <label>
            <select>
                <option selected>Típus</option>
                <option>Supra</option>
            </select>
        </label>
      </div>


      <div id="vwdiv" class="vanish">
        <label>
            <select>
                <option selected>Típus</option>
                <option>Corrado '95</option>
                <option>Golf IV R32</option>
                <option>Scirocco TSI</option>
            </select>
        </label>
      </div>


      <div id="yamahadiv" class="vanish">
        <label>
            <select>
                <option selected>Típus</option>
                <option>Aerox 50</option>
            </select>
        </label>
      </div>


      <hr class="bottomhr footer">
