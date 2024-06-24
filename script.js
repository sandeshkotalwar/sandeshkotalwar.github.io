
document.addEventListener("DOMContentLoaded", function(){
    
    window.location.href= "#preloader" ;


    gsap.fromTo(".grid-img", { opacity: 0 },
     { opacity: 1, 
       duration: 2, 
       stagger: { each: 0.2, from: "random" },
     });


    setTimeout(function(){
        document.getElementById("preloader").style.display = "none";
        document.getElementById("main").style.display = "block";
        },6000);
    });
    



