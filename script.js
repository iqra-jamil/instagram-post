
console.log("hello");
let containerImg = document.querySelector(".container img");
let loveIcon=document.querySelector(".love-icon");
let heartIcon=document.querySelector("#heart-icon");
let saveBtn=document.querySelector(".ri-bookmark-line");
containerImg.addEventListener("dblclick",function(){
    console.log("hello");
   loveIcon.style.transform="translate(-50%, -50%) scale(1)";
   loveIcon.style.opacity=0.6;
   heartIcon.classList.remove("ri-heart-line");
   heartIcon.classList.add("ri-heart-fill");
   heartIcon.style.color="red";
   setTimeout(function(){
    loveIcon.style.transform="translate(-50%, -50%) scale(0)";
    loveIcon.style.opacity=0;
   },1000)
});


heartIcon.addEventListener("click" ,()=>{
    if(heartIcon.classList.contains("ri-heart-line")){
        heartIcon.classList.remove("ri-heart-line");
        heartIcon.classList.add("ri-heart-fill");
        heartIcon.style.color="red";
    }
    else{
        heartIcon.classList.add("ri-heart-line");
        heartIcon.classList.remove("ri-heart-fill");
        heartIcon.style.color="black";
    }
})
saveBtn.addEventListener("click",()=>{
    if(saveBtn.classList.contains("ri-bookmark-line"))
    {
        saveBtn.classList.remove("ri-bookmark-line");
        saveBtn.classList.add("ri-bookmark-fill");
    }
    else{
        saveBtn.classList.remove("ri-bookmark-fill");
        saveBtn.classList.add("ri-bookmark-line");
    }
   
})
