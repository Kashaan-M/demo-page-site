const nextButton = document.querySelector(".carousel-control-next");
const prevButton = document.querySelector(".carousel-control-prev");
const carousel = document.querySelector(".carousel-inner");
const indicators = document.querySelector(".carousel-indicators");
let count = 0;

const videosArray = [
              "<div class=\"carousel-item h-100\">\n\t<iframe width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/0Jt2oMJcThs\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n\t</div>",
              "<div class=\"carousel-item h-100\">\n\t<iframe width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/uGr1pV7wRcA\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n\t</div>",
              "<div class=\"carousel-item h-100\">\n\t<iframe width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/xxRpJXYkl1s\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n\t</div>",
              "<div class=\"carousel-item h-100\">\n\t<iframe width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/eNi8p0uxYAw\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n\t</div>",
              "<div class=\"carousel-item h-100\">\n\t<iframe width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/EvPR0QyKA3A\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n\t</div>",
              "<div class=\"carousel-item h-100\">\n\t<iframe width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/UO_KjSE_3J8\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n\t</div>",
              "<div class=\"carousel-item h-100\">\n\t<iframe width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/GzqNB3L2Zwc\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n\t</div>",
              "<div class=\"carousel-item h-100\">\n\t<iframe width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/5ja_i8ejd78\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n\t</div>",
              "<div class=\"carousel-item h-100\">\n\t<iframe width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/l8kZscbMh2w\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n\t</div>"
              ];

const indicatorsArray = [
              "<button type=\"button\" class=\"active\" data-bs-target=\"#carouselExampleIndicators\" data-bs-slide-to=\"3\" aria-label=\"Slide 4\"></button>",
              "<button type=\"button\" class=\"active\" data-bs-target=\"#carouselExampleIndicators\" data-bs-slide-to=\"4\" aria-label=\"Slide 5\"></button>",
              "<button type=\"button\" class=\"active\"  data-bs-target=\"#carouselExampleIndicators\" data-bs-slide-to=\"5\" aria-label=\"Slide 6\"></button>",
              "<button type=\"button\" class=\"active\" data-bs-target=\"#carouselExampleIndicators\" data-bs-slide-to=\"6\" aria-label=\"Slide 7\"></button>",
              "<button type=\"button\" class=\"active\" data-bs-target=\"#carouselExampleIndicators\" data-bs-slide-to=\"7\" aria-label=\"Slide 8\"></button>",
              "<button type=\"button\" class=\"active\" data-bs-target=\"#carouselExampleIndicators\" data-bs-slide-to=\"8\" aria-label=\"Slide 9\"></button>",
              "<button type=\"button\" class=\"active\" data-bs-target=\"#carouselExampleIndicators\" data-bs-slide-to=\"9\" aria-label=\"Slide 10\"></button>",
              "<button type=\"button\" class=\"active\" data-bs-target=\"#carouselExampleIndicators\" data-bs-slide-to=\"10\" aria-label=\"Slide 11\"></button>",
              "<button type=\"button\" class=\"active\" data-bs-target=\"#carouselExampleIndicators\" data-bs-slide-to=\"11\" aria-label=\"Slide 12\"></button>"
];

async function setIndicator() {
  for(let i = 0; i < indicators.children.length; i++) {
          if(indicators.children[i].classList !== "") {
            indicators.children[i].classList = "";
          }
        }
        indicators.children[(indicators.children.length - 1)].classList.add("active");
}
async function setCarousel() {

for(let i = 0; i < carousel.children.length; i++) {
          if(carousel.children[i].classList.toString().includes("active")) {
            carousel.children[i].classList.remove("active");
          }
        }
        carousel.children[(carousel.children.length - 1)].classList.add("active");

}

async function fetchVideos() {

  console.log("indicatorArray : ", indicatorsArray.length);
  if(count > 2) { 
    if(count < 12) {

    switch (count) {

      case 3:
        carousel.innerHTML = carousel.innerHTML.concat(videosArray[0]);
        await setCarousel();
        indicators.innerHTML = indicators.innerHTML.concat(indicatorsArray[0]);
        await setIndicator();
        break;
      case 4:
        carousel.innerHTML = carousel.innerHTML.concat(videosArray[1]);
        await setCarousel();
        indicators.innerHTML = indicators.innerHTML.concat(indicatorsArray[1]);
        await setIndicator();
        break;
      case 5:
        carousel.innerHTML = carousel.innerHTML.concat(videosArray[2]);
        await setCarousel();
        indicators.innerHTML = indicators.innerHTML.concat(indicatorsArray[2]);
        await setIndicator();
        break;
      case 6:
        carousel.innerHTML = carousel.innerHTML.concat(videosArray[3]);
        await setCarousel();
        indicators.innerHTML = indicators.innerHTML.concat(indicatorsArray[3]);
        await setIndicator();
        break;
      case 7:
        carousel.innerHTML = carousel.innerHTML.concat(videosArray[4]);
        await setCarousel();
        indicators.innerHTML = indicators.innerHTML.concat(indicatorsArray[4]);
        await setIndicator();
        break;
      case 8:
        carousel.innerHTML = carousel.innerHTML.concat(videosArray[5]);
        await setCarousel();
        indicators.innerHTML = indicators.innerHTML.concat(indicatorsArray[5]);
        await setIndicator();
        break;
      case 9:
        carousel.innerHTML = carousel.innerHTML.concat(videosArray[6]);
        await setCarousel();
        indicators.innerHTML = indicators.innerHTML.concat(indicatorsArray[6]);
        await setIndicator();
        break;
      case 10:
        carousel.innerHTML = carousel.innerHTML.concat(videosArray[7]);
        await setCarousel();
        indicators.innerHTML = indicators.innerHTML.concat(indicatorsArray[7]);
        await setIndicator();
        break;
      case 11:
        carousel.innerHTML = carousel.innerHTML.concat(videosArray[8]);
        await setCarousel();
        indicators.innerHTML = indicators.innerHTML.concat(indicatorsArray[8]);
        await setIndicator();
        break;
    }
  }
}
count++;
}

nextButton.addEventListener("click", fetchVideos); 
prevButton.addEventListener("click", fetchVideos); 