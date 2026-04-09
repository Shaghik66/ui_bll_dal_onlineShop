import axios from "axios";
import { BASE_URL } from "../shared/constants/baseURL";
import { getAllActionCreator } from "../store/store";
import { getOneActionCreator } from "../store/store";

const instance = axios.create({
  baseURL: BASE_URL,
});

const productApi = {
  async getResponse(dispatch) {
    const response = await instance.get("/products");
    dispatch(getAllActionCreator(response.data));
  },
  async getResponseById(dispatch, id) {
    const response = await instance.get(`/products/${id}`);
    dispatch(getOneActionCreator(response.data));
  },

};

export { productApi};
