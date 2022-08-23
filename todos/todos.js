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
    // const todo = {
    //     text: e.target.elements.text.value,
    //     completed: false,
    // };
    await createTodo(todo);
    
    todoForm.reset();
    displayTodos();
});

// create todo state
let todoArr = [];
// add async complete todo handler function
    // call completeTodo
    // swap out todo in array
//     // call displayTodos
// async function handleTodos() {
//     completeTodo();
    
// }


async function displayTodos() {
    // clear the container (.innerHTML = '')
    // display the list of todos, 
          // call render function, pass in state and complete handler function!
          // append to .todos;
    todosEl.innerHTML = '';

    const todos = await getTodos();

    for (let todo of todos) {
        const todoEl = renderTodo(todo);

        todoEl.addEventListener('click', async () => {
            await completeTodo(todo.id);

            displayTodos();
        });
        todosEl.append(todoEl);
    }


}

// add page load function
    // fetch the todos and store in state
    // call displayTodos

window.addEventListener('load', async () => {
    displayTodos();
});

logoutButton.addEventListener('click', () => {
    logout();
});


deleteButton.addEventListener('click', async () => {
    // delete all todos
    await deleteAllTodos();
    // // modify state to match
    // todoArr = [];
    // re displayTodos
    displayTodos();
});
