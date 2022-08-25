const BASE_URL = 'http://localhost:7899';

export async function signUpUser(userInfo) {
    const resp = await fetch(`${BASE_URL}/api/v1/users`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
        credentials: 'include',
    });
    const data = await resp.json();
    if (resp.ok) {
        location.replace('./tasks');
    } else {
        console.error(data.message);
    }
}

export async function signInUser(userInfo) {
    const resp = await fetch(`${BASE_URL}/api/v1/users/sessions`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
        credentials: 'include',
    });
    const data = await resp.json();
    if (resp.ok) {
        location.replace('./tasks');
    } else {
        console.error(data.message);
    }
}

export async function getUser() {
    const res = await fetch(`${BASE_URL}/api/v1/users/me`, {
        method: 'GET',
        headers: {
            Accept: 'appication/json',
            'Content-Type': 'application/json',
        }, credentials: 'include',
    });
    if (res.ok) {
        const user = await res.json();
        return user;
    }
}

export async function checkUser() {
    const user = await getUser();
    if (!user) location.replace('../');
}

export async function redirectIfLoggedIn() {
    const user = await getUser();
    if (user) {
        location.replace('./tasks');
    }
}

export async function addChore(chore) {
    const res = await fetch(`${BASE_URL}/api/v1/todos`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }, credentials: 'include', 
        body: JSON.stringify(
            chore
        )
    });
    const todo = await res.json();
    if (res.ok) {
        return todo;
    } else {
        throw new Error(todo.message);
    }    
}

export async function logoutUser() {
    const res = await fetch(`${BASE_URL}/api/v1/users/sessions`, {
        method: 'DELETE', credentials: 'include',
    });
    if (res.ok) {
        location.replace('../');
    }
}

export async function getTodo() {
    const res = await fetch(`${BASE_URL}/api/v1/todos`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }, credentials: 'include',
    });
    if (res.ok) {
        const todo = await res.json();
        return todo;
    }
}

export async function toggleTodo(todo) {
    const res = await fetch(`${BASE_URL}/api/v1/todos/${todo.id}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }, body: JSON.stringify({ complete: !todo.complete }),
        credentials: 'include',
    });
    return res;
}