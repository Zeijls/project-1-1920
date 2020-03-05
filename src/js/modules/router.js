import { api } from "./api.js";
import { data as dataModule } from "./data.js";
import { render } from "./render.js";

// Router
export const router = {
  handler: async function() {
    // dataModule.clear();
    this.route();
  },

  route: function() {
    routie(":query", async query => {
      if (localStorage.getItem(query) === null) {
        console.log("getData");
        const data = await api.dataFromFetch(query);
        render.overview("title", "books", query, data);
      } else {
        console.log("local");
        const data = await api.dataFromLocalStorage(query);
        render.overview("title", "books", query, data);
      }
      this.updateUI(query);
    });
  },

  updateUI: function(route) {
    if (document.querySelector("a[data-route].active")) {
      document.querySelector("a[data-route].active").classList.remove("active");
    }
    let activeDiv = document.querySelector(`a[data-route=${route}]`);
    activeDiv.classList.add("active");
  }
};
