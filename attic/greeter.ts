const greeter = (name: SlugName) => "Hello, " + name;

type SlugName = "Doug the Slug" | "Sally the Slug";

let user: SlugName = "Doug the Slug";

window.onload = () => {
	document.body.textContent = greeter(user);
}