
var capture;

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
  if (label == "arm") {
    result = "hand";
    document.getElementById("imgchange").src="asset/hand.png";
      document.getElementById("detext").innerHTML = "이건 팔이야!";
  } else if (label == "leg") {
    result = "leg";
     document.getElementById("imgchange").src="asset/leg.png";
      document.getElementById("detext").innerHTML = "이건 다리야!";
  } else if (label=="face"){
    result = "face"
       document.getElementById("imgchange").src="asset/face.png";
      document.getElementById("detext").innerHTML = "이건 얼굴이야!";
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
