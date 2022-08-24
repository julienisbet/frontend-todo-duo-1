import { checkUser, logoutUser, getTodo } from '../fetch-utils.js';

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
        div.append(header);
        tasksDiv.append(div);
    });
}
onLoad();


