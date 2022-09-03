import axios from "axios";

export const logintoken = (data) => (dispatch) => {
  return axios.post("https://reqres.in/api/login", data).then((res) => {
    dispatch({ type: "Success Login", payload: res.data.token });
  });
};
