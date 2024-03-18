
const initialState = [{
    id: 2,
    todo:'Recoletar la piedra del Alma',
    done: false,
}];


const todoReducer = ( state = initialState, action = {} ) => {

    if ( action.type === '[TODO] add todo' ){
        // state.push( action.payload ); Evitar usar PUSH en React
        return [ ...state, action.payload ];
    }

    return state;
};

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del poder',
    done: false,
};

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
};


todos = todoReducer( todos, addTodoAction );

console.log({state: todos});


// todos.push({
//     id: 2,
//     todo: 'Recolectar la piedra del poder',
//     done: false,
// })

console.log(todos);