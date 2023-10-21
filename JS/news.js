function getElement(id) {
  return document.getElementById(id)
}

fetch("../data/news/news.json")
.then(news => news.json())
.then((news) => {
  let out = ""
  for (var i = news.length - 1; i >= 0; i--) {
    out += "<h1 id='source'>" + news[i].source + "</h1>" + 
    "<h2 id='title'>" + news[i].title + "</h2>" + 
    "<p id='content'>" + news[i].content + "</p>" ;
  }
  getElement("news-data").innerHTML =  out;
});