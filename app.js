const apiKey ='d2a22f037cba42b6a1ee4e68ab124145';
const main = document.querySelector('main');
window.addEventListener('load', e => {
    updateNews();
});

async function updateNews() {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`);
    const json = await res.json();
    main.innerHTML = json.articles.map(createArticle).join('\n');
}

function createArticle(article){
    return `
    <div class="article">
      <a href="${article.url}">
        <h2>${article.title}</h2>
        <img src="${article.urlToImage}">
        <p>${article.description}</p>
      </a>
    </div>
    `;
}