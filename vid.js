var vid = document.getElementById("vid");
var popupVid = document.getElementById("popup_vid");

vid.onclick = function(e){
  if(e.target.classList.contains("popup")){
    vid.style.display = "";
  }
};

function showVideo(t){
  vid.style.display = "block";
  popupVid.src = t.src;
}