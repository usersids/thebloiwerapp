window.alert("Please turn your volume up for the best results.");
var rpm;
var context = new AudioContext, oscillator;

var setTone = function (val) {

  var multiplier = 13;  
  
	if (oscillator) {
    oscillator.stop();
  }
  
  oscillator = context.createOscillator();
  oscillator.frequency.value = val * multiplier
	oscillator.connect(context.destination);
  oscillator.start(0);

};




function stop_blow(){
    window.location.replace("index.html")
}
function min(){
  document.getElementById("image-fan-moving-1").style.display="inline-block";
  document.getElementById("image-fan-moving").style.display="none";
  document.getElementById("image-fan-moving-2").style.display="none";
  document.getElementById("image-fan-moving-3").style.display="none";
  setTone(10);
}function medium(){
  setTone(30);
  document.getElementById("image-fan-moving-1").style.display="none";
  document.getElementById("image-fan-moving").style.display="none";
  document.getElementById("image-fan-moving-2").style.display="inline-block";
  document.getElementById("image-fan-moving-3").style.display="none";
}function max(){
  setTone(50);
  document.getElementById("image-fan-moving-1").style.display="none";
  document.getElementById("image-fan-moving").style.display="none";
  document.getElementById("image-fan-moving-2").style.display="none";
  document.getElementById("image-fan-moving-3").style.display="inline-block";
}
