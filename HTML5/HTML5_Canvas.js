var canvas;
function doFirst(){
   var html_canvas=document.getElementById('canvas');
   canvas =html_canvas.getContext('2d');
   /*canvas.strokeRect(10,10,100,200); draw a rectangle
     fillRect draw a solid rectangle clearRect clear out a rectangel*/
   /*canvas.fillStyle='aqua';
   canvas.fillRect(10,10,100,100);*/
    var gradient=canvas.createRadialGradient(50,50,20,50,50,0);/*any color inside the first circle is the color of colorstop 0 anything outside the second circle is the color of colorstop 1*/
    gradient.addColorStop(0,"rgba(0,255,255,0)");
    gradient.addColorStop(0.5,"rgba(0,255,255,0.3)");
    gradient.addColorStop(1,"rgba(0,255,255,0.6)");
    canvas.fillStyle=gradient;
    canvas.fillRect(0,0,100,100);
    /*canvas.beginPath();
    canvas.moveTo(50,50);   This is draw line
    canvas.lineTo(70,250);
    canvas.lineTo(300,200);
    canvas.closePath();
    canvas.stroke();*/
   /* canvas.font="bold 36px Tahoma"
    canvas.textAlign="end";
    canvas.shadowOffsetX=4;  This is shadow
    canvas.shadowOffsetY=4;
    canvas.shadowBlur=6;
    canvas.shadowColor='rgba(0,255,255,0.8)';
    
    canvas.fillText('hello',100,100);*/
    /*
    canvas.font='bold 22px Tahoma';
    
    canvas.textAlign='start';
    canvas.fillText('end',20,20);
    
    canvas.translate(100,100);
    canvas.fillText('after translate',0,0); THISI CANVAS TRANFORM*/
    /*
    
    canvas.font='bold 22px Tohama';
    canvas.texAlign='end';
    canvas.save();
    canvas.fillText('hello',100,100);
    canvas.translate(100,100);
    canvas.rotate((Math.PI/180)*45);

    canvas.fillText('hello',100,100);
     canvas.restore();
    canvas.fillText('hello what is up',150,150);*/
    /*alert(html_canvas.width);
    var picture=new Image();
    picture.src='4.jpeg';
    
    picture.addEventListener('load',function(){
      canvas.drawImage(picture,0,0,600,400);
    
    },false)*/
    window.addEventListener('mousemove',game,false);
    function game(e){
      event=e || Event;
      /*canvas.clearRect(0,0,600,400);*/
      var xPos=event.clientX;
      var yPos=event.clientY;
      canvas.fillRect(xPos-10,yPos-10,20,20);
    }
    
    
    
}

window.addEventListener("load", doFirst,false);