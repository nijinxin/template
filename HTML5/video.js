function doFirst(){
    var barSize=600;
    var myMovie=document.getElementById('myMovie');
    var playButton=document.getElementById('playButton');
    var bar=document.getElementById('defaultBar');
    var progressBar=document.getElementById('progressBar');
   
    
    playButton.addEventListener('click',playOrPause,false);
    bar.addEventListener('click',clickedBar,false);
}


function playOrPause (){
    if(!myMovie.paused && !myMovie.ended)
    {
        myMovie.pause();
        playButton.innerHTML='Play';
        window.clearInterval(updateBar);
    }
    else{
        myMovie.play();
        playButton.innerHTML='Pause';
        var updateBar=setInterval(update,500);
    }

}

function update(){
if(!myMovie.ended)
{ 
   
   var size=parseInt(myMovie.currentTime*600.0/myMovie.duration);
  // console.log(size);
   progressBar.style.width=size+'px';}
else{
    progressBar.style.width='0px';
    playButton.innerHTML='Play';
}

}

function clickedBar(e)
{
    console.log(11);
    var bar=document.getElementById('defaultBar');
    if(!myMovie.paused && !myMovie.ended)
    {
        var mouseX=e.pageX-bar.offsetLeft;
        var newtime=mouseX*myMovie.duration/600;
        myMovie.currentTime=newtime;
        progressBar.style.width=mouseX+'px';
    }

}
window.onload=doFirst;