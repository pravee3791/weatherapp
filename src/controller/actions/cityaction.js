

import service from '../service/service'
export default {
    updatecity: (data) => (
        (dispatch) => {
            dispatch({ type: 'UPDATE_CITY', payload: data });
        }
    ),
    updateweather: (data) => (
        (dispatch) => {
            service.updateWeather(data,(response) => {
                dispatch({ type: 'UPDATE_WEATHER', payload: response });
                dispatch({ type: 'UPDATE_WEATHER_STATUS', payload: true });
            });
        }
    ),
    resetcity: (data) => (
        (dispatch) => {
            dispatch({ type: 'UPDATE_CITY', payload: '' });
            dispatch({ type: 'UPDATE_WEATHER_STATUS', payload: false });
        }
    ),
  
}


