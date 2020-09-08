// Set constraints for the video stream
var constraints = { video: { facingMode: {exact: 'environment'} }, audio: false };
var track = null;

// Define constants
const cameraView = document.querySelector("#camera--view"),
    cameraOutput = document.querySelector("#camera--output"),
    cameraSensor = document.querySelector("#camera--sensor"),
    cameraTrigger = document.querySelector("#camera--trigger");

// Access the device camera and stream to cameraView
function cameraStart() {
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(stream) {
            track = stream.getTracks()[0];
            cameraView.srcObject = stream;
        })
        .catch(function(error) {
            console.error("Oops. Something is broken.", error);
        });
}
var inc=0
// Take a picture when cameraTrigger is tapped
cameraTrigger.onclick = function() {
    var links = document.getElementsByTagName("a");
 
    
 document.getElementById("yellowbar").style.width = "46";
    inc=inc+1;
    if (inc == 1) {
 document.getElementById("yellowbar").style.width = "46";
 document.getElementById("yellowbar").style.transition = "1s ease";
 document.getElementById("littled").style.left = "26%";
 document.getElementById("littled").style.transition = "1s ease";
document.getElementById("texty").style.left = "-20px";
  document.getElementById("texty").innerHTML = "계속 더 모아볼까?";
    }
    else if (inc == 2) {
 document.getElementById("yellowbar").style.width = "92";
 document.getElementById("yellowbar").style.transition = "1s ease";
 document.getElementById("littled").style.left = "33%";
 document.getElementById("littled").style.transition = "1s ease";
document.getElementById("texty").style.left = "-20px";
  document.getElementById("texty").innerHTML = "계속 더 모아볼까?";    }
    else if (inc == 3) {
 document.getElementById("yellowbar").style.width = "138";
 document.getElementById("yellowbar").style.transition = "1s ease";
 document.getElementById("littled").style.left = "41%";
 document.getElementById("littled").style.transition = "1s ease"; 
    document.getElementById("texty").style.left = "-20px";
  document.getElementById("texty").innerHTML = "계속 더 모아볼까?";}
    else if (inc == 4) {
 document.getElementById("yellowbar").style.width = "184";
 document.getElementById("yellowbar").style.transition = "1s ease";
 document.getElementById("littled").style.left = "50%";
 document.getElementById("littled").style.transition = "1s ease"; 
    document.getElementById("texty").style.left = "-20px";
  document.getElementById("texty").innerHTML = "계속 더 모아볼까?";}
    else if (inc == 5) {
 document.getElementById("yellowbar").style.width = "230";
 document.getElementById("yellowbar").style.transition = "1s ease";
 document.getElementById("littled").style.left = "58%";
 document.getElementById("littled").style.transition = "1s ease"; 
    document.getElementById("texty").style.left = "-20px";
  document.getElementById("texty").innerHTML = "계속 더 모아볼까?";}
    else if (inc == 6) {
 document.getElementById("yellowbar").style.width = "276";
 document.getElementById("yellowbar").style.transition = "1s ease";
 document.getElementById("littled").style.left = "66%";
 document.getElementById("littled").style.transition = "1s ease"; 
    document.getElementById("texty").style.left = "-20px";
  document.getElementById("texty").innerHTML = "계속 더 모아볼까?";}
    else if (inc == 7) {
 document.getElementById("yellowbar").style.width = "322";
 document.getElementById("yellowbar").style.transition = "1s ease";
 document.getElementById("littled").style.left = "74%";
 document.getElementById("littled").style.transition = "1s ease"; 
 document.getElementById("texty").style.left = "-10px";
  document.getElementById("texty").innerHTML = "거의 다 됐어!";    
    }
    else if (inc == 8) {
 document.getElementById("yellowbar").style.width = "368";
 document.getElementById("yellowbar").style.transition = "1s ease";
 document.getElementById("littled").style.left = "82%";
 document.getElementById("littled").style.transition = "1s ease"; 
  document.getElementById("texty").style.left = "-20px";
  document.getElementById("texty").innerHTML = "이제 다 됐어!";
  document.getElementById("opacity2").style.display = "block"
document.getElementById("buttonfamily").style.transition = "0.5s ease";
 document.getElementById("buttonfamily").style.display = "none"
    setTimeout(sayHi, 1000);
    }
    

    cameraSensor.width = cameraView.videoWidth;
    cameraSensor.height = cameraView.videoHeight;
    cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
    cameraOutput.src = cameraSensor.toDataURL("image/webp");
    cameraOutput.classList.add("taken");
    // track.stop();
    
};

// Start the video stream when the window loads
window.addEventListener("load", cameraStart(), false);