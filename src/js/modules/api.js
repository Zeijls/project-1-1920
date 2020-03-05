import { render } from "./render.js";
import { data as dataModule } from "./data.js";

/*** Fetching data -> refactor into module later ***/

const cors = "https://cors-anywhere.herokuapp.com/";
const endpoint = "https://zoeken.oba.nl/api/v1/search/?q=";
// const query = "tolkien";
const key = "dc0e2f073c03758140452044906bc818";
const secret = "6b02878111c06660300798cf4c40a685";
const detail = "Default";
const refine = "&refine=true";
// const facet = "&facet=";
const clasification = "classification:informatieboek";

const config = {
  Authorization: `Bearer ${secret}`
};

export const api = {
  getData: async function(query) {
    const url = `${cors}${endpoint}${clasification}%20${query}&authorization=${key}&detaillevel=${detail}${refine}&output=json`;

    try {
      const response = await fetch(url, config);
      const data = await response.json();
      console.log(data);
      await dataModule.setItem(query, data.results);
      console.log("setItem: ", query);
      return await data.results;
    } catch (err) {
      console.log("Error: ", err);
    }
  },

  dataFromFetch: async function(query) {
    return await api.getData(query);
  },

  dataFromLocalStorage: async function(query) {
    let categorie = dataModule.getItem(query);
    console.log("getItem: ", categorie);
    let parseCategorie = dataModule.parse(categorie);
    console.log("parseCategorie: ", parseCategorie);
    return parseCategorie;
  }
};
