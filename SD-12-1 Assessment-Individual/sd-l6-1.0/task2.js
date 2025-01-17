// Task 2: listUsers()
export function listUsers() {
    let serverURL = "http://localhost:3000";
    fetch(serverURL + "/users").then(response => response.json()).then(data => console.log(data));
}
