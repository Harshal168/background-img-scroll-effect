const imgEl = document.querySelector(".img")

window.addEventListener("scroll",()=>{
  imgEl.style.opacity = 1 - window.pageYOffset / 900

  imgEl.style.backgroundSize = 160 + window.pageYOffset + "%"
})