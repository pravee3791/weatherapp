
export default {
    updatelatitude: (data) => (
        (dispatch) => {
            dispatch({ type: 'UPDATE_LATITUDE', payload: data });
        }
    ),
  
}