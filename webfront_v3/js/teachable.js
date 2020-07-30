
var constraints = { video: { facingMode: "environment" }, audio: false };
var track = null;
var video;

// The classifier
let classifier;

const cameraView = document.querySelector("#camera--view"),
    cameraOutput = document.querySelector("#camera--output"),
    cameraSensor = document.querySelector("#camera--sensor"),
    cameraTrigger = document.querySelector("#camera--trigger");

// STEP 1: Load the model!
function preload() {
  classifier = ml5.imageClassifier('model/model.json');
}


function setup() {
  navigator.mediaDevices
      .getUserMedia(constraints)
      .then(function(stream) {
          track = stream.getTracks()[0];
          cameraView.srcObject = stream;
          cameraSensor.width = cameraView.videoWidth;
          cameraSensor.height = cameraView.videoHeight;
          classifyVideo();
      })
      .catch(function(error) {
          console.error("Oops. Something is broken.", error);
      });
  // STEP 2: Start classifying
}

// STEP 2 classify the videeo!
function classifyVideo() {
  classifier.classify(video, gotResults);
}

function draw() {

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

window.addEventListener("load", setup(), false);