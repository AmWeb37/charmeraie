let lastScrollTop; //on initie une variable qui charge ma dernière position
navbar = document.getElementById('header-top'); // charge ma navbar dans le DOM
navbarBottom = document.getElementById('header-bottom');


window.addEventListener('scroll',function(){
    //la function sera appelée dès que je vais scroller
     
     var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
     // renvoi le nombre de pixel de défilement vertical avec deux méthodes
     
     if(scrollTop > lastScrollTop){ //pn vérifie si srcolltop et supérieur à la dernière valeur de lastCroslltTop
    //    navbar.style.top='-80px';
       navbar.classList.add("disparitionTop")
       navbarBottom.classList.add("disparitionBottom")
       //set the value to the negetive of height of navbar 
     }
     
     else{
        navbar.classList.remove("disparitionTop")  
        navbarBottom.classList.remove("disparitionBottom")
    //    navbar.style.top='0';
     }
     
     lastScrollTop = scrollTop; //Je charge ma position dans lastScrollTop
   });