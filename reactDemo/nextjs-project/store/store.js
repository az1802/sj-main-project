import { configConsumerProps } from "antd/lib/config-provider";
import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import axios from "axios";

const initialUserState = {};
const USER = "USER";
const LOGIN_OUT = "LOGIN_OUT";

export function loginOutAction() {
  return async (dispatch) => {
    let res = await axios.post("/logout");
    console.log("res: ", res);
    if (res.status === 200) {
      dispatch({
        type: LOGIN_OUT,
      });
    }
  };
}

function userReducer(state = initialUserState, action) {
  if (action.type == USER) {
    return { ...state, ...action.userInfo };
  } else if (action.type == LOGIN_OUT) {
    return {};
  }
  return state;
}

let allReducer = combineReducers({
  userInfo: userReducer,
});

export default function createReduxStore(initialState) {
  const store = createStore(
    allReducer,
    Object.assign(
      {},
      {
        userInfo: initialUserState,
      },
      initialState
    ),
    composeWithDevTools(applyMiddleware(ReduxThunk))
  );
  return store;
}
