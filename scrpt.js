console.log("hi there");
let songindex = 0;
let audioElement = new Audio("mysongs/2.mpeg");
let masterPlay= document.getElementById("masterPlay");
let gif=document.getElementById("gif");
let progress=document.getElementById("myProgressBar");
let songitem= Array.from(document.getElementsByClassName("songitem"));
let masterSongName=document.getElementById("masterSongName");
function mustcall()
{
let n= Array.from(document.getElementsByClassName("songItemPlay"));
n.forEach(function(e){
    e.classList.remove("fa-pause-circle");
    e.classList.add("fa-play-circle");
});
}
let songs=[
{songname: "Can We Kiss Forever", filepath:"mysongs/1.mpeg",coverpage:"covers/1.jpg"},
{songname: "Ha Hasi Ban Gaye...", filepath:"mysongs/2.mpeg",coverpage:"covers/2.jpg"},
{songname: "Kun Faya Kun Song..", filepath:"mysongs/3.mpeg",coverpage:"covers/3.jpg"},
{songname: "Chep Thrills Song..", filepath:"mysongs/4.mpeg",coverpage:"covers/4.jpg"},
{songname: "Thoda Thoada Pyar..", filepath:"mysongs/5.mpeg",coverpage:"covers/5.jpg"},
{songname: "Redemption (ft)Riel", filepath:"mysongs/6.mpeg",coverpage:"covers/6.jpg"},
]
songitem.forEach(function(element,i){
element.getElementsByTagName("img")[0].src=songs[i].coverpage;
element.getElementsByClassName("songname")[0].innerText=songs[i].songname;
}
);
masterPlay.addEventListener('click',function(){
if(audioElement.paused || audioElement.currentTime<=0)
{
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
}
else{
    audioElement.pause();
    mustcall();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
}
}
);
audioElement.addEventListener("timeupdate",()=>{
    pr=parseInt((audioElement.currentTime/audioElement.duration)*100);
progress.value=pr;

})
progress.addEventListener("change",()=>{
    audioElement.currentTime=progress.value *audioElement.duration/100;
})

const ac=Array.from(document.getElementsByClassName("songItemPlay"));
ac.forEach(function(element){
element.addEventListener("click",(e)=>{
    mustcall();
let index=parseInt(e.target.id);
e.target.classList.remove("fa-play-circle");
e.target.classList.add('fa-pause-circle');
audioElement.src=`mysongs/${index+1}.mpeg`;
masterSongName.innerText=songs[index].songname;
audioElement.currentTime=0;
audioElement.play();
gif.style.opacity = 1;
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add("fa-pause-circle");
})
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songindex>=6){
        songindex = 0
    }
    else{
        songindex += 1;
    }
    audioElement.src=`mysongs/${songindex+1}.mpeg`;
    mustcall();
masterSongName.innerText=songs[songindex].songname;
audioElement.currentTime=0;
audioElement.play();
gif.style.opacity = 1;
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add("fa-pause-circle");

})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songindex<=0){
        songindex = 0
    }
    else{
        songindex -= 1;
    }

    audioElement.src=`mysongs/${songindex+1}.mpeg`;
    mustcall();
masterSongName.innerText=songs[songindex].songname;
audioElement.currentTime=0;
audioElement.play();
gif.style.opacity = 1;
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add("fa-pause-circle");

})