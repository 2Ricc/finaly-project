import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk'
import {appReducer} from "./app-reduser";
import {authReducer} from "./auth-reducer";


const rootReducer = combineReducers({
    auth: authReducer,
    app: appReducer,
})

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
export type AppRootStateType = ReturnType<typeof rootReducer>
