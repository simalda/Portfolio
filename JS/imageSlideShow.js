 

  const numOfProjects = 4
  var slideIndex = 1;
  for(let j=0; j<numOfProjects; j++){    
    var cls = "mySlides"+j;
    var clsDemo = "demo"+j;
    console.log(cls,clsDemo);
    try{
      showSlides(slideIndex,cls,clsDemo);  
       setInterval( showSlides(slideIndex+1, cls, clsDemo), 2000); // Change image every 2 seconds
    
  }
   catch(e){
console.log(e);
    }
  }
  // function plusSlides(n) {
  //   showSlides(slideIndex += n,cls, clsDemo);
  // }
  
  function currentSlide(n, cls, clsDemo) {
    showSlides(slideIndex = n, cls, clsDemo);
  }
 
  
  function showSlides(n, cls, clsDemo ) {
    var i;
    var slides = document.getElementsByClassName(cls);
    var dots = document.getElementsByClassName(clsDemo);
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    // captionText.innerHTML = dots[slideIndex-1].alt;
   
  }

  
