// Import call actions
import { 
    START_CALL,
    CALL_SUCCESS,
    CALL_FAILURE,
    START_ADD_SMURF,
    ADD_SMURF_SUCCESS,
    ADD_SMURF_FAILURE
} from '../actions'

//Task List:
//1. Add in the initialState needed to hold: 
const initialState = {
    //     [x] - an array of smurfs
    smurfs: [],
    //     [x] - a boolean indicating if the app is loading
    appLoading: false,
    //     [x] - error text
    loadingError: '',
    addingError: ''
};


//      - Any other state changes you see as necessary

//2. Setup your reducer to take the state and action as parameters
const reducer = (state = initialState, action)=>{
    // console.log("Action received in Reducer: ", action);
    switch (action.type){
        //3. Add in cases to your reducer to handle:
        //     [x] - The start of an api call
        case START_CALL:
            return {
                ...state,
                appLoading: true,
                loadingError: ''
            };
        //     [x] - The end of an api call
        case CALL_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                appLoading: false
            };
        //     [x] - The end of an api call
        case CALL_FAILURE:
            return {
                ...state,
                appLoading: false,
                loadingError: action.payload
            };
        //     [x] - The adding a smurf to the smurf list when added into payload
        case START_ADD_SMURF:
            return {
                ...state,
                appLoading: true,
                loadingError: '',
                addingError: ''
            };
        case ADD_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                appLoading: false
            };
        case ADD_SMURF_FAILURE:
            return {
                ...state,
                appLoading: false,
                addingError: action.payload
            };
        //     [x] - Setting Error Text
        // case SET_ERROR:
        //     return {
        //         ...state,
        //         error: action.payload
        //     };
        default:
            return state 
    };
};

export default reducer;