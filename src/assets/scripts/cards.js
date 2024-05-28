


function inicializar_cards() {


    const cards = document.querySelectorAll(".section_cards__card");
    cards.forEach((card)=> {
        
        card.addEventListener("click", ()=>{
            card.classList.toggle("card__active");
        });
    })
    
}

window.onload = inicializar_cards();
