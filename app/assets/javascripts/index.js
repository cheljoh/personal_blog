$(document).ready(function(){
  $("#about-button").on("click", showAbout);
  $("#hide-about").on("click", hideAbout);
});


function showAbout(){
  $("#about-content").show();
  $('html,body').animate({
  scrollTop: $("#about-content").offset().top
  });
}

function hideAbout(){
  $("#about-content").hide();
}
