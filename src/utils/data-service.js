import axios from "axios";

const API = axios.create({});
const fetchGameListURL = "http://starlord.hackerearth.com/TopSellingGames";
export default class DataService {
  static getTopSellingGames = () => {
    return API.get(fetchGameListURL);
  };
}
