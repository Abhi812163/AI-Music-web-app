song1="";
song2="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}


function draw(){
    image(video,0,0,600,500);

    fill('red');
    stroke('black');
    if(scoreLeftWrist>0.2){
        circle(leftWristX,leftWristY,20);
        converted_number=Number(leftWristY);
        remove_decimals=floor(converted_number);
        volume=remove_decimals/500;
        song1.play();
        document.getElementById("volume").innerHTML="Volume: "+volume;
}

fill('red');
stroke('black');
if(scoreRightWrist>0.2){
    circle(rightWristX,rightWristY,20);
    converted_number=Number(rightWristY);
    remove_decimals=floor(converted_number);
    volume=remove_decimals/500;
    song2.play();
    document.getElementById("volume").innerHTML="Volume: "+volume;


}

function preload(){
    song1=loadSound("Harry_Potter.mp3");
    song2=loadSound("Perfect.mp3");
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}
function modelLoaded(){
    console.log("PoseNet is initialized");
}


function gotPoses(results){
if(results.length>0){
    console.log(results);

    leftWristX=results[0].pose.leftWrist.x;
    leftWristY=results[0].pose.leftWrist.y;
    console.log("leftWristX="+leftWristX+" leftWristY="+leftWristY);

    rightWristX=results[0].pose.rightWrist.x;
    rightWristY=results[0].pose.rightWrist.y;
    console.log("rightWristX="+rightWristX+" rightWristY="+rightWristY);

    scoreLeftWrist=results[0].pose.keypoints[9].score;
    console.log("Score of the left wrist is: "+scoreLeftWrist);
}
scoreRighttWrist=results[0].pose.keypoints[10].score;
console.log("Score of the right wrist is: "+scoreRightWrist);
}
}