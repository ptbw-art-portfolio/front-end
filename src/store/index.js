import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk"; //allows our action creators to be HOFs

//reducers
import auth from "./auth/useReducer";
import details from "./details/reducer";

//add multiple reducers here
const rootReducer = combineReducers({
   auth,
   details
});

//an array of all the middleware in the application
//insert and remove by modifying the array
// const middleware = [thunk];
const middleware = [thunk];
const enhancers = applyMiddleware(...middleware);

export default createStore(rootReducer, enhancers);