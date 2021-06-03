$(function(){

    $("#svg14 path").on('mouseover', function(){
        $(this).css('fill', "lime");
    });

    $("#svg14 path").on('mouseout', function(){
        $(this).css('fill', "grey");
    });

    $("#svg14 path").on('click', function(){
        console.log(this.id);
        console.log(this.name);
        $("#region").html(this.id);
    });

})