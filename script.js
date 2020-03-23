let a = []
var total = []
let time = []
const year = [
  "Янв",
  "Фев",
  "Мар",
  "Апр",
  "Мая",
  "Июн",
  "Июл",
  "Авг",
  "Сен",
  "Окт",
  "Ноя",
  "Дек",
]
let currentLang = "ru"
function getId(lang){
  currentLang = lang;
  return currentLang;
 }
function showNews(id){
  
  if(currentLang == false){
    currentLang = "ru"
  }
  fetch(`http://localhost:3000/${currentLang}news${id}.json`)
  .then(response => {
    return response.json()
    }).then(res => {
      for( let i = 0; i < res.articles.length; i++){
        let hours = Date.parse(res.articles[i].publishedAt)
        let temporary = new Date(hours)
        
         a[i] = [`<div class="card col-5 m-4" style="width: 18rem;">
        <img class="card-img-top" src="${res.articles[i].urlToImage}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${res.articles[i].title}</h5>
          <p class="card-text pb-5">${res.articles[i].description}</p>
          <a href="${res.articles[i].url}" class="btn btn-primary knopka">К новости</a>
          <p class="d-inline time">${temporary.getDate()} ${year[temporary.getMonth()]} ${temporary.getHours()}:${temporary.getMinutes()<10?"0":""}${temporary.getMinutes() }</p>
        </div>
      </div>`]
      };
      let b = a.join('')
      document.querySelector(".row").innerHTML = b
 





    })
}

function findWord(){
  fetch(`http://newsapi.org/v2/everything?q=${document.querySelector('.form-control').value}&apiKey=4262293fff7d4825ab549d8c3d904453`)
  .then(response => {
    return response.json()
    }).then(res => {
      
    if(res.articles.length == 0){alert(`Новостей по запросу ${document.querySelector('.form-control').value} не найдено`)}
      for( let i = 0; i < res.articles.length; i++){
        let hours = Date.parse(res.articles[i].publishedAt)
        let temporary = new Date(hours)
        
         a[i] = [`<div class="card col-5 m-4" style="width: 18rem;">
        <img class="card-img-top" src="${res.articles[i].urlToImage}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${res.articles[i].title}</h5>
          <p class="card-text pb-5">${res.articles[i].description}</p>
          <a href="${res.articles[i].url}" class="btn btn-primary knopka">К новости</a>
          <p class="d-inline time">${temporary.getDate()} ${year[temporary.getMonth()]} ${temporary.getHours()}:${temporary.getMinutes()<10?"0":""}${temporary.getMinutes() }</p>
        </div>
      </div>`]
      };
      let b = a.join('')
      document.querySelector(".row").innerHTML = b
 





    })
}
  
document.querySelector('.form-control').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    findWord()
  }
});
