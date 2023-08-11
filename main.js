var mouseEvent="empty";
var lastpositionofx,lastpositionofy;

canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

color="black";
width_of_line=1;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    mouseEvent="mouseDown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
    mouseEvent="mouseup";

}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent="mouseleave";
     
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
    currentpositionofmousex=e.clientX-canvas.offsetLeft;
    currentpositionofmousey=e.clientY-canvas.offsetTop;

    if(MouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;

        console.log("last position of x and y co-ordinates=");
        console.log("x="+lastpositionofx+" y="+lastpositionofy);
        ctx.moveTo(lastpositionofx,lastpositionofy);

        console.log("current position of x and y co-ordinates=");
        console.log("x="+currentpositionofmousex+" y="+currentpositionofmousey);
        ctx.lineTo(currentpositionofmousex,currentpositionofmousey);
        ctx.stroke();
    }
    lastpositionofx=currentpositionofmousex;
    lastpositionofy=currentpositionofmousey;

}
function clearArea(){
ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}