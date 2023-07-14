const cards = document.querySelectorAll(".carta");
document.body.addEventListener("click", (e) => {

    if(e.target.classList.contains("carta") || e.target.closest(".carta")){return}
    cards.forEach((card) =>{
        card.classList.remove("selected")
        card.classList.remove("hidden")
    })
    reorderCards(cards);

})

const reorderCards = (cards) =>{
    const container = document.querySelector(".container")
    container.innerHTML = ""
    const reorderedCards = Array.from(cards).sort(() => Math.random() - 0.5);
    reorderedCards.forEach(card => container.appendChild(card))

};

cards.forEach ((card) =>{

    card.addEventListener("click", (e) => {
    
        const selectedCard = e.target.closest(".carta");
        if (!selectedCard) return;
        
       selectedCard.classList.add("selected");
        if(selectedCard){
            cards.forEach((card) => {
                if(!card.classList.contains("selected")){
                    card.classList.add("hidden");
                }
            })
        }
        
        
        
    })
})
