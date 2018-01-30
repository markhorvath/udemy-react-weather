import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      if (action.error) {
        alert("Oops!  City not found, please check spelling.");
        break
      }
      //This works for manipulating state (unlike push) and puts the new data at the end of the array
      // return state.concat([action.payload.data]);


      // Below is an ES6 format, says to create an array with the initial data (action.payload.data)
      // and then the 3 dots lets it know it might be an array so take all entries from that array
      // and add it to the first one (the one with action.payload.data)
      // so it'd look like [city, city, city], NOT [city, [city, city]]
      // but it would put the payload data as the first element in the array
      return [ action.payload.data, ...state ];
  }
  return state;
}