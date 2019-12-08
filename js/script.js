const workPieces = [
    {
        id: 1,
        title: 'Black Sheep Animal Sanctuary',
        description: 'This was project for a non-profit animal sanctuary.',
        githubLink: 'https://github.com/BraydenGray416/summative-3-front',
        image: 'assets/BraydenComputers.png'
    },
    {
        id: 2,
        title: '#offTopic Geek Culture Store',
        description: 'This was a group project where the idea was to create an online store where users can sell and buy geek culture merch.',
        githubLink: 'https://github.com/CyborgSemon/summative-3-front',
        image: 'assets/BraydenMac.png'
    },
    {
        id: 3,
        title: 'Pokemon Type Filter',
        description: 'This is a web app the filters the original 151 pokemon by Type',
        githubLink: 'https://github.com/BraydenGray416/Pokemon-Filtering',
        image: 'assets/Brayden2.png'
    },
    {
        id: 4,
        title: 'Grind Digital Ordering System',
        description: 'This is a digital ordering system for the milkshake bar Grind. Grind is located in Upper Hutt and provides various unique flavors',
        githubLink: 'https://github.com/BraydenGray416/Grind',
        image: 'assets/grind.png'
    }
];

function showProjects(){
let projectCard = '';
for (var i = 0; i < workPieces.length; i++) {
    const projects = workPieces[i];

    projectCard += `<div class="card col-12 ml-2 h-100 my-2" style="width: 30rem;padding: 0;">
    <img src="${projects.image}" class="card-img-top" alt="${projects.title}">
    <div class="card-body">
    <h5 class="card-title">${projects.title}</h5>
    <p class="card-text">${projects.description}</p>
    <a href="${projects.githubLink}" class="btn btn-success" >View on GitHub</a>
    </div>
    </div>`;
    console.log(projectCard);
}


document.getElementById('projectSection').innerHTML = projectCard;
}

showProjects();
