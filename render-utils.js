export function renderTodo(todo, handleComplete) {
    // create a div and a p tag
    const todoDiv = document.createElement('div');
    const todoPTag = document.createElement('p');
    // depending on whether the todo is complete, give the div the appropriate css class ('complete' or 'incomplete')
    if (todo.complete) {
        todoDiv.classList('complete');
    } else {
        todoDiv.classList.add('incomplete');
    }
    // add the 'todo' css class no matter what
    todoDiv.classList.add('todo');
    // put the todo's text into the p tag
    todoPTag.textContent = todo.todo;
    // append stuff
    todoDiv.append(todoPTag);
    console.log(todo);
    // add event listener for click and call handleComplete function
    todoDiv.addEventListener('click', () => {
        handleComplete();
    });
    // return the div
    return todoDiv;
}