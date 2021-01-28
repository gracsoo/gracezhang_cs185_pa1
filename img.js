// back to top button; https://www.youtube.com/watch?v=gphMli74Chk&ab_channel=CodingJourney
const backToTopButton = document.querySelector("#back-to-top");

window.addEventListener("scroll", scrollFunction);

function scrollFunction(){
    if(window.pageYOffset > 100){ //show button
        backToTopButton.style.display = "block";
    }
    else{ //hide button
        backToTopButton.style.display = "none";
    }
}

backToTopButton.addEventListener("click", backToTop);

function backToTop(){
    window.scrollTo(0,0);
}

//popup image; https://www.youtube.com/watch?v=4SQXOA8Z-lo&ab_channel=DevEd
const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-img");

previews.forEach((preview) => {
  preview.addEventListener('click', () => {
    modal.classList.add("open");
    original.classList.add("open");
    const originalSrc = preview.getAttribute("data-original");
    original.src = `./full/${originalSrc}`;
  });
});

modal.addEventListener('click', (e) =>{
  if(e.target.classList.contains('modal')){
    modal.classList.remove("open");
    original.classList.remove("open");
  }
});