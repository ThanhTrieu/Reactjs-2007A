import jwt from 'jsonwebtoken';
const KEY_JWT = 'vccorp_2020';

export const getTokenFromLocalStorage = () => {
  const token = localStorage['persist:token-login-persist'];
  if(token !== null && token !== undefined && token !== '') {
    const jsonToken = JSON.parse(token);
    if(jsonToken.hasOwnProperty('token')) {
      return JSON.parse(jsonToken['token']);
    }
  }
  return null;
}

export const decodeTokenFromLocalStorage = () => {
  const token = getTokenFromLocalStorage();
  let decodeToken = null;
  if(token !== null && token !== undefined && token !== '') {
    decodeToken = jwt.verify(token, KEY_JWT);
  }
  return decodeToken;
}

export const getUsernameUser = () => {
  const infoUser = decodeTokenFromLocalStorage();
  if(infoUser !== null) {
    return infoUser['username'];
  }
  return null;
}
