const btn_new_project = document.getElementById('btn-new-project');
const btn_new_todo = document.getElementById('btn-new-todo');

const btn_project_cancel = document.getElementById('btn-project-cancel');
const btn_todo_cancel = document.getElementById('btn-todo-cancel');

btn_new_project.addEventListener('click', ()=>{
    const container_project_form = document.getElementById('new-project-form-container');
    container_project_form.style.display = 'block';
})

btn_project_cancel.addEventListener('click', ()=>{
    const container_project_form = document.getElementById('new-project-form-container');
    container_project_form.style.display = 'none';
})

btn_new_todo.addEventListener('click', ()=>{
    const container_todo_form = document.getElementById('new-todo-form-container');
    container_todo_form.style.display = 'block';
})

btn_todo_cancel.addEventListener('click', ()=>{
    const container_todo_form = document.getElementById('new-todo-form-container');
    container_todo_form.style.display = 'none';
})


function formClose(){  
    const container_todo_form = document.getElementById('new-todo-form-container');
    const container_project_form = document.getElementById('new-project-form-container');
    container_todo_form.style.display = 'none';
    container_project_form.style.display = 'none';
}