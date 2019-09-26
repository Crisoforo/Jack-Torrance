var i=1;
var message = "All work and no play makes Jack a dull boy. ";
var paragraph = message.repeat(10*1000);

function typing(){
  if( i <= paragraph.length){
    var txt = paragraph.substring(0,i);
    document.getElementById("hid").innerHTML = txt;
        setTimeout("typing()",90);
    i++;
  }else{
    i=1;
    document.getElementById("hid").innerHTML = "";
    setTimeout("typing()",500);
  }
}
typing();


function playAudio(){
    var audio1 = document.getElementById('audio1');
    var audio2 = document.getElementById('audio2');
    audio1.play();
    audio2.play();
}