var myCanv = document.getElementById('myCanvas');
var c = myCanv.getContext('2d');

myCanvas.width = myCanvas.scrollWidth;
myCanvas.height = myCanvas.scrollHeight;
myCanvas.width = myCanvas.scrollWidth
myCanvas.height = myCanvas.scrollHeight

//botol
c.beginPath();
c.moveTo(80, 160);
c.lineTo(250, 160);
c.lineTo(250, 390);
c.lineTo(80, 390);
c.closePath();
c.lineWidth = 2;
c.strokeStyle='black';
c.stroke();

c.beginPath();
c.moveTo(80, 160);
c.lineTo(80, 130);
c.lineTo(250, 130);
c.lineTo(250, 160);
c.lineWidth = 2;
c.strokeStyle='black';
c.stroke();

c.beginPath();
c.moveTo(150, 130);
c.lineTo(150, 100);
c.lineTo(175, 100);
c.lineTo(175, 130);
c.lineWidth = 2;
c.strokeStyle='black';
c.stroke();

//color-grading
function draw(){
    for (var i = 0; i<6; i++){
        for (var j=0; j<3; j++){
            c.save();
            c.fillStyle='rgb(' + (3*i) + ', ' + (155 - 30 * i) + ', 155)';
            c.translate(20 + j * 50, 20 + i * 36);
            c.fillRect(61,141,68,48);
            c.restore();
        }
    }
}
draw();

//color-grading
c.rect(81,131,168,28);

var grd=c.createLinearGradient(140,50,100,150);
grd.addColorStop(0,'#8ED6FF');
grd.addColorStop(1,'#004CB3');
c.fillStyle=grd;
c.fill();