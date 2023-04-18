/* rotating with button */
const imageContainerEl = document.querySelector(".image-container")
const prevEl = document.getElementById("prev")
const nextEl = document.getElementById("next")
let x = 0
let timer  /* <- setTimeout method */

prevEl.addEventListener("click", ()=>{
  x = x + 45;
  clearTimeout(timer)  /* <- setTimeout method */
  updateGallery() 
});
nextEl.addEventListener("click", ()=>{
  x = x - 45;
  clearTimeout(timer)  /* <- setTimeout method */
  updateGallery() 
});


function updateGallery(){
  imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)` 
  /* slideshow method */
  timer = setTimeout(()=>{
    x = x - 45
    updateGallery()
  }, 3000)
  /* slideshow method */

}
/* rotating with button */

updateGallery() /* <- slideshow method */