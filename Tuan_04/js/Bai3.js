function checkInput() {
    const input = document.getElementById('nameInput').value.trim();
    const output = document.getElementById('result');

    if (input === "") {
        output.textContent = "Bạn chưa nhập gì cả.";
    } else if (/^\d+$/.test(input)) {
        output.textContent = "Bạn mới vừa nhập số.";
    } else if (/^[a-zA-ZÀ-ỹ\s]+$/.test(input)) {
        output.textContent = "Bạn mới vừa nhập text.";
    } else {
        output.textContent = "Bạn nhập hỗn hợp số và chữ.";
    }
}
