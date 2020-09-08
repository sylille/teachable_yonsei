
var capture;
var inc=0

var options = {
     video: {
        
         facingMode: {
          exact: "environment"
        }
     }
   };
// For displaying the label
let label = "waiting...";
// The classifier
let classifier;

// STEP 1: Load the model!
function preload() {
  classifier = ml5.imageClassifier('model/model.json');
}

var canvasDiv = document.getElementById('camera');

function setup() {

  var sketchCanvas = createCanvas(canvasDiv.clientWidth,canvasDiv.clientHeight);
  // Create the video
  capture = createCapture(options);
  capture.hide();

  // STEP 2: Start classifying
  classifyVideo();
}

// STEP 2 classify the videeo!
function classifyVideo() {
  classifier.classify(capture, gotResults);
}

function draw() {
  background(0);

  // Draw the video
  image(capture, 0, 0, canvasDiv.clientWidth, canvasDiv.clientHeight);

  // Pick an result
  let result = "nothing";
  if (label == "arm" || label =="leg" || label == "face") {
    cameraTrigger.onclick = function() {
    var links = document.getElementsByTagName("a");
        document.getElementById("yellowbar").style.width = "46";
        inc=inc+1;
        if (inc == 1) {
     document.getElementById("yellowbar").style.width = "46";
     document.getElementById("yellowbar").style.transition = "1s ease";
     document.getElementById("littled").style.left = "26%";
     document.getElementById("littled").style.transition = "1s ease";
     document.getElementById("texty").style.left = "-10px";
      document.getElementById("texty").innerHTML = "계속 더 모아볼까?";
        }
        else if (inc == 2) {
     document.getElementById("yellowbar").style.width = "92";
     document.getElementById("yellowbar").style.transition = "1s ease";
     document.getElementById("littled").style.left = "33%";
     document.getElementById("littled").style.transition = "1s ease";
    document.getElementById("texty").style.left = "-10px";
      document.getElementById("texty").innerHTML = "계속 더 모아볼까?";    }
        else if (inc == 3) {
     document.getElementById("yellowbar").style.width = "138";
     document.getElementById("yellowbar").style.transition = "1s ease";
     document.getElementById("littled").style.left = "41%";
     document.getElementById("littled").style.transition = "1s ease"; 
        document.getElementById("texty").style.left = "-10px";
      document.getElementById("texty").innerHTML = "계속 더 모아볼까?";}
        else if (inc == 4) {
     document.getElementById("yellowbar").style.width = "184";
     document.getElementById("yellowbar").style.transition = "1s ease";
     document.getElementById("littled").style.left = "50%";
     document.getElementById("littled").style.transition = "1s ease"; 
        document.getElementById("texty").style.left = "-10px";
      document.getElementById("texty").innerHTML = "계속 더 모아볼까?";}
        else if (inc == 5) {
     document.getElementById("yellowbar").style.width = "230";
     document.getElementById("yellowbar").style.transition = "1s ease";
     document.getElementById("littled").style.left = "58%";
     document.getElementById("littled").style.transition = "1s ease"; 
        document.getElementById("texty").style.left = "-10px";
      document.getElementById("texty").innerHTML = "계속 더 모아볼까?";}
        else if (inc == 6) {
     document.getElementById("yellowbar").style.width = "276";
     document.getElementById("yellowbar").style.transition = "1s ease";
     document.getElementById("littled").style.left = "66%";
     document.getElementById("littled").style.transition = "1s ease"; 
        document.getElementById("texty").style.left = "-10px";
      document.getElementById("texty").innerHTML = "계속 더 모아볼까?";}
        else if (inc == 7) {
     document.getElementById("yellowbar").style.width = "322";
     document.getElementById("yellowbar").style.transition = "1s ease";
     document.getElementById("littled").style.left = "74%";
     document.getElementById("littled").style.transition = "1s ease"; 
     document.getElementById("texty").style.left = "-13px";
      document.getElementById("texty").innerHTML = "거의 다 됐어!";    
        }
        else if (inc == 8) {
     document.getElementById("yellowbar").style.width = "368";
     document.getElementById("yellowbar").style.transition = "1s ease";
     document.getElementById("littled").style.left = "82%";
     document.getElementById("littled").style.transition = "1s ease"; 
      document.getElementById("texty").style.left = "-13px";
      document.getElementById("texty").innerHTML = "이제 다 됐어!";
      document.getElementById("opacity2").style.display = "block"
    document.getElementById("buttonfamily").style.transition = "0.5s ease";
     document.getElementById("buttonfamily").style.display = "none"
        setTimeout(sayHi, 1000);
    result = true;
    } 
    }
    }
    
    else  {
        document.getElementById("overlay").style.width = "block";
        document.getElementById("overlay2").style.width = "block";
        //window.setTimeout(function() { el.style.display = original; }, 2000);
        //window.setTimeout(function() { el2.style.display = original; }, 2000);
        result = false;
    }
  return result;

}

// STEP 3: Get the classification!
function gotResults(error, results) {
  // Something went wrong!
  if (error) {
    console.error(error);
    return;
  }
  // Store the label and classify again!
  label = results[0].label;
  classifyVideo();
}
