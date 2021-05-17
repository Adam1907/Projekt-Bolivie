$(function () {
   
   $("h2").on("click", function () {
      $(this).parents(".row").next().toggle(500);
   });

   function eventsBlock(events) {
      events.forEach((event) => {
         $("#udalosti tbody").append(`<tr>
            <td class="event-year">${event.year}</td>
            <td>
              <p class="event-name"><a href="${event.url}" target="_new">${event.event}</a></p>
              <p class="event-detail">${event.detail}</p>
            </td>            
        </tr>`);
      });

      $(".event-detail").hide();

      $(".event-name i, .event-name a").on("mouseover", function () {
         $("#udalosti tr").removeClass("bg-success text-white");
         $(this).parents("tr").addClass("bg-success text-white");
         $(".event-detail").hide();
         $(this).parent().next().show(500);
      });
   }

   fetch('data/events.json')
      .then(response => {
         return response.json()
      })
      .then(json => {
         eventsBlock(json);
      })
      .catch(function (error) {
         console.error('Chyba: \n', error);
      });

   function heroesBlock(heroes) {
      heroes.forEach((hero) => {
         $("#postavy .list-group").append(`<li class="list-group-item list-group-item-action list-group-item-success">${hero.name}</li>`);
      });
      $("#postavy li:first").addClass('active');
      fillPersonCard(heroes, heroes[0].name);

      $("#postavy li").on("click", function () {
         $("#postavy li").removeClass("active");
         $(this).addClass("active");
         let person = $(this).text();
         $("#portret").slideUp(500, function () {
            fillPersonCard(heroes, person);
         });
         $("#portret").slideDown(500);
      });

   }
   
   function fillPersonCard(heroes, person) {
      let hero = heroes.find(item => {
         return item.name === person
      });
      $(".card-header").html(`Narození: ${hero.birth} - Úmrtí: ${hero.death}`);
      $(".card-title").text(hero.name);
      $(".card-text").text(hero.biography);
      $(".card-footer").html(`Odkaz: <a href="${hero.online}">${hero.online}</a>`);
      $(".gallery").empty();
      for (let i = 0; i < hero.portraits.length; i++) {
         $(".gallery").append(`<div class="col-sm-4"><a href="#"><img src="images/${hero.portraits[i]}" alt="" class="img-fluid"></a></div>`);
      }
   }

   fetch('data/heroes.json')
   .then(response => {
      return response.json()
   })
   .then(json => {
      heroesBlock(json);
   })
   .catch(function (error) {
      console.error('Chyba: \n', error);
   });

})