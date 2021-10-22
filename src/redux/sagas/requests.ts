import axios from "axios";

export function axiosTodoGet() {
  return axios.request({
    method: "GET",
    url: "https://my-json-server.typicode.com/veroni-d20/demo/todo",
  });
}

export function axiosUserGet() {
  return axios.request({
    method: "GET",
    url: "https://my-json-server.typicode.com/Joshuafrankle/demo/user",
  });
}
