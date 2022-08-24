// import functions and grab DOM elements
import { signUpUser, signInUser, redirectIfLoggedIn } from './fetch-utils.js';
// let state
const signUpForm = document.getElementById('sign-up-form');
const signInForm = document.getElementById('sign-in-form');
// set event listeners 
signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(signUpForm);
    await signUpUser({
        email: formData.get('email'),
        password: formData.get('password'),
        firstName: formData.get('first-name'),
        lastName: formData.get('last-name'),
    });
});

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(signInForm);
    await signInUser({
        email: formData.get('email'),
        password: formData.get('password'),
    });
});

redirectIfLoggedIn();
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
