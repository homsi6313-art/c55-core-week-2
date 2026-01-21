// Do not change the line below
import { errorMessage, successMessage } from './app.js';

let incorrectAttempts = 0;

function onLogin(username, password) {
  if (incorrectAttempts >=4) {
    errorMessage("login blocked: Too many incorrect attempts");
    return;
  }
const isAdmin = username == "admin" && password == "Hack1234";
const isUser = username == "user" && password == "7654321";

if (isAdmin || isUser) {
  successMessage("Logged in successfully");
   } else {
    incorrectAttempts++;
    errorMessage("Incorrect credentials");
   }
}

// Do not change the line below
export { onLogin };
