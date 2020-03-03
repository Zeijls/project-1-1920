/*** Fetching data -> refactor into module later ***/
const main = document.querySelector("main");
const cors = "https://cors-anywhere.herokuapp.com/";
const endpoint = "https://zoeken.oba.nl/api/v1/search/?q=";
const query = "tolkien";
const key = "dc0e2f073c03758140452044906bc818";
const secret = "6b02878111c06660300798cf4c40a685";
const detail = "Default";
const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&refine=true&output=json`;

const config = {
  Authorization: `Bearer ${secret}`
};

fetch(url, config)
  .then(response => {
    return response.json();
  })
  .then(data => {
    render(data);
  })
  .catch(err => {
    console.log(err);
  });

// const app = {
//   init: function() {
//     router.handler();
//   }
// };

// render data
function render(data) {
  const results = data.results;
  console.dir(results);
  results.forEach((item, i) => {
    const html = `
            <article>
            <img class="img" src="${
              item.coverimages ? item.coverimages[1] : "Geen samenvatting"
            }">
              <h2 class="title">${item.titles[0]}</h2>
              <a href=""><img src="src/img/star.png"></a>
            </article>
            
          `;
    main.insertAdjacentHTML("beforeend", html);
  });
}

// Samenvatting tekst

/* <p>${
  item.summaries ? item.summaries[0] : "Geen samenvatting"
}</p>  */
