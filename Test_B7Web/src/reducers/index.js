// Combinando vários reducers

import {combineReducers} from 'redux'
import UsuarioReducer from './UsuarioReducer'

export default combineReducers({
    usuario: UsuarioReducer
})