console.log(window.innerWidth);

const ANCHOR_TAGS = document.querySelectorAll(".experienceAnchor");
const HEADING_ANCHOR = document.querySelectorAll(".h2Anchor");
const MY_INTRO = document.getElementById("Myintro");

if (window.innerWidth < 768) {
  ANCHOR_TAGS.forEach((item) => {
    item.removeAttribute("href");
  });

  HEADING_ANCHOR.forEach((item, index) => {
    console.log(index);

    switch (index) {
      case 0:
        item.setAttribute("href", "https://eduazn.com/");
        break;
      case 1:
        item.setAttribute("href", "https://stif.netlify.app");
        break;
      case 2:
        item.setAttribute("href", "https://eduazn.com/");
        break;
      default:
        break;
    }
  });
}

const InfoArr = [
  "Hello Dear",
  "You Are Welcome",
  "I Am Marius Nwokolo",
  "From Enugu State",
];

let i = 0;

setInterval(() => {
  MY_INTRO.innerHTML = InfoArr[i];
  i++;

  if (i >= InfoArr.length) {
    i = 0;
  }
}, 3000);
