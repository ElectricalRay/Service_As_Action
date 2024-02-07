document.addEventListener('DOMContentLoaded', function () {
    // Dummy data for demonstration
    const volunteerOpportunities = [
        {
            title: 'Community Cleanup',
            description: 'Help clean up local parks and streets.',
            link: 'https://example.com/community-cleanup'
        },
        {
            title: 'Food Bank Assistance',
            description: 'Assist at the local food bank to distribute food to those in need.',
            link: 'https://example.com/food-bank-assistance'
        },
        // Add more opportunities as needed
    ];

    const volunteerList = document.getElementById('volunteer-list');

    // Dynamically create volunteer cards
    volunteerOpportunities.forEach(opportunity => {
        const card = document.createElement('div');
        card.classList.add('volunteer-card');

        const title = document.createElement('h2');
        title.textContent = opportunity.title;

        const description = document.createElement('p');
        description.textContent = opportunity.description;

        const link = document.createElement('a');
        link.href = opportunity.link;
        link.classList.add('button');
        link.textContent = 'Learn More';

        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(link);

        volunteerList.appendChild(card);
    });
});
