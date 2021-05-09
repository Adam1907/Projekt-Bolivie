const heroes = [
    {
       "name":"Simón Bolívar",
       "birth":"24.7.1783",
       "death":"17.12.1830",
       "biography":"Simón Bolívar byl synem šlechtice španělského původu; otec mu zemřel ve věku tří let, matka, když mu bylo dvanáct. Ujal se ho strýc, se kterým se ale Simón pohádal a tři roky po smrti své matky se odstěhoval ke svému učiteli Simónu Rodríguezovi. Roku 1798 vstoupil Bolívar do venezuelské milice jako kadet. Roku 1799 odešel studovat do Španělska. Pokračoval do Francie, kde studoval francouzštinu, vedl rozmařilý život a stal se velkým přívržencem Napoleona Bonaparte. Roku 1802 se vrátil do Španělska, kde se oženil se svou příbuznou Maríí Teresou Rodríguezovou del Toro. Nakrátko se vrátil do vlasti v letech 1803–1804, nedlouho po příjezdu jeho manželka María Teresa zemřela. 2. prosince 1804 se Bolívar zúčastnil Napoleonovy korunovace. O rok později byl přizván mezi Svobodné zednáře. Do vlasti se definitivně vrátil roku 1807. Zapojil se do hnutí usilujícího o osvobození ze španělské nadvlády. ",
       "portraits":[
          "bolivar.jpg",
          "bolivar2.jpg"
       ],
       "online":"https://cs.wikipedia.org/wiki/Sim%C3%B3n_Bol%C3%ADvar"
    },
    {
        "name":"Simón Iturri Patiño",
        "birth":"1.6.1860",
        "death":"20.4.1947",
        "biography":"Bolivijský průmyslník, který v době své smrti patřil k nejbohatším lidem na světě. S majetkem získaným z vlastnictví většiny cínového průmyslu v Bolívii byl Patiño přezdíván „Andský Rockefeller“. Během druhé světové války byl Patiño považován za jednoho z pěti nejbohatších mužů na světě.",
        "portraits":[
           "patino.jpg",
           "patino2.jpg"
        ],
        "online":"https://cs.wikipedia.org/wiki/Marco_Etcheverry"
     },
     {
        "name":"Francisco Pizarro",
        "birth":"16.3.1478",
        "death":"26.3.1541",
        "biography":"Španělský conquistador, dobyvatel říše Inků a zakladatel dnešního hlavního města Peru Limy. Narodil se v Trujillu ve Španělsku ve velmi chudé rodině, ale datum jeho narození není přesně známo. Byl nelegitimním synem Gonzala Pizarra Rodrígueze de Aguilar staršího (1446–1522), který se jako plukovník pěchoty pod velením dona Gonzales Fernándeze de Córdoba vyznamenal v italských válkách a v Navaře. Franciscova matka Francisca González Mateos měla jen malý majetek, později se vdala a měla syna Francisca Martína de Alcántara. Přes svoji matku byl Francisco vzdálený příbuzný dobyvatele Mexika Hernána Cortése.",
        "portraits":[
           "pizarro.png",
           "pizarro2.jpg"
        ],
        "online":"https://cs.wikipedia.org/wiki/V%C3%A1clav_Havel"
     },
     {
        "name":"Roberto Suárez Gómez",
        "birth":"28.3.1592",
        "death":"15.11.1670",
        "biography":"Známý jako král kokainu, byl bolivijský drogový magnát a obchodník s lidmi, který hrál hlavní roli v rozšiřování obchodu s kokainem v Bolívii. V jeho nejlepších letech Suárez vydělal 400 milionů dolarů ročně, byl jedním z hlavních dodavatelů Medellínského kartelu a vůdcem největší bolivijské drogové říše a byl považován za největšího producenta kokainu na světě.",
        "portraits":[
           "gomez.jpg",
           "gomez2.jpg",
        ],
        "online":"https://en.wikipedia.org/wiki/Roberto_Su%C3%A1rez_G%C3%B3mez"
     },
     {
         "name":"Juana Azurduy de Padilla",
         "birth":"přibližně 1370",
         "death":"6.7.1415",
         "biography":"Partyzánská vojenská vůdkyně z Chuquisaca, místokrálovství řeky Río de la Plata. Bojovala za bolivijskou nezávislost po boku svého manžela Manuela Ascencia Padillu, který získal hodnost podplukovníka. Byla známá svou silnou podporou a vojenským vedením domorodých obyvatel Horního Peru.",
         "portraits":[
            "juana.jpg",
            "juana2.jpg"
         ],
         "online":"https://en.wikipedia.org/wiki/Juana_Azurduy_de_Padilla"
      },
      {
         "name":"Jaime Escalante",
         "birth":"8.9.1841",
         "death":"1.5.1904",
         "biography":"Jaime Alfonso Escalante Gutiérrez byl bolivijsko-americký pedagog známý tím, že v letech 1974 až 1991 učil studenty na matematické škole na Garfield High School ve východním Los Angeles. Escalante byl hlavní postavou filmu Stand and Deliver z roku 1988, ve kterém ho ztvárnil Edward James Olmos. V roce 1993 byl podle něj pojmenován asteroid 5095 Escalante.",
         "portraits":[
            "jaime.jpg",
            "jaime2.jpg",
         ],
         "online":"https://en.wikipedia.org/wiki/Jaime_Escalante"
      },
     {
        "name":"Lidia Gueiler Tejada",
        "birth":"20.2.1878",
        "death":"28.1.1930",
        "biography":"Lidia Gueiler Tejada byla bolivijská politička, která prozatímně působila jako 56. prezidentka Bolívie v letech 1979 až 1980. Byla první bolívijskou hlavou státu a druhou v historii Ameriky (první byla Isabel Perón v Argentině) v letech 1974 až 1976). Byla sestřenice americké herečky Raquel Welch.",
        "portraits":[
           "lidia.jpg",
           "lidia2.png"
        ],
        "online":"https://en.wikipedia.org/wiki/Lidia_Gueiler_Tejada"
     },
 ];

 const events = [
   {
      "year":"200 př.n.l.",
      "event":"Příchod Tiwanaku",
      "detail":"Historie Bolívie je prastará, s izolovanými domorodými kmeny pěstující plodiny a domestikující lamy v Cochabamba a Chuquisaca již před 5 000 lety. Asi před 2000 lety dorazili aymarští lidé do západní Bolívie a založili říši Tiwanaku. Postavili obrovské město, ve kterém mohly být umístěny stovky tisíc lidí, než nakonec upadly kvůli období dlouhotrvajícího sucha kolem roku 1000 našeho letopočtu.",
      "url":"https://cs.wikipedia.org/wiki/Tiwanaku"
   },
   {
       "year":"1532",
       "event":"Španělská kolonizace",
       "detail":"V roce 1532 se první španělské lodě plavily podél pobřeží Peru se záměrem kolonizovat celý kontinent. Po sérii krvavých bitev převzali kontrolu nad inckou pevností Cuzco a nakonec se rozvětvili do Bolívie. Jak to často v koloniálních výbojích bývá, Španělé brutálně potlačovali domorodé obyvatele, vraždili a nutili ostatní, aby pracovali jako otroci. Je však pozoruhodné, že původním obyvatelům Bolívie se dařilo mnohem lépe než většině ostatních, a proto má dnes země nejvyšší podíl domorodců v Jižní Americe.",
       "url":"https://cs.wikipedia.org/wiki/Kolonizace_Ji%C5%BEn%C3%AD_Ameriky"
   },
   {
      "year":"1545",
      "event":"Založení Cerro Rico",
      "detail":"Netrvalo dlouho a dobyvatelé objevili stříbrnou horu Cerro Rico nedaleko Potosi. Když si uvědomili svůj potenciál, rychle shromáždili legii otroků, kteří těžili rudu v nepříjemných podmínkách. Během koloniálních časů Španělé vytáhli z hory asi dvě miliardy uncí rudy, což stačilo na to, aby v podstatě financovala celou jejich koloniální misi. Odhaduje se, že pod horou zahynulo asi šest milionů otroků.",
      "url":""
   },
   {
       "year":"1825",
       "event":"Nezávislost",
       "detail":"Bolívie jako první usilovala o nezávislost v roce 1809, protože politické a ekonomické problémy v koloniálním městě Sucre přinesly do regionu občanské nepokoje. V okamžiku známém jako <i>El primer grito de la libertad</i> (první výkřik svobody) se revolucionáři mobilizovali po celém městě a začali bojovat za nezávislost. Hnutí se rozšířilo po celém kontinentu a v průběhu let začalo španělské území upadat. Bolívie byla poslední zemí v Jižní Americe, která dosáhla nezávislosti, asi o 16 let později, v roce 1825.",
       "url":"https://cs.wikipedia.org/wiki/Bol%C3%ADvie#Nez%C3%A1vislost",      
   },
   {
       "year":"1932-1935",
       "event":"Válka o Chaco",
       "detail":"Válka Chaco byla další katastrofou pro Bolívii, tentokrát proti jejich východnímu sousedovi Paraguay. V roce 1932 se rozšířily spekulace, že velká část vyprahlé a převážně obývatelné půdy známé jako severní Chaco byla bohatá na ropu. Před potvrzením existence černého zlata as podporou dvou konkurenčních ropných společností zahájila Bolívie a Paraguay nejkrvavější jihoamerickou válku 20. století. Asi 100 000 vojáků zahynulo v horké řídce osídlené oblasti, kterou někteří historici nazvali <i>La Guerra de la Sed</i> (Žíznivá válka). Bolívie ztratila obrovskou část země a paradoxně se ukázalo, že tam stejně skoro žádný olej nebyl.",
       "url":"https://cs.wikipedia.org/wiki/V%C3%A1lka_o_Gran_Chaco" 
   },
   {
       "year":"1952",
       "event":"Bolivijská národní revoluce",
       "detail":"V roce 1952 se k moci dostala strana s názvem Revoluční národní hnutí a podnítila tzv. Bolívijskou národní revoluci. Tato pozoruhodná změna v bolivijské politice způsobila, že moc byla vzata bílé vládnoucí třídě a byla udělena nová práva marginalizovaným domorodým komunitám. Mezi jejich levicové politiky patřila agrární reforma, znárodnění těžebního sektoru, volební právo dospělých a zaměření na zdraví a vzdělávání na venkově. Strana ztratila moc vojenským pučem v roce 1964, ale pokračovala v kampani několik desetiletí, i když s výrazně pravicovějším přístupem.",
       "url":""
   },
];


$(function(){

   $("h2").on("click", function(){
        $(this).parents(".row").next().toggle(500);
      });   
            

      events.forEach((event)=>{
         $("#udalosti tbody").append(`<tr>
             <td class="event-year">${event.year}</td>
             <td>
               <p class="event-name"><a href="${event.url}" target="_new">${event.event}</a></p>
               <p class="event-detail">${event.detail}</p>
             </td>            
         </tr>`);
     });
 
     $(".event-detail").hide();
 
     $(".event-name i, .event-name a").on("mouseover", function(){
         $("#udalosti tr").removeClass("bg-success text-white");
         $(this).parents("tr").addClass("bg-success text-white");
         $(".event-detail").hide();
         $(this).parent().next().show(500);
     });


      heroes.forEach(hero=>{
         $("#postavy .list-group").append(`<li class="list-group-item list-group-item-action list-group-item-success">${hero.name}</li>`);
       
      })
    
    function fillPerson(person){

        let hero = heroes.find(item => {return item.name === person});
        
        $("#portret .card-header").html(`Narození: ${hero.birth} - Úmrtí: ${hero.death}`);
        $("#portret .card-title").text(hero.name);
        $("#portret .card-text").text(hero.biography);
        $("#portret .card-footer").html(`<a href="${hero.online}">Odkaz: ${hero.online}</a>`);
        $("#portret .gallery").empty();
        hero.portraits.forEach(portrait => {
           $("#portret .gallery").append(`<div class="col-sm-4"><img src="../img/h_img/${portrait}" alt="${hero.name}" class="img-fluid"></div>`);
        })
      }
    $("#postavy li:first").addClass("active");
      fillPerson(heroes[0].name);
    $("#postavy .list-group li").on("click", function(){
        $("#postavy .list-group li").removeClass("active");
        $(this).addClass("active");
        let person = $(this).text();
        $("#portret").slideUp(500, function(){ 
            fillPerson(person);
        });
       
        $("#portret").slideDown(500);
     
   });

})