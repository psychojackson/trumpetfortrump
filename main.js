$(document).ready(function(){

  $(".trumper").mousemove(function(e){
        $('#trumpet').css({'top': e.clientY - 20, 'left': e.clientX - 445});
  });

  var jazzAudio = $("#jazzAudio")[0];
  jazzAudio.volume = 0.5;
  var trumpAudio = $("#trumpAudio") [0];
  $(".hover").mouseenter(function() {
  jazzAudio.play();
  trumpAudio.volume = 0;
}).mouseleave(function() {
  jazzAudio.pause();
  trumpAudio.volume = 1;
});
/*
  $(function(){
    var jazzhover     = $('.hover');
        var jazzaudio = jazzhover.find('audio')[0];

    jazzhover.mouseover(function(){
       jazzaudio.play();
    }, function(){
       jazzaudio.pause();
    });
}); */

});
