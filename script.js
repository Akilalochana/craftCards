document.addEventListener('DOMContentLoaded', () => {
    // Add JavaScript to load cards or handle form submissions here
    const cardGallery = document.getElementById('card-gallery');

    // Example: Add sample cards
    const sampleCards = [
        { title: 'Card 1', description: 'Description for Card 1' },
        { title: 'Card 2', description: 'Description for Card 2' },
        { title: 'Card 3', description: 'Description for Card 3' },
    ];

    sampleCards.forEach(card => {
        const cardDiv = document.createElement('div');
        cardDiv.innerHTML = `<h3>${card.title}</h3><p>${card.description}</p>`;
        cardGallery.appendChild(cardDiv);
    });

    // Handle form submission
    document.getElementById('contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Form submitted!');
    });
});
