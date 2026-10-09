
const petCards = document.querySelectorAll(".pet-card");

const mainPetImage = document.getElementById("mainPetImage");
const petName = document.getElementById("petName");
const petDescription = document.getElementById("petDescription");

petCards.forEach((card) => {
    card.addEventListener("click", () => {

        // Get information from the selected pet card
        const name = card.dataset.name;
        const image = card.dataset.image;
        const description = card.dataset.description;

        // Update the large pet display
        mainPetImage.src = image;
        mainPetImage.alt = name;

        petName.textContent = name;
        petDescription.textContent = description;

        // Remove active style from every card
        petCards.forEach((pet) => {
            pet.classList.remove("active");
        });

        // Highlight the selected card
        card.classList.add("active");
    });
});