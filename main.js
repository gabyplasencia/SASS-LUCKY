const cards = document.querySelectorAll(".carta");

cards.forEach ((card) =>{

    card.addEventListener("click", (e) => {
    
        const selectedCard = e.target.closest(".carta");
        if (!selectedCard) return;
        
        card.classList.add("selected");
    })
})
