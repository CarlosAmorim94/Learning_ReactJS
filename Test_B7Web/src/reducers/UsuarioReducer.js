// Criando dados para reducer, as actions irão alterar o valor, nunca criar
const initialState = {
    name = ''
}

// Action 'SET_NAME' para alterar o valor name de initialState
const UsuarioReducer = (state = initialState, action) => {

    switch(action.name) {
        case 'SET_NAME':
            return {...state, name:action.payload.name}
            break
    }


    return state
}
export default UsuarioReducer