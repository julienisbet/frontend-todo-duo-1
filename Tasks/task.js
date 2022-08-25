import { checkUser, logoutUser, getTodo, toggleTodo } from '../fetch-utils.js';

checkUser();
const logout = document.getElementById('logout');
logout.addEventListener('click', async () => {
    await logoutUser();
});

let toDo = [];
const tasksDiv = document.getElementById('task');
async function onLoad() {
    toDo = await getTodo();
    toDo.map((task) => {
        const header = document.createElement('p');
        header.textContent = task.room;
        const div = document.createElement('div');
        div.textContent = task.chore;
        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.checked = task.complete;
        checkBox.addEventListener('change', async (e) => {
            e.preventDefault;
            await toggleTodo(task);
        });
        div.append(header, checkBox);
        tasksDiv.append(div);
    });
}
onLoad();


