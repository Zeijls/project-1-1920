// render data
// function render(data) {
//   const results = data.results;
//   console.dir(results);
//   results.forEach((item, i) => {
//     const html = `
//               <article>
//               <img class="img" src="${
//                 item.coverimages ? item.coverimages[1] : "Geen samenvatting"
//               }">
//                 <h2 class="title">${item.titles[0]}</h2>
//                 <a href=""><img src="src/img/star.png"></a>
//               </article>

//             `;
//     main.insertAdjacentHTML("beforeend", html);
//   });
// }

// Samenvatting tekst

/* <p>${
    item.summaries ? item.summaries[0] : "Geen samenvatting"
  }</p>  */

const main = document.querySelector("main");
// const result = document.querySelector(".results");
const book = document.querySelector(".books"),
  title = document.querySelector(".title");

export const render = {
  title: function(query) {
    const html = `
        <h1>Boeken over ${query}</h1>
    `;

    title.insertAdjacentHTML("beforeend", html);
  },

  // render data
  renderSubCategories: function(data) {
    const wrapper = document.getElementById("books");

    wrapper !== null
      ? (this.remove("books"), this.books(data))
      : this.books(data);
  },
  books: function(data) {
    const results = data;
    const boekies = document.getElementById("books");

    // Remove alle bestaande boekjes
    // this.remove(book, title);
    // data = "";
    // console.log("data", results);
    // while boekjes.firstChild => remove gvd

    // Voeg daarna nieuwe boeken toe (zie onderstaand)

    results.forEach((item, i) => {
      const html = `
            <article>
              <h2>${item.titles[0]}</h2>
              <p>${item.summaries ? item.summaries[0] : "Geen samenvatting"}</p>
              <img src="${
                item.coverimages ? item.coverimages[1] : "Geen samenvatting"
              }">
            </article>
          `;
      boekies.insertAdjacentHTML("beforeend", html);
    });
  },

  overview: function(elementIdHeader, elementIdBooks, query, data) {
    console.log(data.length);
    if (data.length !== 0) {
      console.log("Header id given: ", elementIdHeader);

      this.remove(elementIdHeader);
      this.remove(elementIdBooks);
      this.title(query);
      this.renderSubCategories(data);
    } else {
      this.remove(elementIdHeader);
      this.remove(elementIdBooks);
      this.title(query);
      this.noDataFound(query);
    }
  },

  /**
   * No data found html renderer.
   */
  noDataFound: function(query) {
    const html = `
      <div class="no-data"><span>Oeps! Het ziet er naar uit dat er geen boeken zijn van dit onderwerp ${query}</span></div>
  `;

    book.insertAdjacentHTML("beforeend", html);
  },

  /**
   * Function to remove all the content inside a div.
   *
   * @param elementId: the ID of the div that you want to clear.
   */
  remove: function(elementId) {
    const div = document.getElementById(elementId);

    while (div.firstElementChild) {
      console.log(`Removing`, div.firstElementChild);
      div.removeChild(div.firstElementChild);
    }
  }

  //   books.addEventListener("click", function() {
  //     const clean = document.getElementById("results");
  //     while (clean.firstChild) {
  //       clean.removeChild(clean.lastChild);
  //     }
  //   });
  // }
};
