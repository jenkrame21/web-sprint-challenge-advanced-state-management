// Import call actions
import { START_CALL, CALL_SUCCESS, CALL_FAILURE, START_ADD_SMURF, ADD_SMURF_SUCCESS, ADD_SMURF_FAILURE, SET_NEW_SMURF } from '../actions'

export const initialState = {
    smurfs: [],
    appLoading: false,
    error: '',
    newSmurf: {
        id: Date.now(),
        name: '',
        nickname: '',
        position: '',
        description: ''
    }
};

export const reducer = (state = initialState, action)=>{
    switch (action.type){
        case START_CALL:
            return {
                ...state,
                appLoading: true,
                error: ''
            }
        case CALL_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                appLoading: false
            }
        case CALL_FAILURE:
            return {
                ...state,
                appLoading: false,
                error: action.payload
            }
        case START_ADD_SMURF:
            return {
                ...state,
                appLoading: true,
                error: ''
            }
        case ADD_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                appLoading: false
            }
        case ADD_SMURF_FAILURE:
            return {
                ...state,
                appLoading: false,
                error: action.payload
            }
        case SET_NEW_SMURF:
            return {
                ...state,
                newSmurf: {
                    id: action.payload.id,
                    name: action.payload.name,
                    nickname: action.payload.nickname,
                    position: action.payload.position,
                    description: action.payload.description
                }
            }
        default:
            return (state); 
    }
};

//Task List:
//1. Add in the initialState needed to hold: 
//     [x] - an array of smurfs
//     [x] - a boolean indicating if the app is loading
//     [x] - error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//     [x] - The start of an api call
//     [x] - The end of an api call
//     [x] - The adding a smurf to the smurf list when added into payload
//     [x] - Setting Error Text
//      - Any other state changes you see as necessary