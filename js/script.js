const workPieces = [
    {
        id: 1,
        title: '#offTopic Geek Culture Store',
        description: 'This is a online store where users can sell and buy geek culture merch.',
        githubLink: 'https://github.com/CyborgSemon/summative-3-front',
        image: 'assets/geekculturestore.png'
    },
    {
        id: 2,
        title: 'Pokemon Type Filter',
        description: 'This is a web app the filters the original 151 pokemon by Type',
        githubLink: 'https://github.com/BraydenGray416/Pokemon-Filtering',
        image: 'assets/pokemonFilter.png'
    },
    {
        id: 3,
        title: 'Grind Digital Ordering System',
        description: 'This is a digital ordering system for the milkshake bar Grind. Grind is located in Upper Hutt and provides various unique flavors',
        githubLink: 'https://github.com/CyborgSemon/summative-3-front',
        image: 'assets/grind.png'
    }
];

function showProjects(){
let projectCard = '';
for (var i = 0; i < workPieces.length; i++) {
    const projects = workPieces[i];

    projectCard += `<div class="card col-12 ml-2 h-100" style="width: 30rem;">
    <img src="${projects.image}" class="card-img-top" alt="${projects.title}">
    <div class="card-body">
    <h5 class="card-title">${projects.title}</h5>
    <p class="card-text">${projects.description}</p>
    <a href="#" class="btn btn-danger workCards" data-id="$projects.id}">Read More</a>
    <a href="${projects.githubLink}" class="btn btn-dark" >Github</a>
    </div>
    </div>`;
    console.log(projectCard);
}


document.getElementById('projectSection').innerHTML = projectCard;
}

showProjects();
