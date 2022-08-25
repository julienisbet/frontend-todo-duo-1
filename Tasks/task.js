import { checkUser, logoutUser, getTodo, toggleTodo, addChore } from '../fetch-utils.js';
const tasksDiv = document.getElementById('task');

checkUser();

const logout = document.getElementById('logout');
logout.addEventListener('click', async () => {
    await logoutUser();
});

const chores = document.getElementById('new-task');
chores.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(chores);
    await addChore({
        chore: formData.get('chore'),
        room: formData.get('room'),
    });
    onLoad();
});



let toDo = [];
async function onLoad() {
    toDo = await getTodo();
    tasksDiv.innerHTML = '';
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


