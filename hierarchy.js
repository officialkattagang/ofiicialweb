// --- Member Data ---
const gangMembers = {
    leader: {
        photo: 'https://i.imgur.com/example-leader.jpg', // Replace with actual path
        name: 'Vaibhav "Donali',
        post: 'Gang Leader'
    },
    viceLeader1: {
        photo: 'https://i.imgur.com/example-vice1.jpg', // Replace with actual path
        name: 'Vito "Shadow" Rossi',
        post: 'Vice Gang Leader'
    },
    viceLeader2: {
        photo: 'https://i.imgur.com/example-vice2.jpg', // Replace with actual path
        name: 'Luca "Night" Mancini',
        post: 'Vice Gang Leader'
    },
    secretary: {
        photo: 'https://i.imgur.com/example-secretary.jpg', // Replace with actual path
        name: 'Isabella "The Scribe" Conti',
        post: 'Secretary'
    },
    developer: {
        photo: 'developer.png', // Replace with actual path
        name: 'Tarun" Katta',
        post: 'Website Developer'
    },
    contentCreator1: {
        photo: 'https://i.imgur.com/example-content1.jpg', // Replace with actual path
        name: 'Jaxon "Street" Bell',
        post: 'Content Creator'
    },
    contentCreator2: {
        photo: 'https://i.imgur.com/example-content2.jpg', // Replace with actual path
        name: 'Skylar "Neon" Vance',
        post: 'Content Creator'
    },
    member1: {
        photo: 'https://i.imgur.com/example-member1.jpg', // Replace with actual path
        name: 'Axel "Viper" Stone',
        post: 'Enforcer Member'
    },
    member2: {
        photo: 'https://i.imgur.com/example-member2.jpg', // Replace with actual path
        name: 'Rico "Hunter" Valdez',
        post: 'Patrol Member'
    },
    member3: {
        photo: 'https://i.imgur.com/example-member3.jpg', // Replace with actual path
        name: 'Caleb "Archer" Nash',
        post: 'Scout Member'
    },
    // Add more members here
};

// --- DOM Elements ---
const idCardOverlay = document.getElementById('idCardOverlay');
const memberPhoto = document.getElementById('memberPhoto');
const memberNameDisplay = document.getElementById('memberNameDisplay');
const memberPostDisplay = document.getElementById('memberPostDisplay');
const closeIdCardButton = document.getElementById('closeIdCard');

// --- Functions ---
function openIdCard(memberKey) {
    const member = gangMembers[memberKey];
    if (member) {
        memberPhoto.src = member.photo;
        memberPhoto.alt = member.name + " photo";
        memberNameDisplay.textContent = member.name;
        memberPostDisplay.textContent = member.post;
        idCardOverlay.style.display = 'flex'; // Show the overlay
    }
}

function closeIdCard() {
    idCardOverlay.style.display = 'none'; // Hide the overlay
}

// --- Event Listeners ---
document.querySelectorAll('.member-card').forEach(card => {
    card.addEventListener('click', () => {
        const memberKey = card.dataset.member;
        openIdCard(memberKey);
    });
});

closeIdCardButton.addEventListener('click', closeIdCard);

// Close ID card if clicking outside the card itself
idCardOverlay.addEventListener('click', (event) => {
    if (event.target === idCardOverlay) {
        closeIdCard();
    }

});
