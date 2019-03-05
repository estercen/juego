// JQuery Document

$(function(){

$("#paja").draggable();
    $("#casa-paja").droppable({
      drop: function(event){$(this).fadeTo(500, 0.4)},
      tolerance: "pointer" 
  });
     

 $("#madera").draggable();
    $("#casa-madera").droppable({
      drop: function(event){$(this).fadeTo(500, 0.4)},
      tolerance: "pointer"
    });
    
   $("#ladrillo").draggable();
    $("#casa-ladrillo").droppable({
     drop: function(event){$(this).fadeTo(500, 0.4)},
      tolerance: "pointer"
    });

});