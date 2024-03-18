import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodos } from "../hooks/useTodos";

// const initialState = [];

// const init = () => {
//     return JSON.parse( localStorage.getItem( 'todos' ) ) || [];
// }


export const TodoApp = () => {

    // Crear custom Hook llamado useTodo
    // Debe exponer: todos, handleNewTodo
    // handleDeleteTodo, handleToggleTodo
    // consts: initialState, init
    const { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodos();

    // const [todos, dispatch] = useReducer( todoReducer, initialState, init )

    // useEffect(() => {
    //   localStorage.setItem('todos', JSON.stringify( todos ) )
    // }, [todos])
    

    // const handleNewTodo = ( todo ) => {
    //     const action = {
    //         type: '[TODO] Add Todo',
    //         payload: todo
    //     };

    //     dispatch( action );
    // }

    // const handleDeleteTodo = (id) => {
    //     dispatch({
    //         type: '[TODO] Remove Todo',
    //         payload: id,
    //     });
    // };

    // const handleToggleTodo = (id) => {
    //     dispatch({
    //         type: '[TODO] Toggle Todo',
    //         payload: id
    //     });
    // };
    

  return (
    <>
        <h1>TodoApp: 10, <small>pendientes: 2</small> </h1>
        <hr />

        <div className="row">
            <div className="col-7">
                {/* Todo list */}
                <TodoList 
                    todos={ todos } 
                    onDeleteTodo={ handleDeleteTodo }
                    onToggleTodo={ handleToggleTodo }
                />
                {/* Fin Todo list */}
            </div>

        <div className="col-5">
            <h4>Agregar TODO</h4>
            <hr />
            <TodoAdd 
                onNewTodo={ handleNewTodo } 
            />
        </div>


        </div>


    </>
  )
}
