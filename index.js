function getNews(country, category) {

    document.getElementById('news').innerHTML="";

    fetch("https://newsapi.org/v2/top-headlines?country=" + 
    country + 
    "&category=" + 
    category + 
    "&apiKey=4d65438a863f40e4a64ff19287537d23"
    )
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{

    console.log(data);

    let news = data.articles;
    console.log(news);
    
    news.forEach((n,index)=>{
        // NEWS CARD
        let newsCard = document.createElement('div');
        newsCard.classList.add("news_card");
        // NEWS IMG
        let newsImg = document.createElement("div");
        newsImg.classList.add("news_img");
        // NEWS ARTICLE IMG
        let img = document.createElement("img");
        img.setAttribute("src", n.urlToImage);
        // adding img in news img div
        newsImg.appendChild(img);
        // NEWS DETAILS
        let newsDetails = document.createElement("div");
        newsDetails.classList.add("news_details");

        // TITLE H1
        let newsTitle = document.createElement('h1');
        newsTitle.classList.add('title');
        newsTitle.append(n.title);

        // AUTHOR P
        let newsAuthor = document.createElement('p');
        newsAuthor.classList.add('author');
        newsAuthor.append(n.author);

        // CONTENT P
        let content = document.createElement('p');
        content.classList.add('content');
        content.append(n.description);

        let link = document.createElement("a");
        link.setAttribute("href", n.url);
        link.setAttribute("target", "_blank");

        // BUTTON READ
        let button = document.createElement('button');
        button.classList.add('btn');
        button.append("Read Full Article");

        // ADDING BUTTON IN LINK
        link.appendChild(button);

        // ADDING CONTENT IN NEWS DETAILS
        newsDetails.appendChild(newsTitle);
        newsDetails.appendChild(newsAuthor);
        newsDetails.appendChild(content);
        newsDetails.appendChild(link);

        // ADDING NEWS IMG AND NEWS DETAILS TO CARD
        
        newsCard.appendChild(newsImg);
        newsCard.appendChild(newsDetails);

        document.getElementById('news').appendChild(newsCard);
        
    });



})
.catch((err)=>{
    console.log(err);
});
}

getNews('us', 'buisness');

function search() {
    let country = document.getElementById("country").value;
    let category = document.getElementById("category").value; 
    // let news = document.getElementById('news');

    // news.innerHTML = null;
    getNews(country, category);
}