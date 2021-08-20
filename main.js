function setup(){
    canvas=createCanvas(550,500);
    canvas.position(900,150);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,600,500);
}

function preload(){
    song=loadSound("music1.mp3");
}

