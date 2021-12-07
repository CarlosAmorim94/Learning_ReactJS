// Criando dados para reducer, as actions irão alterar o valor, nunca criar
const initialState = {
    name : 'Visitante',
    contador: 0
}

// Action 'SET_NAME' para alterar o valor name de initialState
const UsuarioReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'SET_NAME':
            return {...state, name:action.payload.name}
            break;

        case 'INCREMENT_CONTADOR':
            let newCount = state.contador +1
            return {...state, contador:newCount}
            break;
    }


    return state
}

export default UsuarioReducer