import axios from 'axios';

export const getDataVirusCorona = async () => {
  const url = `https://api.covid19api.com/summary`;
  const response = await axios.get(url);
  const result = await response.status === 200 ? await response.data : [];
  return result;
}



export const data = {
  moi_nhiem: 100,
  tong_nhiem: 3000,
  tu_vong: 1223,
  tong_tv: 23234,
  khoi: 2131,
  tong_khoi: 1223
}