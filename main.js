const card = document.querySelectorAll(".carta");

card.addEventListener("click", (e) => {
    
    const selectedCard = e.target.closest(".carta");
    console.log("carta elegida");
    if (!selectedCard) return;
})