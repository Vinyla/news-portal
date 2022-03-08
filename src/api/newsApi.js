import axios from 'axios';

const apiKey = process.env.REACT_APP_NEWS_API;
const baseURL = 'https://newsapi.org/v2/';

export const fetchDataFromApi = async (page) => {
  try {
    const res = await axios.get(
      `${baseURL}top-headlines?country=us&page=${page}&apiKey=${apiKey}`
    );
    return res.data;
  } catch (err) {
    if (err.response && err.response.data) {
      return err.response.data;
    } else {
      return err;
    }
  }
};

export const searchDataFromApi = async (querry, sortBy) => {
  try {
    const res = await axios.get(
      `${baseURL}everything?q=${querry}&sortBy=${sortBy}&apiKey=${apiKey}`
    );
    return res.data;
  } catch (err) {
    if (err.response && err.response.data) {
      return err.response.data;
    } else {
      return err;
    }
  }
};
