$(document).ready(function(){
    $("#banner").owlCarousel({
        items: 1,
        // nav: true,
        loop: true,
        autoplay: true
        
    });
    $("#promocao").owlCarousel({
        // loop: true,
        margin: 20,
        responsive: {
            0: {
                items: 1,
                nav: false,
                margin: 20
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            1024: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    });
    
}); 
