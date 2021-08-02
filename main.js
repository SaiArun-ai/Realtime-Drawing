var difference;
var nosex;
var nosey;
function setup(){
    video = createCapture(VIDEO);
    video.size(500,500);
    canvas = createCanvas(300,300);
    canvas.position(600,200);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}
function modelLoaded(){
    console.log('No error');
}
function draw(){
    noStroke();
    background("#FFD700");
    fill("#C0C0C0");
    square(nosex,nosey,difference);
    document.getElementById("holdresult").innerHTML = "The side length of the square is" + floor(difference) + "px";
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        difference = results[0].pose.leftWrist.x - results[0].pose.rightWrist.x;
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        console.log(nosex);
        console.log(nosey);
    }
}