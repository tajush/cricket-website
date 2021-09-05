var go=document.getElementById("canv");
var cntx=go.getContext("2d");



cntx.lineWidth=5;
cntx.strokeStyle=("black")
cntx.strokeRect(100,100,202,102);
cntx.fillStyle=("green");
cntx.fillRect(98,98,200,100);

var cntrX=go.width/2;
var cntrY=go.height/2;

cntx.beginPath();
cntx.arc(cntrX,cntrY,50,0,2*Math.PI,false);
cntx.fillStyle= "red";
cntx.fill();


