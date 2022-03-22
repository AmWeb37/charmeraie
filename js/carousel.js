const config = {
    type: 'carousel',
    perView: 5,
    gap:90,
    keyboard: true  ,
    breakpoints: {
        375: { perView: 1 },
        500: { perView: 3 },
        900: { perView: 5 },
        1200: { perView: 6 }

    }
}
new Glide('.glide', config).mount()