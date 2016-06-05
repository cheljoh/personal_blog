$(document).ready(function(){
  $("#about-button").on("click", showAbout);
  $("#resume-button").on("click", showResume);
  $("#hide-about").on("click", hideAbout);
  $("#hide-resume").on("click", hideResume);
});


function showAbout(){
  $("#about-content").show();
  $('html,body').animate({
  scrollTop: $("#about-content").offset().top
  });
}

function showResume(){
  $("#resume").show();
  $('html,body').animate({
  scrollTop: $("#resume").offset().top
  });
}

function hideAbout(){
  $("#about-content").hide();
}

function hideResume(){
  $("#resume").hide();
}
