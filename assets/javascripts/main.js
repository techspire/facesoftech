function setMainMargin(){
  var header = document.getElementById('header').offsetHeight;
  document.getElementById("main").style.paddingTop = header  - 1 + "px";
};
$(window).on('resize load', function() { setMainMargin(); });
