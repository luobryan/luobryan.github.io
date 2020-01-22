

  var i = 0;
  var introText = 'Hello! I\'m Bryan. '
  var speed = 50;

function typeWriter() {
    if (i < introText.length){
        document.getElementById('introText').innerHTML += introText.charAt(i);
        i++;
        setTimeout(typeWriter,speed);
    }

   
}
