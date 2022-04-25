

async function loadBooks() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'bookshelves.p.rapidapi.com',
            'X-RapidAPI-Key': '0912514b1emsh18733fae0c820e1p173b1bjsn291ed89645a1'
        }
    };

    
    try {
        const response = await fetch('https://bookshelves.p.rapidapi.com/books', options)
        const bookData = await response.json();    
        const data = bookData.Books.slice(0,3);
        
        const htmlInsertLocations = ["figure1", "figure2", "figure3"];
        
        const createHtml = (data, htmlInsertLocations) => {
            let bookTitle = data.title;
            let bookImg = data.imgUrl;
            const htmlLocation = document.getElementById(`${htmlInsertLocations}`);
            let htmlImg = `<img src="${bookImg}" class="card__img_book" alt="${bookTitle}">`;
            htmlLocation.insertAdjacentHTML("afterbegin", htmlImg);
        }
        
        for (let i = 0; i < htmlInsertLocations.length; i++) {
            for (let j = 0; j < data.length; j++) {
                createHtml(data[j], htmlInsertLocations[i]);
                i++;
            }            
        }
    } catch (err) {

    }
}
loadBooks();