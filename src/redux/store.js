import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

// importacion de los distintos modulos del store redux
import authReducer from './Ducks/authDuck'
import productReducer from './Ducks/productDuck'
import tableReducer from './Ducks/tableDuck'
import monitorReducer from './Ducks/monitorDuck'

const rootReducer = combineReducers({
    // Agregando los modulos al store
    authentication: authReducer,
    products: productReducer,
    tables: tableReducer,
    monitor: monitorReducer,

})

export default function generateStore() {
    const store = createStore( rootReducer, composeWithDevTools( applyMiddleware(thunk) ) )
    return store
}