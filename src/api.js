import axios from "axios";

export default class Api {
  static call() {
    return axios.create({
      baseURL: "http://api.weatherapi.com/v1", //("api.openweathermap.org/data/2.5/forecast?q=Lancaster,UK&appid="+process.env.VUE_APP_API_ID),
      withCredentials: false,
      headers: Api.headers,
    });
  }
  static headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
  };
}
