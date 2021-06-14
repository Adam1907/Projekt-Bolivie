const regions = [
    {
        "id":"cochabamba",
        "name":"Cochabamba",
        "pic":"cochabamba.jpeg",
        "text":"Cochabamba je jedním z devíti departementů Bolívie. Je známo, že je „sýpkou“ země kvůli své rozmanitosti zemědělských produktů z její zeměpisné polohy. Má rozlohu 55 631 km². Jeho populace v roce 2012 sčítání lidu bylo 1758143. Jeho hlavním městem je město Cochabamba, známé jako „město věčného jara“ a „zahradní město“ kvůli jarním teplotám po celý rok."
     },
     
     {
         "id":"pando",
         "name":"Pando",
         "pic":"pando.jpeg",
         "text":"Pando je departement na severu Bolívie o rozloze 63 827 km² v amazonském deštném pralese sousedící s hranicí s Brazílií a Perú. Hlavním městem je Cobija."
      },
 
      {
         "id":"beni",
         "name":"Beni",
         "pic":"beni.jpeg",
         "text":"Beni, někdy El Beni, je severovýchodní departement Bolívie, v nížinné oblasti země. Jedná se o druhý největší útvar v zemi s rozlohou 213 564 km² a byl vytvořen nejvyšším dekretem 18. listopadu 1842 za vlády generála Josého Balliviána. Hlavním městem je Trinidad."
      },
 
      {
         "id":"oruro",
         "name":"Oruro",
         "sign":"oruro.jpg",
         "text":"Oruro je oddělení v Bolívii o rozloze 53 588 km². Hlavním městem je Oruro. Podle sčítání lidu z roku 2012 mělo oddělení Oruro 494 178 obyvatel."
      },
 
      {
         "id":"la_paz",
         "name":"La Paz",
         "pic":"la_paz.jpg",
         "text":"La Paz je departement v západní Bolívii na hranici s Peru. Rozloha departementu je 133 985 km², v roce 2012 v něm žilo 2 706 359 obyvatel. Hlavním městem je La Paz. V departementu se nachází bolivijská část jezera Titicaca, pohoří Cordillera Real s nadmořskou výškou přes 6 400 m n. m. Severovýchodně od pohoří se nachází Yunga, strmé východní svahy Andského pohoří, které tvoří přechod k Amazonské nížině."
      },
 
      {
         "id":"santa_cruz",
         "name":"Santa Cruz",
         "pic":"santa_cruz.jfif",
         "text":"Santa Cruz s rozlohou 370 621 km² je největším departementem v Bolívii. Hlavním městem je Santa Cruz de la Sierra. K roku 2001 měl depatement 2 029 471 obyvatel. Departement se nachází ve východní části Bolívie. Velkou část jeho rozlohy zaujímají deštné pralesy, které se rozprostírají od And až po hranice s Brazílií."
      },
 
      {
         "id":"potosi",
         "name":"Potosi",
         "pic":"potosi.jpg",
         "text":"S rozlohou 370 621 km² největším departementem v Bolívii. Hlavním městem je Santa Cruz de la Sierra. K roku 2001 měl depatement 2 029 471 obyvatel. Departement se nachází ve východní části Bolívie. Velkou část jeho rozlohy zaujímají deštné pralesy, které se rozprostírají od And až po hranice s Brazílií."
      },
 
      {
         "id":"tarija",
         "name":"Tarija",
         "pic":"tarija.jpg",
         "text":"Tarija je departement v Bolívii. Nachází se v jihovýchodní Bolívii, hraničící s Argentinou na jihu a Paraguayem na východě. Podle sčítání lidu z roku 2012 v něm žije 482 196 obyvatel. Má rozlohu 37 623 km². Tarija je hlavním městem departementu."
      },
 
      {
         "id":"chuquisaca",
         "name":"Chuquisaca",
         "pic":"chuquisaca.jpeg",
         "text":"Chuquisaca je departement Bolívie nacházející se ve středu na jih. Hraničí s departementy Cochabamba, Tarija, Potosí a Santa Cruz. Hlavním městem departementu je Sucre, které je také ústavním hlavním městem Bolívie."
      }
]

const cities = [
    {
       "id":"cobija",
       "city":"Cobija",
       "pic":"",
       "text":"Cobija je město v severní Bolívii. Je hlavním městem departementu Pando a žije v něm přibližně 46 tisíc obyvatel. Leží na pravém břehu řeky Acre, která zde tvoří státní hranici s Brazílií. Má nadmořskou výšku 205 m, vládne zde horké vlhké podnebí a město je obklopeno tropickým pralesem."
    },

    {
        "id":"tarija2",
        "city":"Tarija",
        "pic":"",
        "text":"Tarija nebo San Bernardo de la Frontera de Tarixa je město v jižní Bolívii. Společnost Tarija, založená v roce 1574, s letištěm (letiště Capitána Oriela Lea Plaza (TJA)) nabízejícím pravidelnou dopravu do hlavních bolivijských měst, má 234 442 obyvatel."
     },

     {
        "id":"sucre",
        "city":"Sucre",
        "pic":"",
        "text":"Sucre, dříve známé jako Charcas, La Plata a Chuquisaca, je oficiální hlavní město Bolívie a hlavní město departementu Chuquisaca. Je sídlem Nejvyššího soudního dvora, Ústavního soudu, Soudní rady a Hlavní republikové prokuratury, vláda však sídlí v La Pazu."
     },

     {
        "id":"potosi2",
        "city":"Potosi",
        "pic":"",
        "text":"Potosí, dříve známé také jako Villa Imperial de Potosí, je město na jihu Bolívie, hlavní město stejnojmenného departementu. Rozkládá se na úbočí pověstmi opředené hory Cerro Rico, v níž fungoval největší stříbrný důl na světě. V roce 2011 žilo v Potosí 170 230 obyvatel."
     },

     {
        "id":"santa_cruz2",
        "city":"Santa Cruz",
        "pic":"",
        "text":"Největší město Bolívie. Leží v tropické východní části země na řece Piraí. Město bylo založeno v roce 1561, je centrem departmentu Santa Cruz a největším hospodářským střediskem země s velkým podílem na HDP. Od poloviny 20. století, kdy byla vybudována silnice z Cochabamby a železnice do Brazílie, Santa Cruz je jedním z nejrychleji rostoucích jihoamerických měst."
     },

     {
        "id":"la_paz2",
        "city":"La Paz",
        "pic":"",
        "text":"La Paz je administrativní město Bolívie, sídlo bolivijské vlády a hlavní město departmentu La Paz, nicméně oficiálním hlavním městem Bolívie je Sucre. Ve městě žije přibližně 2,87 milionu obyvatel. La Paz je nejvýše položené hlavní město světa."
     },

     {
        "id":"oruro2",
        "city":"Oruro",
        "pic":"",
        "text":"Oruro je město v Bolívii se zhruba 260 000 obyvateli, které je správním střediskem stejnojmenného departementu. Leží 230 km severozápadně od metropole země Sucre na úpatí hory Jach'a Ch'ankha v nadmořské výšce 3735 m a má extrémně chladné a suché klima typické pro region Altiplano."
     },

     {
        "id":"trinidad",
        "city":"Trinidad",
        "pic":"",
        "text":"Trinidad, oficiálně La Santísima Trinidad, je město v Bolívii, hlavní město departementu Beni. Město bylo založeno v roce 1686 otcem Ciprianem Baraceem. V roce 1769 se město kvůli povodním přesunulo na své současné místo."
     },

     {
        "id":"cochabamba2",
        "city":"Cochabamba ",
        "pic":"",
        "text":"Cochabamba je hlavním městem stejnojmenného departementu v Bolívii. Rozprostírá se v údolí Cochabamba v Andách, a s počtem 608 276 obyvatel je třetím největším bolivijským městem. Ve městě se nachází tzv. jihoamerický parlament, výkonný orgán organizace UNASUR. "
     },

]

$(function(){

    

    $("#svg14 path").on('mouseover', function(){
        $(this).css('fill', "lime");
    });

    $("#svg14 path").on('mouseout', function(){
        $(this).css('fill', "grey");
    });

    $("#svg14 rect").on('mouseover', function(){
        $(this).css('fill', "#ff6666");
    });
    
    $("#svg14 rect").on('mouseout', function(){
        $(this).css('fill', "red");
    });

    $("#svg14 rect").on('click', function(){
        $(this).css('fill','blue');
        let id = $(this).attr('id');
        let city = cities.find(item => {return item.id == id});
        $("#card-main").slideUp(500, function () {
            $(".card-header").html(`${city.city} <i class="fas fa-square-full"></i>`);
            $(".card-text").text(city.text);
         });
        $("#card-main").slideDown(500);
    });  
    

    

    $("#svg14 path").on('click', function(){
        let id = $(this).attr('id');
        let region = regions.find(item => {return item.id == id});
        $(this).css('fill','lime')
        $("#card-main").slideUp(500, function () {
            $(".card-header").html(`${region.name} <i class="fas fa-circle"></i>`);
            $(".card-text").text(region.text);
         });
        $("#card-main").slideDown(500);
    });  

})