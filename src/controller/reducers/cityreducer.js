const defaultState = {
    'city':'',
    'weather':''
};
export function cityDetail(state = defaultState, action) {
    switch (action.type) {
        case 'UPDATE_CITY':
            return {
                ...state,
                city: action.payload
            };
            break;
            case 'UPDATE_WEATHER':
            return {
                ...state,
                weather: action.payload
            };
            break;

            case 'UPDATE_WEATHER_STATUS':
            return {
                ...state,
                weatherupdatestaus: action.payload
            };
            break;

            default:
            return state;
            break;
    }
}