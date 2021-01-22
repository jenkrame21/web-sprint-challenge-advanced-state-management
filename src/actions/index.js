import axios from 'axios';

// Call Actions to Strings
export const START_CALL = "START_CALL";
export const CALL_SUCCESS = "CALL_SUCCESS";
export const CALL_FAILURE = "CALL_FAILURE";

// Add Smurf Actions to Strings
export const START_ADD_SMURF = "START_ADD_SMURF";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";
export const SET_NEW_SMURF = "SET_NEW_SMURF";
export const SET_ERROR = "SET_ERROR";

//Task List:
//1. Add fetch smurfs action: 
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server

export const getSmurfs = () => (dispatch) => {
    dispatch({ type: START_CALL });

    axios
        .get('http://localhost:3333/smurfs')
        .then((res) => {
            // console.log("Get Smurf Success Action: ", res.data);
            dispatch({ type: CALL_SUCCESS, payload: res.data });
        })
        .catch((err) => {
            // console.log("Get Smurf Failure Action: ", err);
            dispatch({ type: CALL_FAILURE, payload: err });
        });
};

//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error

export const addSmurf = (newSmurf) => (dispatch) => {
    dispatch({ type: START_ADD_SMURF });

    axios
        .post('http://localhost:/3333/smurfs', newSmurf)
        .then((res) => {
            dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data.newSmurf });
        })
        .catch((err) => {
            dispatch({ type: ADD_SMURF_FAILURE, payload: err });
        });
};

export const errorMessage = (error) => (dispatch) => {
    dispatch({ type: SET_ERROR, payload: error });
};


//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem nessiary to complete application.