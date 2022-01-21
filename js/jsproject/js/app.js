let mainData = [];


fetch('https://imdb-api.com/en/API/Top250Movies/k_0zu6m9jy')
    .then((response) => response.json())
    .then((data) => {
        // console.log(data.items);
        let movieCardContent = '';
        data.items.forEach((d) => {
            // console.log(d);
            movieCardContent += `<div class="movieCard">
            <img src="${d.image}" alt="${d.title}" />
            <div class="movieCardDetails">
                <h2>${d.title}</h2>
                <p>${d.year}</p>
                <p>IMDB Rating: <span>${d.imDbRating}</span></p>
                <p>Comments: <span style="font-weight: bold;" class="${d.comments ='' ? '': commentText)}">${d.comment}</span> 
                <div class="movieCardSocial">
                <a href="#"><i class="fas fa-heart"></i></a>
                <a href="https://www.imdb.com/title/${d.id}" target="_blank"><i class="fas fa-share-alt"></i></a>
                <a href="#" onclick="funcComment('${d.id}')"><i class="fas fa-comment"></i></a>
                </div>
            </div>
            </div> `;

        mainData.push(d){
            id: d.id,
            image: d.image,
            title: d.title,
            year: d.year,
            imDbRating: d.imDbRating,
            likes: 0,
            comments: '',
        });
            document.querySelector('body').innerHTML = movieCardContent; 
        });
        console.log(mainData);
    .catch((err) => {
        console.log(error);
    });

    funcComment = (id) => {
        let varComment = prompt('Please enter your comment');

        mainData.find((d) => {
            return d.id === varComment;

            let movieCardContent = '';
            data.items.forEach((d) => {
            
            movieCardContent += `<div class="movieCard">
            <img src="${d.image}" alt="${d.title}" />
            <div class="movieCardDetails">
                <h2>${d.title}</h2>
                <p>${d.year}</p>
                <p>IMDB Rating: <span>${d.imDbRating}</span></p>
                <div class="movieCardSocial">
                <a href="#"><i class="fas fa-heart"></i></a>
                <a href="https://www.imdb.com/title/${d.id}" target="_blank"><i class="fas fa-share-alt"></i></a>
                <a href="#" onclick="funcComment('${d.id}')"><i class="fas fa-comment"></i></a>
                </div>
            </div>
            </div> `;

            document.querySelector('body').innerHTML = movieCardContent
        })
    }