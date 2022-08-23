import { 
    checkAuth, 
    createTodo, 
    completeTodo,
    getTodos,
    logout,
    deleteAllTodos, 
} from '../fetch-utils.js';
import { renderTodo } from '../render-utils.js';

checkAuth();

const todosEl = document.querySelector('.todos');
const todoForm = document.querySelector('.todo-form');
const logoutButton = document.querySelector('#logout');
const deleteButton = document.querySelector('.delete-button');

todoForm.addEventListener('submit', async (e) => {
    // on submit, create a todo, reset the form, and display the todos
    e.preventDefault();

    const data = new FormData(todoForm);
    const todo = data.get('todo');
    
    await createTodo(todo);
    todos = await getTodos();

    todoForm.reset();
    displayTodos();
});

// create todo state
let todos = [];

// add async complete todo handler function
    // call completeTodo
    // swap out todo in array
//     // call displayTodos
// 
async function handleComplete(todo) {
    // console.log('inside handle complete', todo);
    await completeTodo(todo.id);

    todos = await getTodos();

    displayTodos();

}

async function displayTodos() {
    todosEl.innerHTML = '';

    for (let todo of todos) {
        const todoEl = renderTodo(todo, handleComplete);
        todosEl.append(todoEl);
    }


}

// add page load function
    // fetch the todos and store in state
    // call displayTodos

async function onLoad() {
    todos = await getTodos();
    displayTodos();
    handleComplete();
}

onLoad();

logoutButton.addEventListener('click', () => {
    logout();
});


deleteButton.addEventListener('click', async () => {
    // delete all todos
    await deleteAllTodos();
    // // modify state to match
    todos = [];
    // re displayTodos
    displayTodos();
});
