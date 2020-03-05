// const main = document.querySelector("main");
const book = document.querySelector(".books"),
  title = document.querySelector(".title");

export const render = {
  title: function(query) {
    const titel = document.getElementById("title");
    const html = `
        <h1>Boeken over ${query}</h1>
    `;

    title.insertAdjacentHTML("afterbegin", html);
    console.log(title);
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

    results.forEach((item, i) => {
      const html = `
            <article>
            <img src="${
              item.coverimages ? item.coverimages[1] : "Geen samenvatting"
            }">
            <button><img src="src/img/star.png"></button>
            </article>
          `;
      boekies.insertAdjacentHTML("beforeend", html);
    });
  },

  // <h2>${item.titles[0]}</h2>
  // <p>${item.summaries ? item.summaries[0] : "Geen samenvatting"}</p>

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
};
