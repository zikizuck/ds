

const inputEl = document.querySelector('.input');
const formEl = document.querySelector('.search-form');

function getShows(num) {
    return fetch("https://sheet.best/api/sheets/96061e86-6f26-4ace-8da1-8eeded76a659");

}

function getJSON(response) {
    return response.json();
}

// function getRelevantData(show) {
//     return show.name ;
//
// }

let renderShows = (shows) => {
    document.querySelector('.shows-box').innerHTML = '';

    shows.map((show) => {
        let cardDiv = document.createElement('div');
        let showName = document.createElement('h1');
        let showScore = document.createElement('p');
        let qty1 = document.createElement('span');
        let location = document.createElement('span');
        let qty2 = document.createElement('p');
        let imgLink = document.createElement('a');

        imgLink.href = show.thumbnailUrl;
        imgLink.style.cursor = 'alias';

        showName.textContent = show.num ;
        showScore.textContent = show.description;
        qty1.textContent = `stock in PT : ${show.QTY}`;
        location.textContent = `Location in PT : ${show.FirstFloor} / ${show.secFloor}`;
        qty2.textContent = `Stock in OK : ${show.stock5}`;

            let img = document.createElement('img');
            let img2 = document.createElement('img');
            img.src = show.thumbnailUrl;
            img2.src = show.thumbnailUrl2;
            imgLink.appendChild(img);
            imgLink.appendChild(img2);

        cardDiv.classList.add("card");
        showName.classList.add("name");
        showScore.classList.add("card-info");
        qty1.classList.add("card-info");
        location.classList.add("card-info");
        qty2.classList.add("card-info");
        cardDiv.appendChild(showName);
        cardDiv.appendChild(imgLink);
        cardDiv.appendChild(showScore);
        cardDiv.appendChild(qty1);
        cardDiv.appendChild(location);
        cardDiv.appendChild(qty2);
        document.querySelector('.shows-box').appendChild(cardDiv);

    }).filter(inputEl.value);

};

function onSubmit(event) {
    event.preventDefault();

    getShows(inputEl.value)
        .then(getJSON)
        .then(renderShows)

}
console.log(inputEl.value);



formEl.addEventListener('submit', onSubmit);

window.addEventListener('DOMContentLoaded',onSubmit);

