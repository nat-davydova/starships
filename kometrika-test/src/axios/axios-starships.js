import axios from "axios";

const starshipsInstance = axios.create({
  baseURL: "https://swapi.dev/api/starships/"
});

export default starshipsInstance;
