


Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90

});
camera=document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';

    });
}
console.log('ml5 version:',ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/f_j5rnwnD/',modelLoaded);
function modelLoaded(){
    console.log('Model Loaded');
}

function speak(){
    var synth=window.speechSythesis;
    speak_data=toSpeak;
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);


}
function check()
  {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
  }

  function gotResult(error, results) {
    if (error) {
      console.error(error);
    } else {
      console.log(results);
      document.getElementById("result_hand_gesture").innerHTML = results[0].label;
      
      gesture = results[0].label;
      toSpeak="";
      if(gesture== "Thumbs Up")
      {
        toSpeak="All the best";
        document.getElementById("update_gesture").innerHTML = "&#128077;";
      }
      else if(gesture == "Rockstar")
      {
        toSpeak="You rock";
        document.getElementById("update_gesture").innerHTML = "&#129304;";
      }
      else if(gesture== "Victory")
      {
        toSpeak="You win";
        document.getElementById("update_gesture").innerHTML = "&#9996;";
      }
      speak();
  
    }
  }



