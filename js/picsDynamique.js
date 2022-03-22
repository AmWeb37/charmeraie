const imageBig = document.querySelector('.imageBig');//je charge l'image principale
const Thumbnail = document.querySelectorAll('.imageSmall');//je charge toutes les thumbnails

Thumbnail.forEach(actif =>{
    actif.addEventListener('click', function(){
        let source = this.src;
        console.log(source);
        imageBig.src=source;
    })
})


