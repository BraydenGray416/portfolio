const workPieces = [
    {
        id: 1,
        title: '#offTopic Geek Culture Store',
        description: 'This is a online store where users can sell and buy geek culture merch.',
        githubLink: 'https://github.com/CyborgSemon/summative-3-front',
        img: ''
    },
    {
        id: 2,
        title: '#offTopic Geek Culture Store',
        description: 'This is a online store where users can sell and buy geek culture merch.',
        githubLink: 'https://github.com/CyborgSemon/summative-3-front',
        img: ''
    },
    {
        id: 3,
        title: '#offTopic Geek Culture Store',
        description: 'This is a online store where users can sell and buy geek culture merch.',
        githubLink: 'https://github.com/CyborgSemon/summative-3-front',
        img: ''
    }
]

for (var i = 0; i < array.length; i++) {
    array[i]
}
    projectCard = `<div class="col-md-4">
        <div class="card mb-4 shadow-sm">
            <img class="bd-placeholder-img card-img-top" width="100%" height="225">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>`


    $(`projectSection`).html(projectCard);
})
