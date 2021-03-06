import { combineReducers } from "redux";

import itemReducer from "./itemReducer";
import parentsReducer from "./parentReducer";
import authReducer from "./authentication";
import errorReducer from "./errors";
import school from "./schoolProfile";
import studentReducer from "./studentReducer";

export default combineReducers({
  auth: authReducer,
  errorReducer: errorReducer,
  studentReducer: studentReducer,
  parents: parentsReducer,
  school: school,
  items: itemReducer
});
