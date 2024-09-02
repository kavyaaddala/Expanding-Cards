const images = document.querySelectorAll(".image");

images.forEach((image)=>{
    image.addEventListener("click",()=>{
        removeActiveClasses();
        image.classList.add("active");

    });
});

const removeActiveClasses=()=>{
    images.forEach((image)=>{
        image.classList.remove("active");

    });
    
};