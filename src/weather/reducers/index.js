import { combineReducers } from 'redux';
import { currentWeatherReducer } from './weather-reducer';

const rootReducer = combineReducers({
  currentWeather: currentWeatherReducer
});
export default rootReducer;