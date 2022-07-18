import { legacy_createStore as createStore} from 'redux';
import rootReducers from "./reducers"




export default  createStore (rootReducers)   ; 