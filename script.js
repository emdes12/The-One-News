//getting news

const newsList = document.querySelector(".news-container");
const otherNews = document.querySelector(".recent-news");
const worldNews = document.querySelector(".world-news");

//async function getNews() {
//    const resp = await fetch('https://newsapi.org/v2/top-headlines?country=ng&apiKey=1d199936d6f74336847f277033333a1d');

//    const respNews = await resp.json();
//    const newNews = await respNews

//    return newNews
//}

//console.log(getNews())

//function addNews(newsData) {

//    console.log(incomeNews)
//}

//addNews();

//https://newsapi.org/v2/top-headlines?country=ng&apiKey=1d199936d6f74336847f277033333a1d

function sourceNews(country) {
  fetch(
    "https://api.currentsapi.services/v1/latest-news?country=" +
      country +
      "&apiKey=MiAFjxEMKgrSf-9BMrBQ6Y35GAYLwqqMr7nZUHr-WodSUSx0"
  )
    .then(async (response) => {
      let res = await response.json();
      return res;
    })
    .then((response) => {
      for (let i = 0; i < 10; i++) {
        newsList.innerHTML += `<li class="news-list">
                <a href="${response.news[i].url}" target="_blank"><img loading="lazy" src="${response.news[i].image}" alt="${response.news[i].title}">

                <div class="news-details">
                    <div class="news-title">${response.news[i].title}</div>
                    <div class="time">
                    ${response.news[i].published}
                    </div>

                    <div class="source">Source: <span>${response.news[i].author}</span></div>
                </div></a>
            </li>
            `;
        console.log("worked");
      }
    });

  fetch(
    "https://api.currentsapi.services/v1/latest-news?country=" +
      country +
      "&apiKey=MiAFjxEMKgrSf-9BMrBQ6Y35GAYLwqqMr7nZUHr-WodSUSx0"
  )
    .then(async (response) => {
      let resp = await response.json();
      return resp;
    })
    .then((response) => {
      for (let i = 10; i < 23; i++) {
        otherNews.innerHTML += `<li class="recent-list">
                <a href="${response.news[i].url}" target="_blank"><img src="${response.news[i].image}" alt="${response.news[i].title}">

                <div class="news-recent">
                    <div class="recent-title">${response.news[i].title}</div>

                    <div class="source">Source: <span>${response.news[i].author}</span></div>
                </div></a>
            </li>
        `;
      }
    });
}

sourceNews("ng");

//end of getting news

//changing the region(country)
const selectEl = document.getElementById("country-select");

selectEl.addEventListener("change", function () {
  let newContri = this.value;
  sourceNews(newContri);

  //   let contri = region;
  //   let fnChNews = sourceNews(contri);

  //   setInterval(fnChNews, 3000);
  //   console.log(region);
});

//changing region ends

//slider images

const images = document.querySelector(".images").children;
const dots = document.querySelector(".slider-bar").children;
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

console.log(images);

let change = 3;

function slideImage(move) {
  images[change].classList.remove("real");
  dots[change].classList.remove("img-on");

  switch (move) {
    case "next":
      change++;
      break;
    case "prev":
      change--;
      break;
  }

  if (change >= images.length) {
    change = 0;
  }

  if (change < 0) {
    change = 4;
  }

  images[change].classList.add("real");
  dots[change].classList.add("img-on");

  if (change === 4) {
    prevBtn.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    nextBtn.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
  } else {
    prevBtn.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    nextBtn.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
  }
}
//changeRegion()
