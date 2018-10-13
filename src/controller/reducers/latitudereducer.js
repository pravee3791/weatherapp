const defaultState = {
    'latitude':''
};
export function latitudeDetail(state = defaultState, action) {
    switch (action.type) {
        case 'UPDATE_LATITUDE':
            return {
                ...state,
                latitude: action.payload
            };
            break;

            return state;
            break;
    }
}