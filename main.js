var SpeechRecognition = webkitSpeechRecognition

var recognition = new SpeechRecognition();

function start() {

document.getElementById ("textBox").innerHTML = "";
recognition.start(); 


}

recognition.onresult = function(event){

var Content = event.results [0] [0].transcript;
document.getElementById("textBox").innerHTML = Content;

if(Content == "take my selfie"){
speak();



}




}



function speak(){


    var synth = window.speechSynthesis

    speak_data ="taking your selfie in fifteen seconds please make a pose and dont forget to smile :-)"

    var utterThis = new SpeechSynthesisUtterance(speak_data)

synth.speak(utterThis);


Webcam.attach(camera);


setTimeout (function(){
take_snapshot();
  save();



},  15000 );


}

Webcam.set({


width:400,
height:300,
image_format: 'png' ,
png_quality:90
});

camera = document.getElementById ("camera");


function take_snapshot(){



Webcam.snap(function (data_uri){
document.getElementById("selfie").innerHTML = '<img id="selfie_image" src="' + data_uri + '" > '; 

});
}



function save() {
link = document.getElementById("link");
image = document.getElementById("selfie_image")
link.href = image;
link.click();



}