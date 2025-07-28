const image=document.querySelector(".container"),
heart=document.querySelector(".heart");


image.addEventListener("dblclick",(e)=>{
  heart.classList.add("active");
})