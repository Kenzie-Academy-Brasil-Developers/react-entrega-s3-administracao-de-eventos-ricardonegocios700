import axios from "axios";

export const api = () => {
  axios.get("https://api.punkapi.com/v2/beers");
};
