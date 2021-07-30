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
function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}