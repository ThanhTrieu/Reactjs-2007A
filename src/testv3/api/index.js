import axios from 'axios';

const getListUserByPaging = async (page) => {
  const url = `https://reqres.in/api/users?page=${page}&per_page=3`;
  const response = await axios.get(url);
  const data = response.status === 200 ? response.data : [];
  return data;
}

export const api = {
  getListUserByPaging
}