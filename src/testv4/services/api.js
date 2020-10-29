import axios from 'axios';
import md5 from 'md5';
import jwt from 'jsonwebtoken';


const KEY_JWT = 'vccorp_2020';
const PAYLOAD = {
  iss : "http://t3h-edu.herokuapp.com/",
  aud : "http://t3h-edu.herokuapp.com/",
  iat : 1356999524,
  nbf : 1357000000
}

const createTokenApi = () => {
  const token = jwt.sign(PAYLOAD, KEY_JWT);
  return token;
}

export const loginApi = async (user, pass) => {
  pass = md5(`${KEY_JWT}|||${pass}`);
  const token = createTokenApi();
  const response = await axios({
    url: `https://cors-anywhere.herokuapp.com/http://t3h-edu.herokuapp.com//api/learning/v1/login`,
    method: 'POST',
    headers: {
      "Access-Control-Allow-Origin" : "*",
      "Content-type": "Application/json",
      "Authorization": `${token}`
    },
    data: {username: user, password: pass}
  });
  const result = await response.status === 200 ? response.data : [];
  return result;
}

export const saveTokenLocalStorage = (token) => {
  if(token !== '' && token !== null && token !== undefined){
    localStorage.setItem('token', JSON.stringify(token));
  }
}

export const removeTokenLocalStorage = () => {
  localStorage.removeItem('token');
}

export const getTokenLocalStorage = () => {
  const token = localStorage.getItem('token');
  return JSON.parse(token);
}

export const decodeTokenFormLocalStorage = (token) => {
  const tokenDecode = jwt.verify(token, KEY_JWT);
  return tokenDecode;
}