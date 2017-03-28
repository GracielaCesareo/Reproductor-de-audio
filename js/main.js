var audio = document.getElementById("repAudio");

function reproducirAudio() {
  audio.play();
}

function pausarAudio() {
  audio.pause();
}

function pararAudio() {
  audio.load();
  }

function audioAdelantar(value) {
   audio.currentTime += value;
   }

function retrocederAudio(value) {
  audio.currentTime -= value;
}

function subirVolumen(value) {
  audio.volume += value;
}

function bajarVolumen(value) {
  audio.volume -= value;

}

audio.ontimeupdate = function() {
  var barraProgreso = document.getElementById("barra");
 barraProgreso.value = audio.currentTime;

};
