function openLetters(){
  document.querySelector(".btn-notes").classList.remove("btn-active")
  document.querySelector(".btn-letters").classList.add("btn-active")
  var keys = document.querySelectorAll(".piano-key")
  for (var i = 0; i < keys.length; i++) {
    keys[i].classList.remove("piano-key-block")
  }
  var keys = document.querySelectorAll(".piano-key")
  for (var i = 0; i < keys.length; i++) {
    keys[i].classList.add("piano-key-block-two")
  }
}
function openNotes(){
  document.querySelector(".btn-letters").classList.remove("btn-active")
  document.querySelector(".btn-notes").classList.add("btn-active")
  var keys = document.querySelectorAll(".piano-key")
  for (var i = 0; i < keys.length; i++) {
    keys[i].classList.add("piano-key-block")
  }
  var keys = document.querySelectorAll(".piano-key")
  for (var i = 0; i < keys.length; i++) {
    keys[i].classList.remove("piano-key-block-two")
  }
}


function openFullScreen() {
  var element = document.body;
	var isFullscreen = document.webkitIsFullScreen ;

	element.requestFullScreen = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen;
	document.cancelFullScreen = document.cancelFullScreen || document.webkitCancelFullScreen || document.mozCancelFullScreen;

  if(isFullscreen){
    document.cancelFullScreen()
  }else{
    element.requestFullScreen()
  }
}
// ///////////////////////////////////////////////////////////////////////////
const keys = document.querySelectorAll(".piano-key")

keys.forEach(key => {
  key.addEventListener('click', ()=>startIt(key))
});

function startIt(key){
  const playAudio = document.getElementById(key.dataset.note)
  playAudio.currentTime = 0
  playAudio.play();
  key.classList.add("piano-key-active")
  playAudio.addEventListener("ended", ()=>{
    key.classList.remove("piano-key-active")
  })
}








