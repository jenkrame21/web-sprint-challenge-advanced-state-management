// Import call actions
import { START_CALL, CALL_SUCCESS, CALL_FAILURE, START_ADD_SMURF, ADD_SMURF_SUCCESS, ADD_SMURF_FAILURE, SET_NEW_SMURF, SET_ERROR } from '../actions'

//Task List:
//1. Add in the initialState needed to hold: 
export const initialState = {
    //     [x] - an array of smurfs
    smurfs: [],
    //     [x] - a boolean indicating if the app is loading
    appLoading: false,
    error: '',
    //     [x] - error text
    newSmurf: {
        id: Date.now(),
        name: '',
        nickname: '',
        position: '',
        description: ''
    }
};


//      - Any other state changes you see as necessary

//2. Setup your reducer to take the state and action as parameters
export const reducer = (state = initialState, action)=>{
    switch (action.type){
        //3. Add in cases to your reducer to handle:
        //     [x] - The start of an api call
        case START_CALL:
            return {
                ...state,
                appLoading: true,
                error: ''
            }
        //     [x] - The end of an api call
        case CALL_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                appLoading: false
            }
        //     [x] - The end of an api call
        case CALL_FAILURE:
            return {
                ...state,
                appLoading: false,
                error: action.payload
            }



        //     [x] - The adding a smurf to the smurf list when added into payload
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
        //     [x] - Setting Error Text
        case SET_ERROR:
            return {
                ...state,
                error: "ERROR"
            }
        default:
            return (state); 
    }
};