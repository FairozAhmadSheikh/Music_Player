var data=[
    { songName:'Ram Siya Ram ',duration:" 4:06 ",url:"./music/one.mp3",image:"./images/ram.jpg"},
    { songName:'O Mahi ',duration:" 3:06 ",url:"./music/two.mp3",image:"./images/omaahi.jpg"},
    { songName:'Udta Udta',duration:" 5:06 ",url:"./music/three.mp3",image:"./images/udta.jpg"},
    { songName:'Heriyey',duration:" 6:06 ",url:"./music/four.mp3",image:"./images/heriyey.jpg"}

]
var audio=new Audio();
function showMusic(){
var clutter="";
    data.forEach(function(elem,index){
       clutter +=`<div class="musiccard" data-index="${index}">
       <img class="mini_image" src=${elem.image} alt=""/>
       <h5 id="SongnameList">${elem.songName}</h5>
        <h5 id="SongnameList">${elem.duration}</h5>          
   </div>`
    })
    
  document.querySelector("#musiccontainer").innerHTML=clutter
}

showMusic();
function selectsong() {
    document.querySelector("#musiccontainer").addEventListener('click', function(details) {
        var index = details.target.closest('.musiccard').getAttribute('data-index');
        var image = (data[index].image);
        var song=(data[index].url)
        
        
        document.querySelector("#left").innerHTML= `<h4 id="playingtext">Playing</h4>
    <img id="playingsong" src=${image} alt="Name">`
       
    audio.src=song;
    audio.play()
   

}); 
}
selectsong();

function pause(){
    document.querySelector("#play").addEventListener('click',function(){
      if(audio.paused){
        audio.play()
        document.querySelector("#play").innerHTML="Pause"
      }
      
    else {
        audio.pause()
        document.querySelector("#play").innerHTML="Play"
    }
    })

}
pause()
