var frame = 0,
    playback = 1500,
    setHeight = document.getElementById('_height'), 
    video = document.getElementById('fullscreen-bg-frame'); 
 
video.addEventListener('loadedmetadata', function() {
  setHeight.style.height = Math.floor(video.duration) * playback + "px";
});

function play(){  
  var frame = window.pageYOffset / playback;
  video.currentTime = frame;
  window.requestAnimationFrame(play);
}

window.requestAnimationFrame(play);