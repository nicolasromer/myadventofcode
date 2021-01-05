"use strict";
const greeter = (name) => "Hello, " + name;
let user = "Doug the Slug";
window.onload = () => {
    document.body.textContent = greeter(user);
};
