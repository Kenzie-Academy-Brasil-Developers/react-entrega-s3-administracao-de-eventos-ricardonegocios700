import axios from "axios";

export const Api = () => {
  axios
    .get("https://api.punkapi.com/v2/beers")
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.log(error));
};
