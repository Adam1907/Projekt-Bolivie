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
        "biography":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id eleifend mi. Suspendisse potenti. Donec vehicula turpis justo, accumsan vestibulum mauris pharetra id. Aliquam tellus neque, aliquam vitae posuere non, volutpat id metus. Sed rhoncus lorem vel dui faucibus sodales. Maecenas dictum augue sit amet nisi suscipit, ac vulputate sapien dignissim. Fusce malesuada, urna ut facilisis placerat, dui odio maximus.",
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
        "biography":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id eleifend mi. Suspendisse potenti. Donec vehicula turpis justo, accumsan vestibulum mauris pharetra id. Aliquam tellus neque, aliquam vitae posuere non, volutpat id metus. Sed rhoncus lorem vel dui faucibus sodales. Maecenas dictum augue sit amet nisi suscipit, ac vulputate sapien dignissim. Fusce malesuada, urna ut facilisis placerat, dui odio maximus.",
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
        "biography":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id eleifend mi. Suspendisse potenti. Donec vehicula turpis justo, accumsan vestibulum mauris pharetra id. Aliquam tellus neque, aliquam vitae posuere non, volutpat id metus. Sed rhoncus lorem vel dui faucibus sodales. Maecenas dictum augue sit amet nisi suscipit, ac vulputate sapien dignissim. Fusce malesuada, urna ut facilisis placerat, dui odio maximus.",
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
         "biography":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id eleifend mi. Suspendisse potenti. Donec vehicula turpis justo, accumsan vestibulum mauris pharetra id. Aliquam tellus neque, aliquam vitae posuere non, volutpat id metus. Sed rhoncus lorem vel dui faucibus sodales. Maecenas dictum augue sit amet nisi suscipit, ac vulputate sapien dignissim. Fusce malesuada, urna ut facilisis placerat, dui odio maximus.",
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
         "biography":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id eleifend mi. Suspendisse potenti. Donec vehicula turpis justo, accumsan vestibulum mauris pharetra id. Aliquam tellus neque, aliquam vitae posuere non, volutpat id metus. Sed rhoncus lorem vel dui faucibus sodales. Maecenas dictum augue sit amet nisi suscipit, ac vulputate sapien dignissim. Fusce malesuada, urna ut facilisis placerat, dui odio maximus.",
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
        "biography":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id eleifend mi. Suspendisse potenti. Donec vehicula turpis justo, accumsan vestibulum mauris pharetra id. Aliquam tellus neque, aliquam vitae posuere non, volutpat id metus. Sed rhoncus lorem vel dui faucibus sodales. Maecenas dictum augue sit amet nisi suscipit, ac vulputate sapien dignissim. Fusce malesuada, urna ut facilisis placerat, dui odio maximus.",
        "portraits":[
           "lidia.jpg",
           "lidia2.png"
        ],
        "online":"https://en.wikipedia.org/wiki/Lidia_Gueiler_Tejada"
     },
 ];

$(function(){

   $("h2").on("click", function(){
        $(this).parents(".row").next().toggle(500);
      });   
            

      heroes.forEach(hero=>{
         $("#postavy .list-group").append(`<li class="list-group-item list-group-item-action list-group-item-primary">${hero.name}</li>`);
       
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