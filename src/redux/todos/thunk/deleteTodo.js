import {  deleted } from "../actions";

const deleteTodo = (todoId) =>{
    return async (dispatch) => {
        await fetch(`http://localhost:9000/todos/${todoId}`, {
            method: "DELETE",      
        });

        // const todo = await response.json(); // jehetu deleted todo ta amr projon ney so ai line ta amr r lagbe na 
    
        dispatch(deleted(todoId));
    };
}

export default deleteTodo;
