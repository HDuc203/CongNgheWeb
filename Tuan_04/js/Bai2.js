function sayHello() {
    const fullName = document.getElementById('nameInput').value.trim();
    if (!fullName) {
        document.getElementById('greeting').textContent = "Vui lòng nhập họ tên.";
        return;
    }

    const parts = fullName.split(" ");
    const lastName = parts[parts.length - 1];
    document.getElementById('greeting').textContent = "Hello " + lastName;
}
