lipsX=0;
lipsY=0;
function preload()
{
lipstick=loadImage('https://i.postimg.cc/3whYcN1q/lipstick-image.jpg'); 
}
function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',GotPoses);
}
function modelLoaded()
{
    console.log('PoseNet is intialized');
}
function draw()
{
    image(video, 0,0,300,300);
   image(lipstick,lipsX, lipsY, 30, 30);
   

}
function take_snapshot()
{
    save('myFilterImage.png');
}
function GotPoses(results)
{
if(results.length > 0)
{
    console.log(results);
    noseX= results[0].pose.lips.x-30;
    noseY= results[0].pose.lips.y-30;
    console.log("lips x = " + results[0].pose.lips.x);
    console.log("lips y = " + results[0].pose.lips.y); 
}
}
