function sayHello() {
    const fullName = document.getElementById('nameInput').value;
    const parts = fullName.trim().split(" ");
    const lastName = parts[parts.length - 1];
    console.log("Hello " + lastName);
}
