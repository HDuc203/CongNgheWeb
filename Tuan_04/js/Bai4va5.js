function sumNumbers() {
    const input1 = document.getElementById('num1').value.trim();
    const input2 = document.getElementById('num2').value.trim();
    const resultDisplay = document.getElementById('result');

    if (input1 === "" || input2 === "") {
        resultDisplay.textContent = "Bạn chưa nhập đủ hai số.";
        console.log("Lỗi: Một hoặc cả hai ô nhập đang trống.");
        return;}

    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    if (isNaN(num1) || isNaN(num2)) {
        resultDisplay.textContent = "Giá trị bạn nhập không phải là số hợp lệ.";
        console.log("Lỗi: Nhập không đúng định dạng số.");
        return;
    }

    const sum = num1 + num2;
    resultDisplay.textContent = "Tổng là: " + sum;
    console.log("Tổng hai số là:", sum);
}
